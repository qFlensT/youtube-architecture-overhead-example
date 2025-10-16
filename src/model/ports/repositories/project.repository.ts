import { ProjectEntity } from '../../entities/project.entity';

export abstract class IProjectRepository {
  abstract create(entity: ProjectEntity): Promise<ProjectEntity>;
}
