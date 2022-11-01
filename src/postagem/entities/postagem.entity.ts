import { IsNotEmpty, MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Tema } from 'src/tema/entities/tema.entity';

@Entity({ name: "tb_postagens" })
export class Postagem {
       @PrimaryGeneratedColumn()
       id: number;

       @IsNotEmpty()
       @MaxLength(100)
       @Column({ length: 100, nullable: false })
       titulo: string;

       @IsNotEmpty()
       @MaxLength(2000)
       @Column({ length: 2000, nullable: false })
       midia_url: string;

       @IsNotEmpty()
       @MaxLength(3000)
       @Column({ length: 3000, nullable: false })
       texto: string;
       
       @UpdateDateColumn()
       data: Date; 

       @ManyToOne(type => Usuario, usuario => usuario.id)
       @JoinColumn({name: "usuario_id"})
       usuario: Usuario[];

       @ManyToOne(type => Tema, tema => tema.id)
       @JoinColumn({name: "tema_id"})
       tema: Tema[];
}