import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_tema"})
    export class Tema{

        @PrimaryGeneratedColumn()
        id: number

        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        tema: string

        @IsNotEmpty()
        @Column()
        abordagem: string
    }