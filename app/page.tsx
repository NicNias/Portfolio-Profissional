import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Avatar from "@/components/Avatar";
import Reveal from "@/components/Reveal";
import StackLayers from "@/components/StackLayers";
import { personal, experience } from "@/data/profile";
import HeroText from "@/components/HeroText";

export default function Home() {
  const currentRole = experience[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-circuit">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
          <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <HeroText />
              <p className="mt-6 max-w-xl text-balance text-base text-muted md:text-lg">
                {personal.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/experiencia"
                  className="group inline-flex items-center gap-2 rounded-full bg-copper px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  Ver experiência
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-mono text-sm text-paper transition-colors hover:border-copper hover:text-copper"
                >
                  Falar comigo
                </Link>
              </div>
              <p className="mt-8 font-mono text-xs text-muted">
                Atualmente em <span className="text-teal">{currentRole.company}</span> ·{" "}
                {currentRole.role} · {personal.location}
              </p>
            </div>
            <Avatar size={400} />
          </div>
        </div>
      </section>

      {/* Signature: stack layers preview */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-copper">
            Arquitetura
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-medium text-paper md:text-4xl">
            Full-stack, camada por camada.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted md:text-base">
            Passe o mouse ou toque em cada camada para ver as ferramentas que uso nela.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <StackLayers />
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <Link
            href="/stack"
            className="inline-flex items-center gap-2 font-mono text-sm text-copper hover:underline"
          >
            Ver stack completa
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
