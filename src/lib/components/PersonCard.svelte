<script lang="ts">
	import { PRESIDENTS, type President } from '#lib/data/presidents';

	let { president, large = false }: { president: President; large?: boolean } = $props();

	const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
	const idx = PRESIDENTS.findIndex((p) => p.id === president.id);
	const plate = ROMAN[idx] ?? String(idx + 1);
</script>

<article class="plate" class:plate--lg={large}>
	<div class="plate__frame">
		<div class="plate__img">
			<img src={president.img} alt={president.alt} width="480" height="408" loading="lazy" decoding="async" />
		</div>
	</div>
	<div class="plate__fig">
		<span>Plate {plate}</span>
		<span>{president.eraLabel}</span>
	</div>
	<div class="plate__row">
		<h3 class="plate__name">{president.name}</h3>
		<span class="plate__years">{president.cardYears}</span>
	</div>
	<p class="plate__character">{president.character}</p>
	{#if president.note}<p class="plate__note">{president.note}</p>{/if}
</article>
