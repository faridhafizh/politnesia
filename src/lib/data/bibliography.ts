// Politnesia — Daftar Pustaka. Rendered by Footer (#daftar-pustaka).
// hrefs menunjuk ke sumber; hrefLabel opsional untuk teks tautan (default: host domain).

export interface BibEntry {
	id: string;
	label: string;
	note?: string;
	href?: string;
	hrefLabel?: string;
}

export interface BibGroup {
	id: string;
	title: string;
	entries: BibEntry[];
}

export const BIBLIOGRAPHY: BibGroup[] = [
	{
		id: 'indeks',
		title: 'Indeks & lembaga internasional',
		entries: [
			{ id: 'freedom', label: 'Freedom House', note: 'Freedom in the World, 2015–2025 — skor Indonesia 65 → 57 (Bab. 05, Wol. 1).', href: 'https://freedomhouse.org/' },
			{ id: 'vdem', label: 'V-Dem Institute', note: 'V-Dem Dataset — indeks elektoral & liberal ×100, 2014–2024 (Bab. 05, Wol. 1).', href: 'https://www.v-dem.net/' },
			{ id: 'ti', label: 'Transparency International', note: 'Indeks Persepsi Korupsi (CPI) 2012–2025 — puncak 40 (2019) → 34 (2025) (Bab. 05, Wol. 2).', href: 'https://www.transparency.org/en/cpi' },
			{ id: 'rsf', label: 'Reporters Without Borders (RSF)', note: 'Indeks Kebebasan Pers Dunia 2014–2025 — 63,23 (2019) → 44,13 (2025) (Bab. 05, Wol. 3).', href: 'https://rsf.org/' },
			{ id: 'eiu', label: 'Economist Intelligence Unit (EIU)', note: 'Democracy Index — rujukan kemunduran demokrasi (Bab. 01).', href: 'https://www.eiu.com/' },
			{ id: 'bank', label: 'Bank Dunia', note: 'World Development Indicators — kemiskinan & kondisi rakyat lintas era.', href: 'https://data.worldbank.org/' }
		]
	},
	{
		id: 'pemerintah',
		title: 'Pemerintah, statistik & regulasi Indonesia',
		entries: [
			{ id: 'bps', label: 'BPS — Badan Pusat Statistik', note: 'Kemiskinan, kelas menengah, pengangguran & demografi, 2014–2026.', href: 'https://www.bps.go.id/' },
			{ id: 'kemenkeu', label: 'Kementerian Keuangan RI', note: 'APBN & rasio pajak terhadap PDB 1969–2025 (Bab. 07, Wol. 6).', href: 'https://www.kemenkeu.go.id/' },
			{ id: 'setneg', label: 'Sekretariat Negara RI', note: 'Masa jabatan delapan presiden (Bab. 05, Wol. 4; Bab. 04).', href: 'https://www.setneg.go.id/' },
			{ id: 'ikpi', label: 'IKPI — Indikator Kebijakan Perpajakan', note: 'Data rasio pajak terhadap PDB (Bab. 07).' },
			{ id: 'uu', label: 'Regulasi perpajakan', note: 'UU No. 8/1983 (PPN), UU PPh 1983–2008, UU HPP No. 7/2021 — tabel tarif Bab. 07.', href: 'https://peraturan.bpk.go.id/' },
			{ id: 'icw', label: 'Indonesia Corruption Watch (ICW)', note: 'Politik dinasti Pilkada 2024 — ~27% kandidat (Pola 3).', href: 'https://antikorupsi.org/' }
		]
	},
	{
		id: 'survei',
		title: 'Survei & jajak pendapat',
		entries: [
			{ id: 'indobarometer', label: 'Indo Barometer', note: 'Survei retrospektif kepuasan publik per presiden, 2018 (Bab. 06, Wol. 5).' },
			{ id: 'lsi', label: 'LSI — Lingkaran Survei Indonesia', note: 'Approval rating presiden (Bab. 06, Wol. 5).' },
			{ id: 'indikator', label: 'Indikator Politik Indonesia', note: 'Approval rating presiden (Bab. 06, Wol. 5).' }
		]
	},
	{
		id: 'arsip',
		title: 'Arsip berita investigasi',
		entries: [
			{
				id: 'narkoba-arsip',
				label: 'Catatan berita narkotika — 1.117 pemberitaan, 2011–2026',
				note: 'detikNews · Kompas · ANTARA · BBC Indonesia · CNN Indonesia · Tempo · BNN.go.id, dikumpulkan lewat Google & Bing News RSS. Metodologi:',
				href: '#narkotika-pola',
				hrefLabel: 'Bab. 08'
			},
			{
				id: 'pembunuhan-arsip',
				label: 'Catatan berita pembunuhan — 2.587+ pemberitaan, 2002–2026',
				note: 'Berita media yang sama (+ Tribunnews); arsip terpotong, angka riil bisa lebih tinggi. Metodologi:',
				href: '#pembunuhan-pola',
				hrefLabel: 'Bab. 09'
			}
		]
	},
	{
		id: 'kredit',
		title: 'Kredit visual & tipografi',
		entries: [
			{ id: 'commons', label: 'Wikimedia Commons', note: 'Potret delapan presiden (domain publik / CC). Tabel lengkap:', href: '#kredit-potret', hrefLabel: 'kredit potret' },
			{ id: 'huruf', label: 'Newsreader · Schibsted Grotesk · JetBrains Mono', note: 'Huruf edisi ini, disajikan lewat Google Fonts.', href: 'https://fonts.google.com/' }
		]
	}
];
