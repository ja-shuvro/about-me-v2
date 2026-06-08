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
    title: "Flutter Specialist & Full-Stack Developer",
    worksFor: "Immigrant Times",
    website: "https://www.jashuvro.com",
    github: "https://github.com/ja-shuvro",
    linkedin: "https://www.linkedin.com/in/ja-shuvro-13733b37b",
    skills: [
      "Flutter",
      "Dart",
      "NestJS",
      "Next.js",
      "Laravel",
      "Node.js",
      "React",
      "React Three Fiber",
      "Three.js",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "WebSockets",
      "System Architecture",
      "Real-time Applications",
      "Full Stack Development",
      "Mobile Development",
      "Enterprise Software"
    ]
  }

  return NextResponse.json(entityData, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  })
}
