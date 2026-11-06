export const NARKOTIKA = {
	stats: [
		{ value: '1.117', label: 'Catatan berita', note: '2011–2026', tone: 'ink' },
		{ value: '2 Ton', label: 'Sabu terbesar', note: 'Kepri, Mei 2025', tone: 'accent' },
		{ value: '~15%', label: 'Dari lapas', note: 'Dikendalikan napi', tone: 'amber' },
		{ value: '2026', label: 'Puncak berita', note: 'Vape & laboratorium', tone: 'ink' }
	] as Array<{ value: string; label: string; note: string; tone: 'ink' | 'accent' | 'amber' }>,
	trendLabels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
	trendData: [2, 2, 2, 1, 12, 8, 40, 22, 28, 60, 55, 58, 35, 32, 95, 220],
	jenisLabels: ['Narkoba (generik)', 'Sabu', 'Ganja', 'Ekstasi', 'Tembakau gorila', 'Vape narkoba', 'Kokain', 'Heroin', 'Ketamine', 'Lainnya'],
	jenisData: [380, 355, 105, 85, 55, 28, 22, 10, 8, 20],
	jenisColors: ['rgba(120,113,108,.8)', 'rgba(255,74,31,.9)', 'rgba(22,163,74,.8)', 'rgba(245,158,11,.8)', 'rgba(168,85,247,.8)', 'rgba(14,165,233,.8)', 'rgba(236,72,153,.8)', 'rgba(180,83,9,.8)', 'rgba(20,184,166,.8)', 'rgba(87,83,78,.6)'],
	lokasiLabels: ['Jakarta', 'Sumatera Utara', 'Kepulauan Riau', 'Kalimantan Selatan', 'Aceh', 'Jawa Timur', 'Papua', 'Bali'],
	lokasiData: [250, 140, 110, 100, 85, 80, 55, 30],
	lokasiColors: ['rgba(255,74,31,.85)', 'rgba(255,74,31,.7)', 'rgba(255,74,31,.6)', 'rgba(245,158,11,.7)', 'rgba(245,158,11,.6)', 'rgba(168,162,158,.6)', 'rgba(168,162,158,.5)', 'rgba(120,113,108,.5)']
};

export const NARKOTIKA_TABLE = [
	{ tahun: '2025', lokasi: 'Kepulauan Riau', jenis: 'Sabu', jumlah: '2 ton', ket: 'Terbesar sepanjang sejarah; BNN-Polri-Bea Cukai.' },
	{ tahun: '2026', lokasi: 'Natuna', jenis: 'Ketamine', jumlah: '1,3 ton', ket: 'Operasi gabungan BNN-TNI AL.' },
	{ tahun: '2026', lokasi: 'Aceh', jenis: 'Sabu (lab)', jumlah: '1,2 ton', ket: 'Laboratorium gelap; 11 tersangka.' },
	{ tahun: '2026', lokasi: 'Belawan', jenis: 'Ketamine', jumlah: '1,16 ton', ket: 'Bareskrim-BNN-Bea Cukai; WNA Taiwan terlibat.' },
	{ tahun: '2024', lokasi: '—', jenis: 'Sabu', jumlah: '710 kg', ket: 'BNN; 618 kasus sepanjang 2024.' },
	{ tahun: '2021', lokasi: '—', jenis: 'Sabu', jumlah: '581 kg', ket: 'Jaringan internasional.' },
	{ tahun: '2021', lokasi: 'Kepulauan Seribu', jenis: 'Sabu', jumlah: '436 kg', ket: 'WNA dan napi di balik penyelundupan.' },
	{ tahun: '2023', lokasi: '—', jenis: 'Sabu', jumlah: '309 kg', ket: 'Jaringan Golden Crescent.' },
	{ tahun: '2021', lokasi: 'Dumai–Madura', jenis: 'Sabu', jumlah: '212 kg', ket: '19.700 butir ekstasi.' },
	{ tahun: '2022', lokasi: 'Selat Sunda', jenis: 'Kokain', jumlah: '179 kg', ket: 'TNI AL; jaringan Amerika Latin.' }
];

export const NARKOTIKA_PATTERNS = [
	{ title: 'Lapas sebagai Pusat Kendali.', body: 'Sekitar 15% catatan menunjukkan peredaran narkoba dikendalikan dari dalam lapas—melibatkan napi, sipir, hingga oknum pegawai. Contoh: Lapas Tanjung Gusta, Lapas Salemba, Lapas Balikpapan.' },
	{ title: 'Siklus Modus Baru.', body: 'Tembakau gorila (2017), jual-beli online (2020–2021), vape narkoba & etomidate (2025–2026). Setiap kali aparat menutup satu jalur, modus baru muncul.' },
	{ title: 'Jaringan Internasional yang Beradaptasi.', body: 'Dari Segitiga Emas (Myanmar-Laos-Thailand) hingga Amerika Latin (kokain) dan Malaysia (sabu). Pengungkapan besar 2025–2026 menunjukkan jaringan masih aktif.' },
	{ title: 'Keterlibatan Aparat dan Politik.', body: 'Oknum polisi, pegawai lapas, hingga anggota DPRD tersangkut kasus narkoba. Ini melemahkan kepercayaan publik dan menunjukkan korupsi sebagai akar masalah.' },
	{ title: 'Pengungkapan Meningkat, Tetapi Pasar Tak Surut.', body: 'Dari 2011 hingga 2026, jumlah pengungkapan naik, tetapi prevalensi pengguna dan peredaran tetap tinggi. Ini menunjukkan pendekatan represif belum menyentuh akar struktural.' }
];

export const NARKOTIKA_METHODOLOGY = {
	source: '1.117 catatan berita dari berbagai media (detikNews, Kompas, ANTARA, BBC, BNN.go.id, CNN Indonesia, Tempo, dll.) yang dikumpulkan melalui Google News RSS dan Bing News RSS (2011–2026).',
	classification: '"Historis" merujuk pada artikel yang membahas sejarah kebijakan narkotika; "Modern" merujuk pada pemberitaan kasus kontemporer. Grafik tren menggunakan catatan modern.',
	limits: 'Data berbasis pemberitaan media, bukan statistik resmi BNN. Angka pengungkapan mencerminkan yang dilaporkan media, bukan total kejadian sebenarnya. Beberapa catatan memiliki jumlah terdeteksi yang tidak lengkap.'
};
