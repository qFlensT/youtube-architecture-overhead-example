import { Prisma, Project } from 'generated/prisma';
import { ProjectEntity } from 'src/model/entities/project.entity';

export class ProjectMapper {
  static toCreateInput(entity: ProjectEntity): Prisma.ProjectCreateInput {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
    };
  }

  static toEntity(model: Project): ProjectEntity {
    return ProjectEntity.rehydrate({
      id: model.id,
      name: model.name,
      description: model.description,
    });
  }
}
