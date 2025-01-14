import {
    Injectable,
    ConflictException,
    NotFoundException,
} from '@nestjs/common';
import { PublicStarRepository } from './public-star.repository';

@Injectable()
export class PublicStarService {
    constructor(private readonly publicStarRepository: PublicStarRepository) {}

    async create(userId: number, architectureId: number) {
        const exists =
            await this.publicStarRepository.architectureExists(architectureId);

        if (!exists) {
            throw new NotFoundException('Architecture not found');
        }

        try {
            return await this.publicStarRepository.create(
                userId,
                architectureId,
            );
        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException(
                    'Already starred this architecture',
                );
            }
            throw error;
        }
    }

    async delete(userId: number, architectureId: number) {
        try {
            return await this.publicStarRepository.delete(
                userId,
                architectureId,
            );
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException('Star not found');
            }
            throw error;
        }
    }
}
