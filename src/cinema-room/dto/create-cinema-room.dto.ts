import { IsNotEmpty } from "class-validator";
import { CreateSeatDto } from "src/seats/dto/create-seat.dto";

export class CreateCinemaRoomDto {
    @IsNotEmpty({message: "Category name can't be empty"})
    name: string
    locationId: number;
    seats: CreateSeatDto[];
}
