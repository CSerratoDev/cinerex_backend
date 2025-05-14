import { Type } from "class-transformer";
import { IsArray, IsInt, IsNotEmpty, IsString, Min, ValidateNested } from "class-validator";
import { CreateSeatDto } from "src/seats/dto/create-seat.dto";

export class CreateCinemaRoomDto {
    @IsNotEmpty({message: "name can't be empty"})
    @IsString()
    name: string
    @IsNotEmpty({message: "locationId can't be empty"})
    @IsInt()
    @Min(1, { message: "locationId must be greater than 0" })
    locationId: number;
    @IsNotEmpty({ message: "seats can't be empty" })
    @IsArray({ message: "seats must be an array" })
    @ValidateNested({ each: true })
    @Type(() => CreateSeatDto)
    seats: CreateSeatDto[];
}
