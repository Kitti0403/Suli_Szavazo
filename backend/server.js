import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const port = 6969;

const prisma = new PrismaClient();
app.use(cors()); // cross origin resource sharing
app.use(express.json()); // for parsing application/json

// Get all polls
app.get("/polls", async (req, res) => {
  try {
    const polls = await prisma.poll.findMany({
      include: {
        options: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    res.json(polls);
  } catch (error) {
    console.error("Hiba a szavazások lekérésekor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  res.json(questions);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
