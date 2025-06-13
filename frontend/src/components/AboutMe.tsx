import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  SiDotnet, 
  SiPostgresql, 
  SiSupabase, 
  SiDocker, 
  SiPython, 
  SiTypescript, 
  SiNextdotjs, 
  SiGit 
} from "react-icons/si";

const technologies = [
  { name: ".NET", icon: SiDotnet },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Docker", icon: SiDocker },
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Git", icon: SiGit },
];

export default function About() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container max-w-6xl px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase text-muted-foreground tracking-wide">About me</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Rasmus Liltorp
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
                I'm a software engineering student who learns by building. Most of my experience is in backend development with C# and .NET, but I also work with TypeScript, Supabase, and modern frontend frameworks like Next.js.
            </p>

            <p>
                I care about clean code, simple architecture, and systems that work. I'd rather build boring, fast tech than overengineer.
            </p>

            <p>
                Right now I'm working on several side projects to sharpen my skills and explore what's possible.
            </p>
            </div>

            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                {technologies.map(({ name, icon: Icon }) => (
                  <div 
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-muted text-muted-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
                    title={name}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6"> 
        <Button asChild variant="outline" size="lg" className="font-semibold relative overflow-hidden">
            <Link href="/typing-game" className="relative z-10">
                Can you out-type me?
                <div className="absolute inset-0 rounded-lg animate-pulse-border" />
            </Link>
        </Button>
        </div>
          </div>

          <div className="lg:order-first flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl -z-10 blur-xl opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}