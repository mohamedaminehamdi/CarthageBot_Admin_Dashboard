import fs from "fs";


// Define the types for the request and response data
interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

interface SaveQuestionsRequest {
  dataset: Question[];
}



export default function handler(req: { method: string; body: SaveQuestionsRequest }, res: { status: (arg0: number) => { (): void; new (): any; json: { (arg0: { message: string }): void; new (): any } } }) {
  if (req.method === "POST") {
    // Get the updated data from the request body
    const updatedData = req.body;

    // Write the updated data back to the JSON file
    fs.writeFileSync("../../utils/data", JSON.stringify(updatedData, null, 2), "utf-8");

    res.status(200).json({ message: "Data saved successfully!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
