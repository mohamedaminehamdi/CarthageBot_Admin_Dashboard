import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

// Define the path to the JSON file
const filePath = path.join(process.cwd(), "src/utils/questions.json");

// Define the shape of the question data
interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

// Handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      // Read data from the JSON file
      const data = fs.readFileSync(filePath, "utf8");
      const questions: Question[] = JSON.parse(data);
      res.status(200).json(questions);
    } catch (error) {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "Failed to load data" });
    }
  } else if (req.method === "POST") {
    const { updatedData }: { updatedData: Question[] } = req.body;

    if (!updatedData || !Array.isArray(updatedData)) {
      res.status(400).json({ error: "Invalid data format" });
      return;
    }

    try {
      // Write updated data to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), "utf8");
      res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Failed to save data" });
    }
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
