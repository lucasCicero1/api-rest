import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Launch } from "./Launch";

@Entity()
export class User {

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Launch, launch => launch.user)
    launch: Launch[];
}
