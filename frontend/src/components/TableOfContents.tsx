"use client";

const sections = [
  { id: "hero", label: "home" },
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
];

export default function TableOfContents() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-6 z-50 font-mono text-sm">
      <div className="space-y-1">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}