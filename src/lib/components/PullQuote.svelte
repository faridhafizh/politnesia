<script lang="ts">
	// quote supports <em> for the oxblood highlight — authored in this repo, never user input.
	let { quote, cite }: { quote: string; cite?: string } = $props();
</script>

<figure class="pull-quote">
	<blockquote class="pull-quote__text">{@html quote}</blockquote>
	{#if cite}<figcaption class="pull-quote__attr">— {cite}</figcaption>{/if}
</figure>
