<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		wide = false,
		children
	}: { title: string; wide?: boolean; children: Snippet } = $props();
</script>

<figure class="chart-card" class:span-12={wide} class:span-6={!wide}>
	<p class="chart-title">{title}</p>
	{@render children()}
</figure>
