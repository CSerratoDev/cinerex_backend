import { IsNotEmpty } from 'class-validator';  
export class CreateLocationDto {
    @IsNotEmpty({message: 'El nombre de Location no puede estar vacio'})
    name: string;
}
