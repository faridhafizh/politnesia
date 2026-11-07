<script lang="ts">
	import { CREDITS, SOURCES_LINE, ISSUE_CONTENT } from '#lib/data/copy';
	import { BIBLIOGRAPHY } from '#lib/data/bibliography';

	// Number every entry sequentially across groups for a print-style reference list.
	let n = 0;
	const BIBLIO = BIBLIOGRAPHY.map((g) => ({
		...g,
		entries: g.entries.map((e) => ({ ...e, n: ++n }))
	}));
	const BIBLIO_TOTAL = n;
</script>

<footer class="colophon" aria-labelledby="colophon-h">
	<div class="wrap">
		<!-- closing plate -->
		<div class="colophon__close">
			<h2 class="colophon__name" id="colophon-h">Politnesia<span class="dot">.</span></h2>
			<p class="colophon__tag">Berita itu berulang — seperti tiga orde itu</p>
			<p class="colophon__slogan">“Siklus yang tak pernah tuntas — sampai rakyat memilih untuk menuntaskannya.”</p>
			<div class="btn-row" style="justify-content: center; margin-top: var(--s-5)">
				<a class="btn btn--primary btn--xl" href="#top">Baca ulang dari depan</a>
			</div>
		</div>

		<!-- colophon body -->
		<div class="colophon__grid">
			<div class="colophon__col">
				<h4>Tentang berkas ini</h4>
				<p class="colophon__lede">
					Politnesia adalah investigasi data independen atas perpolitikan Indonesia sejak 1945 — dari hiperinflasi Orde Lama,
					krisis 1998, hingga tekanan daya beli hari ini — dan perang melawan narkoba yang tak kunjung usai.
					Ditulis dari data publik; diverifikasi lintas sumber; diterbitkan tanpa sponsor.
				</p>
			</div>
			<div class="colophon__col">
				<h4>Isi — Bagian I</h4>
				<ul>
					{#each ISSUE_CONTENT.slice(0, 5) as item (item.no)}
						<li><a href={item.href}><span class="no">{item.no}</span>{item.title}</a></li>
					{/each}
				</ul>
			</div>
			<div class="colophon__col">
				<h4>Isi — Bagian II</h4>
				<ul>
					{#each ISSUE_CONTENT.slice(5) as item (item.no)}
						<li><a href={item.href}><span class="no">{item.no}</span>{item.title}</a></li>
					{/each}
				</ul>
				<a class="biblio__jump" href="#daftar-pustaka">Daftar pustaka <span aria-hidden="true">↓</span></a>
			</div>
			<div class="colophon__col" id="kredit-potret">
				<h4>Kredit potret</h4>
				<details class="credits">
					<summary>Wikimedia Commons</summary>
					<ul>
						{#each CREDITS as c (c.file)}
							<li>{c.name} — {c.source}, {c.license}</li>
						{/each}
					</ul>
				</details>
			</div>
		</div>

		<!-- daftar pustaka -->
		<div class="biblio" id="daftar-pustaka" aria-labelledby="biblio-h">
			<div class="biblio__head">
				<h2 id="biblio-h">Daftar pustaka</h2>
				<span class="biblio__range">{BIBLIO_TOTAL} sumber · Edisi No. 01</span>
			</div>
			<div class="biblio__groups">
				{#each BIBLIO as group (group.id)}
					<section class="biblio__group" aria-labelledby={`biblio-${group.id}`}>
						<h3 id={`biblio-${group.id}`}>{group.title}</h3>
						<ol>
							{#each group.entries as e (e.id)}
								<li>
									<span class="biblio__n" aria-hidden="true">{e.n}</span>
									<div class="biblio__body">
										<span class="biblio__label">{e.label}</span>
										{#if e.note}<span class="biblio__note">{e.note}</span>{/if}
										{#if e.href}
											{@const display = e.hrefLabel ?? (e.href.startsWith('#') ? e.href.slice(1) : new URL(e.href).host)}
											<a
												class="biblio__link"
												href={e.href}
												target={e.href.startsWith('#') ? undefined : '_blank'}
												rel={e.href.startsWith('#') ? undefined : 'noopener noreferrer'}
											>
												{display}
												<span aria-hidden="true">{e.href.startsWith('#') ? '↑' : '↗'}</span>
											</a>
										{/if}
									</div>
								</li>
							{/each}
						</ol>
					</section>
				{/each}
			</div>
		</div>

		<!-- sources -->
		<div class="sources-strip" aria-label="Sumber data">{SOURCES_LINE}</div>

		<div class="colophon__legal">
			<span>© 2026 Politnesia · Edisi No. 01<br />Data publik · Dibangun secara statis · Tanpa pelacak</span>
			<a class="back-top" href="#top">↑ Kembali ke halaman muka</a>
		</div>
	</div>
</footer>
