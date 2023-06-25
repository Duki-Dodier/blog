import { Request, Response } from "express";
import connection from "../database/connection";
import bcryptPassord from "../utils/bcrytUtils";
import { UniqueViolationError } from "objection";

class UsersController {
  async register(request: Request, response: Response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      throw new Error("Você não preencheu um dos campos para o cadastro");
    }
    //converter senha para um hash
    const password_hash = await bcryptPassord.convertPassword(password);

    try {
      const result = await connection("users").insert({
        name,
        email,
        password: password_hash,
      });
    } catch (e: any) {
      if (e.code === "SQLITE_CONSTRAINT") {
        throw new Error("O email já está cadastrado");
      }
    }

    return response.status(201).json({ user_created: { name, email } });
  }
}

export default new UsersController();
