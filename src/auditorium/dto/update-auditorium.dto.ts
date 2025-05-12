import { PartialType } from '@nestjs/mapped-types';
import { CreateAuditoriumDto } from './create-auditorium.dto';

export class UpdateAuditoriumDto extends PartialType(CreateAuditoriumDto) {}
