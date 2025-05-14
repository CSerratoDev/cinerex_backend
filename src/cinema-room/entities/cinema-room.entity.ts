import { Movie } from "../../movies/entities/movie.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CinemaRoom {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: 'varchar',
        length: 60
    })
    name: string;
    @OneToMany(() => Movie, (movie) => movie.cinemaRoom)
    movies: Movie[]
}
