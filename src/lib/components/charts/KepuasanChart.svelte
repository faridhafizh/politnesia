<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, GRID_NONE } from '#lib/chartRegister';
	import { KEPUASAN } from '#lib/data/trends';

	const data = {
		labels: KEPUASAN.labels,
		datasets: [
			{
				label: 'Tingkat Kepuasan / Penilaian Publik (%)',
				data: KEPUASAN.data,
				backgroundColor: KEPUASAN.colors,
				borderColor: KEPUASAN.borders,
				borderWidth: 1,
				borderRadius: 4
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1600, easing: 'easeOutQuart' },
		plugins: {
			legend: { display: false },
			tooltip: {
				...COMMON_TOOLTIP,
				callbacks: {
					label: (ctx: any) => ctx.raw + '%',
					afterLabel: (ctx: any) => KEPUASAN.notes[ctx.dataIndex] ?? ''
				}
			}
		},
		scales: {
			x: { grid: GRID_NONE, ticks: { font: { size: 9 }, maxRotation: 0 } },
			y: { grid: GRID, min: 0, max: 100, title: { display: true, text: 'Persen (%)', font: { size: 9 } } }
		}
	} as const;
</script>

<div class="chart-box chart-box--sm"><Bar {data} {options} /></div>
