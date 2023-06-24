import express from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.use(express.json());

server.listen(process.env.PORT, () => {
  console.log("✅listening on port " + process.env.PORT);
});
