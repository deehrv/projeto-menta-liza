import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards, } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth-guard";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../service/postagem.service";

@UseGuards(JwtAuthGuard)
@Controller('/postagens')
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll();
    } 

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.postagemService.findById(id)
    }
    
    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findByTitulo(titulo)
    }  

    @Get('/texto/:texto')
    @HttpCode(HttpStatus.OK)
    findByTexto(@Param('texto') texto: string): Promise<Postagem[]> {
        return this.postagemService.findByTexto(texto)
    } 

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.criarPostagem(postagem)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.alterarPostagem(postagem)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.postagemService.apagarPostagem(id)
    }

  
}