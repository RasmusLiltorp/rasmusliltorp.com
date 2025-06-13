import { Project } from "@/lib/projects"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
      <div className="mt-2 text-xs text-muted-foreground">
        {project.stack.join(" • ")}
      </div>
      <Link href={`/projects/${project.slug}`}>
        <Button variant="link" className="mt-4 p-0 h-auto">Læs mere →</Button>
      </Link>
    </div>
  )
}
