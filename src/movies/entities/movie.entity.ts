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
    @Column({type: 'int', unsigned: true})
    duration: number;
    @Column({ type: 'timestamp', nullable: false })
    startTime: Date; 
    @Column()
    cinemaRoomId: number
    @ManyToOne(() => CinemaRoom, (cinemaRoom) => cinemaRoom.movies, {
        eager: false
        //onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'cinemaRoomId'})
    cinemaRoom: CinemaRoom;
}
