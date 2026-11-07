// One-off: download the presidential portraits from Wikimedia Commons,
// resize them for the page (160px), and print licence metadata for the
// footer credits list. Usage: bun scripts/fetch-portraits.mjs
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PORTRAITS = [
	{ id: 'soekarno', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Presiden_Sukarno.jpg?width=160', file: 'File:Presiden_Sukarno.jpg' },
	{ id: 'soeharto', url: 'https://id.wikipedia.org/wiki/Special:FilePath/President_Suharto%2C_1998.jpg?width=160', file: 'File:President_Suharto, 1998.jpg' },
	{ id: 'habibie', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bacharuddin_Jusuf_Habibie_official_portrait.jpg?width=160', file: 'File:Bacharuddin Jusuf Habibie official portrait.jpg' },
	{ id: 'gusdur', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gusdur.jpg?width=160', file: 'File:Gusdur.jpg' },
	{ id: 'megawati', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/President_Megawati_Sukarnoputri_-_Indonesia.jpg?width=160', file: 'File:President_Megawati_Sukarnoputri_-_Indonesia.jpg' },
	{ id: 'sby', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Susilo_Bambang_Yudhoyono%2C_official_presidential_portrait_%282004%29.jpg?width=160', file: 'File:Susilo Bambang Yudhoyono, official presidential portrait (2004).jpg' },
	{ id: 'jokowi', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Joko_Widodo_2019_official_portrait.jpg?width=160', file: 'File:Joko Widodo 2019 official portrait.jpg' },
	{ id: 'prabowo', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Prabowo_Subianto_2024_official_portrait.jpg?width=160', file: 'File:Prabowo Subianto 2024 official portrait.jpg' }
];

const outDir = path.resolve('static/img/presidents');
await mkdir(outDir, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRetry(url, tries = 5) {
	for (let attempt = 1; attempt <= tries; attempt++) {
		const res = await fetch(url, { headers: { 'User-Agent': 'politnesia-migration/1.0 (static site build)' } });
		if (res.ok) return res;
		if (res.status === 429 || res.status >= 500) {
			const wait = attempt * 3000;
			console.log(`  ${res.status} on attempt ${attempt}; waiting ${wait}ms`);
			await sleep(wait);
			continue;
		}
		throw new Error(`HTTP ${res.status}`);
	}
	throw new Error(`still failing after ${tries} tries: ${url}`);
}

const credits = [];
for (const p of PORTRAITS) {
	await sleep(1500);
	const res = await fetchWithRetry(p.url);
	const buf = Buffer.from(await res.arrayBuffer());
	const out = path.join(outDir, `${p.id}.jpg`);
	const img = await sharp(buf).resize(160, 160, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
	await writeFile(out, img);

	await sleep(1500);
	const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(p.file)}&prop=imageinfo&iiprop=extmetadata&format=json`;
	const metaRes = await fetchWithRetry(api);
	const meta = await metaRes.json();
	const pages = meta?.query?.pages ?? {};
	const page = Object.values(pages)[0];
	const ext = page?.imageinfo?.[0]?.extmetadata ?? {};
	credits.push({
		id: p.id,
		file: page?.title ?? p.file,
		license: ext.LicenseShortName?.value ?? 'unknown',
		artist: (ext.Artist?.value ?? 'unknown').replace(/<[^>]+>/g, '').trim()
	});
	console.log(`fetched ${p.id} (${img.length} bytes)`);
}
console.log('\n' + JSON.stringify(credits, null, 2));
