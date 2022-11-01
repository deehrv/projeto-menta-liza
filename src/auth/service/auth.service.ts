import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/service/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) { }
    async validarUsuario (username: string, password: string): Promise<any> {
         const buscarUsuario = await this.usuarioService.findByUsuario (username)

         if(!buscarUsuario)
            throw new  HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND)

            const macth = await this.bcrypt.compararSenha(buscarUsuario.senha, password)

            if(buscarUsuario && macth) {
               const {senha, ...result} = buscarUsuario 
               return result     
            }      
            return null; 
    }
    async login(usuarioLogin: any) {
        const payLoad = {userName: usuarioLogin.usuario, sub: "db_projetointegrador"}
    
        return {
            usuario: usuarioLogin.usuario,
            token:`Bearer${this.jwtService.sign(payLoad)}`
        }

    }
}