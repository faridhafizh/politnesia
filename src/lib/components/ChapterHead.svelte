<script lang="ts">
	let {
		no,
		id,
		title,
		standfirst,
		range
	}: { no: string; id: string; title: string; standfirst?: string; range: string } = $props();
</script>

<div class="chapter__head">
	<div class="chapter__meta">
		<span class="chapter__no">No. {no}</span>
		<span class="chapter__rail" aria-hidden="true"></span>
		<span class="chapter__range">§ {range}</span>
	</div>
	<h2 {id}>{title}</h2>
	{#if standfirst}<p class="chapter__standfirst">{standfirst}</p>{/if}
</div>
