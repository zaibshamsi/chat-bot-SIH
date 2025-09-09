AI Campus Assistant
An intelligent, conversational AI chatbot designed to be the single source of truth for all student queries within a college campus. This project is an initial submission for the Smart India Hackathon (SIH).

🚀 Live Demo
Experience the chatbot live! Ask it about course fees, scholarships, or important academic dates.

[Visit the Deployed Application Here](https://chat-bot-3c8m058f2-zaibshamsis-projects.vercel.app?_vercel_share=lCrTjObbNx2D1F5KZnWiRAZH1wlBc2SB)

🎯 The Problem
In many educational institutions, crucial information is scattered across various platforms: outdated websites, physical notice boards, and multiple administrative departments. This fragmentation leads to:

Student Confusion: Difficulty in finding timely and accurate information about fees, deadlines, and scholarships.

Administrative Burden: Staff are overwhelmed with repetitive, basic questions.

Missed Opportunities: Students miss out on scholarships or deadlines due to a lack of clear communication.

✨ Our Solution
The AI Campus Assistant is a centralized, 24/7 accessible chatbot that provides instant and accurate answers to a wide range of college-related questions. By leveraging a curated knowledge base, we ensure that students get reliable information right when they need it.

Key Features
Instant Academic Info: Get details on various academic programs, including eligibility, fees, and duration.

Scholarship Guidance: Instantly find out about available scholarships and their specific criteria.

Academic Calendar Access: Ask for important dates like exam schedules, holidays, and class commencement.

Bilingual Support: The chatbot can understand and respond in both English and Hindi.

Modern, Responsive UI: A clean and intuitive chat interface built with Next.js and TypeScript.

🛠️ Phase 1: Technology Stack (Current Version)
For rapid development and to deliver a robust proof-of-concept, the current version is built with a modern, low-code architecture.

Frontend: Next.js & TypeScript

Styling: Tailwind CSS

Conversational AI Platform: Voiceflow (Used for the knowledge base, NLU, and conversation logic)

Deployment: Vercel

🧠 The Knowledge Base
The chatbot's intelligence is powered by a structured knowledge base derived from official college data. The primary data sources for the current version are:

BCA_Programme.json: Contains details of various graduate and doctoral programs.

AcademicCalendar2025-26.json: Holds the schedule for all key academic events.

Scholorship_Data.json: Outlines all available scholarship schemes and their criteria.

🗺️ Project Roadmap: The Future is RAG
Our vision extends far beyond a low-code solution. The next phase of this project is to build a powerful, custom Retrieval-Augmented Generation (RAG) pipeline.

Why RAG?
Transitioning to a custom RAG architecture will provide:

Infinite Scalability: Ability to ingest and process vast amounts of unstructured data, like entire college handbooks, PDFs, and website content.

Greater Control & Flexibility: Full ownership of the AI pipeline, allowing for fine-tuning and custom integrations.

Reduced Dependency: Eliminates reliance on third-party conversational platforms.

Future Tech Stack
Backend: Python with FastAPI

AI Framework: LangChain

LLM: Google's Gemini Models

Vector Database: ChromaDB

Frontend: The existing Next.js application will be updated to communicate with our new Python backend.

🚀 Getting Started (Frontend)
To run the current Next.js frontend on your local machine:

Clone the repository:

git clone [your-repository-url]
cd [your-repository-name]

Install dependencies:

npm install

Run the development server:

npm run dev
