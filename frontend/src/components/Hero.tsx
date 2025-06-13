import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, ChevronDown } from "lucide-react";

export default function Hero() {
    return(
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 border-t bg-grid-fade">
    <div className="container px-6 text-center max-w-5xl">
            <p className="text-sm text-muted-foreground tracking-wide font-satoshi">
                Student from Odense, Denmark
            </p>
            <h1
            className={cn(
                "text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl",
                "text-foreground leading-tight mb-6",
                "font-satoshi"
            )}
            >
           Aspiring software engineer focused on building{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-blue-400/50 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                clean backends
            </span>{" "}
            and minimal user experiences.
            </h1>

            <p className={cn(
                "text-xl text-muted-foreground max-w-3xl mx-auto leading-7",
                "mt-6 mb-8",
                "font-satoshi"
            )}>
                I focus on simple architecture, fast systems, and tech that works.
            </p>

            <Link href="https://github.com/RasmusLiltorp" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center text-sm 
            text-muted-foreground hover:text-foreground transition-colors animate-fade-in-up [animation-delay:1s]">
                <Github className="w-4 h-4 mr-2" />github.com/RasmusLiltorp
            </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground opacity-60" />
        </div>
    </section>
    )
}