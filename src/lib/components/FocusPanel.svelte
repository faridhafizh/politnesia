<script lang="ts">
	import type { Bar } from '#lib/data/presidents';

	let { title, bars, note, large = false }: { title: string; bars: Bar[]; note?: string; large?: boolean } = $props();
</script>

<div class="focus-panel" class:focus-panel--lg={large}>
	<h3 class="focus-title">{title}</h3>
	<div class="focus-bars">
		{#each bars as bar (bar.label)}
			<div class="focus-bar">
				<div class="focus-bar-row">
					<span>{bar.label}</span>
					<strong>{bar.value}</strong>
				</div>
				<div class="data-bar-track" role="img" aria-label="{bar.label}: {bar.value}">
					<div class="data-bar-fill" style="--target-w: {bar.fill}%"></div>
				</div>
			</div>
		{/each}
	</div>
	{#if note}
		<p class="focus-note">{@html note}</p>
	{/if}
</div>
