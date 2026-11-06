<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID } from '#lib/chartRegister';
	import { DEMOKRASI } from '#lib/data/trends';

	const data = { labels: DEMOKRASI.labels, datasets: DEMOKRASI.series };
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1600, easing: 'easeOutQuart' },
		interaction: { mode: 'index', intersect: false },
		plugins: {
			legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10, font: { size: 9 } } },
			tooltip: COMMON_TOOLTIP
		},
		scales: {
			x: { grid: GRID },
			y: { grid: GRID, min: 20, max: 80 }
		}
	} as const;
</script>

<div class="chart-box"><Line {data} {options} /></div>
