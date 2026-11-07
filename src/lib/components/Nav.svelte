<script lang="ts">
	import { onMount } from 'svelte';
	import { ISSUE_CONTENT } from '#lib/data/copy';

	const WORDS = [
		{ no: '01', label: 'Ringkasan', href: '#ringkasan' },
		{ no: '04', label: 'Presiden', href: '#presiden' },
		{ no: '05', label: 'Data', href: '#data' },
		{ no: '07', label: 'Pajak', href: '#pajak' },
		{ no: '08', label: 'Narkotika', href: '#narkotika' },
		{ no: '09', label: 'Pembunuhan', href: '#pembunuhan' }
	];

	let open = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 140);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') open = false;
		};
		window.addEventListener('keydown', onKey);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('keydown', onKey);
		};
	});
</script>

<header class="masthead" class:is-open={open} class:scrolled>
	<div class="masthead__strip" aria-hidden="true">
		<div class="masthead__strip-in">
			<span><b>Politnesia</b> — Investigasi data independen</span>
			<span>Jakarta · Est. 2026 · Edisi No. 01</span>
		</div>
	</div>

	<div class="masthead__bar">
		<a class="masthead__plate" href="#top" onclick={() => (open = false)}>Politnesia<span class="dot">.</span></a>

		<nav class="masthead__nav" aria-label="Isi edisi ini">
			{#each WORDS as w (w.href)}
				<a class="masthead__link" href={w.href}><span class="masthead__idx">{w.no}</span>{w.label}</a>
			{/each}
		</nav>

		<a class="masthead__cta" href="#ringkasan">Baca investigasinya</a>

		<button
			class="masthead__toggle"
			type="button"
			aria-expanded={open}
			aria-controls="masthead-overlay"
			aria-label={open ? 'Tutup daftar isi' : 'Buka daftar isi'}
			onclick={() => (open = !open)}
		>
			<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
				{#if open}
					<path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" />
				{:else}
					<path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" />
				{/if}
			</svg>
		</button>
	</div>

	<div class="masthead__overlay" id="masthead-overlay" hidden={!open}>
		<p class="masthead__overlay-title">Isi edisi — No. 01</p>
		<ol>
			{#each ISSUE_CONTENT as item (item.no)}
				<li><a href={item.href} onclick={() => (open = false)}><span class="no">{item.no}</span><span class="t">{item.title}</span></a></li>
			{/each}
		</ol>
	</div>
</header>
