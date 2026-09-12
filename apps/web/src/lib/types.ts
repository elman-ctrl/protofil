export type Locale = 'fa' | 'en';

export type LocalizedList = {
  fa: string[];
  en: string[];
};

export type Project = {
  id: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  features: LocalizedList;
  challenges: LocalizedList;
  techStack: string[];
  repoUrl?: string | null;
  demoUrl?: string | null;
  order: number;
  createdAt: string;
};

export type Skill = {
  id: string;
  name: string;
  levelPercent: number;
  order: number;
};

export type SkillCategory = {
  id: string;
  nameFa: string;
  nameEn: string;
  iconColor: string;
  order: number;
  skills: Skill[];
};

export type ResumeMeta = {
  id: string;
  summaryFa: string;
  summaryEn: string;
  headlineFa: string;
  headlineEn: string;
  locationFa: string;
  locationEn: string;
};

export type ResumeExperience = {
  id: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  order: number;
};

export type ResumeSkillGroup = {
  id: string;
  categoryNameFa: string;
  categoryNameEn: string;
  skills: string[];
  order: number;
};

export type ResumePayload = {
  meta: ResumeMeta | null;
  experiences: ResumeExperience[];
  skillGroups: ResumeSkillGroup[];
  keyProjects: Array<{
    id: string;
    titleFa: string;
    titleEn: string;
    descriptionFa: string;
    descriptionEn: string;
    techStack: string[];
  }>;
};

export type SiteHero = {
  availabilityFa: string;
  availabilityEn: string;
  nameFa: string;
  nameEn: string;
  roleBeforeFa: string;
  roleBeforeEn: string;
  roleNetworkFa: string;
  roleNetworkEn: string;
  roleMidFa: string;
  roleMidEn: string;
  roleAfterFa: string;
  roleAfterEn: string;
  caps: Array<{ fa: string; en: string }>;
  ctaProjectsFa: string;
  ctaProjectsEn: string;
  ctaContactFa: string;
  ctaContactEn: string;
  email: string;
};

export type SiteAbout = {
  titleFa: string;
  titleEn: string;
  cards: Array<{
    titleFa: string;
    titleEn: string;
    bodyFa: string;
    bodyEn: string;
  }>;
  principles: Array<{ fa: string; en: string }>;
  quoteFa: string;
  quoteEn: string;
  quoteByFa: string;
  quoteByEn: string;
};

export type SitePathHop = {
  num: string;
  fa: string;
  en: string;
  sub: string;
};

export type SiteStat = {
  n: string;
  fa: string;
  en: string;
};

export type SiteContent = {
  id: string;
  hero: SiteHero;
  about: SiteAbout;
  learningPath: SitePathHop[];
  stats: SiteStat[];
};
