import './App.css'

function App() {
  const kebohonganLama = [
    '“Kerja keras pasti kaya.” Faktanya, lu cuma lari-lari di treadmill Matrix.',
    '“Ikutin kelas affiliate murah, nanti juga bisa.” Mereka jual contekan receh yang dipakai semua orang.',
    '“Butuh modal gede.” Itu narasi biar lu nyerah sebelum mulai.',
  ]

  const realitaBaru = [
    'Sistem sengaja bikin lu sibuk supaya lu nggak sempat bongkar Glitch komisi harian.',
    'Guru palsu cuma kasih peta turis. Lu butuh Peta Buta yang nggak ada di mesin pencari.',
    'Modal utama bukan uang, tapi akses ke Protokol yang nge-bypass algoritma TikTok.',
  ]

  const modulSenjata = [
    {
      nomor: 'Modul Senjata 01 — Peta Buta 0 → 1 Juta',
      deskripsi:
        'Cetak biru operasi yang nunjukin target pembeli, produk yang ngebledos, dan jam posting Glitch. Tinggal eksekusi tanpa tebak-tebakan.',
    },
    {
      nomor: 'Modul Senjata 02 — Prompt AI Rahasia',
      deskripsi:
        'Prompt kotor yang gue racik biar konten lu tampil “haram” tapi aman dari banned, langsung nyulut impuls belanja.',
    },
    {
      nomor: 'Modul Senjata 03 — Matrix Override Otomatis',
      deskripsi:
        'Tumpukan alat otomatis buat duplikasi konten, repost lintas akun, dan ngawasin komisi real time. Kecepatan jadi senjata utama.',
    },
  ]

  const buktiTambahan = [
    '87% anggota batch awal tembus target sebelum minggu keempat.',
    'Nggak ada refund karena nggak ada yang mau cabut dari Markas.',
    'Komunitas tertutup: akses via undangan, bukan link sembarang.',
  ]

  return (
    <div className="page">
      <header className="section hero" id="hero">
        <div className="container">
          <span className="badge">AKSES: PROTOKOL BAWAH TANAH</span>
          <h1>
            Scroll TikTok tiap malam + tetap kere + karena Sistem sengaja ngiket lu di Matrix UMR.
          </h1>
          <p className="subheading">
            Gue di sini bukan buat hiburan. Lu di sini karena gaji UMR udah nggak manusiawi dan lembur
            nggak pernah tembus sejuta sehari.
          </p>
          <ul className="hero-points">
            <li>⚡ Protokol ini bukan kelas; ini Glitch buat keluar dari Sistem.</li>
            <li>⚡ Dibangun dari data jualan affiliate nyata, bukan bacotan motivator.</li>
          </ul>
          <div className="hero-actions">
            <a className="cta" href="#tawaran">
              Ambil Contekan Sekarang
            </a>
            <span className="cta-note">Akses cuma buat yang siap ninggalin mindset budak.</span>
          </div>
        </div>
      </header>

      <section className="section friction" id="musuh">
        <div className="container">
          <p className="section-label">Friction Shift // Tunjuk Musuh Sebenarnya</p>
          <h2>Nyalahin diri sendiri itu mental budak. Yang ngerampok waktu lu adalah Sistem dan guru palsu.</h2>
          <div className="friction-grid">
            <div className="friction-panel">
              <h3>Kebohongan Lama</h3>
              <ul>
                {kebohonganLama.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="friction-panel highlight">
              <h3>Realita Baru</h3>
              <ul>
                {realitaBaru.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="section-closer">
            Lu gagal bukan karena bego, tapi karena main di permainan curang. TikTok Affiliate Protocol adalah tombol
            reset.
          </p>
        </div>
      </section>

      <section className="section protocol" id="protokol">
        <div className="container">
          <p className="section-label">The Protocol // Sistem Senjata Lu</p>
          <h2>
            Ini bukan kelas. Ini Protokol Senjata buat ngerusak algoritma TikTok biar bayar lu sejuta sehari.
          </h2>
          <p className="section-intro">Begitu lu masuk, lu langsung pegang arsenal ini:</p>
          <div className="module-grid">
            {modulSenjata.map((modul) => (
              <article className="module-card" key={modul.nomor}>
                <h3>{modul.nomor}</h3>
                <p>{modul.deskripsi}</p>
              </article>
            ))}
          </div>
          <p className="section-closer">
            Protokol ini dirancang ngasih hasil dalam waktu 21 hari atau kurang. Kalau lu mau mikir setahun, berarti lu
            milih hidup di masa lalu.
          </p>
        </div>
      </section>

      <section className="section proof" id="bukti">
        <div className="container">
          <p className="section-label">Data // Bukti Brutal</p>
          <h2>Matrix nggak bisa ribut sama dashboard.</h2>
          <div className="proof-grid">
            <div className="proof-display">
              <div className="proof-figure">1.000.000+ / Hari</div>
              <p className="proof-caption">Komisi affiliate nyata tujuh hari berturut-turut. Bukan screenshot palsu.</p>
            </div>
            <div className="proof-founder">
              <p className="founder-quote">
                “Nama gue Rey. Gue nggak cari fans, gue nyari pasukan yang berani ngerusak Sistem.”
              </p>
              <p className="founder-note">Data nggak pernah bohong. Bacot lu yang bohong.</p>
            </div>
          </div>
          <ul className="proof-list">
            {buktiTambahan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section offer" id="tawaran">
        <div className="container">
          <p className="section-label">Tawaran // Biaya Masuk Markas</p>
          <h2>Lu bakar sejuta sebulan buat kopi, tapi ngebet ngirit pas ada jalan keluar dari Matrix?</h2>
          <div className="offer-box">
            <div className="price-block">
              <p className="price-original">Rp7.900.000</p>
              <p className="price-current">Rp1.490.000</p>
              <p className="countdown">Penghitung mundur: 47 jam : 12 menit : 38 detik</p>
            </div>
            <div className="value-stack">
              <h3>Yang lu pegang:</h3>
              <ul>
                <li>Contekan Produk TikTok tervalidasi (nilai Rp3,5 juta)</li>
                <li>Prompt AI Rahasia edisi April 2025 (nilai Rp2,2 juta)</li>
                <li>Akses ke Ruang Komando tertutup (nilai Rp1,8 juta)</li>
                <li>Sistem pemantau komisi 24/7 (nilai Rp1,5 juta)</li>
              </ul>
              <p className="total-value">Total nilai: Rp9.000.000</p>
            </div>
          </div>
          <div className="offer-bottom">
            <ul>
              <li>Slot cuma 49 orang supaya Sistem nggak ngendus operasi ini.</li>
              <li>
                Kalau nunggu batch berikutnya, harganya balik ke Rp7,9 juta — kalau Markas belum keburu ditutup.
              </li>
              <li>Rokok: Rp35 ribu sehari = Rp1.050.000 per bulan kebakar percuma.</li>
              <li>Kuota hiburan: Rp450 ribu per bulan cuma buat jadi penonton.</li>
              <li>Protokol ini: Rp1.490.000 sekali bayar buat jadi pemain.</li>
            </ul>
            <a className="cta" href="#akhir">Kunci Slot Lu Sekarang</a>
          </div>
        </div>
      </section>

      <section className="section final" id="akhir">
        <div className="container">
          <h2>Lu mau terus jadi budak UMR atau mau cabut dari Matrix sekarang juga?</h2>
          <p>Gue cuma buka pintu. Lu yang mutusin tetap jadi NPC atau jadi pemain.</p>
          <a className="cta" href="#form">Hack Sistemnya Sekarang</a>
          <span className="cta-note warn">Penghitung mundur nggak bakal nungguin lu nyari alasan.</span>
        </div>
      </section>
    </div>
  )
}

export default App
