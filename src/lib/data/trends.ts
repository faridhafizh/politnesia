// Politnesia — series colors: ochre (Orde Lama) · oxblood (Orde Baru) · slate ink (Reformasi)
export const DEMOKRASI = {
	labels: ['2014', '2016', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
	series: [
		{ label: 'Freedom House', data: [65, 63, 62, 62, 61, 59, 59, 57, 57], borderColor: '#8c1a1a', backgroundColor: 'rgba(140,26,26,.1)', borderWidth: 2.5, pointRadius: 3, tension: 0.3 },
		{ label: 'V-Dem Elektoral (x100)', data: [67, 65, 62, 60, 58, 56, 55, 54, 54], borderColor: '#a85b13', backgroundColor: 'rgba(168,91,19,.1)', borderWidth: 2, pointRadius: 3, tension: 0.3 },
		{ label: 'V-Dem Liberal (x100)', data: [52, 50, 48, 46, 44, 42, 40, 38, 36], borderColor: '#3e4a5c', backgroundColor: 'rgba(62,74,92,.1)', borderWidth: 2, pointRadius: 3, tension: 0.3, borderDash: [5, 3] }
	]
};

export const CPI = {
	labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
	data: [32, 32, 34, 36, 37, 37, 38, 40, 37, 38, 34, 34, 37, 34]
};

export const PERS = {
	labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
	data: [61.85, 59.25, 58.28, 60.07, 60.32, 63.23, 63.18, 62.6, 49.27, 54.83, 51.15, 44.13]
};

export const DURASI = {
	labels: ['Soekarno', 'Soeharto', 'Habibie', 'Gus Dur', 'Megawati', 'SBY', 'Jokowi', 'Prabowo'],
	data: [21.6, 31.2, 1.4, 1.8, 3.2, 10, 10, 2],
	colors: ['rgba(168,91,19,.85)', 'rgba(140,26,26,.85)', 'rgba(62,74,92,.8)', 'rgba(62,74,92,.8)', 'rgba(62,74,92,.8)', 'rgba(62,74,92,.8)', 'rgba(62,74,92,.8)', 'rgba(62,74,92,.8)'],
	borders: ['#a85b13', '#8c1a1a', '#3e4a5c', '#3e4a5c', '#3e4a5c', '#3e4a5c', '#3e4a5c', '#3e4a5c']
};

export const KEPUASAN = {
	labels: ['Soekarno\n(retrospektif)', 'Soeharto\n(retrospektif)', 'Habibie\n(retrospektif)', 'SBY\n(approval)', 'Jokowi\n(approval)', 'Prabowo\n(approval)'],
	data: [21.3, 32.9, 3.5, 80.0, 82.0, 81.2],
	colors: ['rgba(168,91,19,.85)', 'rgba(140,26,26,.85)', 'rgba(62,74,92,.8)', 'rgba(62,74,92,.8)', 'rgba(62,74,92,.8)', 'rgba(62,74,92,.8)'],
	borders: ['#a85b13', '#8c1a1a', '#3e4a5c', '#3e4a5c', '#3e4a5c', '#3e4a5c'],
	notes: [
		'Survei retrospektif Indo Barometer 2018',
		'Survei retrospektif Indo Barometer 2018',
		'Survei retrospektif Indo Barometer 2018',
		'Approval tertinggi (Nov 2004)',
		'Approval tertinggi (Jul 2024)',
		'Approval tertinggi (Nov 2025)'
	]
};
