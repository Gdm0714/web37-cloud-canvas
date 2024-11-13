import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePublicDto } from './dto/create-public.dto';
import { UpdatePublicDto } from './dto/update-public.dto';

@Injectable()
export class PublicRepository {
    constructor(private readonly prisma: PrismaService) {
    }

    async findAll() {
        return this.prisma.publicArchitecture.findMany({
            include: {
                author: {
                    select: { id: true, name: true }
                },
                _count: {
                    select: {
                        stars: true,
                        imports: true
                    }
                }
            }
        });
    }

    async findById(id: number) {
        return this.prisma.publicArchitecture.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                _count: {
                    select: {
                        stars: true,
                        imports: true
                    }
                }
            }
        });
    }

    async create(userId: number, createPublicDto: CreatePublicDto) {

        return this.prisma.publicArchitecture.create({
            data: {
                ...createPublicDto,
                authorId: userId
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
    }

    async update(id: number, updatePublicDto: UpdatePublicDto) {
        return this.prisma.publicArchitecture.update({
            where: { id },
            data: updatePublicDto,
            include: {
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
    }

    async delete(id: number) {
        return this.prisma.publicArchitecture.delete({
            where: { id }
        });
    }
}
