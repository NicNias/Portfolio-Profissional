import Reveal from "@/components/Reveal";
import { personal } from "@/data/profile";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: `Contato — ${personal.name}`,
};

const channels = [
  {
    label: "E-mail",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "Telefone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\D/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "in/naniasnic",
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "NicNias",
    href: personal.github,
    icon: Github,
  },
];

export default function Contato() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-copper">Contato</p>
        <h1 className="mt-3 font-display text-3xl font-medium text-paper md:text-4xl">
          Vamos conversar
        </h1>
        <p className="mt-4 max-w-lg text-muted">
          Aberto a novas oportunidades, projetos freelance e boas conversas sobre engenharia de
          software. Escolha o canal que preferir.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {channels.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.label} delay={i * 0.05}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-xl border border-line bg-ink-elevated/60 p-5 transition-colors hover:border-copper"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-copper">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-muted">{c.label}</p>
                    <p className="mt-0.5 font-medium text-paper">{c.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper"
                />
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-14 rounded-xl border border-dashed border-line p-6 text-center">
        <p className="font-mono text-xs text-muted">{personal.location}</p>
        <p className="mt-1 text-sm text-muted">
          Fuso horário: Brasília (UTC-3) — costumo responder em até 24h úteis.
        </p>
      </Reveal>
    </div>
  );
}
