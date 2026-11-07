<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import '#lib/chartRegister';
	import { COMMON_TOOLTIP, GRID, AXIS_BORDER, TICKS, LEGEND_BOTTOM } from '#lib/chartRegister';
	import { DEMOKRASI } from '#lib/data/trends';

	const data = { labels: DEMOKRASI.labels, datasets: DEMOKRASI.series };
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 1200, easing: 'easeOutQuart' },
		interaction: { mode: 'index', intersect: false },
		layout: { padding: { top: 4, right: 8, bottom: 0, left: 0 } },
		plugins: {
			legend: LEGEND_BOTTOM,
			tooltip: COMMON_TOOLTIP
		},
		scales: {
			x: { border: AXIS_BORDER, grid: { display: false }, ticks: TICKS },
			y: { border: AXIS_BORDER, grid: GRID, min: 20, max: 80, ticks: { ...TICKS, maxTicksLimit: 5 } }
		}
	} as const;
</script>

<div class="chart-box"><Line {data} {options} /></div>
