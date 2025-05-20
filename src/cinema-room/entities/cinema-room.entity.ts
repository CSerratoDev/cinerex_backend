import { Seat } from "../../seats/entities/seat.entity";
import { Movie } from "../../movies/entities/movie.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "../../location/entities/location.entity";

@Entity()
export class CinemaRoom {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        type: 'varchar',
        length: 60
    })
    name: string;

    @Column({nullable: true})
    locationId: number | null;

    @ManyToOne(() => Location, location => location.rooms, { 
        nullable: true,
        onDelete: 'SET NULL' 
    })
    @JoinColumn({ name: 'locationId' }) // Asegura que esta relación use esa columna
    location: Location;


    @OneToMany(() => Movie, (movie) => movie.cinemaRoom)
    movies: Movie[];

    @OneToMany(() => Seat, seat => seat.cinemaRoom, {
        cascade: true, 
        eager:true
    })
    seats: Seat[];
}
