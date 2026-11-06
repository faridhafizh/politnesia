<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, GRID_NONE } from '#lib/chartRegister';
	import { PEMBUNUHAN } from '#lib/data/pembunuhan';

	const data = {
		labels: PEMBUNUHAN.trendLabels,
		datasets: [
			{
				label: 'Jumlah catatan berita',
				data: PEMBUNUHAN.trendData,
				backgroundColor: (ctx: any) => {
					const v = ctx.raw;
					if (v >= 400) return 'rgba(255,74,31,.95)';
					if (v >= 100) return 'rgba(255,74,31,.75)';
					if (v >= 50) return 'rgba(245,158,11,.7)';
					return 'rgba(168,162,158,.5)';
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
		animation: { duration: 1600, easing: 'easeOutQuart' },
		plugins: {
			legend: { display: false },
			tooltip: { ...COMMON_TOOLTIP, callbacks: { label: (ctx: any) => ctx.raw + ' catatan' } }
		},
		scales: {
			x: { grid: GRID_NONE, ticks: { maxRotation: 45, font: { size: 8 } } },
			y: { grid: GRID, beginAtZero: true, title: { display: true, text: 'Jumlah berita', font: { size: 9 } } }
		}
	} as const;
</script>

<div class="chart-box chart-box--trend"><Bar {data} {options} /></div>
