export const PEMBUNUHAN = {
	stats: [
		{ value: '2.587+', label: 'Catatan berita', note: '2002–2026', tone: 'ink' },
		{ value: '1.151', label: 'Lonjakan 2026', note: '44% dari total', tone: 'accent' },
		{ value: '~500', label: 'Hotspot Jakarta', note: 'Paling banyak diliput', tone: 'amber' },
		{ value: '~350', label: 'Dendam & sakit hati', note: 'Motif dominan', tone: 'ink' }
	] as Array<{ value: string; label: string; note: string; tone: 'ink' | 'accent' | 'amber' }>,
	trendLabels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
	trendData: [1, 0, 0, 0, 0, 0, 2, 1, 1, 6, 8, 16, 11, 29, 28, 51, 65, 61, 78, 105, 129, 193, 214, 437, 1151],
	jenisLabels: ['Dendam', 'Narkoba', 'Mutilasi', 'Pembunuhan Berencana', 'Sakit Hati', 'Cemburu', 'Racun', 'Begal', 'Harta Warisan', 'Utang', 'Sengketa Tanah', 'Perampokan', 'Politik', 'Lainnya'],
	jenisData: [250, 180, 120, 120, 100, 70, 60, 50, 50, 40, 35, 50, 30, 200],
	jenisColors: ['#8c1a1a', '#a85b13', '#6b4a63', '#3e5a6b', '#853e4f', '#2f4d4a', '#54503f', '#46624a', '#7a3b2e', '#8a8578', '#6e6850', '#5f5a50', '#3e4a5c', '#b8b1a0'],
	lokasiLabels: ['Jakarta', 'Sumatera Utara', 'Jawa Barat', 'Jawa Timur', 'Kalimantan Selatan', 'Kepulauan Riau', 'Jawa Tengah', 'Bali', 'Aceh', 'Papua', 'Kalimantan Timur', 'Sulawesi', 'Kalimantan Barat'],
	lokasiData: [500, 250, 200, 180, 150, 150, 140, 100, 90, 80, 70, 70, 50],
	lokasiColors: ['rgba(140,26,26,.9)', 'rgba(140,26,26,.75)', 'rgba(140,26,26,.6)', 'rgba(168,91,19,.7)', 'rgba(168,91,19,.6)', 'rgba(168,91,19,.5)', 'rgba(138,133,120,.6)', 'rgba(138,133,120,.5)', 'rgba(138,133,120,.45)', 'rgba(138,133,120,.4)', 'rgba(110,104,90,.45)', 'rgba(110,104,90,.4)', 'rgba(95,90,80,.4)']
};

export const PEMBUNUHAN_TABLE = [
	{ tahun: '2023', kasus: 'Ferdy Sambo – Brigadir Yosua', lokasi: 'Jakarta', jenis: 'Pembunuhan Berencana', ket: 'Vonis mati; banding ditolak.' },
	{ tahun: '2024', kasus: 'Vina Cirebon – Pegi Setiawan', lokasi: 'Jawa Barat', jenis: 'Pembunuhan', ket: 'Pelaku buron bertahun-tahun.' },
	{ tahun: '2026', kasus: 'Dwi Bagus Martono – mutilasi istri siri & anak', lokasi: 'Madiun, Jatim', jenis: 'Mutilasi', ket: 'Jasad dibakar & digiling; tersangka ditangkap di Jombang.' },
	{ tahun: '2026', kasus: 'Bayi 20 bulan dibunuh ibu & ayah tiri', lokasi: 'Kebayoran Lama, Jakarta', jenis: 'Pembunuhan Anak', ket: 'Motif ekonomi; kedua orang tua ditahan.' },
	{ tahun: '2026', kasus: 'Sunarti – karyawati Infineon', lokasi: 'Batam', jenis: 'Pembunuhan', ket: 'Pelaku tetangga kos; ditangkap <24 jam.' },
	{ tahun: '2026', kasus: 'Donna Nuzulul Aditya – tewas terborgol', lokasi: 'Kendal, Jateng', jenis: 'Pembunuhan', ket: '3 pelaku ditangkap; 2 buron.' },
	{ tahun: '2025', kasus: 'Dumaris Sitio – lansia', lokasi: 'Pekanbaru, Riau', jenis: 'Perampokan', ket: '4 pelaku; otak menantu korban.' },
	{ tahun: '2026', kasus: 'Saepul – mutilasi pria di Depok', lokasi: 'Depok', jenis: 'Mutilasi', ket: 'Kenalan medsos; jasad dibuang 2 lokasi.' },
	{ tahun: '2026', kasus: 'Faradila Amalia Najwa – mahasiswi UMM', lokasi: 'Malang', jenis: 'Pembunuhan', ket: 'Kakak ipar (oknum polisi) jadi tersangka.' },
	{ tahun: '2026', kasus: 'Kakak-adik Rani & Ayuhana', lokasi: 'Banyuasin, Sumsel', jenis: 'Pembunuhan Berencana', ket: 'Pelaku pacar korban; buron 5 tahun.' }
];

export const PEMBUNUHAN_PATTERNS = [
	{ title: 'Femisida dan Kekerasan dalam Relasi.', body: 'Banyak korban adalah perempuan dalam relasi (istri siri, pacar, mantan). Motif cemburu, sakit hati, dan KDRT mendominasi—menunjukkan kekerasan berbasis gender yang sistemik.' },
	{ title: 'Dendam dan Sakit Hati sebagai Motif Utama.', body: 'Sekitar 250+ catatan bertema dendam dan 100+ sakit hati. Pembunuhan sering dipicu konflik sepele—utang, ejekan, warisan—yang bereskalasi karena lemahnya resolusi konflik.' },
	{ title: 'Keterlibatan Aparat.', body: 'Oknum TNI/Polri tersandung kasus pembunuhan (Ferdy Sambo, Bripka AS, oknum TNI AL, dll). Ini melemahkan kepercayaan publik dan menunjukkan impunitas di tubuh aparat.' },
	{ title: 'Mutilasi dan Penghilangan Jejak.', body: '120+ catatan bertema mutilasi. Pelaku semakin berupaya menghilangkan jejak—membakar, menggiling, mengubur, membuang ke sungai—menunjukkan perencanaan yang matang.' },
	{ title: 'Pengungkapan Cepat vs. Kasus Tak Terungkap.', body: 'Banyak kasus terungkap <24 jam (tekanan publik, CCTV), tetapi kasus lain mandek bertahun-tahun (Vina Cirebon, Munir, kasus 1965). Penegakan hukum bergantung pada sorotan media, bukan sistem.' }
];

export const PEMBUNUHAN_METHODOLOGY = {
	source: '2.587+ catatan berita dari berbagai media (detikNews, Kompas, ANTARA, BBC, CNN Indonesia, Tempo, Tribunnews, dll.) yang dikumpulkan melalui Google News RSS dan Bing News RSS (2002–2026). Data file terpotong (truncated), sehingga jumlah sebenarnya bisa lebih tinggi.',
	classification: '"Historis" merujuk pada artikel yang membahas sejarah atau peristiwa lama; "Modern" merujuk pada pemberitaan kasus kontemporer. Grafik tren menggunakan catatan modern.',
	limits: 'Data berbasis pemberitaan media, bukan statistik resmi kepolisian. Angka pengungkapan mencerminkan yang dilaporkan media, bukan total kejadian sebenarnya. Lonjakan 2026 sebagian dipengaruhi oleh metode pengumpulan data (scraping) yang menangkap lebih banyak artikel daripada tahun-tahun sebelumnya.'
};
