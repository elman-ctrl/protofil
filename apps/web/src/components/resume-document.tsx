'use client';

import { resumeDocument as r } from '@/lib/resume-content';
import { useLang } from './lang-provider';

export function ResumeDocument() {
  const { locale, t } = useLang();
  const fa = locale === 'fa';

  return (
    <article className="cv" dir={fa ? 'rtl' : 'ltr'} lang={fa ? 'fa' : 'en'}>
      <header className="cv__hero">
        <div className="cv__identity">
          <h1>{fa ? r.nameFa : r.nameEn}</h1>
          <p className="cv__role">{fa ? r.titleFa : r.titleEn}</p>
          <p className="cv__focus">{fa ? r.focusFa : r.focusEn}</p>
        </div>
        <ul className="cv__contacts">
          <li>
            <span className="cv__contact-label">{t('موقعیت', 'Location')}</span>
            {fa ? r.locationFa : r.locationEn}
          </li>
          <li>
            <span className="cv__contact-label">{t('تلفن', 'Phone')}</span>
            <a href={`tel:${r.phone.replace(/-/g, '')}`} dir="ltr">
              {r.phone}
            </a>
          </li>
          <li>
            <span className="cv__contact-label">{t('ایمیل', 'Email')}</span>
            <a href={`mailto:${r.email}`} dir="ltr">
              {r.email}
            </a>
          </li>
          <li>
            <span className="cv__contact-label">{t('گیت‌هاب', 'GitHub')}</span>
            <a href={r.github} target="_blank" rel="noopener noreferrer" dir="ltr">
              {r.githubLabel}
            </a>
          </li>
          <li>
            <span className="cv__contact-label">{t('لینکدین', 'LinkedIn')}</span>
            <a href={r.linkedin} target="_blank" rel="noopener noreferrer" dir="ltr">
              {r.linkedinLabel}
            </a>
          </li>
          <li>
            <span className="cv__contact-label">{t('وب‌سایت', 'Website')}</span>
            <a href={r.website} target="_blank" rel="noopener noreferrer" dir="ltr">
              {r.websiteLabel}
            </a>
          </li>
        </ul>
      </header>

      <div className="cv__grid">
        <aside className="cv__side">
          <section>
            <h2>{t('مهارت‌ها', 'Skills')}</h2>
            {r.skillGroups.map((group) => (
              <div key={group.en} className="cv__skill">
                <h3>{fa ? group.fa : group.en}</h3>
                <p>{(fa ? group.itemsFa : group.itemsEn).join(' · ')}</p>
              </div>
            ))}
          </section>

          <section>
            <h2>{t('زبان‌ها', 'Languages')}</h2>
            <ul className="cv__langs">
              {r.languages.map((lang) => (
                <li key={lang.nameEn}>
                  <strong>{fa ? lang.nameFa : lang.nameEn}</strong>
                  <span>{fa ? lang.levelFa : lang.levelEn}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="cv__main">
          <section>
            <h2>{t('هدف شغلی', 'Objective')}</h2>
            <p className="cv__lead">{fa ? r.objectiveFa : r.objectiveEn}</p>
          </section>

          <section>
            <h2>{t('سوابق کاری', 'Experience')}</h2>
            <article className="cv__job">
              <div className="cv__job-meta">
                <span className="cv__dates">
                  {fa ? r.experience.datesFa : r.experience.datesEn}
                </span>
                <span className="cv__place">
                  {fa ? r.experience.cityFa : r.experience.cityEn}
                </span>
              </div>
              <h3>{fa ? r.experience.titleFa : r.experience.titleEn}</h3>
              <p className="cv__company">
                {fa ? r.experience.companyFa : r.experience.companyEn}
              </p>
              <ul>
                {(fa ? r.experience.bulletsFa : r.experience.bulletsEn).map(
                  (bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ),
                )}
              </ul>
              <p className="cv__stack">{r.experience.stack.join(' · ')}</p>
            </article>
          </section>

          <section>
            <h2>{t('تحصیلات', 'Education')}</h2>
            <h3>{fa ? r.education.titleFa : r.education.titleEn}</h3>
            <p className="cv__company">
              {fa ? r.education.placeFa : r.education.placeEn}
              <span className="cv__edu-extra">
                {' — '}
                {fa ? r.education.extraFa : r.education.extraEn}
              </span>
            </p>
          </section>

          <section>
            <h2>{t('نقاط قوت', 'Strengths')}</h2>
            <p className="cv__lead">{fa ? r.strengthFa : r.strengthEn}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
