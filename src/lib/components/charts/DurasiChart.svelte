<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, GRID_NONE } from '#lib/chartRegister';
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
				borderRadius: 3
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1400, easing: 'easeOutQuart' },
		plugins: {
			legend: { display: false },
			tooltip: { ...COMMON_TOOLTIP, callbacks: { label: (c: any) => c.raw + ' tahun' } }
		},
		scales: {
			x: { grid: GRID_NONE },
			y: { grid: GRID, beginAtZero: true }
		}
	} as const;
</script>

<div class="chart-box"><Bar {data} {options} /></div>
