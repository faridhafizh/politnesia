export const TAX_LABELS = ['1969', '1972', '1980', '1981', '1984', '1990', '1995', '1998', '2000', '2003', '2007', '2012', '2014', '2019', '2020', '2022', '2023', '2024', '2025'];
export const TAX_DATA = [6.3, 7.33, 6.7, 22.0, 5.25, 6.19, 8.2, 6.05, 8.3, 12.0, 13.31, 9.7, 13.0, 9.8, 8.33, 11.6, 10.3, 10.07, 9.31];
export const TAX_NOTES: Record<number, string> = {
	3: 'Puncak era minyak (1981)',
	4: 'Reformasi pajak 1983; definisi berubah',
	9: 'Pemulihan pasca-krisis',
	14: 'Pandemi COVID-19',
	18: 'Estimasi/realisasi awal 2025'
};

export const TAX_TAKEAWAYS = [
	{ strong: 'Puncak 1980-an:', text: ' ~20–22% PDB, ditopang minyak dan reformasi pajak 1983.' },
	{ strong: 'Tren menurun:', text: ' ~12% → ~10% dalam satu dekade terakhir, jauh di bawah IMF (15%).' },
	{ strong: '2025:', text: ' ~9,3%, level terendah dalam beberapa dekade.' }
];

export const PPN_ROWS = [
	{ periode: '1984–Maret 2022', tarif: '10%', dasar: 'UU No. 8/1983', catatan: 'Tarif tunggal; menggantikan Pajak Penjualan.' },
	{ periode: 'April 2022–Des 2024', tarif: '11%', dasar: 'UU HPP (No. 7/2021)', catatan: 'Kenaikan bertahap pertama.' },
	{ periode: '2025 (direncanakan)', tarif: '12%', dasar: 'UU HPP', catatan: 'Implementasi selektif; barang non-mewah efektif ~11%.' }
];

export const PPH_ROWS = [
	{ era: 'Sebelum 1983', lapisan: '48 tarif', tertinggi: 'hingga 50%+', catatan: 'Sangat kompleks; official assessment.' },
	{ era: 'UU PPh 1983/1984', lapisan: '3 lapisan', tertinggi: '35%', catatan: 'Reformasi besar; self-assessment.' },
	{ era: 'UU PPh 1994', lapisan: '3 lapisan', tertinggi: '30%', catatan: 'Penurunan tarif.' },
	{ era: 'UU PPh 2000', lapisan: '5 lapisan', tertinggi: '35%', catatan: 'Penyesuaian lapisan.' },
	{ era: 'UU PPh 2008', lapisan: '4 lapisan', tertinggi: '30%', catatan: 'Batas lapisan 5% naik ke Rp50 juta.' },
	{ era: 'UU HPP 2021', lapisan: '5 lapisan', tertinggi: '35%', catatan: 'Lapisan 5% naik ke Rp60 juta; tambahan di atas Rp5 miliar.' }
];
