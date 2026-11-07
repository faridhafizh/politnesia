export const POLA = [
	{ n: 1, title: 'Oligarki Beradaptasi.', body: 'Dari terpusat di bawah Soeharto menjadi jaringan politik uang dan patronase.' },
	{ n: 2, title: 'Kartel Partai.', body: 'Koalisi pasca-pemilu untuk bagi kekuasaan, bukan kompetisi ideologis.' },
	{ n: 3, title: 'Politik Dinasti.', body: 'Sekitar 27% kandidat Pilkada 2024 terindikasi dinasti (ICW).' },
	{ n: 4, title: 'Korupsi Tiga Rumpun.', body: 'Eksekutif, legislatif, yudikatif; CPI stagnan di level rendah.' },
	{ n: 5, title: 'Penegakan Hukum Selektif.', body: 'Hukum melindungi kawan, menghukum lawan; checks and balances melemah karena oposisi tidak efektif.' }
];

export const RINGKASAN = {
	head: 'Ringkasan eksekutif',
	lead: 'Tiga orde dan delapan presiden telah berganti. Reformasi membuka demokrasi elektoral, tetapi sejak 2014 terjadi pembalikan: kebebasan sipil menyusut dan oposisi melembaga. Dari 1.117 catatan berita narkoba (2011–2026) dan 2.587+ catatan pembunuhan (2002–2026) terlihat pola yang sama — pengungkapan meningkat, kekerasan terus bereproduksi.',
	stats: [
		{ value: '8', label: 'Presiden', note: 'Tiga orde, delapan kepemimpinan', tone: 'ink' },
		{ value: '~9,3%', label: 'Rasio pajak 2025', note: 'Turun dari ~20% pada 1980-an', tone: 'accent' },
		{ value: '1.117', label: 'Catatan narkoba', note: '2011–2026, berbasis berita', tone: 'ink' },
		{ value: '2.587+', label: 'Catatan pembunuhan', note: '2002–2026, berbasis berita', tone: 'accent' }
	] as Array<{ value: string; label: string; note: string; tone: 'ink' | 'accent' | 'amber' }>
};

export const KESIMPULAN = [
	'Ada perbaikan prosedural, tetapi tidak ada konsolidasi struktural. Pemilu rutin dan kebebasan pers adalah capaian, tetapi setiap transisi kekuasaan justru memperkuat pola lama: elite capture, politik transaksional, dan lemahnya akuntabilitas.',
	'Kondisi rakyat mencerminkan pola itu: dari hiperinflasi Orde Lama, krisis 1998, hingga tekanan daya beli hari ini. <strong>Rasio pajak justru menurun</strong> dalam dua dekade terakhir—dari ~20% PDB pada 1980-an menjadi ~10% pada 2024 dan ~9,3% pada 2025—mempersempit ruang fiskal negara untuk melayani rakyat.',
	'Dari 1.117 catatan berita narkoba (2011–2026) dan 2.587+ catatan pembunuhan (2002–2026), pola yang sama terlihat: pengungkapan meningkat, tetapi pasar dan kekerasan tidak surut. Lapas menjadi pusat kendali narkoba, modus baru terus muncul (tembakau gorila → online → vape), jaringan internasional beradaptasi, sementara pembunuhan terus bereproduksi dari relasi intim hingga jalanan. <strong>Yang kurang bukan aparat yang berani, melainkan reformasi struktural yang membuat kejahatan tidak lagi menguntungkan.</strong>'
];

export const CREDITS = [
	{ name: 'Soekarno — Presiden Sukarno', source: 'Wikimedia Commons', file: 'File:Presiden Sukarno.jpg', license: 'Public domain' },
	{ name: 'Soeharto — President Suharto, 1998', source: 'id.wikipedia.org', file: 'File:President Suharto, 1998.jpg', license: 'Tidak tercatat' },
	{ name: 'B.J. Habibie — official portrait', source: 'Wikimedia Commons', file: 'File:Bacharuddin Jusuf Habibie official portrait.jpg', license: 'Public domain' },
	{ name: 'Gus Dur — Abdurrahman Wahid', source: 'Wikimedia Commons', file: 'File:Gusdur.jpg', license: 'Public domain' },
	{ name: 'Megawati — official portrait', source: 'Wikimedia Commons', file: 'File:President Megawati Sukarnoputri - Indonesia.jpg', license: 'Public domain' },
	{ name: 'SBY — official presidential portrait (2004)', source: 'Wikimedia Commons', file: 'File:Susilo Bambang Yudhoyono, official presidential portrait (2004).jpg', license: 'Public domain' },
	{ name: 'Jokowi — official portrait (2019)', source: 'Wikimedia Commons', file: 'File:Joko Widodo 2019 official portrait.jpg', license: 'Public domain' },
	{ name: 'Prabowo — official portrait (2024)', source: 'Wikimedia Commons', file: 'File:Prabowo Subianto 2024 official portrait.jpg', license: 'Public domain' }
];

export const SOURCES_LINE =
	'BANK DUNIA, BPS, EIU, FREEDOM HOUSE, V-DEM, RSF, KEMENKEU, IKPI, INDO BAROMETER, LSI, INDIKATOR POLITIK, WIKIMEDIA COMMONS, 1.117 CATATAN BERITA NARKOBA, 2.587+ CATATAN BERITA PEMBUNUHAN';

export const ISSUE_CONTENT = [
	{ no: '01', title: 'Ringkasan eksekutif', href: '#ringkasan', range: '1945–2026' },
	{ no: '02', title: 'Orde Lama & Orde Baru', href: '#orde', range: '1945–1998' },
	{ no: '03', title: 'Reformasi & Kartelisasi', href: '#reformasi', range: '1998–2024' },
	{ no: '04', title: 'Histori presiden', href: '#presiden', range: 'Delapan presiden' },
	{ no: '05', title: 'Kemunduran demokrasi', href: '#data', range: '2014–2025' },
	{ no: '06', title: 'Pemilu & kepuasan publik', href: '#pemilu', range: '1955–2026' },
	{ no: '07', title: 'Perpajakan', href: '#pajak', range: '1969–2025' },
	{ no: '08', title: 'Narkotika', href: '#narkotika', range: '2011–2026' },
	{ no: '09', title: 'Pembunuhan', href: '#pembunuhan', range: '2002–2026' },
	{ no: '10', title: 'Kesimpulan — lima pola', href: '#kesimpulan', range: 'Penutup berkas' }
] as const;
