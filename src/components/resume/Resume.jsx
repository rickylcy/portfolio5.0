// src/components/resume/Resume.jsx

function ContactLink({ href, children }) {
  return (
    <a className="text-violet-800 dark:text-violet-200 hover:underline" href={href}>
      {children}
    </a>
  );
}

export default function Resume({ data }) {
  return (
    <article className="max-w-none text-slate-800 dark:text-slate-100">
      <header className="border-b border-violet-100 dark:border-slate-700 pb-5">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-violet-950 dark:text-violet-200">
          {data.header.name}
        </h1>
        <p className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
          {data.header.title}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
          <span>{data.header.location}</span>
          <ContactLink href={`mailto:${data.header.email}`}>
            {data.header.email}
          </ContactLink>
          <ContactLink href={`https://${data.header.github}`}>
            {data.header.github}
          </ContactLink>
          <ContactLink href={`https://${data.header.linkedin}`}>
            {data.header.linkedin}
          </ContactLink>
        </div>
      </header>

      <section className="mt-6 rounded-2xl border border-violet-100 dark:border-slate-700 bg-violet-50/50 dark:bg-slate-900/70 p-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-violet-800 dark:text-violet-300">
          {data.summaryLabel}
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
          {data.summary}
        </p>
      </section>

      {data.highlights?.length ? (
        <section className="mt-5 grid gap-3 sm:grid-cols-3">
          {data.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-xl border border-violet-100 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 p-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
            >
              {highlight}
            </div>
          ))}
        </section>
      ) : null}

      {data.sections.map((section) => (
        <section key={section.heading} className="mt-7">
          <h2 className="border-b border-violet-100 dark:border-slate-700 pb-2 text-sm font-bold uppercase tracking-[0.18em] text-violet-900 dark:text-violet-200">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-5">
            {section.items.map((item) => (
              <div key={item.title}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-slate-950 dark:text-slate-50">
                    {item.title}
                  </h3>
                  {item.period ? (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.period}
                    </p>
                  ) : null}
                </div>
                {item.bullets?.length ? (
                  <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700 dark:text-slate-200">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-700 dark:bg-violet-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
