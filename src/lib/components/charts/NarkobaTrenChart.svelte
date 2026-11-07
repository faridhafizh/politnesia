<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, AXIS_BORDER, TICKS, AXIS_TITLE } from '#lib/chartRegister';
	import { NARKOTIKA } from '#lib/data/narkotika';

	const data = {
		labels: NARKOTIKA.trendLabels,
		datasets: [
			{
				label: 'Jumlah catatan berita',
				data: NARKOTIKA.trendData,
				backgroundColor: (ctx: any) => {
					const v = ctx.raw;
					if (v >= 150) return 'rgba(140,26,26,.9)';
					if (v >= 50) return 'rgba(140,26,26,.68)';
					if (v >= 25) return 'rgba(168,91,19,.68)';
					return 'rgba(138,133,120,.45)';
				},
				borderRadius: 2,
				maxBarThickness: 36
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1200, easing: 'easeOutQuart' },
		layout: { padding: { top: 4, right: 8, bottom: 0, left: 0 } },
		plugins: {
			legend: { display: false },
			tooltip: { ...COMMON_TOOLTIP, callbacks: { label: (ctx: any) => ctx.raw + ' catatan' } }
		},
		scales: {
			x: { border: AXIS_BORDER, grid: { display: false }, ticks: TICKS },
			y: {
				border: AXIS_BORDER,
				grid: GRID,
				beginAtZero: true,
				ticks: { ...TICKS, maxTicksLimit: 5 },
				title: { display: true, text: 'Catatan', ...AXIS_TITLE }
			}
		}
	} as const;
</script>

<div class="chart-box chart-box--trend"><Bar {data} {options} /></div>
