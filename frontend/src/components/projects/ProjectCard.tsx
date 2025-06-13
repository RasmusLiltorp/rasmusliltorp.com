import { Project } from "@/lib/projects"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-xs font-mono bg-muted/60 hover:bg-muted transition-colors border-0"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}