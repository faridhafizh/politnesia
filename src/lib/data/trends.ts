export const DEMOKRASI = {
	labels: ['2014', '2016', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
	series: [
		{ label: 'Freedom House', data: [65, 63, 62, 62, 61, 59, 59, 57, 57], borderColor: '#ff4a1f', backgroundColor: 'rgba(255,74,31,.12)', borderWidth: 2, pointRadius: 3, tension: 0.3 },
		{ label: 'V-Dem Elektoral (x100)', data: [67, 65, 62, 60, 58, 56, 55, 54, 54], borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,.12)', borderWidth: 2, pointRadius: 3, tension: 0.3 },
		{ label: 'V-Dem Liberal (x100)', data: [52, 50, 48, 46, 44, 42, 40, 38, 36], borderColor: '#9c9ea3', backgroundColor: 'rgba(156,158,163,.12)', borderWidth: 2, pointRadius: 3, tension: 0.3, borderDash: [5, 3] }
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
	colors: ['rgba(180,83,9,.75)', 'rgba(22,101,52,.75)', 'rgba(59,130,246,.75)', 'rgba(59,130,246,.75)', 'rgba(59,130,246,.75)', 'rgba(59,130,246,.75)', 'rgba(59,130,246,.75)', 'rgba(59,130,246,.75)'],
	borders: ['#f59e0b', '#4ade80', '#93c5fd', '#93c5fd', '#93c5fd', '#93c5fd', '#93c5fd', '#93c5fd']
};

export const KEPUASAN = {
	labels: ['Soekarno\n(retrospektif)', 'Soeharto\n(retrospektif)', 'Habibie\n(retrospektif)', 'SBY\n(approval)', 'Jokowi\n(approval)', 'Prabowo\n(approval)'],
	data: [21.3, 32.9, 3.5, 80.0, 82.0, 81.2],
	colors: ['rgba(180,83,9,.75)', 'rgba(22,101,52,.75)', 'rgba(59,130,246,.75)', 'rgba(59,130,246,.75)', 'rgba(59,130,246,.75)', 'rgba(59,130,246,.75)'],
	borders: ['#f59e0b', '#4ade80', '#93c5fd', '#93c5fd', '#93c5fd', '#93c5fd'],
	notes: [
		'Survei retrospektif Indo Barometer 2018',
		'Survei retrospektif Indo Barometer 2018',
		'Survei retrospektif Indo Barometer 2018',
		'Approval tertinggi (Nov 2004)',
		'Approval tertinggi (Jul 2024)',
		'Approval tertinggi (Nov 2025)'
	]
};
