import { Test } from '@nestjs/testing';
import { PublicImportService } from '../public-import.service';
import { PublicImportRepository } from '../public-import.repository';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { vi } from 'vitest';

describe('PublicImportService', () => {
    let service: PublicImportService;
    let repository: Record<string, any>;

    const mockImport = {
        id: 1,
        userId: 1,
        publicArchitectureId: 1,
        createdAt: new Date(),
    };

    beforeEach(async () => {
        const repositoryMock = {
            create: vi.fn(),
            architectureExists: vi.fn(),
        };

        const module = await Test.createTestingModule({
            providers: [
                PublicImportService,
                {
                    provide: PublicImportRepository,
                    useValue: repositoryMock,
                },
            ],
        }).compile();

        service = module.get<PublicImportService>(PublicImportService);
        repository = module.get(PublicImportRepository);
    });

    describe('create', () => {
        it('should create import successfully', async () => {
            repository.architectureExists.mockResolvedValue(true);
            repository.create.mockResolvedValue(mockImport);

            const result = await service.create(1, 1);

            expect(result).toEqual(mockImport);
            expect(repository.create).toHaveBeenCalledWith(1, 1);
        });

        it('should throw NotFoundException when architecture not found', async () => {
            repository.architectureExists.mockResolvedValue(false);

            await expect(service.create(1, 1)).rejects.toThrow(
                NotFoundException,
            );
        });

        it('should throw ConflictException on duplicate import', async () => {
            repository.architectureExists.mockResolvedValue(true);
            repository.create.mockRejectedValue({ code: 'P2002' });

            await expect(service.create(1, 1)).rejects.toThrow(
                ConflictException,
            );
        });
    });
});
