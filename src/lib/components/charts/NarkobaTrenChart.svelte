<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, GRID_NONE } from '#lib/chartRegister';
	import { NARKOTIKA } from '#lib/data/narkotika';

	const data = {
		labels: NARKOTIKA.trendLabels,
		datasets: [
			{
				label: 'Jumlah catatan berita',
				data: NARKOTIKA.trendData,
				backgroundColor: (ctx: any) => {
					const v = ctx.raw;
					if (v >= 150) return 'rgba(255,74,31,.95)';
					if (v >= 50) return 'rgba(255,74,31,.7)';
					if (v >= 25) return 'rgba(245,158,11,.7)';
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
			x: { grid: GRID_NONE },
			y: { grid: GRID, beginAtZero: true, title: { display: true, text: 'Jumlah berita', font: { size: 9 } } }
		}
	} as const;
</script>

<div class="chart-box chart-box--trend"><Bar {data} {options} /></div>
