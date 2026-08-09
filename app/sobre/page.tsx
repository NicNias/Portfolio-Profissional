import Reveal from "@/components/Reveal";
import { personal, languages, certifications, education, currentlyStudying } from "@/data/profile";

export const metadata = {
  title: `Sobre — ${personal.name}`,
};

export default function Sobre() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-copper">Sobre</p>
        <h1 className="mt-3 font-display text-3xl font-medium text-paper md:text-4xl">
          Quem escreve o código
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg">
          {personal.summary} Hoje atuo como {experienceRoleNote()} em {personal.location}, transitando
          entre frontend, mobile, backend corporativo e infraestrutura de deploy, sempre buscando o
          equilíbrio entre entregar rápido e entregar bem.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-xl font-medium text-paper">Formação</h2>
          <ul className="mt-5 space-y-5">
            {education.map((e) => (
              <li key={e.institution} className="border-l-2 border-line pl-4">
                <p className="font-mono text-xs text-teal">{e.period}</p>
                <p className="mt-1 font-medium text-paper">{e.institution}</p>
                <p className="mt-1 text-sm text-muted">{e.course}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-xl font-medium text-paper">Certificações</h2>
          <ul className="mt-5 space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                {c}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-xl font-medium text-paper">Idiomas</h2>
          <ul className="mt-5 space-y-2">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between border-b border-line/60 pb-2 text-sm">
                <span className="text-paper">{l.name}</span>
                <span className="font-mono text-xs text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-16 rounded-xl border border-line bg-ink-elevated/60 p-6 md:p-8">
        <h2 className="font-display text-xl font-medium text-paper">Estudando agora</h2>
        <p className="mt-2 text-sm text-muted">Em constante atualização, o que está no forno no momento:</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {currentlyStudying.map((item) => (
            <span
              key={item}
              className="rounded-full border border-teal/40 bg-teal/10 px-3 py-1 font-mono text-xs text-teal"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function experienceRoleNote() {
  return "Software Engineer Associate na Accenture";
}
