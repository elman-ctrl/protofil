'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { getApiBase } from '@/lib/api';

type ContactRow = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

type ProjectRow = {
  id: string;
  titleFa: string;
  titleEn: string;
  order: number;
};

export default function AdminPage() {
  const [token, setToken] = useState('');
  const [saved, setSaved] = useState(false);
  const [messages, setMessages] = useState<ContactRow[]>([]);
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const t = localStorage.getItem('admin-token');
    if (t) {
      setToken(t);
      setSaved(true);
    }
  }, []);

  function persistToken(value: string) {
    setToken(value);
    localStorage.setItem('admin-token', value);
    setSaved(true);
  }

  async function loadData(e?: FormEvent) {
    e?.preventDefault();
    setError('');
    setStatus('Loading…');
    try {
      const headers = { 'x-admin-token': token };
      const [contactRes, projectsRes] = await Promise.all([
        fetch(`${getApiBase()}/admin/contact`, { headers }),
        fetch(`${getApiBase()}/projects`),
      ]);
      if (!contactRes.ok) throw new Error('Invalid admin token or API error');
      const contactData = (await contactRes.json()) as ContactRow[];
      const projectData = (await projectsRes.json()) as ProjectRow[];
      setMessages(contactData);
      setProjects(projectData);
      persistToken(token);
      setStatus(`Loaded ${contactData.length} messages, ${projectData.length} projects`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed');
      setStatus('');
    }
  }

  async function deleteMessage(id: string) {
    const res = await fetch(`${getApiBase()}/admin/contact/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-token': token },
    });
    if (res.ok) setMessages((prev) => prev.filter((m) => m.id !== id));
  }

  async function deleteProject(id: string) {
    if (!confirm('Delete this project?')) return;
    const res = await fetch(`${getApiBase()}/admin/projects/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-token': token },
    });
    if (res.ok) setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="min-h-screen bg-paper px-4 py-10 text-ink">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h1 className="text-2xl font-extrabold">Admin</h1>
          <Link href="/" className="text-sm font-semibold text-copper">
            ← Site
          </Link>
        </div>

        <form onSubmit={loadData} className="card mb-6 space-y-3 p-5">
          <label className="block text-sm">
            <span className="mb-1 block font-semibold">Admin token</span>
            <input
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full border border-line bg-paper-raised px-3 py-2 outline-none focus:border-copper"
              placeholder="x-admin-token value from api/.env"
            />
          </label>
          <button type="submit" className="btn btn-primary chamfer-sm">
            Load inbox & projects
          </button>
          {saved && (
            <p className="mono text-xs text-slate-light">Token saved in this browser</p>
          )}
          {status && <p className="text-sm text-sage">{status}</p>}
          {error && <p className="text-sm text-copper">{error}</p>}
        </form>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-bold">Contact messages</h2>
          <div className="space-y-3">
            {messages.length === 0 && (
              <p className="text-sm text-slate">No messages loaded yet.</p>
            )}
            {messages.map((m) => (
              <article key={m.id} className="card p-4">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <strong>{m.name}</strong>
                  <span className="mono text-xs text-slate-light">
                    {new Date(m.createdAt).toLocaleString()}
                  </span>
                </div>
                <a href={`mailto:${m.email}`} className="text-sm text-copper">
                  {m.email}
                </a>
                <p className="mt-2 whitespace-pre-wrap text-sm text-slate">{m.message}</p>
                <button
                  type="button"
                  onClick={() => deleteMessage(m.id)}
                  className="mt-3 text-xs font-semibold text-copper"
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold">Projects</h2>
          <div className="space-y-2">
            {projects.map((p) => (
              <div
                key={p.id}
                className="card flex flex-wrap items-center justify-between gap-3 p-4"
              >
                <div>
                  <div className="font-bold">{p.titleFa}</div>
                  <div className="mono text-xs text-slate-light">
                    {p.titleEn} · order {p.order}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => deleteProject(p.id)}
                  className="text-xs font-semibold text-copper"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate">
            برای ساخت/ویرایش کامل محتوا از{' '}
            <code className="mono">npx prisma studio</code> در پوشه{' '}
            <code className="mono">api</code> استفاده کنید، یا اندپوینت‌های{' '}
            <code className="mono">/admin/*</code> را صدا بزنید.
          </p>
        </section>
      </div>
    </div>
  );
}
