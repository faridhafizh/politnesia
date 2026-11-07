<script lang="ts">
	import type { Bar } from '#lib/data/presidents';

	let { title, bars, note, large = false }: { title: string; bars: Bar[]; note?: string; large?: boolean } = $props();
</script>

<div class="ledger" class:ledger--lg={large}>
	<p class="ledger__title">{title}</p>
	<div class="ledger__rows">
		{#each bars as bar (bar.label)}
			<div class="ledger__row">
				<div class="ledger__line">
					<span class="ledger__label">{bar.label}</span>
					<span class="ledger__leader" aria-hidden="true"></span>
					<strong class="ledger__value">{bar.value}</strong>
				</div>
				<div class="ledger__track" role="img" aria-label="{bar.label}: {bar.value}">
					<span class="ledger__fill" style="--target-w: {bar.fill}%"></span>
				</div>
			</div>
		{/each}
	</div>
	{#if note}<p class="ledger__note">{@html note}</p>{/if}
</div>
