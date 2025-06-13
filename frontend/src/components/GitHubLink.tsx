import Link from "next/link";
import { Github } from "lucide-react";

export default function GitHubLink() {
  return (
    <Link 
      href="https://github.com/RasmusLiltorp" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed top-6 right-6 z-50 text-muted-foreground hover:text-foreground transition-colors"
    >
      <Github className="w-6 h-6" />
    </Link>
  );
}