import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/BCA_Programme.json"; // your JSON file

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  

  const body = req.body;
  const intent = body.queryResult?.intent?.displayName;
  let reply = "Sorry, I don’t have information about that program.";

  if (intent) {
    const program = data.ComputerApplicationPrograms.find(
      (p) => p.intent_name === intent
    );

    if (program) {
      reply = `📘 ${program.program_name}\n` +
              `📅 Duration: ${program.duration}\n` +
              `🎓 Eligibility: ${program.eligibility_criteria}\n` +
              `🏷️ Program Code: ${program.program_code}\n` +
              `💰 First Year Fee: ${program.fees[0].fee}`;
    }
  }

  return res.status(200).json({
    fulfillmentText: reply,
  });
}
