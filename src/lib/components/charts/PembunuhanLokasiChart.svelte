<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, GRID_NONE } from '#lib/chartRegister';
	import { PEMBUNUHAN } from '#lib/data/pembunuhan';

	const data = {
		labels: PEMBUNUHAN.lokasiLabels,
		datasets: [
			{
				label: 'Jumlah catatan',
				data: PEMBUNUHAN.lokasiData,
				backgroundColor: PEMBUNUHAN.lokasiColors,
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
