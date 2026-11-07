<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, AXIS_BORDER, TICKS } from '#lib/chartRegister';
	import { PERS } from '#lib/data/trends';

	const data = {
		labels: PERS.labels,
		datasets: [
			{
				label: 'Kebebasan Pers (RSF)',
				data: PERS.data,
				borderColor: '#8c1a1a',
				backgroundColor: 'rgba(140,26,26,.08)',
				pointRadius: 3,
				pointHoverRadius: 4.5,
				pointBackgroundColor: '#8c1a1a',
				borderWidth: 2,
				tension: 0.28,
				fill: true
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1200, easing: 'easeOutQuart' },
		layout: { padding: { top: 4, right: 8, bottom: 0, left: 0 } },
		plugins: { legend: { display: false }, tooltip: COMMON_TOOLTIP },
		scales: {
			x: { border: AXIS_BORDER, grid: { display: false }, ticks: TICKS },
			y: { border: AXIS_BORDER, grid: GRID, min: 35, max: 70, ticks: { ...TICKS, maxTicksLimit: 5 } }
		}
	} as const;
</script>

<div class="chart-box"><Line {data} {options} /></div>
