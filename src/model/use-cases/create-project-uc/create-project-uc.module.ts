import { Module } from '@nestjs/common';
import { PrismaRepositoryModule } from 'src/infrastructure/repository/prisma/prisma-repository.module';
import { CreateProjectUc } from './create-project.uc';

@Module({
  imports: [PrismaRepositoryModule],
  providers: [CreateProjectUc],
  exports: [CreateProjectUc],
})
export class CreateProjectUcModule {}
