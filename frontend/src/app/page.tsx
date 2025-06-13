import Hero from '@/components/Hero';
import About from '@/components/AboutMe';
import ProjectsSection from '@/components/projects/ProjectsSection';
import TableOfContents from '@/components/TableOfContents';
import TopRightLinks from '@/components/TopRightLinks';

export default function Home() {
  return (
    <>
      <TableOfContents />
      <TopRightLinks />
      <main className="">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
      </main>
    </>
  )
}