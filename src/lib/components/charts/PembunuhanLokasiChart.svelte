<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, AXIS_BORDER, TICKS } from '#lib/chartRegister';
	import { PEMBUNUHAN } from '#lib/data/pembunuhan';

	const data = {
		labels: PEMBUNUHAN.lokasiLabels,
		datasets: [
			{
				label: 'Jumlah catatan',
				data: PEMBUNUHAN.lokasiData,
				backgroundColor: PEMBUNUHAN.lokasiColors,
				borderRadius: 2,
				barThickness: 12
			}
		]
	};
	const options = {
		indexAxis: 'y' as const,
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1200, easing: 'easeOutQuart' },
		layout: { padding: { top: 4, right: 12, bottom: 0, left: 0 } },
		plugins: {
			legend: { display: false },
			tooltip: { ...COMMON_TOOLTIP, callbacks: { label: (ctx: any) => '~' + ctx.raw + ' catatan' } }
		},
		scales: {
			x: {
				border: AXIS_BORDER,
				grid: GRID,
				beginAtZero: true,
				ticks: { ...TICKS, maxTicksLimit: 5 }
			},
			y: { border: AXIS_BORDER, grid: { display: false }, ticks: { ...TICKS, padding: 4 } }
		}
	} as const;
</script>

<div class="chart-box chart-box--sm"><Bar {data} {options} /></div>
