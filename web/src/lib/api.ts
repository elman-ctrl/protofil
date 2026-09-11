import type { Project, ResumePayload, SkillCategory } from './types';

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

export function getProjects() {
  return apiFetch<Project[]>('/projects');
}

export function getSkillCategories() {
  return apiFetch<SkillCategory[]>('/skill-categories');
}

export function getResume() {
  return apiFetch<ResumePayload>('/resume');
}

export function getApiBase() {
  return (
    process.env.NEXT_PUBLIC_API_URL ??
    process.env.API_URL ??
    'http://localhost:3001'
  );
}
