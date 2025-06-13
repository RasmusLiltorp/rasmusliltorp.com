export type Project = {
  title: string
  description: string
  slug: string
  stack: string[]
  image?: string
}

export const projects: Project[] = [
  {
    title: "MCRemoteControl",
    description: "Vue + Electron UI til at styre Minecraft-server via FastAPI backend.",
    slug: "mcremote",
    stack: ["C#", "FastAPI", "Supabase", "Electron"],
    image: "/images/mcremote.png"
  },
  {
    title: "Barspil.com",
    description: "Nuxt frontend med drukspilsregler, lobby-system og virtuelle terninger.",
    slug: "barspil",
    stack: ["Nuxt", "Supabase", "TypeScript"],
  }
]
