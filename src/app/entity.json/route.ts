import { NextResponse } from 'next/server'

export async function GET() {
  const entityData = {
    name: "JA Shuvro",
    alternateNames: [
      "MD. Jonaed Ali Shuvro",
      "Jonaed Ali Shuvro",
      "J.A. Shuvro",
      "Md. Jonaed Ali"
    ],
    title: "Applied AI Engineer & Full-Stack Developer",
    worksFor: "Immigrant Times",
    website: "https://www.jashuvro.com",
    github: "https://github.com/ja-shuvro",
    linkedin: "https://www.linkedin.com/in/ja--shuvro/",
    skills: [
      "Applied AI Engineering",
      "LLM Orchestration & Prompt Design",
      "OpenAI GPT-4o / Nano",
      "OpenAI Whisper (STT)",
      "OpenAI TTS (Voice Synthesis)",
      "Vector Search (RAG & Assistants API)",
      "NestJS",
      "Next.js",
      "React",
      "Flutter",
      "Dart",
      "Laravel",
      "Node.js",
      "TypeScript",
      "PHP",
      "WordPress AI Plugins",
      "WebRTC Streaming",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis (ioredis)",
      "Distributed Caching & Async Queues",
      "WebSockets",
      "System Architecture",
      "Real-time Applications",
      "Full Stack Development",
      "Enterprise Software"
    ]
  }

  return NextResponse.json(entityData, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  })
}
