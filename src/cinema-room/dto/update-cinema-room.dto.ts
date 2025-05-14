import { PartialType } from '@nestjs/mapped-types';
import { CreateCinemaRoomDto } from './create-cinema-room.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateCinemaRoomDto extends PartialType(CreateCinemaRoomDto) {
    @IsNotEmpty({message: 'The name of the CinemaRoom cannot be empty'})
    name: string
}
