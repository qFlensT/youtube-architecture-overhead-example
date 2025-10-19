import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createProjectDtoSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

export class CreateProjectDto extends createZodDto(createProjectDtoSchema) {}
