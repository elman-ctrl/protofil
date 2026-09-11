'use client';

import { useEffect, useState } from 'react';
import { useLang } from './lang-provider';

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

export function GithubSection() {
  const { t, locale } = useLang();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/elman-ctrl/repos?sort=updated&per_page=4')
      .then(async (res) => {
        if (!res.ok) throw new Error('fail');
        return res.json();
      })
      .then((data: Repo[]) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="section">
      <div className="wrap">
        <div className="eyebrow">{t('گیت‌هاب', 'GitHub')}</div>
        <h2 className="mb-3 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t('فعالیت و مخزن‌های اخیر', 'Activity & Recent Repositories')}
        </h2>
        <p className="mb-8 max-w-2xl text-slate">
          {t(
            'این بخش مستقیم از API گیت‌هاب من خونده می‌شه.',
            'This section is pulled live from my GitHub API.',
          )}
        </p>

        <div className="card mb-4 overflow-x-auto p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/BC7139/elman-ctrl"
            alt="GitHub contribution graph"
            className="mx-auto"
            loading="lazy"
          />
        </div>

        {loading && (
          <p className="mono text-sm text-slate-light">
            {t('در حال بارگذاری مخزن‌ها…', 'Loading repositories…')}
          </p>
        )}
        {error && (
          <p className="mono text-sm text-slate-light">
            {t(
              'امکان بارگذاری مخزن‌ها در حال حاضر وجود ندارد.',
              'Unable to load repositories right now.',
            )}
          </p>
        )}
        {!loading && !error && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card block p-4 transition hover:-translate-y-0.5 hover:border-copper"
              >
                <div className="mono mb-1 text-[13.5px] font-bold text-ink">
                  {repo.name}
                </div>
                <div className="mb-2 min-h-8 text-[12.8px] text-slate">
                  {repo.description ||
                    (locale === 'fa' ? 'بدون توضیح' : 'No description')}
                </div>
                <div className="mono text-[11px] text-slate-light">
                  {(repo.language ? `${repo.language} · ` : '') +
                    `★ ${repo.stargazers_count}`}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
