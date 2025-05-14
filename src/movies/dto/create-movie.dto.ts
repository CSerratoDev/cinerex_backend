import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateMovieDto {
    @IsNotEmpty({message: 'El title de la Movie no puede estar vacio'})
    @IsString()
    title: string;
    @IsNotEmpty({message: 'La descripción no puede estar vacia'})
    @IsString()
    description: string;
    @IsNotEmpty({message: 'La duración no puede estar vacia'})
    @IsString()
    duration: string;
    @IsNotEmpty({message: 'La sala no puede estar vacia'})
    @IsInt()
    cinemaRoomId: number;
}
