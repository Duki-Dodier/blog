import "express-async-errors";
import express, { NextFunction, Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();
import rota_posts from "./routes/postsRoutes";
import rota_users from "./routes/usersRoutes";
import auth_rota from "./routes/authRoutes";

import cookieParser from "cookie-parser";

const server = express();

server.use(express.json());
server.use(cookieParser());

//rotas
server.use("/posts", rota_posts);
server.use("/users", rota_users);
server.use("/login", auth_rota);

// //lançamento de erro
server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(404).json(err.message);
    }
    return response.status(500).json("internal sever error");
  }
);

server.listen(process.env.PORT, () => {
  console.log("✅listening on port " + process.env.PORT);
});
