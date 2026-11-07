<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		no,
		title,
		wide = false,
		note,
		source,
		children
	}: {
		no: string;
		title: string;
		wide?: boolean;
		note?: string;
		source?: string;
		children: Snippet;
	} = $props();
</script>

<figure class="figure" class:span-12={wide} class:span-6={!wide}>
	<div class="figure__head">
		<span class="figure__no">{no}</span>
		<p class="figure__title">{title}</p>
	</div>
	{#if note}<p class="figure__note">{note}</p>{/if}
	<div class="figure__body" role="img" aria-label={`Grafik: ${title}`}>
		{@render children()}
	</div>
	{#if source}<figcaption class="figure__foot">Sumber: {source}</figcaption>{/if}
</figure>
