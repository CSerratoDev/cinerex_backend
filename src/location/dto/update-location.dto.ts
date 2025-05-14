import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { IsNotEmpty } from 'class-validator';
export class UpdateLocationDto extends PartialType(CreateLocationDto) {
    @IsNotEmpty({message: "Location name can't be empty"})
    name: string;
    address?: string;
}
