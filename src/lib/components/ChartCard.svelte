<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		note,
		wide = false,
		children
	}: { title: string; note?: string; wide?: boolean; children: Snippet } = $props();
</script>

<figure class="chart-card" class:span-12={wide} class:span-6={!wide}>
	<figcaption class="chart-title">{title}</figcaption>
	{@render children()}
	{#if note}<p class="chart-note">{note}</p>{/if}
</figure>
