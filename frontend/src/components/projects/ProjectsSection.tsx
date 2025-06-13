import { projects } from "@/lib/projects"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-background via-background to-muted/10 border-t border-border/40 ">
      <div className="container max-w-6xl px-6 mx-auto">
        <div className="space-y-4 mb-12">
          <div className="space-y-2">
            <p className="text-sm uppercase text-muted-foreground tracking-wider font-mono">
              Highlighted projects
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Projects
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Projects I’ve built to sharpen my skills and explore practical solutions.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}