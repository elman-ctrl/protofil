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
