<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, AXIS_BORDER, TICKS, AXIS_TITLE } from '#lib/chartRegister';
	import { TAX_LABELS, TAX_DATA, TAX_NOTES } from '#lib/data/tax';

	const data = {
		labels: TAX_LABELS,
		datasets: [
			{
				label: 'Rasio Pajak terhadap PDB (%)',
				data: TAX_DATA,
				borderColor: '#8c1a1a',
				backgroundColor: 'rgba(140,26,26,.08)',
				tension: 0.28,
				pointRadius: 2.5,
				pointHoverRadius: 4,
				pointBackgroundColor: '#8c1a1a',
				borderWidth: 2,
				fill: true
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
					label: (ctx: any) => ctx.raw + '% PDB',
					afterLabel: (ctx: any) => TAX_NOTES[ctx.dataIndex] ?? ''
				}
			}
		},
		scales: {
			x: {
				border: AXIS_BORDER,
				grid: { display: false },
				ticks: { ...TICKS, maxRotation: 0, autoSkip: true, maxTicksLimit: 8 }
			},
			y: {
				border: AXIS_BORDER,
				grid: GRID,
				min: 0,
				max: 25,
				ticks: { ...TICKS, maxTicksLimit: 6, callback: (v: any) => v + '%' },
				title: { display: true, text: '% PDB', ...AXIS_TITLE }
			}
		}
	} as const;
</script>

<div class="chart-box tall"><Line {data} {options} /></div>
