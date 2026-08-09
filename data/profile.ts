// ────────────────────────────────────────────────────────────────
// TODOS os textos e dados do site vivem aqui. Para atualizar o
// portfólio, edite só este arquivo — os componentes não precisam
// ser tocados.
// ────────────────────────────────────────────────────────────────

export const personal = {
  name: "Ananias Nicolau",
  role: "Software Engineer @ Accenture",
  tagline: "Desenvolvedor Full-Stack e Mobile",
  location: "Recife, Pernambuco, Brasil",
  summary:
    "Desenvolvedor Full-Stack e Mobile apaixonado por criar soluções inovadoras e eficientes para problemas reais, do frontend ao banco de dados, passando pelo deploy.",
  email: "ananiasdias0@gmail.com",
  phone: "+55 81 99892-8796",
  linkedin: "https://www.linkedin.com/in/naniasnic",
  github: "https://github.com/NicNias",
  // Troque este placeholder pela sua foto real: coloque o arquivo em
  // /public/avatar.jpg e mude avatarSrc para "/avatar.jpg".
  avatarSrc: "/avatar.jpg",
  avatarInitials: "AN",
};

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Profissional" },
  { name: "Espanhol", level: "Profissional" },
];

export const certifications = [
  "User Experience",
  "Lei Geral de Proteção de Dados (LGPD)",
  "Introdução ao DevOps",
  "Introdução ao GitHub",
  "Introdução ao Git",
];

// A stack é organizada em "camadas" — reflete o Hero/Signature do site
// (um diagrama de arquitetura em camadas, do frontend ao deploy).
export const stackLayers = [
  {
    id: "frontend",
    label: "Front-end",
    description: "Interfaces que as pessoas realmente usam.",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Angular.js", "TailwindCSS", "Styled-components", "Framer Motion", "Bootstrap"],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Apps nativos multiplataforma.",
    items: ["React Native", "Expo", "NativeWind", "Native Base"],
  },
  {
    id: "backend",
    label: "Back-end",
    description: "APIs, regras de negócio e dados.",
    items: ["Node.js", "Express", "Fastify", "PHP", "Laravel", "Java", "Spring Boot", "Spring Security", "Quarkus", "PL/SQL", "Prisma", "TypeORM", "Sequelize", "Mongoose", "Eloquent", "Liquibase", "Swagger", "Lombok"],
  },
  {
    id: "devops",
    label: "DevOps & Infra",
    description: "Deploy, acesso remoto e ambiente.",
    items: ["Docker", "Shell Scripts", "SSH", "RDP", "WinSCP", "PuTTY"],
  },
  {
    id: "quality",
    label: "Testes & Qualidade",
    description: "Garantindo que tudo funcione.",
    items: ["Jest", "JUnit", "Mockito", "Cypress", "Postman", "Karma", "SonarQube"],
  },
  {
    id: "design",
    label: "UX/UI",
    description: "Do wireframe ao componente.",
    items: ["Figma", "Photoshop"],
  },
];

export const currentlyStudying = ["RabbitMQ", "Redis", "AWS", "AWS Certified Cloud Practitioner"];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Accenture",
    role: "Custom Software Engineering Associate",
    period: "Abril de 2026 — Presente",
    startDate: "2026-04-22",
    location: "Recife, PE",
    bullets: [
      "Manutenção e criação de projetos do zero em Angular 2+ com TypeScript, seguindo a arquitetura definida do projeto.",
      "Manutenção e criação de APIs REST e microsserviços em Java 8+ utilizando Quarkus.",
      "Desenvolvimento de microsserviços que se comunicam com o front-end através de uma camada de Gateway.",
      "Escrita de testes unitários com Karma, JUnit e Mockito, com acompanhamento de qualidade via SonarQube.",
      "Execução de pipelines de deploy CI/CD via GitHub Actions, rodando workflows já configurados pelo time.",
      "Organização de tarefas em metodologia Scrum, utilizando sistema pré-definido pelo cliente para gestão do backlog e sprints.",
    ],
    stack: ["TypeScript", "Angular 2+", "Java 8/17/21", "Quarkus", "API Gateway", "GitHub Actions", "Scrum", "Karma", "JUnit", "Mockito", "SonarQube"],
  },
  {
    company: "Sulwork",
    role: "Desenvolvedor de Software Jr.",
    period: "Setembro de 2025 — Abril de 2026",
    startDate: "2025-09-08",
    endDate: "2026-04-17",
    location: "Recife, PE",
    bullets: [
      "Desenvolvimento de novas funcionalidades com Java 8 e Java 17 + Spring Boot.",
      "Criação e manutenção de APIs REST seguindo boas práticas de arquitetura e segurança.",
      "Otimização de queries, procedures e functions em PL/SQL com foco em performance.",
      "Interfaces modernas e responsivas com Angular 19, com boas práticas de componentização.",
      "Análise técnica e apoio no levantamento de requisitos junto às áreas de negócio.",
      "Correção de bugs, refatoração de código legado e melhorias contínuas.",
      "Participação ativa em code reviews, garantindo qualidade e padronização do código.",
      "Configuração de deploy em servidores Linux e Windows via shell scripts, WinSCP, PuTTY, SSH e RDP.",
    ],
    stack: ["Java 8/17/21", "Spring Boot", "Angular 19", "Oracle PL/SQL", "Shell Script", "SSH/RDP"],
  },
  {
    company: "Sagach",
    role: "Desenvolvedor Full-Stack e Mobile",
    period: "Setembro de 2023 — Agosto de 2025",
    startDate: "2023-09-06",
    endDate: "2025-08-29",
    location: "Brejo da Madre de Deus, PE",
    bullets: [
      "Desenvolvimento de aplicativos para Android e iOS com React Native.",
      "Desenvolvimento de sistemas e sites em Laravel e PHP.",
      "Criação de layouts no Figma e artes para redes sociais no Photoshop.",
      "Suporte e manutenção de sites e sistemas legados em PHP.",
    ],
    stack: ["React Native", "PHP", "Laravel", "Figma", "Photoshop"],
  },
  {
    company: "Freelance",
    role: "Desenvolvedor Web",
    period: "Janeiro de 2019 — Agosto de 2025",
    startDate: "2019-01-01",
    endDate: "2025-08-29",
    location: "Recife, PE",
    bullets: [
      "Desenvolvimento de sites, sistemas, landing pages e aplicativos para diversos clientes.",
      "Resolução de bugs e desenvolvimento de layouts sob medida.",
    ],
    stack: ["React.js", "Next.js", "Angular.js", "Node.js", "PHP", "Laravel", "React Native", "Expo"],
  },
];

export type EducationEntry = {
  institution: string;
  course: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    institution: "UNINASSAU",
    course: "Análise e Desenvolvimento de Sistemas — Tecnologia da Informação",
    period: "Julho de 2023 — Dezembro de 2025",
  },
  {
    institution: "Projeto Start (LATAM) — Rede Cidadã",
    course: "Capacitação Front-end: HTML, CSS, JavaScript, React.js, Node.js, MySQL, Docker, Git e GitHub",
    period: "Março de 2022 — Agosto de 2022",
  },
];

export const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/stack", label: "Stack" },
  { href: "/contato", label: "Contato" },
];
