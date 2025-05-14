import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeatDto {
    @IsNotEmpty({message: 'El código no puede estar vacio'})
    @IsString()
    code: string;
    isAvailable?: boolean;
}
