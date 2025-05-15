import { ArrayMinSize, IsArray, IsInt, IsNotEmpty } from "class-validator";

export class CreateTicketDto {
    @IsInt()
    @IsNotEmpty({message: "movieId can't be empty"})
    movieId: number;
    @IsArray()
    @ArrayMinSize(1)
    @IsInt({ each: true })
    @IsNotEmpty({message: "seatIds can't be empty"})
    seatIds: number[];
    @IsNotEmpty({message: "total can't be empty"})
    total: number;
}
