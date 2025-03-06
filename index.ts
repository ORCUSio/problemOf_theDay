import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4001;

/*
- openAI (or any) se question nikalne he, ek function bana do
- daily aane chahiye toh see something about cron jobs or anything that does the job
- Storing in database keeping in mind about - total visited, question, difficulty, category("React", "Dart", "Expressjs")
*/

app.get("/", async (req: Request, res: Response) => {
  try {
    res.status(201).json({ message: "hello" });
  } catch (error) {
    res.status(500).json({ message: "noob" });
  }
});

app.listen(PORT, () => {
  console.log(`started 🏃‍♂️🏃‍♂️ port ${PORT}`);
});
