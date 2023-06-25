import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import connection from "../database/connection";
import jwt from "jsonwebtoken";

class AuthController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    if (!email || !password) {
      throw new Error("Você não preencheu um dos campos para o login");
    }

    try {
      const user = await connection("users").select().where({ email }).first();

      const PasswordMatch = bcrypt.compareSync(password, user.password);
      if (!PasswordMatch) {
        throw new Error("Usuário ou Senha inválido");
      }

      const token = jwt.sign({ id: user.id }, "senha");

      response.cookie("access_token", token,{
        httpOnly: true,

      }).status(200).json({user})


    } catch (e) {
      throw new Error("Usuário ou Senha inválido");
    }
  }
}

export default new AuthController();
