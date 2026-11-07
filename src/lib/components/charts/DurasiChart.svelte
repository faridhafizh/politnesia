<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, AXIS_BORDER, TICKS } from '#lib/chartRegister';
	import { DURASI } from '#lib/data/trends';

	const data = {
		labels: DURASI.labels,
		datasets: [
			{
				label: 'Durasi (tahun)',
				data: DURASI.data,
				backgroundColor: DURASI.colors,
				borderColor: DURASI.borders,
				borderWidth: 1,
				borderRadius: 2,
				maxBarThickness: 44
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1000, easing: 'easeOutQuart' },
		layout: { padding: { top: 4, right: 8, bottom: 0, left: 0 } },
		plugins: {
			legend: { display: false },
			tooltip: { ...COMMON_TOOLTIP, callbacks: { label: (c: any) => c.raw + ' tahun' } }
		},
		scales: {
			x: { border: AXIS_BORDER, grid: { display: false }, ticks: TICKS },
			y: {
				border: AXIS_BORDER,
				grid: GRID,
				beginAtZero: true,
				ticks: { ...TICKS, maxTicksLimit: 5, callback: (v: any) => v + ' th' }
			}
		}
	} as const;
</script>

<div class="chart-box"><Bar {data} {options} /></div>
