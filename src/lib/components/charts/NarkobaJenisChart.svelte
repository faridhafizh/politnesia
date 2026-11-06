<script lang="ts">
	import { Doughnut } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP } from '#lib/chartRegister';
	import { NARKOTIKA } from '#lib/data/narkotika';

	const data = {
		labels: NARKOTIKA.jenisLabels,
		datasets: [
			{
				data: NARKOTIKA.jenisData,
				backgroundColor: NARKOTIKA.jenisColors,
				borderColor: '#18191b',
				borderWidth: 2
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1600, easing: 'easeOutQuart' },
		plugins: {
			legend: { position: 'right', labels: { boxWidth: 10, padding: 8, font: { size: 9 } } },
			tooltip: { ...COMMON_TOOLTIP, callbacks: { label: (ctx: any) => ctx.label + ': ~' + ctx.raw + ' catatan' } }
		}
	} as const;
</script>

<div class="chart-box chart-box--sm"><Doughnut {data} {options} /></div>
