import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, ArrowRight } from "lucide-react";

export default function Hero() {
    return(
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/20 border-t">
        <div className="container px-6 text-center max-w-4xl">
            <h1
            className={cn(
                "text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl",
                "text-foreground leading-tight mb-6"
            )}
            >
            Software engineer building{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                clean backends
            </span>{" "}
            and minimal user experiences.
            </h1>

            <p className={cn(
                "text-xl text-muted-foreground max-w-3xl mx-auto leading-7",
                "mt-6 mb-8"
            )}>
                I focus on simple architecture, fast systems, and boring tech that works.
            </p>

            <Link href="https://github.com/RasmusLiltorp" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center text-sm 
            text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-4 h-4 mr-2" />github.com/RasmusLiltorp
            </Link>
        </div>
    </section>
    )
}