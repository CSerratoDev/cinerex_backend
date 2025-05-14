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

    @ManyToOne(()=> Location, location => location.rooms)
    @JoinColumn({name: 'location_id'})
    location: Location;

    @OneToMany(() => Movie, (movie) => movie.cinemaRoom)
    movies: Movie[];

    @OneToMany(() => Seat, seat => seat.cinemaRoom, {cascade: true, eager:true})
    seats: Seat[];
}
