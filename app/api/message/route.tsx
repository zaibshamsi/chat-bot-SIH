import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  // Load JSON file
  const filePath = path.join(process.cwd(), "data", "BCA_Programme.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  // Parse Dialogflow request
  const body = await req.json();
  const intent = body.queryResult?.intent?.displayName;

  let reply = "Sorry, I don’t have information about that program.";

  // Match intent with JSON data
  const program = data.ComputerApplicationPrograms.find(
    (p: any) => p.intent_name === intent
  );

  if (program) {
    reply = `📘 ${program.program_name}\n` +
            `📅 Duration: ${program.duration}\n` +
            `🎓 Eligibility: ${program.eligibility_criteria}\n` +
            `💰 First Year Fee: ${program.fees[0].fee}`;
  }

  // Always return a Response object
  return new Response(
    JSON.stringify({ fulfillmentText: reply }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
