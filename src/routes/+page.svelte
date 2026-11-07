<script lang="ts">
	// Politnesia — light print dossier. Front page, then ten numbered chapters.
	// Content and data are unchanged; this is the presentation layer.

	import { PRESIDENTS } from '#lib/data/presidents';
	import { ELECTIONS } from '#lib/data/elections';
	import { TAX_TAKEAWAYS, PPN_ROWS, PPH_ROWS } from '#lib/data/tax';
	import { NARKOTIKA, NARKOTIKA_TABLE, NARKOTIKA_PATTERNS, NARKOTIKA_METHODOLOGY } from '#lib/data/narkotika';
	import { PEMBUNUHAN, PEMBUNUHAN_TABLE, PEMBUNUHAN_PATTERNS, PEMBUNUHAN_METHODOLOGY } from '#lib/data/pembunuhan';
	import { POLA, RINGKASAN, KESIMPULAN, ISSUE_CONTENT } from '#lib/data/copy';
	import { reveal } from '#lib/reveal';
	import { countup } from '#lib/countup';
	import ChapterHead from '#lib/components/ChapterHead.svelte';
	import PullQuote from '#lib/components/PullQuote.svelte';
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

	const TONE_CLASS = { ink: '', accent: 'accent', amber: 'ochre' } as const;
</script>

