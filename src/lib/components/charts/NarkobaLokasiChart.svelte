<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, GRID_NONE } from '#lib/chartRegister';
	import { NARKOTIKA } from '#lib/data/narkotika';

	const data = {
		labels: NARKOTIKA.lokasiLabels,
		datasets: [
			{
				label: 'Jumlah catatan',
				data: NARKOTIKA.lokasiData,
				backgroundColor: NARKOTIKA.lokasiColors,
				borderColor: '#ff4a1f',
				borderWidth: 1,
				borderRadius: 3
			}
		]
	};
	const options = {
		indexAxis: 'y' as const,
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1600, easing: 'easeOutQuart' },
		plugins: {
			legend: { display: false },
			tooltip: { ...COMMON_TOOLTIP, callbacks: { label: (ctx: any) => '~' + ctx.raw + ' catatan' } }
		},
		scales: {
			x: { grid: GRID, beginAtZero: true },
			y: { grid: GRID_NONE }
		}
	} as const;
</script>

<div class="chart-box chart-box--sm"><Bar {data} {options} /></div>
