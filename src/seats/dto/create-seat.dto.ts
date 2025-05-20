import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateSeatDto {
    @IsNotEmpty({message: "code can't be empty"})
    @IsString()
    code: string;
    @IsBoolean()
    isAvailable?: boolean;
}
