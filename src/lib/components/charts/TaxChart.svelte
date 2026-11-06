<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID } from '#lib/chartRegister';
	import { TAX_LABELS, TAX_DATA, TAX_NOTES } from '#lib/data/tax';

	const data = {
		labels: TAX_LABELS,
		datasets: [
			{
				label: 'Rasio Pajak terhadap PDB (%)',
				data: TAX_DATA,
				borderColor: '#ff4a1f',
				backgroundColor: 'rgba(255,74,31,.12)',
				tension: 0.25,
				pointRadius: 3,
				pointBackgroundColor: '#ff4a1f',
				borderWidth: 2,
				fill: true
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 2000, easing: 'easeOutQuart' },
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
			x: { grid: GRID, ticks: { maxRotation: 45, font: { size: 8 } } },
			y: { grid: GRID, min: 0, max: 25, title: { display: true, text: '% dari PDB', font: { size: 9 } } }
		}
	} as const;
</script>

<div class="chart-box tall"><Line {data} {options} /></div>