<main>
	<!-- ============ HALAMAN MUKA — front page ============ -->
	<section class="front" id="top" aria-labelledby="front-h">
		<div class="wrap">
			<div class="front__dateline fade-up" style="--d: 0ms">
				<span><b>Edisi No. 01</b> — Berkas Investigasi Data</span>
				<span class="tnum hide-sm">Jakarta · Kamis, 6 November 2026</span>
			</div>

			<div class="front__grid">
				<div class="front__lead">
					<div class="front__kickerrow fade-up" style="--d: 80ms">
						<span class="kicker kicker--accent">Investigasi · 1945–2026</span>
					</div>
					<h1 class="front__headline fade-up" id="front-h" style="--d: 140ms">Siklus yang<br />tak pernah <em>tuntas.</em></h1>
					<p class="front__standfirst fade-up" style="--d: 220ms"><strong>Tiga orde berganti, delapan presiden menjabat</strong> — dan polanya mengulang. Hiperinflasi, KKN, kartelisasi, pajak yang terus runtuh, dan perang melawan narkoba yang tak pernah dimenangkan.</p>
					<div class="btn-row front__cta fade-up" style="--d: 300ms">
						<a class="btn btn--primary" href="#ringkasan">Baca investigasinya <span aria-hidden="true">↓</span></a>
						<a class="btn btn--ghost" href="#data">Lihat datanya <span aria-hidden="true">↓</span></a>
					</div>
				</div>

				<aside class="front__index fade-up" style="--d: 360ms" aria-label="Isi edisi">
					<div class="stamp" aria-hidden="true">Berkas<br />Nº 01<br />2026</div>
					<p class="front__index-title"><span>Di edisi ini</span><span>10 bagian</span></p>
					<ol>
						{#each ISSUE_CONTENT as item (item.no)}
							<li>
								<a href={item.href}><span class="no">{item.no}</span><span class="t">{item.title}</span><span class="leader" aria-hidden="true"></span></a>
							</li>
						{/each}
					</ol>
				</aside>
			</div>

			<div class="front__facts" aria-label="Angka kunci edisi ini">
				<div class="fact fade-up" style="--d: 420ms">
					<div class="fact__value" use:countup={{ to: 8 }}>8</div>
					<div class="fact__label">Presiden · tiga orde</div>
					<p class="fact__note">1945–2026</p>
				</div>
				<div class="fact fade-up" style="--d: 500ms">
					<div class="fact__value fact__value--accent" use:countup={{ to: 9.3, decimals: 1, prefix: '~', suffix: '%' }}>~9,3%</div>
					<div class="fact__label">Rasio pajak 2025</div>
					<p class="fact__note">Turun dari ~20% pada 1980-an</p>
				</div>
				<div class="fact fade-up" style="--d: 580ms">
					<div class="fact__value" use:countup={{ to: 1117, grouped: true }}>1.117</div>
					<div class="fact__label">Catatan narkoba</div>
					<p class="fact__note">2011–2026 · berbasis berita</p>
				</div>
				<div class="fact fade-up" style="--d: 660ms">
					<div class="fact__value fact__value--accent" use:countup={{ to: 2587, grouped: true, suffix: '+' }}>2.587+</div>
					<div class="fact__label">Catatan pembunuhan</div>
					<p class="fact__note">2002–2026 · berbasis berita</p>
				</div>
			</div>

			<div class="front__roster" use:reveal>
				<div class="front__roster-head">
					<span>Roster — delapan presiden</span>
					<a class="roster__more" href="#presiden">Lengkapi dossier →</a>
				</div>
				<div class="roster">
					{#each PRESIDENTS as p, i (p.id)}
						<a class="roster__item" href="#presiden" aria-label="{p.name}, {p.cardYears}">
							<span class="roster__img"><img src={p.img} alt="" width="160" height="200" loading="lazy" decoding="async" /></span>
							<span class="roster__no">P-{String(i + 1).padStart(2, '0')}</span>
							<span class="roster__name">{p.name}</span>
							<span class="roster__years">{p.cardYears}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- ============ No. 01 — RINGKASAN EKSEKUTIF ============ -->
	<section class="chapter" id="ringkasan" aria-labelledby="ringkasan-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="01" id="ringkasan-h" title="Ringkasan eksekutif" range="1945–2026" />
			<div class="chapter__grid">
				<div class="chapter__main">
					<p class="lede lede--dropcap">{RINGKASAN.lead}</p>
					<div class="stat-grid" style="margin-top: var(--s-6)">
						{#each RINGKASAN.stats as s (s.label)}
							<div class="stat-mini">
								<div class="stat-value {TONE_CLASS[s.tone]}">{s.value}</div>
								<div class="stat-label">{s.label}</div>
								<p class="stat-note">{s.note}</p>
							</div>
						{/each}
					</div>
				</div>
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Sumber &amp; metode</strong>Angka: Freedom House · V-Dem · RSF · Kemenkeu · BPS · IKPI. Dataset berita: 3.700+ catatan (2002–2026). Daftar lengkap: <a href="#daftar-pustaka">daftar pustaka</a>.</p>
					<p class="margin-note"><strong>Cara baca</strong>Delapan bab berurutan dari orde ke orde; setiap bab merujuk data yang sama: survei, keuangan negara, dan ribuan catatan berita.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 02 — ORDE LAMA & ORDE BARU ============ -->
	<section class="chapter chapter--tint" id="orde" aria-labelledby="orde-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="02" id="orde-h" title="Orde Lama &amp; Orde Baru" range="1945–1998" standfirst="Soekarno memusatkan kekuasaan; Soeharto melembagakannya." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<div class="group">
						<p class="group-title">Orde Lama · 1945–1966</p>
						<div class="grid">
							<div class="span-6">
								<PersonCard president={P.soekarno} />
								<p class="split-line">Konsentrasi kekuasaan, mobilisasi massa, kompromi Nasakom yang rapuh. Dekrit 5 Juli 1959 mengakhiri Konstituante dan membubarkan DPR.</p>
							</div>
							<div class="span-6">
								<FocusPanel large title="Kondisi Rakyat — Orde Lama" bars={P.soekarno.bars ?? []} note="<strong>Dampak sosial:</strong> Kemiskinan luas, ketidakstabilan sosial, kesenjangan tajam." />
							</div>
						</div>
					</div>
					<div class="group">
						<p class="group-title">Orde Baru · 1966–1998</p>
						<div class="grid">
							<div class="span-6">
								<PersonCard president={P.soeharto} />
								<p class="split-line">Otoritarianisme elektoral: pemilu rutin, Golkar dominan, oposisi dikooptasi. Stabilitas dan pertumbuhan menjadi legitimasi.</p>
							</div>
							<div class="span-6">
								<FocusPanel large title="Kondisi Rakyat — Orde Baru" bars={P.soeharto.bars ?? []} note="<strong>Dampak sosial:</strong> Pertumbuhan 7% per tahun di atas fondasi KKN; 1998 krisis menggandakan kemiskinan." />
							</div>
						</div>
					</div>
				</div>
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Cara membaca</strong>Kartu = potret &amp; karakter era. Panel = kondisi rakyat berbasis angka makro; garis putus menandai nilai yang dibanding laporannya.</p>
					<p class="margin-note"><strong>Pengulangan</strong>Keduanya berakhir sama: <em>legitimasi ekonomi</em> runtuh lebih dulu, baru kemudian legitimasi politik.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 03 — REFORMASI & KARTELISASI ============ -->
	<section class="chapter" id="reformasi" aria-labelledby="reformasi-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="03" id="reformasi-h" title="Reformasi &amp; Kartelisasi" range="1998–2024" standfirst="Ruang demokrasi terbuka — lalu menyempit." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<div class="group">
						<p class="group-title">Transisi · 1998–2004</p>
						<div class="grid">
							{#each [P.habibie, P.gusdur, P.megawati, P.sby] as p (p.id)}
								<div class="span-6"><PersonCard president={p} /></div>
							{/each}
						</div>
					</div>
					<div class="group">
						<p class="group-title">Kartelisasi · 2014–2024</p>
						<div class="grid">
							<div class="span-6">
								<PersonCard president={P.jokowi} />
								<p class="split-line">Koalisi besar, oposisi melemah, politik dinasti menonjol. Reformasi berjalan mundur tanpa satu pun titik reversal yang jelas.</p>
							</div>
							<div class="span-6">
								<FocusPanel large title="Kondisi Rakyat — Kartelisasi" bars={P.jokowi.bars ?? []} note="<strong>Dampak sosial:</strong> Lapisan bawah bertahan; kelas menengah tergerus 21,35 juta jiwa." />
							</div>
						</div>
					</div>
				</div>
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Pola kartel</strong>Koalisi dibangun untuk bagi kekuasaan, bukan kompetisi ideologis — oposisi dilemahkan, bukan dikalahkan.</p>
					<p class="margin-note"><strong>Ambang</strong>2014 menjadi batas: sebelum itu reformasi menanjak, sesudahnya indikator demokrasi konsisten turun.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 04 — HISTORI PRESIDEN ============ -->
	<section class="chapter chapter--tint" id="presiden" aria-labelledby="presiden-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="04" id="presiden-h" title="Histori presiden" range="Delapan presiden" standfirst="Dimulai dari yang sedang menjabat — dan satu tabel untuk semuanya." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<div class="group">
						<p class="group-title">Prabowo · 2024–sekarang</p>
						<div class="grid">
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
						<p class="group-title">Delapan presiden, 1945–sekarang</p>
						<div class="table-wrap">
							<table class="investigasi">
								<thead>
									<tr><th scope="col">Presiden</th><th scope="col">Masa</th><th scope="col">Era</th><th scope="col">Karakter politik</th><th scope="col">Kondisi rakyat</th></tr>
								</thead>
								<tbody>
									{#each PRESIDENTS as p (p.id)}
										<tr class="era-{p.era}-row">
											<td>
												<span class="presiden-cell">
													<img src={p.img} alt={p.alt} width="80" height="80" loading="lazy" decoding="async" />
													<strong>{p.name}</strong>
												</span>
											</td>
											<td class="tnum">{p.tableYears}</td>
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
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Plate</strong>Semua potret: Wikimedia Commons. Nomor plate mengikuti urutan jabatan; garis halus menandai huruf era.</p>
					<p class="margin-note"><strong>Durasi</strong>Soeharto 31,2 th · Soekarno 21,6 th · SBY &amp; Jokowi 10 th — lebih lama dari dua orde sebelumnya digabung.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 05 — DATA & GRAFIK ============ -->
	<section class="chapter" id="data" aria-labelledby="data-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="05" id="data-h" title="Kemunduran demokrasi" range="2014–2025" standfirst="Kebebasan menyusut perlahan — lalu lebih cepat." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<div class="grid">
						<ChartCard no="FIG. 1" title="Tren demokrasi 2014–2024" source="Freedom House · V-Dem Institute"><DemokrasiChart /></ChartCard>
						<ChartCard no="FIG. 2" title="Indeks persepsi korupsi" note="Puncak 40 (2019) → 34 (2025)" source="Transparency International"><CpiChart /></ChartCard>
					</div>
					<div class="grid" style="margin-top: var(--s-5)">
						<ChartCard no="FIG. 3" title="Kebebasan pers (RSF)" note="63,23 (2019) → 44,13 (2025)" source="Reporters Without Borders"><PersChart /></ChartCard>
						<ChartCard no="FIG. 4" title="Durasi kepemimpinan" note="Soekarno 21,6 th — Soeharto 31,2 th" source="Sekretariat Negara · diolah"><DurasiChart /></ChartCard>
					</div>

					<PullQuote quote="Freedom House 62 → 57; V-Dem liberal 0,52 → 0,36; kebebasan pers 63,23 → 44,13. <em>Reformasi bukan lagi menanjak — dan angka itu tidak berbohong.</em>" cite="Freedom House · V-Dem · RSF, 2019–2025" />
				</div>
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Membaca FIG. 1</strong>V-Dem liberal ×100 ditampilkan 0–100; Freedom House 100 = paling bebas; RSF: 0–100. Garis putus = V-Dem liberal.</p>
					<p class="margin-note"><strong>FIG. 4</strong>Batang ochre = Orde Lama, oxblood = Orde Baru, slate = Reformasi. Durasi Prabowo dihitung hingga kini.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 06 — PEMILU & KEPUASAN ============ -->
	<section class="chapter chapter--tint" id="pemilu" aria-labelledby="pemilu-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="06" id="pemilu-h" title="Pemilu &amp; kepuasan publik" range="1955–2026" standfirst="Campuran survei retrospektif dan approval rating kontemporer." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<div class="grid">
						<ChartCard wide no="FIG. 5" title="Kepuasan publik per presiden" note="Batang: orde kepresidenannya — Soekarno &amp; Soeharto dinilai retrospektif" source="Indo Barometer · LSI · Indikator Politik"><KepuasanChart /></ChartCard>
					</div>
					<div class="group">
						<p class="group-title">Data elektoral ringkas</p>
						<div class="table-wrap">
							<table class="investigasi">
								<thead><tr><th scope="col">Tahun</th><th scope="col" class="num">Peserta</th><th scope="col">Pemenang</th><th scope="col" class="num">Suara</th><th scope="col">Catatan</th></tr></thead>
								<tbody>
									{#each ELECTIONS as e (e.tahun)}
										<tr><td class="font-strong tnum">{e.tahun}</td><td class="num">{e.peserta}</td><td>{e.pemenang}</td><td class="num">{e.suara}</td><td>{e.catatan}</td></tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Catatan</strong>Angka approval ≠ elektabilitas. SBY/Jokowi/Prabowo adalah puncak approval, bukan hasil pilpres.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 07 — PERPAJAKAN ============ -->
	<section class="chapter" id="pajak" aria-labelledby="pajak-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="07" id="pajak-h" title="Rasio pajak terhadap PDB" range="1969–2025" standfirst="Dari ~20% pada 1980-an menuju ~9,3% hari ini — negara makin sempit membiayai dirinya sendiri." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<div class="grid">
						<ChartCard wide no="FIG. 6" title="Rasio pajak terhadap PDB: 1969–2025" note="Puncak 1980-an (~20–22%) ditopang migas — 2025: ~9,3%" source="Kemenkeu · BPS · IKPI"><TaxChart /></ChartCard>
					</div>
					<div class="takeaway-list" style="margin-top: var(--s-5)">
						{#each TAX_TAKEAWAYS as t (t.strong)}
							<p class="takeaway"><strong>{t.strong}</strong>{t.text}</p>
						{/each}
					</div>
					<div class="group">
						<div class="grid">
							<div class="span-6">
								<p class="group-title">Sejarah tarif PPN</p>
								<div class="table-wrap">
									<table class="investigasi table-compact">
										<thead><tr><th scope="col">Periode</th><th scope="col" class="num">Tarif</th><th scope="col">Dasar hukum</th><th scope="col">Catatan</th></tr></thead>
										<tbody>
											{#each PPN_ROWS as r (r.periode)}
												<tr><td>{r.periode}</td><td class="num font-strong">{r.tarif}</td><td>{r.dasar}</td><td>{r.catatan}</td></tr>
											{/each}
										</tbody>
									</table>
								</div>
							</div>
							<div class="span-6">
								<p class="group-title">Tarif PPh orang pribadi</p>
								<div class="table-wrap">
									<table class="investigasi table-compact">
										<thead><tr><th scope="col">Era / UU</th><th scope="col" class="num">Lapisan</th><th scope="col" class="num">Tertinggi</th><th scope="col">Catatan</th></tr></thead>
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
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Puncak 1981</strong>~22% PDB: era migas &amp; reformasi pajak 1983 (self-assessment). Sejak itu melandai dua dekade.</p>
					<p class="margin-note"><strong>Ambang IMF</strong>15% PDB adalah batas minimum wajar yang dipakai IMF; Indonesia tak pernah mencapainya era Reformasi.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 08 — NARKOTIKA ============ -->
	<section class="chapter chapter--tint" id="narkotika" aria-labelledby="narkotika-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="08" id="narkotika-h" title="Narkotika" range="2011–2026" standfirst="1.117 catatan berita — pengungkapan naik, pasar tak surut." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<div class="stat-grid">
						{#each NARKOTIKA.stats as s (s.label)}
							<div class="stat-mini">
								<div class="stat-value {TONE_CLASS[s.tone]}">{s.value}</div>
								<div class="stat-label">{s.label}</div>
								<p class="stat-note">{s.note}</p>
							</div>
						{/each}
					</div>
					<div class="grid" style="margin-top: var(--s-6)">
						<ChartCard wide no="FIG. 7" title="Tren pemberitaan narkoba per tahun" note="Lonjakan: 2017 (gorila), 2020–21 (online), 2025–26 (vape &amp; lab)" source="1.117 catatan berita media"><NarkobaTrenChart /></ChartCard>
					</div>
					<div class="grid" style="margin-top: var(--s-5)">
						<ChartCard no="FIG. 8" title="Distribusi jenis narkoba" source="Klasifikasi berita · 2011–2026"><NarkobaJenisChart /></ChartCard>
						<ChartCard no="FIG. 9" title="Lokasi hotspot" note="Jakarta &amp; Sumatera Utara tertinggi" source="Klasifikasi berita · 2011–2026"><NarkobaLokasiChart /></ChartCard>
					</div>
					<div class="group" id="narkotika-pola">
						<p class="group-title">Pengungkapan terbesar · 2011–2026</p>
						<div class="table-wrap">
							<table class="investigasi table-compact">
								<thead><tr><th scope="col">Tahun</th><th scope="col">Lokasi</th><th scope="col">Jenis</th><th scope="col" class="num">Jumlah</th><th scope="col">Catatan</th></tr></thead>
								<tbody>
									{#each NARKOTIKA_TABLE as r (r.tahun + r.lokasi + r.jenis)}
										<tr><td class="font-strong tnum">{r.tahun}</td><td>{r.lokasi}</td><td><span class="era-badge era-narkoba">{r.jenis}</span></td><td class="num font-strong">{r.jumlah}</td><td>{r.ket}</td></tr>
									{/each}
								</tbody>
							</table>
						</div>
						<p class="group-title" style="margin-top: var(--s-6)">Lima pola dari data narkotika</p>
						<ol class="pola-list">
							{#each NARKOTIKA_PATTERNS as p, i (i)}
								<li class="pola-item">
									<span class="pola-n" aria-hidden="true">{i + 1}</span>
									<span><p class="pola-title">{p.title}</p><p class="pola-body">{p.body}</p></span>
								</li>
							{/each}
						</ol>
						<div class="note-panel" style="margin-top: var(--s-5)">
							<p class="note-title">Catatan metodologi</p>
							<p><strong>Sumber data:</strong> {NARKOTIKA_METHODOLOGY.source}</p>
							<p><strong>Klasifikasi:</strong> {NARKOTIKA_METHODOLOGY.classification}</p>
							<p style="margin-bottom: 0"><strong>Keterbatasan:</strong> {NARKOTIKA_METHODOLOGY.limits}</p>
						</div>
					</div>
				</div>
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Metode</strong>Data berita via Google/Bing News RSS — bukan statistik resmi BNN. Angka = yang dilaporkan media, bukan total kejadian.</p>
					<p class="margin-note"><strong>Lapas</strong>±15% catatan menyebut kendali dari dalam lapas — korupsi struktural, bukan sekadar penegakkan.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 09 — PEMBUNUHAN ============ -->
	<section class="chapter" id="pembunuhan" aria-labelledby="pembunuhan-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="09" id="pembunuhan-h" title="Pembunuhan" range="2002–2026" standfirst="2.587+ catatan berita — 1.151 terjadi pada 2026 (44%)." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<div class="stat-grid">
						{#each PEMBUNUHAN.stats as s (s.label)}
							<div class="stat-mini">
								<div class="stat-value {TONE_CLASS[s.tone]}">{s.value}</div>
								<div class="stat-label">{s.label}</div>
								<p class="stat-note">{s.note}</p>
							</div>
						{/each}
					</div>
					<div class="grid" style="margin-top: var(--s-6)">
						<ChartCard wide no="FIG. 10" title="Tren pemberitaan pembunuhan per tahun" note="1.151 catatan pada 2026 — 44% dari seluruh catatan" source="2.587+ catatan berita media"><PembunuhanTrenChart /></ChartCard>
					</div>
					<div class="grid" style="margin-top: var(--s-5)">
						<ChartCard no="FIG. 11" title="Distribusi motif / jenis kasus" note="Dendam &amp; sakit hati dominan" source="Klasifikasi berita · 2002–2026"><PembunuhanJenisChart /></ChartCard>
						<ChartCard no="FIG. 12" title="Lokasi hotspot" note="Jakarta ~500 catatan" source="Klasifikasi berita · 2002–2026"><PembunuhanLokasiChart /></ChartCard>
					</div>
					<div class="group" id="pembunuhan-pola">
						<p class="group-title">Kasus menonjol · 2002–2026</p>
						<div class="table-wrap">
							<table class="investigasi table-compact">
								<thead><tr><th scope="col">Tahun</th><th scope="col">Kasus</th><th scope="col">Lokasi</th><th scope="col">Jenis</th><th scope="col">Catatan</th></tr></thead>
								<tbody>
									{#each PEMBUNUHAN_TABLE as r (r.tahun + r.kasus)}
										<tr><td class="font-strong tnum">{r.tahun}</td><td>{r.kasus}</td><td>{r.lokasi}</td><td><span class="era-badge era-narkoba">{r.jenis}</span></td><td>{r.ket}</td></tr>
									{/each}
								</tbody>
							</table>
						</div>
						<p class="group-title" style="margin-top: var(--s-6)">Lima pola dari data pembunuhan</p>
						<ol class="pola-list">
							{#each PEMBUNUHAN_PATTERNS as p, i (i)}
								<li class="pola-item">
									<span class="pola-n" aria-hidden="true">{i + 1}</span>
									<span><p class="pola-title">{p.title}</p><p class="pola-body">{p.body}</p></span>
								</li>
							{/each}
						</ol>
						<div class="note-panel" style="margin-top: var(--s-5)">
							<p class="note-title">Catatan metodologi</p>
							<p><strong>Sumber data:</strong> {PEMBUNUHAN_METHODOLOGY.source}</p>
							<p><strong>Klasifikasi:</strong> {PEMBUNUHAN_METHODOLOGY.classification}</p>
							<p style="margin-bottom: 0"><strong>Keterbatasan:</strong> {PEMBUNUHAN_METHODOLOGY.limits}</p>
						</div>
					</div>
				</div>
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Lonjakan 2026</strong>1.151 catatan sebagian efek metode scraping yang lebih luas — tren, bukan vonis akurasi tahunan.</p>
					<p class="margin-note"><strong>Relasi</strong>Mayoritas korban perempuan dalam relasi — dan pelaku sering aparat. Reformasi hukum adalah prasyarat.</p>
				</aside>
			</div>
		</div>
	</section>

	<!-- ============ No. 10 — KESIMPULAN ============ -->
	<section class="chapter chapter--tint" id="kesimpulan" aria-labelledby="kesimpulan-h" use:reveal>
		<div class="wrap">
			<ChapterHead no="10" id="kesimpulan-h" title="Kesimpulan" range="Lima pola" standfirst="Dari tiga orde ke tiga gelombang — polanya yang tetap." />
			<div class="chapter__grid">
				<div class="chapter__main">
					<p class="group-title">Lima pola yang berulang</p>
					<ol class="pola-list">
						{#each POLA as p (p.n)}
							<li class="pola-item">
								<span class="pola-n" aria-hidden="true">{p.n}</span>
								<span><p class="pola-title">{p.title}</p><p class="pola-body">{p.body}</p></span>
							</li>
						{/each}
					</ol>

					<PullQuote quote="Yang kurang bukan aparat yang berani, melainkan <em>reformasi struktural</em> — yang membuat kejahatan tidak lagi menguntungkan." cite="Penutup — kesimpulan berkas" />

					<p class="group-title">Penutup berkas</p>
					<div class="prose prose--lg">
						{#each KESIMPULAN as k, i (i)}
							<!-- KESIMPULAN is authored in this repo, never user input -->
							<p>{@html k}</p>
						{/each}
					</div>
				</div>
				<aside class="chapter__notes" aria-label="Catatan marjin">
					<p class="margin-note"><strong>Membaca pola</strong>Kelima pola dibaca lintas orde — bukan vonis tunggal atas satu periode kepresidenan mana pun.</p>
					<p class="margin-note"><strong>Edisi berikut</strong>No. 02: reformasi perpajakan pasca-UU HPP — dan mengapa negara sebaiknya punya 15%.</p>
				</aside>
			</div>
		</div>
	</section>
</main>

<Footer />
