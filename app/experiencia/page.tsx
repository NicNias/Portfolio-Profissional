import Reveal from "@/components/Reveal";
import { experience, personal } from "@/data/profile";
import { calcularDuracao } from "@/utils/calcularDuracao";
import { MapPin } from "lucide-react";

export const metadata = {
  title: `Experiência — ${personal.name}`,
};

export default function Experiencia() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-copper">Trajetória</p>
        <h1 className="mt-3 font-display text-3xl font-medium text-paper md:text-4xl">
          Experiência profissional
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Do freelance ao corporativo — a ordem cronológica real de onde estive.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* vertical timeline rail */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line md:left-[19px]" />

        <ol className="space-y-14">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pl-10 md:pl-14">
              <Reveal delay={i * 0.05}>
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-copper bg-ink font-mono text-xs text-copper md:h-10 md:w-10">
                  {String(experience.length - i).padStart(2, "0")}
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 className="font-display text-xl font-medium text-paper md:text-2xl">
                    {job.role}
                  </h2>
                  <span className="font-mono text-xs text-teal">{calcularDuracao(job.startDate, job.endDate)}</span>
                </div>
                <p className="mt-1 font-medium text-copper">{job.company}</p>
                <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
                  <span>{job.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {job.location}
                  </span>
                </div>

                {job.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-ink-soft/60 px-3 py-1 font-mono text-xs text-paper/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
