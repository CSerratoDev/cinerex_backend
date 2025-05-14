import { CinemaRoom } from "../../cinema-room/entities/cinema-room.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: 'varchar',
        length: 38
    })
    name: string;
    @Column({
        type: 'text',
        nullable: true
    })
    address: string;

    @OneToMany(() => CinemaRoom, room => room.location)
    rooms: CinemaRoom[];
}
