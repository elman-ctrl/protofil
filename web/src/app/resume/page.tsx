import Link from 'next/link';
import { getResume } from '@/lib/api';

export const revalidate = 60;

export default async function ResumePrintPage() {
  const resume = await getResume();
  const meta = resume.meta;

  return (
    <div className="mx-auto max-w-3xl bg-paper px-6 py-10 text-ink print:px-0">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/" className="text-sm font-semibold text-copper">
          ← بازگشت به سایت
        </Link>
        <button type="button" className="btn btn-primary chamfer-sm" id="print-btn">
          Print / Save PDF
        </button>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('print-btn')?.addEventListener('click',()=>window.print())`,
        }}
      />

      <header className="mb-6 border-b-2 border-teal-900 pb-4">
        <h1 className="text-3xl font-extrabold text-teal-900">
          {meta?.headlineFa ?? 'المان فتوحی'}
        </h1>
        <p className="mono mt-1 text-sm text-slate">
          {meta?.locationFa ?? 'Network Engineering · DevOps'}
        </p>
        <p className="mt-1 text-sm text-slate">Elmanfotouhi@gmail.com · github.com/elman-ctrl</p>
      </header>

      {meta && (
        <section className="mb-5">
          <h2 className="mono mb-2 text-xs uppercase tracking-wide text-copper">
            خلاصه / Summary
          </h2>
          <p className="text-sm leading-relaxed">{meta.summaryFa}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate">{meta.summaryEn}</p>
        </section>
      )}

      <section className="mb-5">
        <h2 className="mono mb-2 text-xs uppercase tracking-wide text-copper">
          تجربه / Experience
        </h2>
        {resume.experiences.map((exp) => (
          <div key={exp.id} className="mb-3">
            <h3 className="font-bold">{exp.titleFa}</h3>
            <p className="text-sm text-slate">{exp.descriptionFa}</p>
          </div>
        ))}
      </section>

      <section className="mb-5">
        <h2 className="mono mb-2 text-xs uppercase tracking-wide text-copper">
          پروژه‌های کلیدی / Key Projects
        </h2>
        {resume.keyProjects.map((p) => (
          <div key={p.id} className="mb-3">
            <h3 className="font-bold">{p.titleFa}</h3>
            <p className="text-sm text-slate">{p.descriptionFa}</p>
            <p className="mono mt-1 text-[11px] text-slate-light">
              {p.techStack.join(' · ')}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mono mb-2 text-xs uppercase tracking-wide text-copper">
          مهارت‌ها / Skills
        </h2>
        {resume.skillGroups.map((g) => (
          <div key={g.id} className="mb-3">
            <h3 className="text-sm font-bold">{g.categoryNameFa}</h3>
            <p className="text-sm text-slate">
              {(Array.isArray(g.skills) ? g.skills : []).join(' · ')}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
