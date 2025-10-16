import { Module } from '@nestjs/common';
import { RestModule } from './gateway/rest/rest.module';

@Module({
  imports: [RestModule],
})
export class AppModule {}
