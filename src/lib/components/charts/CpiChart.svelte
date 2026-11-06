<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, GRID_NONE } from '#lib/chartRegister';
	import { CPI } from '#lib/data/trends';

	const data = {
		labels: CPI.labels,
		datasets: [
			{
				label: 'Skor CPI',
				data: CPI.data,
				backgroundColor: (ctx: any) => {
					const v = ctx.raw;
					if (v >= 38) return 'rgba(245,158,11,.8)';
					if (v >= 35) return 'rgba(255,74,31,.6)';
					return 'rgba(255,74,31,.9)';
				},
				borderColor: '#ff4a1f',
				borderWidth: 1,
				borderRadius: 3
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1400, easing: 'easeOutQuart' },
		plugins: { legend: { display: false }, tooltip: COMMON_TOOLTIP },
		scales: {
			x: { grid: GRID_NONE },
			y: { grid: GRID, min: 0, max: 50 }
		}
	} as const;
</script>

<div class="chart-box"><Bar {data} {options} /></div>
