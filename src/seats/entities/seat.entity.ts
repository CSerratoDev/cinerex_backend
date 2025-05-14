import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({type: 'varchar', length: 1}) 
    row: string;
    @Column()
    number: number;
    @Column({type: 'boolean'})
    status: boolean;
}
