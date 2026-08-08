import Image from "next/image";
import { personal } from "@/data/profile";

export default function Avatar({ size = 220 }: { size?: number }) {
  const ringPadding = Math.max(4, Math.round(size * 0.035));

  return (
    <div
      className="rounded-[28px] bg-gradient-to-br from-copper via-copper/70 to-teal p-[3px] shadow-[0_0_40px_-8px_rgba(232,163,61,0.45)]"
      style={{ width: size + ringPadding * 2, height: size + ringPadding * 2 }}
    >
      <div className="h-full w-full rounded-[25px] bg-ink p-1">
        {personal.avatarSrc ? (
          <Image
            src={personal.avatarSrc}
            alt={personal.name}
            width={size}
            height={size}
            className="h-full w-full rounded-[21px] object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-[21px] bg-gradient-to-br from-ink-soft to-ink-elevated font-display text-2xl font-medium text-copper">
            {personal.avatarInitials}
          </div>
        )}
      </div>
    </div>
  );
}