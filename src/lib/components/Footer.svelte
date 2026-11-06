<script lang="ts">
	import { CREDITS } from '#lib/data/copy';
</script>

<footer class="closing" aria-labelledby="close-h">
	<div class="wrap">
		<div class="closing__cta close--word">
			<div class="section-head">
				<h2 id="close-h">Siklus yang Tak Pernah Tuntas.</h2>
			</div>
			<a class="btn btn--primary btn--xl" href="#top">Baca investigasinya<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8" /><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg></a>
			<p class="close__word" aria-hidden="true">BERKAS INVESTIGASI</p>
		</div>
		<div class="closing__links">
			<div class="grid">
				<div class="span-4 footer__col">
					<h4>Berkas</h4>
					<ul>
						<li><a href="#ringkasan">Ringkasan</a></li>
						<li><a href="#presiden">Histori Presiden</a></li>
						<li><a href="#data">Data &amp; Grafik</a></li>
						<li><a href="#pajak">Perpajakan</a></li>
					</ul>
				</div>
				<div class="span-4 footer__col">
					<h4>Berkas</h4>
					<ul>
						<li><a href="#narkotika">Narkotika</a></li>
						<li><a href="#pembunuhan">Pembunuhan</a></li>
						<li><a href="#kesimpulan">Lima Pola &amp; Kesimpulan</a></li>
					</ul>
				</div>
				<div class="span-4 footer__col">
					<h4>Tentang berkas ini</h4>
					<p class="footer__lede" style="font-size: var(--t-small); max-width: 34ch; color: var(--muted); line-height: 1.6">
						Analisis struktural perpolitikan Indonesia sejak 1945: dari hiperinflasi Orde Lama hingga tekanan daya beli hari ini, dan perang melawan narkoba yang tak kunjung usai.
					</p>
				</div>
			</div>
			<div class="footer__legal">
				<span>© 2026 Berkas Investigasi</span>
				<details class="credits">
					<summary>Potret: Wikimedia Commons</summary>
					<ul>
						{#each CREDITS as c (c.file)}
							<li>{c.name} — {c.source}, {c.license}</li>
						{/each}
					</ul>
				</details>
			</div>
		</div>
	</div>
</footer>
