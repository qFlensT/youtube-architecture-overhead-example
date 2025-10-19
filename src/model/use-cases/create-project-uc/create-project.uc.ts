import { Injectable } from '@nestjs/common';
import {
  ProjectEntity,
  ProjectEntityCreateInput,
} from 'src/model/entities/project.entity';
import { ModelError } from 'src/model/errors/error';
import { IProjectRepository } from 'src/model/ports/repositories/project.repository';

@Injectable()
export class CreateProjectUc {
  constructor(private readonly repository: IProjectRepository) {}

  async execute(input: ProjectEntityCreateInput): Promise<ProjectEntity> {
    const entity = ProjectEntity.create(input);
    const isAllowed = true;

    if (!isAllowed) {
      throw new ModelError('Невозможно создать проект');
    }

    const created = await this.repository.create(entity);

    return created;
  }
}
