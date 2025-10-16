import { Injectable } from '@nestjs/common';
import { ProjectEntity } from 'src/model/entities/project.entity';
import { IProjectRepository } from 'src/model/ports/repositories/project.repository';
import { ProjectMapper } from './mappers/project.mapper';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProjectRepository extends IProjectRepository {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async create(entity: ProjectEntity): Promise<ProjectEntity> {
    const input = ProjectMapper.toCreateInput(entity);
    const created = await this.prismaService.project.create({ data: input });
    return ProjectMapper.toEntity(created);
  }
}
