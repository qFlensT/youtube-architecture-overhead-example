import { Body, Controller, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectDto } from './dto/project.dto';
import { CreateProjectUc } from 'src/model/use-cases/create-project-uc/create-project.uc';
import { ProjectMapper } from './mappers/project.mapper';

@Controller('/api/v1')
export class ProjectController {
  constructor(private readonly createProjectUc: CreateProjectUc) {}

  @Post('project')
  async create(@Body() body: CreateProjectDto): Promise<ProjectDto> {
    const input = ProjectMapper.toCreateInput(body);
    const created = await this.createProjectUc.execute(input);

    return ProjectMapper.toDto(created);
  }
}
