import { CinemaRoom } from "../../cinema-room/entities/cinema-room.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('text')
    title: string;
    @Column({
        type: 'text',
        nullable: false
    })
    description: string;
    @Column()
    duration: string;
    @ManyToOne(() => CinemaRoom)
    cinemaRoom: CinemaRoom;
}
