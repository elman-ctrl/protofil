import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { ProjectsSection } from '@/components/projects-section';
import { ResumeSection } from '@/components/resume-section';
import { SkillsSection } from '@/components/skills-section';
import { getProjects, getSiteContent, getSkillCategories } from '@/lib/api';
import type { SiteAbout, SiteHero } from '@/lib/types';

export const revalidate = 60;

export default async function HomePage() {
  const [projects, skillCategories, site] = await Promise.all([
    getProjects(),
    getSkillCategories(),
    getSiteContent(),
  ]);

  const hero = site?.hero as SiteHero | undefined;
  const about = site?.about as SiteAbout | undefined;

  return (
    <>
      <Navbar />
      <Hero hero={hero} />
      <main>
        <AboutSection about={about} />
        <SkillsSection categories={skillCategories} />
        <ProjectsSection projects={projects} />
        <ResumeSection />
        <ContactSection />
      </main>
      <footer className="border-t border-line bg-paper-raised py-4 text-center text-[12.5px] text-slate-light">
        © 2026 Elman Fotouhi
      </footer>
    </>
  );
}
