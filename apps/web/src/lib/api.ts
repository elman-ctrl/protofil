import type {
  Project,
  ResumePayload,
  SiteContent,
  SkillCategory,
} from './types';

const API_URL =
  process.env.API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  'http://localhost:3001';

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    throw new Error(`API ${path} failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

async function safeFetch<T>(path: string, fallback: T): Promise<T> {
  try {
    return await apiFetch<T>(path);
  } catch {
    return fallback;
  }
}

export function getProjects() {
  return safeFetch<Project[]>('/projects', []);
}

export function getSkillCategories() {
  return safeFetch<SkillCategory[]>('/skill-categories', []);
}

export function getResume() {
  return safeFetch<ResumePayload>('/resume', {
    meta: null,
    experiences: [],
    skillGroups: [],
    keyProjects: [],
  });
}

export function getSiteContent() {
  return safeFetch<SiteContent | null>('/site', null);
}

export function getApiBase() {
  return (
    process.env.NEXT_PUBLIC_API_URL ??
    process.env.API_URL ??
    'http://localhost:3001'
  );
}
