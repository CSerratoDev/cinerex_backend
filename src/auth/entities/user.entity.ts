import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: string;
    @Column('text', {
        unique: true,
    })
    email: string;
    @Column('text')
    password: string;
    @Column("simple-array", { default: "Employee"})
    role: string[];
}
