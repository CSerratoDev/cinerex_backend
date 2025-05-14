import { IsNotEmpty } from "class-validator";

export class CreateCinemaRoomDto {
    @IsNotEmpty({message: "Category name can't be empty"})
    name: string
}
