<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, AXIS_BORDER, TICKS, AXIS_TITLE } from '#lib/chartRegister';
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
				borderRadius: 2,
				maxBarThickness: 52
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
			tooltip: {
				...COMMON_TOOLTIP,
				callbacks: {
					label: (ctx: any) => ctx.raw + '%',
					afterLabel: (ctx: any) => KEPUASAN.notes[ctx.dataIndex] ?? ''
				}
			}
		},
		scales: {
			x: { border: AXIS_BORDER, grid: { display: false }, ticks: { ...TICKS, maxRotation: 0 } },
			y: {
				border: AXIS_BORDER,
				grid: GRID,
				min: 0,
				max: 100,
				ticks: { ...TICKS, maxTicksLimit: 5, callback: (v: any) => v + '%' },
				title: { display: true, text: 'Persen (%)', ...AXIS_TITLE }
			}
		}
	} as const;
</script>

<div class="chart-box chart-box--sm"><Bar {data} {options} /></div>
