import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    href: "https://github.com/RasmusLiltorp",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/rasmus-liltorp-69234a290/",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "mailto:liltorp03@gmail.com",
    icon: Mail,
    label: "Email"
  }
];

export default function TopRightLinks() {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3">
      {links.map(({ href, icon: Icon, label }) => (
        <Link 
          key={label}
          href={href}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          title={label}
        >
          <Icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
}