import Reveal from "@/components/Reveal";
import StackLayers from "@/components/StackLayers";
import { personal } from "@/data/profile";

export const metadata = {
  title: `Stack — ${personal.name}`,
};

export default function Stack() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-copper">Arquitetura</p>
        <h1 className="mt-3 font-display text-3xl font-medium text-paper md:text-4xl">
          A stack completa
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Seis camadas, do que a pessoa usuária vê até o servidor que entrega tudo. Explore cada uma.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <StackLayers />
      </Reveal>
    </div>
  );
}
