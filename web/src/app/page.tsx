import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { GithubSection } from '@/components/github-section';
import { Hero } from '@/components/hero';
import { LearningPath } from '@/components/learning-path';
import { Navbar } from '@/components/navbar';
import { ProjectsSection } from '@/components/projects-section';
import { ResumeSection } from '@/components/resume-section';
import { SkillsSection } from '@/components/skills-section';
import {
  getProjects,
  getResume,
  getSiteContent,
  getSkillCategories,
} from '@/lib/api';
import type { SiteAbout, SiteHero, SitePathHop, SiteStat } from '@/lib/types';

export const revalidate = 60;

export default async function HomePage() {
  const [projects, skillCategories, resume, site] = await Promise.all([
    getProjects(),
    getSkillCategories(),
    getResume(),
    getSiteContent(),
  ]);

  const hero = site?.hero as SiteHero | undefined;
  const about = site?.about as SiteAbout | undefined;
  const learningPath = site?.learningPath as SitePathHop[] | undefined;
  const stats = site?.stats as SiteStat[] | undefined;

  return (
    <>
      <Navbar />
      <Hero hero={hero} stats={stats} />
      <main>
        <LearningPath hops={learningPath} />
        <AboutSection about={about} />
        <SkillsSection categories={skillCategories} />
        <ProjectsSection projects={projects} />
        <ResumeSection resume={resume} />
        <GithubSection />
        <ContactSection />
      </main>
      <footer className="border-t border-line bg-paper-raised py-4 text-center font-[family-name:var(--font-jetbrains)] text-[12.5px] text-slate-light">
        © 2026 Elman Fotouhi
      </footer>
    </>
  );
}
