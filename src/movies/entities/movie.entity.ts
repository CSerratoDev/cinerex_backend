import { CinemaRoom } from "../../cinema-room/entities/cinema-room.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    @ManyToOne(() => CinemaRoom, (cinemaRoom) => cinemaRoom.movies, {eager: false})
    @JoinColumn({name: 'cinema_room_id'})
    cinemaRoom: CinemaRoom;
}
