// Everything on the page lives here. Edit this file to change content.
// Lines marked TODO(desmond) are placeholders.

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
  cvPdf: null as string | null, // e.g. '/desmond-trieu-cv.pdf' once the PDF is in public/
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
    problem: 'TODO(desmond): one or two lines on the problem, in your words.',
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
    problem: 'TODO(desmond): one or two lines on the problem, in your words.',
    built: 'Weight-based adult parenteral nutrition calculator with GIR, osmolarity and electrolyte checks.',
    stack: ['Next.js', 'TypeScript', 'shadcn/ui', 'Clerk'],
    status: 'private',
  },
];

// Newest first. The first entry gets the HEAD marker.
export const experience = [
  { hash: 'a1f9c2e', date: 'TODO', role: 'TODO(desmond): role', org: 'Organization', note: 'One line on what you did.' },
  { hash: '7be04d1', date: 'TODO', role: 'TODO(desmond): role', org: 'Organization', note: 'One line on what you did.' },
  { hash: '3c8e5a0', date: 'TODO', role: 'PharmD', org: 'TODO(desmond): school', note: '' },
];

export const now = [
  { pid: 101, process: 'rx-abroad', status: 'shipping', cpu: '62%' },
  { pid: 214, process: 'the-lag-and-pulse', status: 'writing', cpu: '18%' },
  { pid: 330, process: 'surf', status: 'waiting on swell', cpu: '11%' },
  { pid: 412, process: 'climb', status: 'projecting', cpu: '9%' },
];
