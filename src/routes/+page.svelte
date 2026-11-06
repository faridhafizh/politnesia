<script lang="ts">
	// Politnesia — Berkas Investigasi
	// kind: software (tech) — editorial data investigation; chart UI is the subject
	// deal: hero word (dealer printed product/photo/centred/triptych — each requires a product, a calm
	//   hero-grade photograph, a one-window app or an output collage, none of which exists on this
	//   editorial dossier; dealt-again fallback: word, legal without a strong hero photograph)
	// palette graphite-safety-orange · pairing schibsted · radius soft · buttons arrow · rhythm surface-pairs · nav plain .nav words · footer columns · close word · mark ring
	// one effect: none · one or two moments: the hero accent word (rests under reduced motion)

	import { PRESIDENTS } from '#lib/data/presidents';
	import { ELECTIONS } from '#lib/data/elections';
	import { TAX_TAKEAWAYS, PPN_ROWS, PPH_ROWS } from '#lib/data/tax';
	import { NARKOTIKA, NARKOTIKA_TABLE, NARKOTIKA_PATTERNS, NARKOTIKA_METHODOLOGY } from '#lib/data/narkotika';
	import { PEMBUNUHAN, PEMBUNUHAN_TABLE, PEMBUNUHAN_PATTERNS, PEMBUNUHAN_METHODOLOGY } from '#lib/data/pembunuhan';
	import { POLA, RINGKASAN, KESIMPULAN } from '#lib/data/copy';
	import PersonCard from '#lib/components/PersonCard.svelte';
	import FocusPanel from '#lib/components/FocusPanel.svelte';
	import ChartCard from '#lib/components/ChartCard.svelte';
	import DemokrasiChart from '#lib/components/charts/DemokrasiChart.svelte';
	import CpiChart from '#lib/components/charts/CpiChart.svelte';
	import PersChart from '#lib/components/charts/PersChart.svelte';
	import DurasiChart from '#lib/components/charts/DurasiChart.svelte';
	import KepuasanChart from '#lib/components/charts/KepuasanChart.svelte';
	import TaxChart from '#lib/components/charts/TaxChart.svelte';
	import NarkobaTrenChart from '#lib/components/charts/NarkobaTrenChart.svelte';
	import NarkobaJenisChart from '#lib/components/charts/NarkobaJenisChart.svelte';
	import NarkobaLokasiChart from '#lib/components/charts/NarkobaLokasiChart.svelte';
	import PembunuhanTrenChart from '#lib/components/charts/PembunuhanTrenChart.svelte';
	import PembunuhanJenisChart from '#lib/components/charts/PembunuhanJenisChart.svelte';
	import PembunuhanLokasiChart from '#lib/components/charts/PembunuhanLokasiChart.svelte';
	import Footer from '#lib/components/Footer.svelte';

	const P = Object.fromEntries(PRESIDENTS.map((p) => [p.id, p])) as Record<string, (typeof PRESIDENTS)[number]>;

	const TONE_CLASS = { ink: '', accent: 'accent', amber: 'amber' } as const;
</script>

