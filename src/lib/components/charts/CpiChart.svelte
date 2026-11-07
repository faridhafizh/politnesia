<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, AXIS_BORDER, TICKS } from '#lib/chartRegister';
	import { CPI } from '#lib/data/trends';

	const data = {
		labels: CPI.labels,
		datasets: [
			{
				label: 'Skor CPI',
				data: CPI.data,
				backgroundColor: (ctx: any) => {
					const v = ctx.raw;
					if (v >= 38) return 'rgba(168,91,19,.8)';
					if (v >= 35) return 'rgba(140,26,26,.78)';
					return 'rgba(140,26,26,.88)';
				},
				borderRadius: 2,
				maxBarThickness: 40
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1000, easing: 'easeOutQuart' },
		layout: { padding: { top: 4, right: 8, bottom: 0, left: 0 } },
		plugins: { legend: { display: false }, tooltip: COMMON_TOOLTIP },
		scales: {
			x: { border: AXIS_BORDER, grid: { display: false }, ticks: TICKS },
			y: { border: AXIS_BORDER, grid: GRID, min: 0, max: 50, ticks: { ...TICKS, maxTicksLimit: 5 } }
		}
	} as const;
</script>

<div class="chart-box"><Bar {data} {options} /></div>
