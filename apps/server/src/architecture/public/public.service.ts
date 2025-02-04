import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublicDto } from './dto/create-public.dto';
import { UpdatePublicDto } from './dto/update-public.dto';
import { PublicRepository } from './public.repository';

@Injectable()
export class PublicService {
    constructor(private readonly publicRepository: PublicRepository) {}

    async getPublicArchitectures() {
        return this.publicRepository.findAll();
    }

    async createPublicArchitecture(userId: number, dto: CreatePublicDto) {
        return await this.publicRepository.create(userId, dto);
    }

    async getPublicArchitecture(id: number) {
        const architecture = await this.publicRepository.findById(id);
        if (!architecture) {
            throw new NotFoundException('Architecture not found');
        }
        return architecture;
    }

    async deletePublicArchitecture(id: number) {
        const architecture = await this.getPublicArchitecture(id);
        if (!architecture) {
            throw new NotFoundException('Architecture not found');
        }
        return this.publicRepository.delete(id);
    }

    async updatePublicArchitecture(id: number, dto: UpdatePublicDto) {
        const architecture = await this.getPublicArchitecture(id);
        if (!architecture) {
            throw new NotFoundException('Architecture not found');
        }
        return this.publicRepository.update(id, dto);
    }
}
