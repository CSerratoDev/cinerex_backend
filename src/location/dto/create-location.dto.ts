import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';  
export class CreateLocationDto {
    @IsNotEmpty({message: "Location name can't be empty"})
    @IsString()
    @MaxLength(38)
    name: string;
    @IsString()
    @IsOptional()
    address: string;
}
