<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID } from '#lib/chartRegister';
	import { PERS } from '#lib/data/trends';

	const data = {
		labels: PERS.labels,
		datasets: [
			{
				label: 'Kebebasan Pers (RSF)',
				data: PERS.data,
				borderColor: '#ff4a1f',
				backgroundColor: 'rgba(255,74,31,.12)',
				pointRadius: 4,
				pointBackgroundColor: '#ff4a1f',
				borderWidth: 2,
				tension: 0.3,
				fill: true
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1600, easing: 'easeOutQuart' },
		plugins: { legend: { display: false }, tooltip: COMMON_TOOLTIP },
		scales: {
			x: { grid: GRID },
			y: { grid: GRID, min: 35, max: 70 }
		}
	} as const;
</script>

<div class="chart-box"><Line {data} {options} /></div>
