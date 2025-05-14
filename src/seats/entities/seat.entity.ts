import { CinemaRoom } from "../../cinema-room/entities/cinema-room.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
    id: number;
    @Column() 
    row: string;
    @Column({default: true})
    status: boolean;
    @ManyToOne(() => CinemaRoom, room => room.seats)
    @JoinColumn({name: 'cinema_room_id'})
    cinemaRoom: CinemaRoom;
}
