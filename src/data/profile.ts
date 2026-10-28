// Everything on the page lives here. Edit this file to change content.

export const profile = {
  name: 'Desmond Trieu',
  handle: 'desmond@sf',
  intro: 'Pharmacist in San Francisco. I build small tools for problems I’ve run into at work and on the road.',
  boot: ['whoami', 'clinician who builds', 'traveler who writes', 'avid surfer + rock climber'],
  links: {
    linkedin: 'https://www.linkedin.com/in/desmond-trieu/',
    github: 'https://github.com/detrieu',
    substack: 'https://desmondtrieu.substack.com',
  },
  cvPdf: '/Desmond-Trieu-Resume.pdf' as string | null,
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  built: string;
  stack: string[];
  live?: string;
  source?: string;
  status: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: 'rx-abroad',
    name: 'Rx Abroad',
    tagline: 'Know what to ask for, wherever you land.',
    problem: 'When friends got sick on a trip, I was the one tracking down their medicines at local pharmacies, and there was no reliable database of what each drug is called abroad.',
    built: 'Local medicine brand names for travelers, checked against each country’s drug registry, with saved trips.',
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Clerk', 'Vercel'],
    live: 'https://rxabroad.vercel.app',
    source: 'https://github.com/detrieu/rxabroad',
    status: 'live',
    image: '/projects/rx-abroad.jpg',
  },
  {
    slug: 'tpn-calc',
    name: 'Adult TPN Calculator',
    tagline: 'Parenteral nutrition math, with the checks built in.',
    problem: 'My first AI coding project: a clinical calculation I know well, turned into a tool.',
    built: 'Weight-based adult parenteral nutrition calculator with GIR, osmolarity and electrolyte checks.',
    stack: ['Next.js', 'TypeScript', 'shadcn/ui', 'Clerk'],
    live: 'https://tpn-calc.vercel.app',
    status: 'live',
    image: '/projects/tpn-calc.jpg',
  },
];

// Newest first. The first entry gets the HEAD marker.
export const experience = [
  { hash: 'c4e17a2', date: 'Oct 2025 – now', role: 'Evidence Generation Associate', org: 'Bluepath Solutions', note: 'Health economic materials, literature reviews and Medicare policy analysis for biopharma clients.' },
  { hash: 'b7d3e05', date: 'May 2023 \u2013 now', role: 'Founder', org: 'Points 2 Passports', note: 'Award travel planning for 50+ clients, saving each ~$20k\u201350k a year.' },
  { hash: '9d02b6f', date: 'Aug 2025 – Aug 2026', role: 'Clinical Advisor', org: 'Freelance', note: 'Designed the clinical decision trees behind a pharmacy AI phone triage agent and audited its outputs, cutting live agent escalation by 60%.' },
  { hash: 'e81f3c0', date: 'Oct 2025 – May 2026', role: 'Pharmacist Advisor, Clinical Operations (Medicare Part D)', org: 'CVS Health', note: 'Adjudicated Part D prior authorizations at 97% accuracy; standardized GLP-1 coverage guidance for the team.' },
  { hash: '2b6c8f1', date: 'Apr – Aug 2025', role: 'Health Economics and Outcomes Researcher', org: 'UCSF', note: 'Patient preference research in prostate cancer and artificial kidney implants.' },
  { hash: '5a7d9e4', date: 'May – Jul 2025', role: 'AI & Health Tech Innovation Fellow', org: 'Bitelabs', note: 'Built and pitched a rural telehealth prototype, from CDC data analysis to investor pitch.' },
  { hash: 'f39a0d7', date: 'Jun 2023 – Jun 2025', role: 'Formulary Analyst', org: 'UCSF / CA Dept. of Insurance', note: 'Formulary compliance across 24 plans; helped secure full contraceptive coverage on every CA student health plan (~500,000 students).' },
  { hash: '8a1f6b3', date: '', role: 'PharmD', org: 'UC San Francisco', note: 'Before that, B.S. Biochemistry with a minor in Design at UC San Diego. Licensed pharmacist (RPh) in California.' },
];

export const now = [
  { pid: 101, process: 'rx-abroad', status: 'shipping', cpu: '62%' },
  { pid: 214, process: 'the-lag-and-pulse', status: 'writing', cpu: '18%' },
  { pid: 330, process: 'surf', status: 'waiting on swell', cpu: '11%' },
  { pid: 412, process: 'climb', status: 'projecting', cpu: '9%' },
];
