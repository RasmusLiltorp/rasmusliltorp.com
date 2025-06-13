import { projects } from "@/lib/projects"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-background to-muted/20 border-t">
      <div className="container max-w-5xl px-6 mx-auto">
        <p className="text-sm uppercase text-muted-foreground mb-2 tracking-wide">Udvalgte projekter</p>
        <h2 className="text-3xl font-semibold mb-8">Projekter</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
