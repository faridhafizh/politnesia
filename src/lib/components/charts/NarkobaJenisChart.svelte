<script lang="ts">
	import { Doughnut } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, LEGEND_BOTTOM } from '#lib/chartRegister';
	import { NARKOTIKA } from '#lib/data/narkotika';

	const data = {
		labels: NARKOTIKA.jenisLabels,
		datasets: [
			{
				data: NARKOTIKA.jenisData,
				backgroundColor: NARKOTIKA.jenisColors,
				borderColor: '#faf7ee',
				borderWidth: 2,
				spacing: 1,
				hoverOffset: 4
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1200, easing: 'easeOutQuart' },
		cutout: '62%',
		layout: { padding: { top: 4, right: 4, bottom: 0, left: 4 } },
		plugins: {
			legend: LEGEND_BOTTOM,
			tooltip: { ...COMMON_TOOLTIP, callbacks: { label: (ctx: any) => ctx.label + ': ~' + ctx.raw + ' catatan' } }
		}
	} as const;
</script>

<div class="chart-box chart-box--sm"><Doughnut {data} {options} /></div>
