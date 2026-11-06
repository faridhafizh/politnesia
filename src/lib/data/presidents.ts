export type Era = 'lama' | 'baru' | 'reformasi';

export interface Bar {
	label: string;
	value: string;
	fill: number; // percent of the bar, purely visual
}

export interface President {
	id: string;
	name: string;
	cardYears: string;
	tableYears: string;
	era: Era;
	eraLabel: string;
	img: string;
	alt: string;
	character: string;
	condition: string;
	bars?: Bar[]; // only the focus panels (Soekarno, Soeharto, Jokowi, Prabowo)
	note?: string;
}

export const PRESIDENTS: President[] = [
	{
		id: 'soekarno',
		name: 'Soekarno',
		cardYears: '1945–1966',
		tableYears: '1945–1967',
		era: 'lama',
		eraLabel: 'Orde Lama',
		img: '/img/presidents/soekarno.jpg',
		alt: 'Potret resmi Soekarno',
		character: 'Demokrasi Terpimpin; Nasakom.',
		condition: 'Hiperinflasi 650%; kemiskinan luas.',
		bars: [
			{ label: 'Inflasi puncak (1965)', value: 'hingga 650%', fill: 100 },
			{ label: 'Pendapatan per kapita (1965)', value: 'di bawah 1940', fill: 30 }
		],
		note: 'Kemiskinan luas, ketidakstabilan sosial, kesenjangan tajam.'
	},
	{
		id: 'soeharto',
		name: 'Soeharto',
		cardYears: '1966–1998',
		tableYears: '1967–1998',
		era: 'baru',
		eraLabel: 'Orde Baru',
		img: '/img/presidents/soeharto.jpg',
		alt: 'Potret resmi Soeharto, 1998',
		character: 'Otoritarianisme elektoral; Dwifungsi ABRI.',
		condition: 'Kemiskinan 47%→15%, lalu 24,2% (1998).',
		bars: [
			{ label: 'Kemiskinan 1971 → 1995', value: '47% → 15%', fill: 32 },
			{ label: 'Kemiskinan 1996 → 1998', value: '17,7% → 24,2%', fill: 52 }
		],
		note: 'Stabilitas dan pertumbuhan menjadi legitimasi; KKN masif.'
	},
	{
		id: 'habibie',
		name: 'B.J. Habibie',
		cardYears: '1998–1999',
		tableYears: '1998–1999',
		era: 'reformasi',
		eraLabel: 'Reformasi',
		img: '/img/presidents/habibie.jpg',
		alt: 'Potret resmi B.J. Habibie',
		character: 'Kebebasan pers; pemilu demokratis.',
		condition: 'Transisi krisis.',
		note: 'Pendobrak awal Reformasi: kebebasan pers, pemilu demokratis, amandemen UUD.'
	},
	{
		id: 'gusdur',
		name: 'Gus Dur',
		cardYears: '1999–2001',
		tableYears: '1999–2001',
		era: 'reformasi',
		eraLabel: 'Reformasi',
		img: '/img/presidents/gusdur.jpg',
		alt: 'Potret resmi Abdurrahman Wahid',
		character: 'Pluralisme; konflik DPR.',
		condition: 'Stabilitas rentan.',
		note: 'Pluralisme dan toleransi; konflik dengan DPR berujung impeachment.'
	},
	{
		id: 'megawati',
		name: 'Megawati',
		cardYears: '2001–2004',
		tableYears: '2001–2004',
		era: 'reformasi',
		eraLabel: 'Reformasi',
		img: '/img/presidents/megawati.jpg',
		alt: 'Potret resmi Megawati Sukarnoputri',
		character: 'Pilpres langsung pertama.',
		condition: 'Pemulihan bertahap.',
		note: 'Presiden perempuan pertama; pilpres langsung pertama 2004.'
	},
	{
		id: 'sby',
		name: 'SBY',
		cardYears: '2004–2014',
		tableYears: '2004–2014',
		era: 'reformasi',
		eraLabel: 'Reformasi',
		img: '/img/presidents/sby.jpg',
		alt: 'Potret resmi Susilo Bambang Yudhoyono, 2004',
		character: 'Pilkada langsung; damai Aceh.',
		condition: 'Kemiskinan 11,4%; Gini naik 0,41.',
		note: 'Pilkada langsung, penguatan KPK, damai Aceh 2005.'
	},
	{
		id: 'jokowi',
		name: 'Jokowi',
		cardYears: '2014–2024',
		tableYears: '2014–2024',
		era: 'reformasi',
		eraLabel: 'Reformasi',
		img: '/img/presidents/jokowi.jpg',
		alt: 'Potret resmi Joko Widodo, 2019',
		character: 'Kartelisasi; koalisi besar.',
		condition: 'Kemiskinan 9,36%; 21,35 juta tergerus.',
		bars: [
			{ label: 'Kemiskinan 2014 → 2023', value: '11,25% → 9,36%', fill: 28 },
			{ label: 'Kelas menengah tergerus', value: '+21,35 juta', fill: 70 }
		],
		note: 'Kartelisasi: koalisi besar, oposisi melemah, politik dinasti menonjol.'
	},
	{
		id: 'prabowo',
		name: 'Prabowo',
		cardYears: '2024–sekarang',
		tableYears: '2024–sekarang',
		era: 'reformasi',
		eraLabel: 'Reformasi',
		img: '/img/presidents/prabowo.jpg',
		alt: 'Potret resmi Prabowo Subianto, 2024',
		character: 'KIM Plus 81%; oposisi nyaris tidak ada.',
		condition: 'Pengangguran 4,65%; 10 juta turun kelas.',
		bars: [
			{ label: 'Pengangguran (Mei 2026)', value: '4,65%', fill: 18 },
			{ label: 'Kemiskinan (Maret 2026)', value: '8,07%', fill: 25 }
		],
		note: 'KIM Plus 81% kursi DPR; oposisi nyaris tidak ada; MBG.'
	}
];
