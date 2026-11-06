<script lang="ts">
	const WORDS = [
		{ label: 'Ringkasan', href: '#ringkasan' },
		{ label: 'Presiden', href: '#presiden' },
		{ label: 'Data', href: '#data' },
		{ label: 'Pajak', href: '#pajak' },
		{ label: 'Narkotika', href: '#narkotika' },
		{ label: 'Pembunuhan', href: '#pembunuhan' }
	];

	let open = $state(false);
</script>

<header class="nav" class:is-open={open}>
	<div class="wrap nav__bar">
		<a class="nav__logo" href="#top" onclick={() => (open = false)}>
			<span class="mark" data-mark="ring" aria-hidden="true"></span>
			Berkas
		</a>
		<nav class="nav__links" aria-label="Bagian berkas">
			{#each WORDS as w (w.href)}
				<div class="nav__item"><a class="nav__link" href={w.href} onclick={() => (open = false)}>{w.label}</a></div>
			{/each}
		</nav>
		<div class="nav__actions">
			<a class="btn btn--primary" href="#ringkasan" onclick={() => (open = false)}>Baca investigasinya</a>
		</div>
		<button class="nav__toggle" type="button" aria-expanded={open} aria-label="Menu" onclick={() => (open = !open)}>
			<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
				{#if open}
					<path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
				{:else}
					<path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
				{/if}
			</svg>
		</button>
	</div>
</header>
