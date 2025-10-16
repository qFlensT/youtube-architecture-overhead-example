import {
  ProjectEntity,
  ProjectEntityCreateInput,
} from 'src/model/entities/project.entity';
import { ProjectDto } from '../dto/project.dto';
import { CreateProjectDto } from '../dto/create-project.dto';

export class ProjectMapper {
  constructor() {}

  static toDto(entity: ProjectEntity): ProjectDto {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
    };
  }

  static toCreateInput(input: CreateProjectDto): ProjectEntityCreateInput {
    return { name: input.name, description: input.description };
  }
}
