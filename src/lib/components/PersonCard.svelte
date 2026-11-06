<script lang="ts">
	import type { President } from '#lib/data/presidents';

	let { president, large = false }: { president: President; large?: boolean } = $props();
</script>

<article class="person-card" class:person-card--lg={large}>
	<div class="person-head">
		<img src={president.img} alt={president.alt} width="160" height="160" loading="lazy" decoding="async" />
		<div class="who">
			<span class="era-badge era-{president.era}">{president.cardYears}</span>
			<h3>{president.name}</h3>
		</div>
	</div>
	<p class="person-character">{president.character}</p>
	{#if president.note}<p class="person-note">{president.note}</p>{/if}
</article>
