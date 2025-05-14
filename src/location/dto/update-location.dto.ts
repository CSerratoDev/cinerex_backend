import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';
import { IsNotEmpty } from 'class-validator';
export class UpdateLocationDto extends PartialType(CreateLocationDto) {
    @IsNotEmpty({message: 'El nombre de Location no puede estar vacio'})
    name: string;
}
