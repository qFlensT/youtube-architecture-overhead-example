import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProjectRepository } from './project.repository';
import { IProjectRepository } from 'src/model/ports/repositories/project.repository';

@Module({
  providers: [
    PrismaService,
    { provide: IProjectRepository, useClass: ProjectRepository },
  ],
  exports: [IProjectRepository],
})
export class PrismaRepositoryModule {}
