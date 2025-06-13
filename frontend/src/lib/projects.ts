export type Project = {
  title: string
  description: string
  slug: string
  stack: string[]
  githubUrl: string
}

export const projects: Project[] = [
    {
    title: "DailyScrum",
    description:
      "A web tool for running daily standups remotely. Create a lobby, join with a code, and submit your daily updates anonymously — all without logging in.",
    slug: "dailyscrum",
    stack: ["Next.js", "ASP.NET", "Supabase", "Tailwind"],
    githubUrl: "https://github.com/RasmusLiltorp/DailyScrum"
  },
  {
    title: "MCRemoteControl",
    description:
      "A Vue + Electron UI that lets people stop and start a Minecraft server using a FastAPI backend and RSA-key authentication",
    slug: "mcremote",
    stack: ["Python", "FastAPI", "Electron", "Vue 3"],
    githubUrl: "https://github.com/RasmusLiltorp/MCRemoteControl"
  }
]