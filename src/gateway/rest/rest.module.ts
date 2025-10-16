import { Module } from '@nestjs/common';
import { CreateProjectUcModule } from 'src/model/use-cases/create-project-uc/create-project-uc.module';
import { ProjectController } from './project.controller';

@Module({ imports: [CreateProjectUcModule], controllers: [ProjectController] })
export class RestModule {}
