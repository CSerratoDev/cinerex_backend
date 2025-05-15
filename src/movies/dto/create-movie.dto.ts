import { IsDateString, IsInt, IsISO8601, IsNotEmpty, IsString, Matches, Min } from "class-validator";
export class CreateMovieDto {
    @IsNotEmpty({message: "title can't be empty"})
    @IsString()
    title: string;
    @IsNotEmpty({message: "description can't be empty"})
    @IsString()
    description: string;
    @IsNotEmpty({message: "duration can't be empty"})
    @IsInt({message: "duration must be a valid number of minutes"})
    @Min(1,{message: "duration must be greater than zero"})
    duration: number;
    @IsNotEmpty({message: "startTime can't be empty"})
    @IsISO8601()
    startTime: string;
    @IsNotEmpty({message: "cinemaRoomId can't be empty"})
    @IsInt()
    cinemaRoomId: number;
}