<main>
	<!-- ============ HERO (word) ============ -->
	<section class="hero hero--word" id="top" aria-labelledby="hero-h">
		<div class="wrap">
			<div class="hero-text hero__in">
				<h1 id="hero-h">Siklus yang<br />Tak Pernah <span class="hero-accent">Tuntas.</span></h1>
				<div class="grid hero__foot">
					<div class="span-6">
						<p class="hero__lead">Tiga orde berganti, delapan presiden menjabat — dan masalahnya mengulang. Dari 1.117 catatan narkoba dan 2.587+ catatan pembunuhan, pola yang sama kembali.</p>
						<div class="btn-row">
							<a class="btn btn--primary" href="#ringkasan">Baca investigasinya</a>
							<a class="btn btn--secondary" href="#data">Lihat datanya</a>
						</div>
					</div>
					<dl class="hero__facts hero__facts--col span-5 start-8">
						<div><dt>Presiden, tiga orde</dt><dd>8</dd></div>
						<div><dt>Rasio pajak 2025</dt><dd>~9,3% PDB</dd></div>
						<div><dt>Catatan narkoba</dt><dd>1.117</dd></div>
						<div><dt>Catatan pembunuhan</dt><dd>2.587+</dd></div>
					</dl>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ RINGKASAN ============ -->
	<section class="section" id="ringkasan" aria-labelledby="ringkasan-h" style="--h: 1">
		<div class="wrap">
			<div class="section-head">
				<h2 id="ringkasan-h">Ringkasan eksekutif</h2>
			</div>
			<div class="grid grid--top">
				<p class="span-12 ringkasan-lead">{RINGKASAN.lead}</p>
			</div>
			<p class="kicker-line">Berkas 01 · 1945–2026 · Tiga orde · Delapan presiden · Dua dataset berita</p>
			<dl class="facts-band" style="margin-top: var(--s-5)">
				{#each RINGKASAN.stats as s (s.label)}
					<div>
						<dt>{s.label}</dt>
						<dd>{s.value}</dd>
					</div>
				{/each}
			</dl>
			<nav class="jump-row" aria-label="Lompat ke bagian">
				<span class="jump-label">Isi berkas</span>
				<a href="#presiden">Histori presiden</a>
				<a href="#data">Data &amp; grafik</a>
				<a href="#pajak">Perpajakan</a>
				<a href="#narkotika">Narkotika</a>
				<a href="#pembunuhan">Pembunuhan</a>
				<a href="#kesimpulan">Kesimpulan</a>
			</nav>
		</div>
	</section>

	<!-- ============ ORDE LAMA & ORDE BARU ============ -->
	<section class="section g2" id="orde" aria-labelledby="orde-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="orde-h">Orde Lama &amp; Orde Baru</h2>
						<p>Soekarno memusatkan kekuasaan; Soeharto melembagakannya.</p>
					</div>
				</div>
				<div class="grid grid--middle">
					<div class="span-6">
						<PersonCard president={P.soekarno} />
						<p class="split-line">Konsentrasi kekuasaan, mobilisasi massa, kompromi Nasakom yang rapuh. Dekrit 5 Juli 1959 mengakhiri Konstituante dan membubarkan DPR.</p>
					</div>
					<div class="span-6">
						<FocusPanel title="Kondisi Rakyat — Orde Lama" bars={P.soekarno.bars ?? []} note="<strong>Dampak sosial:</strong> Kemiskinan luas, ketidakstabilan sosial, kesenjangan tajam." />
					</div>
				</div>
			</div>
			<div class="group">
				<h3 class="group-title">Orde Baru · 1966–1998</h3>
				<div class="grid grid--middle">
					<div class="span-6">
						<PersonCard president={P.soeharto} />
						<p class="split-line">Otoritarianisme elektoral: pemilu rutin, Golkar dominan, oposisi dikooptasi. Stabilitas dan pertumbuhan menjadi legitimasi.</p>
					</div>
					<div class="span-6">
						<FocusPanel title="Kondisi Rakyat — Orde Baru" bars={P.soeharto.bars ?? []} note="<strong>Dampak sosial:</strong> Pertumbuhan 7% per tahun di atas fondasi KKN; 1998 krisis menggandakan kemiskinan." />
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ REFORMASI & KARTELISASI ============ -->
	<section class="section g2" id="reformasi" aria-labelledby="reformasi-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="reformasi-h">Reformasi &amp; Kartelisasi</h2>
						<p>1998–2024: ruang demokrasi terbuka, lalu menyempit.</p>
					</div>
				</div>
				<div class="era-grid">
					{#each [P.habibie, P.gusdur, P.megawati, P.sby] as p (p.id)}
						<PersonCard president={p} />
					{/each}
				</div>
			</div>
			<div class="group">
				<h3 class="group-title">Kartelisasi · 2014–2024</h3>
				<div class="grid grid--middle">
					<div class="span-6">
						<PersonCard president={P.jokowi} />
						<p class="split-line">Koalisi besar, oposisi melemah, politik dinasti menonjol. Reformasi berjalan mundur tanpa satu pun titik reversal yang jelas.</p>
					</div>
					<div class="span-6">
						<FocusPanel title="Kondisi Rakyat — Kartelisasi" bars={P.jokowi.bars ?? []} note="<strong>Dampak sosial:</strong> Lapisan bawah bertahan; kelas menengah tergerus 21,35 juta jiwa." />
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ HISTORI PRESIDEN (Prabowo + tabel) ============ -->
	<section class="section g2 ground-surface" id="presiden" aria-labelledby="presiden-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="presiden-h">Histori presiden</h2>
						<p>Delapan presiden, tiga orde — satu pola. Dimulai dari yang sedang menjabat.</p>
					</div>
				</div>
				<h3 class="group-title">Prabowo · 2024–sekarang</h3>
				<div class="grid grid--middle">
					<div class="span-6">
						<PersonCard president={P.prabowo} large />
						<p class="split-line">KIM Plus menguasai 81% kursi DPR; oposisi nyaris tidak ada. MBG menjadi proyek andalannya — sementara ruang fiskal tergerus.</p>
					</div>
					<div class="span-6">
						<FocusPanel large title="Kondisi Rakyat (2025–2026)" bars={P.prabowo.bars ?? []} note="<strong>Dampak sosial:</strong> 10 juta orang turun kelas; tekanan daya beli di pangan dan energi." />
					</div>
				</div>
			</div>
			<div class="group">
				<h3 class="group-title">Delapan presiden, 1945–sekarang</h3>
				<div class="table-wrap">
					<table class="investigasi rik-table">
						<thead>
							<tr><th>Presiden</th><th>Masa jabatan</th><th>Era</th><th>Karakter politik</th><th>Kondisi rakyat</th></tr>
						</thead>
						<tbody>
							{#each PRESIDENTS as p (p.id)}
								<tr class="era-{p.era}-row">
									<td>
										<span class="presiden-cell">
											<img src={p.img} alt={p.alt} width="160" height="160" loading="lazy" decoding="async" />
											<strong>{p.name}</strong>
										</span>
									</td>
									<td>{p.tableYears}</td>
									<td><span class="era-badge era-{p.era}">{p.eraLabel}</span></td>
									<td>{p.character}</td>
									<td>{p.condition}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ DATA & GRAFIK ============ -->
	<section class="section g2" id="data" aria-labelledby="data-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="data-h">Kemunduran demokrasi</h2>
						<p>Freedom House 62 → 57 · V-Dem liberal 0,52 → 0,36 · pers 63,23 (2019) → 44,13 (2025)</p>
					</div>
				</div>
				<div class="grid">
					<ChartCard title="Tren demokrasi 2014–2024"><DemokrasiChart /></ChartCard>
					<ChartCard title="Indeks persepsi korupsi 2012–2025" note="Puncak 40 (2019), turun ke 34 (2025)."><CpiChart /></ChartCard>
				</div>
			</div>
			<div class="group">
				<h3 class="group-title">Kebebasan pers &amp; durasi</h3>
				<div class="grid">
					<ChartCard title="Kebebasan pers 2014–2025" note="Merosot ke 44,13 (2025) — terendah dalam satu dekade."><PersChart /></ChartCard>
					<ChartCard title="Durasi kepemimpinan" note="Soekarno 21,6 tahun; Soeharto 31,2 tahun."><DurasiChart /></ChartCard>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ PEMILU & KEPUASAN ============ -->
	<section class="section g2" id="pemilu" aria-labelledby="pemilu-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="pemilu-h">Pemilu &amp; kepuasan publik</h2>
						<p>Campuran survei retrospektif dan approval rating kontemporer.</p>
					</div>
				</div>
				<div class="grid">
					<ChartCard wide title="Kepuasan publik per presiden"><KepuasanChart /></ChartCard>
				</div>
			</div>
			<div class="group">
				<h3 class="group-title">Data elektoral ringkas</h3>
				<div class="table-wrap">
					<table class="investigasi">
						<thead><tr><th>Tahun</th><th>Peserta</th><th>Pemenang</th><th>Suara</th><th>Catatan</th></tr></thead>
						<tbody>
							{#each ELECTIONS as e (e.tahun)}
								<tr><td>{e.tahun}</td><td class="num">{e.peserta}</td><td>{e.pemenang}</td><td class="num">{e.suara}</td><td>{e.catatan}</td></tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ PERPAJAKAN ============ -->
	<section class="section g2" id="pajak" aria-labelledby="pajak-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="pajak-h">Rasio pajak terhadap PDB</h2>
						<p>~20% pada 1980-an → ~9,3% (2025). Sumber: Kemenkeu, BPS, IKPI.</p>
					</div>
				</div>
				<div class="grid">
					<ChartCard wide title="Rasio pajak terhadap PDB: 1969–2025"><TaxChart /></ChartCard>
				</div>
				<div class="grid takeaway-grid" style="margin-top: var(--s-4)">
					{#each TAX_TAKEAWAYS as t (t.strong)}
						<p class="takeaway span-4"><strong>{t.strong}</strong>{t.text}</p>
					{/each}
				</div>
			</div>
			<div class="group">
				<div class="grid">
					<div class="span-6">
						<h3 class="group-title">Sejarah tarif PPN</h3>
						<div class="table-wrap">
							<table class="investigasi table-compact">
								<thead><tr><th>Periode</th><th>Tarif</th><th>Dasar hukum</th><th>Catatan</th></tr></thead>
								<tbody>
									{#each PPN_ROWS as r (r.periode)}
										<tr><td>{r.periode}</td><td class="num font-strong">{r.tarif}</td><td>{r.dasar}</td><td>{r.catatan}</td></tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
					<div class="span-6">
						<h3 class="group-title">Tarif PPh orang pribadi</h3>
						<div class="table-wrap">
							<table class="investigasi table-compact">
								<thead><tr><th>Era / UU</th><th>Lapisan</th><th>Tertinggi</th><th>Catatan</th></tr></thead>
								<tbody>
									{#each PPH_ROWS as r (r.era)}
										<tr><td>{r.era}</td><td class="num">{r.lapisan}</td><td class="num">{r.tertinggi}</td><td>{r.catatan}</td></tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ NARKOTIKA: ANGKA ============ -->
	<section class="section g2" id="narkotika" aria-labelledby="narkotika-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="narkotika-h">Narkotika</h2>
						<p>1.117 catatan berita (2011–2026) — pengungkapan naik, pasar tak surut.</p>
					</div>
				</div>
				<div class="stat-grid">
					{#each NARKOTIKA.stats as s (s.label)}
						<div class="stat-mini">
							<div class="stat-value {TONE_CLASS[s.tone]}">{s.value}</div>
							<div class="stat-label">{s.label}</div>
							<p>{s.note}</p>
						</div>
					{/each}
				</div>
				<div class="grid" style="margin-top: var(--s-4)">
					<ChartCard wide title="Tren pemberitaan narkoba per tahun: 2011–2026" note="Lonjakan pada 2017 (tembakau gorila), 2020–2021 (pandemi & online), 2025–2026 (vape & laboratorium)."><NarkobaTrenChart /></ChartCard>
				</div>
			</div>
			<div class="group">
				<div class="grid">
					<ChartCard title="Distribusi jenis narkoba" note="Sabu dan narkoba generik mendominasi; vape narkoba jadi tren 2025–2026."><NarkobaJenisChart /></ChartCard>
					<ChartCard title="Lokasi hotspot (top 8)" note="Jakarta, Sumatera Utara, Kepulauan Riau dan Kalimantan Selatan menjadi episentrum."><NarkobaLokasiChart /></ChartCard>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ NARKOTIKA: PENGUNGKAPAN & POLA ============ -->
	<section class="section g2" id="narkotika-pola" aria-labelledby="narkotika-pola-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="narkotika-pola-h">Pengungkapan terbesar</h2>
						<p>2011–2026. Sumber: 1.117 catatan berita media.</p>
					</div>
				</div>
				<div class="table-wrap">
					<table class="investigasi table-compact">
						<thead><tr><th>Tahun</th><th>Lokasi</th><th>Jenis</th><th>Jumlah</th><th>Keterangan</th></tr></thead>
						<tbody>
							{#each NARKOTIKA_TABLE as r (r.tahun + r.lokasi + r.jenis)}
								<tr><td class="font-strong">{r.tahun}</td><td>{r.lokasi}</td><td><span class="era-badge era-narkoba">{r.jenis}</span></td><td class="num font-strong">{r.jumlah}</td><td>{r.ket}</td></tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div class="group">
				<h3 class="group-title">Lima pola dari data narkotika</h3>
				<div class="thread-list">
					{#each NARKOTIKA_PATTERNS as p, i (i)}
						<p class="red-thread thread-item"><strong>{i + 1}. {p.title}</strong> <span>{p.body}</span></p>
					{/each}
				</div>
				<div class="note-panel" style="margin-top: var(--s-4)">
					<h3 class="note-title">Catatan metodologi</h3>
					<p><strong>Sumber data:</strong> {NARKOTIKA_METHODOLOGY.source}</p>
					<p><strong>Klasifikasi:</strong> {NARKOTIKA_METHODOLOGY.classification}</p>
					<p style="margin-bottom: 0"><strong>Keterbatasan:</strong> {NARKOTIKA_METHODOLOGY.limits}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ PEMBUNUHAN: ANGKA ============ -->
	<section class="section g2" id="pembunuhan" aria-labelledby="pembunuhan-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="pembunuhan-h">Pembunuhan</h2>
						<p>2.587+ catatan berita (2002–2026) — 1.151 terjadi pada 2026 (44%).</p>
					</div>
				</div>
				<div class="stat-grid">
					{#each PEMBUNUHAN.stats as s (s.label)}
						<div class="stat-mini">
							<div class="stat-value {TONE_CLASS[s.tone]}">{s.value}</div>
							<div class="stat-label">{s.label}</div>
							<p>{s.note}</p>
						</div>
					{/each}
				</div>
				<div class="grid" style="margin-top: var(--s-4)">
					<ChartCard wide title="Tren pemberitaan pembunuhan per tahun: 2002–2026" note="Lonjakan drastis pada 2026 (1.151 catatan) — femisida, mutilasi, liputan yang meningkat. Sebelumnya di bawah 200 per tahun."><PembunuhanTrenChart /></ChartCard>
				</div>
			</div>
			<div class="group">
				<div class="grid">
					<ChartCard title="Distribusi motif / jenis kasus" note="Dendam, sakit hati dan narkoba mendominasi; mutilasi meningkat."><PembunuhanJenisChart /></ChartCard>
					<ChartCard title="Lokasi hotspot (top 13)" note="Jakarta, Sumatera Utara, Jawa Barat dan Jawa Timur menjadi episentrum."><PembunuhanLokasiChart /></ChartCard>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ PEMBUNUHAN: KASUS & POLA ============ -->
	<section class="section g2" id="pembunuhan-pola" aria-labelledby="pembunuhan-pola-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="pembunuhan-pola-h">Kasus menonjol</h2>
						<p>2002–2026. Sumber: 2.587+ catatan berita media.</p>
					</div>
				</div>
				<div class="table-wrap">
					<table class="investigasi table-compact">
						<thead><tr><th>Tahun</th><th>Kasus</th><th>Lokasi</th><th>Jenis</th><th>Keterangan</th></tr></thead>
						<tbody>
							{#each PEMBUNUHAN_TABLE as r (r.tahun + r.kasus)}
								<tr><td class="font-strong">{r.tahun}</td><td>{r.kasus}</td><td>{r.lokasi}</td><td><span class="era-badge era-narkoba">{r.jenis}</span></td><td>{r.ket}</td></tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div class="group">
				<h3 class="group-title">Lima pola dari data pembunuhan</h3>
				<div class="thread-list">
					{#each PEMBUNUHAN_PATTERNS as p, i (i)}
						<p class="red-thread thread-item"><strong>{i + 1}. {p.title}</strong> <span>{p.body}</span></p>
					{/each}
				</div>
				<div class="note-panel" style="margin-top: var(--s-4)">
					<h3 class="note-title">Catatan metodologi</h3>
					<p><strong>Sumber data:</strong> {PEMBUNUHAN_METHODOLOGY.source}</p>
					<p><strong>Klasifikasi:</strong> {PEMBUNUHAN_METHODOLOGY.classification}</p>
					<p style="margin-bottom: 0"><strong>Keterbatasan:</strong> {PEMBUNUHAN_METHODOLOGY.limits}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ============ KESIMPULAN (Lima pola + penutup) ============ -->
	<section class="section g2" id="kesimpulan" aria-labelledby="kesimpulan-h" style="--h: 2">
		<div class="wrap">
			<div class="group">
				<div class="section-head section-head--row">
					<div>
						<h2 id="kesimpulan-h">Kesimpulan</h2>
						<p>Lima pola yang berulang, dari tiga orde.</p>
					</div>
				</div>
				<div class="thread-list solo">
					{#each POLA as p (p.n)}
						<p class="red-thread thread-item"><strong>{p.n}. {p.title}</strong> <span>{p.body}</span></p>
					{/each}
				</div>
			</div>
			<div class="group">
				<h3 class="group-title">Penutup berkas</h3>
				<div class="prose prose--lg">
					{#each KESIMPULAN as k, i (i)}
						<!-- KESIMPULAN is authored in this repo, never user input -->
						<p>{@html k}</p>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />
