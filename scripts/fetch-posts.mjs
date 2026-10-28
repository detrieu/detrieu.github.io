// Pulls the latest Substack posts into src/data/posts.json.
// Run locally (npm run posts) and commit the result; Substack blocks CI servers.
import { writeFile } from 'node:fs/promises';

const FEED = 'https://desmondtrieu.substack.com/feed';
const PULSE = /pharm|prescri|medicare|glp|prior auth|claim|health|trumprx|loan repayment/i;

const xml = await (await fetch(FEED)).text();
const pick = (s, tag) => (s.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`)) || [])[1]?.trim() ?? '';

const posts = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => {
  const title = pick(item, 'title').replace(/\s+,/g, ',').replace(/\s+/g, ' ');
  return {
    title,
    url: pick(item, 'link'),
    date: new Date(pick(item, 'pubDate')).toISOString().slice(0, 10),
    strand: PULSE.test(title) ? 'pulse' : 'lag',
  };
});

await writeFile(new URL('../src/data/posts.json', import.meta.url), JSON.stringify(posts, null, 2) + '\n');
console.log(`Saved ${posts.length} posts`);
