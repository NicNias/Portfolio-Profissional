import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left md:px-10">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-copper"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-copper"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-muted transition-colors hover:text-copper"
            aria-label="E-mail"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
