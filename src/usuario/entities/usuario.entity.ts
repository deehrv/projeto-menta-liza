import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";

@Entity({name: "tb_usuarios"})
      export class Usuario {

        @PrimaryGeneratedColumn()
        id: number
        
        @IsNotEmpty()
        @Column({length: 255, nullable: false})
        nome: string
        
        @IsEmail()
        @Column({length: 255, nullable: false})
        usuario: string

        @IsNotEmpty()
        @MinLength(8)
        @Column({length: 255, nullable: false})
        senha: string

        @Column({length: 5000})
        foto: string

        @OneToMany(() => Postagem, (postagem) => postagem.usuario)
        postagem: Postagem[]

    }