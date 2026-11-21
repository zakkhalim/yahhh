const BUKU_AWAL = [
  {id:"b01", judul:"Laut Bercerita", penulis:"Leila S. Chudori", tahun:2017, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-04", callNumber:"899.221/CHU/l", status:"tersedia", eksemplar:{total:3, tersedia:2}, sinopsis:"Novel tentang aktivis mahasiswa yang hilang pada masa akhir Orde Baru, dituturkan lewat suara Laut dan adiknya Asmara, memadukan trauma sejarah dengan kehangatan keluarga."},
  {id:"b02", judul:"Bumi Manusia", penulis:"Pramoedya Ananta Toer", tahun:1980, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"B-01", callNumber:"899.221/TOE/b", status:"dipinjam", kembali:"3 September 2026", eksemplar:{total:4, tersedia:0}, sinopsis:"Kisah Minke, pemuda pribumi di masa kolonial Hindia Belanda, bagian pertama Tetralogi Buru yang mengangkat isu kolonialisme, pendidikan, dan cinta."},
  {id:"b03", judul:"Sapiens: Riwayat Singkat Umat Manusia", penulis:"Yuval Noah Harari", tahun:2011, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-09", callNumber:"909/HAR/s", status:"tersedia", eksemplar:{total:2, tersedia:1}, sinopsis:"Menelusuri perjalanan Homo sapiens dari revolusi kognitif hingga revolusi bioteknologi, membahas bagaimana mitos bersama membentuk peradaban manusia."},
  {id:"b04", judul:"Cosmos", penulis:"Carl Sagan", tahun:1980, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-02", callNumber:"520/SAG/c", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Perjalanan puitis melintasi alam semesta, dari asal-usul bintang hingga tempat manusia dalam skema kosmos, ditulis oleh salah satu astronom paling berpengaruh."},
  {id:"b05", judul:"Clean Code", penulis:"Robert C. Martin", tahun:2008, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-14", callNumber:"005.1/MAR/c", status:"dipinjam", kembali:"6 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Panduan praktik menulis kode yang mudah dibaca dan dirawat, berisi prinsip penamaan, fungsi, dan pengujian yang menjadi rujukan banyak pengembang perangkat lunak."},
  {id:"b06", judul:"Filosofi Teras", penulis:"Henry Manampiring", tahun:2018, genre:"Non-fiksi Filsafat", lantai:1, area:"Umum & Referensi", rak:"A-15", callNumber:"188/MAN/f", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Pengantar filsafat Stoa yang ditulis dengan gaya ringan dan konteks Indonesia, membahas cara mengelola emosi dan menghadapi hal di luar kendali."},
  {id:"b07", judul:"Negeri 5 Menara", penulis:"Ahmad Fuadi", tahun:2009, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-08", callNumber:"899.221/FUA/n", status:"tersedia", eksemplar:{total:3, tersedia:1}, sinopsis:"Kisah enam santri pondok pesantren dengan mantra 'man jadda wajada', tentang mimpi, persahabatan, dan perjuangan meraih cita-cita hingga ke luar negeri."},
  {id:"b08", judul:"A Little History of the World", penulis:"E. H. Gombrich", tahun:1936, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-03", callNumber:"909/GOM/l", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Sejarah dunia yang disederhanakan untuk pembaca muda maupun dewasa, ditulis dengan gaya bertutur yang hangat dari zaman purba hingga abad modern."},
  {id:"b09", judul:"Atomic Habits", penulis:"James Clear", tahun:2018, genre:"Pengembangan Diri", lantai:1, area:"Umum & Referensi", rak:"A-20", callNumber:"158.1/CLE/a", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:4, tersedia:0}, sinopsis:"Membahas bagaimana perubahan kecil dan konsisten pada kebiasaan dapat menghasilkan hasil besar, lengkap dengan kerangka praktis untuk membangun kebiasaan baik."},
  {id:"b10", judul:"Laskar Pelangi", penulis:"Andrea Hirata", tahun:2005, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-11", callNumber:"899.221/HIR/l", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kisah sepuluh anak di Belitung yang berjuang mengenyam pendidikan di sekolah yang nyaris ambruk, penuh semangat, humor, dan haru."},
  {id:"b11", judul:"A Brief History of Time", penulis:"Stephen Hawking", tahun:1988, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-05", callNumber:"523.1/HAW/b", status:"tersedia", eksemplar:{total:2, tersedia:1}, sinopsis:"Penjelasan populer tentang kosmologi, lubang hitam, dan sifat ruang-waktu, ditulis agar dapat dipahami tanpa latar belakang fisika formal."},
  {id:"b12", judul:"Steve Jobs", penulis:"Walter Isaacson", tahun:2011, genre:"Biografi", lantai:1, area:"Umum & Referensi", rak:"A-22", callNumber:"338.7/ISA/s", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Biografi resmi pendiri Apple berdasarkan wawancara mendalam, mengupas obsesi terhadap desain, kepemimpinan yang keras, dan visi produk yang mengubah industri."},
  {id:"b13", judul:"Kumpulan Dongeng Nusantara", penulis:"Anonim (Kompilasi)", tahun:2015, genre:"Anak", lantai:1, area:"Umum & Referensi", rak:"Anak-02", callNumber:"398.2/KOM/k", status:"tersedia", eksemplar:{total:5, tersedia:4}, sinopsis:"Kumpulan cerita rakyat dari berbagai daerah di Indonesia, termasuk Kancil dan Buaya, ditulis ulang dengan ilustrasi berwarna untuk pembaca cilik."},
  {id:"b14", judul:"Pengantar Algoritma dan Struktur Data", penulis:"Tim Penulis Informatika", tahun:2016, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-06", callNumber:"005.1/TIM/p", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Buku ajar dasar tentang struktur data (larik, tumpukan, antrean, pohon) dan algoritma pengurutan serta pencarian, disertai contoh kode dan latihan soal."},
  {id:"b15", judul:"Ayat-Ayat Cinta", penulis:"Habiburrahman El Shirazy", tahun:2004, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-15", callNumber:"899.221/ELS/a", status:"dipinjam", kembali:"5 September 2026", eksemplar:{total:3, tersedia:0}, sinopsis:"Kisah cinta dan religiusitas seorang mahasiswa Indonesia di Kairo, memadukan nilai keislaman dengan konflik cinta yang rumit."},
  {id:"b16", judul:"Sejarah Ringkas Filsafat Barat", penulis:"Anthony Kenny (terj.)", tahun:2010, genre:"Non-fiksi Filsafat", lantai:1, area:"Umum & Referensi", rak:"A-17", callNumber:"190/KEN/s", status:"tersedia", eksemplar:{total:2, tersedia:1}, sinopsis:"Ringkasan perjalanan pemikiran filsafat Barat dari Yunani kuno hingga abad ke-20, ditulis sistematis per periode dan tokoh."},
  {id:"k001", judul:"Cantik Itu Luka", penulis:"Eka Kurniawan", tahun:2002, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-17", callNumber:"899.221/KUR/c", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Novel magis-realis tentang seorang perempuan bernama Dewi Ayu yang bangkit dari kubur setelah dua puluh satu tahun, mengurai kekerasan sejarah Indonesia lewat empat generasi keturunannya."},
  {id:"k002", judul:"Pulang", penulis:"Leila S. Chudori", tahun:2012, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-18", callNumber:"899.221/CHU/p", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kisah eksil politik pasca 1965 yang mengikuti keluarga Dimas Suryo di Paris, memadukan rindu tanah air dengan trauma sejarah bangsa."},
  {id:"k003", judul:"Ronggeng Dukuh Paruk", penulis:"Ahmad Tohari", tahun:1982, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-19", callNumber:"899.221/TOH/r", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Menceritakan Srintil, penari ronggeng di desa miskin, dan pergulatannya antara tradisi, cinta, dan gejolak politik tahun 1965."},
  {id:"k004", judul:"Dilan: Dia Adalah Dilanku Tahun 1990", penulis:"Pidi Baiq", tahun:2014, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-20", callNumber:"899.221/BAI/d", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Kisah cinta remaja di Bandung tahun 1990-an antara Milea dan Dilan yang jenaka sekaligus menyentuh."},
  {id:"k005", judul:"Perahu Kertas", penulis:"Dee Lestari", tahun:2009, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-21", callNumber:"899.221/LES/p", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Perjalanan Kugy dan Keenan menemukan jati diri dan cinta lewat dunia dongeng dan lukisan."},
  {id:"k006", judul:"Supernova: Ksatria, Puteri, dan Bintang Jatuh", penulis:"Dee Lestari", tahun:2001, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-22", callNumber:"899.221/LES/s", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Novel pembuka serial Supernova yang memadukan sains, filsafat, dan kisah cinta lintas karakter."},
  {id:"k007", judul:"Gadis Kretek", penulis:"Ratih Kumala", tahun:2012, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-23", callNumber:"899.221/KUM/g", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Mengisahkan sejarah industri kretek Indonesia lewat tiga generasi keluarga dan rahasia cinta masa lalu."},
  {id:"k008", judul:"Amba", penulis:"Laksmi Pamuntjak", tahun:2012, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-24", callNumber:"899.221/PAM/a", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Kisah cinta yang terjalin di tengah tragedi 1965 dan pembuangan tahanan politik ke Pulau Buru."},
  {id:"k009", judul:"Pachinko", penulis:"Min Jin Lee", tahun:2017, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-25", callNumber:"899.221/LEE/p", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Saga empat generasi keluarga Korea yang berimigrasi ke Jepang, menghadapi diskriminasi dan perjuangan identitas."},
  {id:"k010", judul:"Norwegian Wood", penulis:"Haruki Murakami", tahun:1987, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-26", callNumber:"899.221/MUR/n", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:3, tersedia:0}, sinopsis:"Kisah cinta dan kehilangan seorang mahasiswa di Tokyo yang dibayangi kenangan sahabat yang telah tiada."},
  {id:"k011", judul:"Kafka on the Shore", penulis:"Haruki Murakami", tahun:2002, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-27", callNumber:"899.221/MUR/k", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Perjalanan surealis seorang remaja yang kabur dari rumah, berjalin dengan kisah pria tua yang bisa bicara dengan kucing."},
  {id:"k012", judul:"The Kite Runner", penulis:"Khaled Hosseini", tahun:2003, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-28", callNumber:"899.221/HOS/t", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Kisah persahabatan dan pengkhianatan dua anak lelaki di Afghanistan yang dibayangi rasa bersalah selama bertahun-tahun."},
  {id:"k013", judul:"One Hundred Years of Solitude", penulis:"Gabriel García Márquez", tahun:1967, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-29", callNumber:"899.221/MÁR/o", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Saga tujuh generasi keluarga Buendia di kota fiktif Macondo, mahakarya realisme magis Amerika Latin."},
  {id:"k014", judul:"The Old Man and the Sea", penulis:"Ernest Hemingway", tahun:1952, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-30", callNumber:"899.221/HEM/t", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kisah nelayan tua yang bergulat dengan ikan marlin raksasa di lautan lepas Kuba."},
  {id:"k015", judul:"The Alchemist", penulis:"Paulo Coelho", tahun:1988, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"C-31", callNumber:"899.221/COE/t", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:4, tersedia:0}, sinopsis:"Perjalanan seorang gembala muda mencari harta karun yang berubah menjadi pencarian makna hidup."},
  {id:"k016", judul:"Siti Nurbaya", penulis:"Marah Rusli", tahun:1922, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"C-32", callNumber:"899.221/RUS/s", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Kisah cinta terlarang yang terhalang adat dan perjodohan paksa di Sumatra Barat awal abad ke-20."},
  {id:"k017", judul:"Layar Terkembang", penulis:"Sutan Takdir Alisjahbana", tahun:1936, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"C-33", callNumber:"899.221/ALI/l", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Menceritakan dua kakak beradik dengan pandangan hidup berbeda tentang emansipasi perempuan di masa pergerakan nasional."},
  {id:"k018", judul:"Salah Asuhan", penulis:"Abdul Muis", tahun:1928, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"C-34", callNumber:"899.221/MUI/s", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kisah benturan budaya Barat dan Timur lewat pernikahan seorang pemuda pribumi dengan perempuan Belanda."},
  {id:"k019", judul:"Anak Semua Bangsa", penulis:"Pramoedya Ananta Toer", tahun:1980, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"C-35", callNumber:"899.221/TOE/a", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Kelanjutan kisah Minke yang mulai menulis dalam bahasa Melayu dan menyaksikan penindasan petani pribumi."},
  {id:"k020", judul:"Jejak Langkah", penulis:"Pramoedya Ananta Toer", tahun:1985, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"C-36", callNumber:"899.221/TOE/j", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:1, tersedia:0}, sinopsis:"Bagian ketiga Tetralogi Buru yang mengikuti Minke membangun organisasi pergerakan pertama di Hindia Belanda."},
  {id:"k021", judul:"Rumah Kaca", penulis:"Pramoedya Ananta Toer", tahun:1988, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"C-37", callNumber:"899.221/TOE/r", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Penutup Tetralogi Buru yang dituturkan dari sudut pandang mata-mata kolonial yang mengawasi Minke."},
  {id:"k022", judul:"Pride and Prejudice", penulis:"Jane Austen", tahun:1813, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"C-38", callNumber:"899.221/AUS/p", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kisah cinta penuh sindiran sosial antara Elizabeth Bennet dan Mr. Darcy di Inggris awal abad ke-19."},
  {id:"k023", judul:"Crime and Punishment", penulis:"Fyodor Dostoevsky", tahun:1866, genre:"Sastra Klasik", lantai:2, area:"Fiksi & Sastra", rak:"C-39", callNumber:"899.221/DOS/c", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Pergulatan batin seorang mahasiswa miskin di Sankt Peterburg setelah melakukan pembunuhan yang direncanakannya sendiri."},
  {id:"k024", judul:"Indonesia dalam Arus Sejarah", penulis:"Tim Penulis", tahun:2012, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-25", callNumber:"909/PEN/i", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Rangkuman sejarah Nusantara dari masa kerajaan kuno hingga era reformasi dalam delapan jilid ringkas."},
  {id:"k025", judul:"Guns, Germs, and Steel", penulis:"Jared Diamond", tahun:1997, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-26", callNumber:"909/DIA/g", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Menjelaskan mengapa peradaban berkembang tidak merata di berbagai benua lewat faktor geografi, penyakit, dan teknologi."},
  {id:"k026", judul:"Homo Deus: Riwayat Masa Depan", penulis:"Yuval Noah Harari", tahun:2015, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-27", callNumber:"909/HAR/h", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Menerawang masa depan umat manusia di tengah kemajuan bioteknologi, kecerdasan buatan, dan pencarian keabadian."},
  {id:"k027", judul:"The Silk Roads: A New History of the World", penulis:"Peter Frankopan", tahun:2015, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-28", callNumber:"909/FRA/t", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Menulis ulang sejarah dunia dari sudut pandang jalur perdagangan yang menghubungkan Timur dan Barat."},
  {id:"k028", judul:"Sejarah Indonesia Modern 1200-2008", penulis:"M.C. Ricklefs", tahun:1981, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-29", callNumber:"909/RIC/s", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Kajian komprehensif sejarah Indonesia dari masa Islamisasi hingga awal abad ke-21."},
  {id:"k029", judul:"Indonesia: Dari Kolonialisme hingga Kemerdekaan", penulis:"Tim Penulis", tahun:2015, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-30", callNumber:"909/PEN/i", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Menelusuri perjuangan kemerdekaan Indonesia dari masa VOC hingga proklamasi 1945."},
  {id:"k030", judul:"A People's History of the United States", penulis:"Howard Zinn", tahun:1980, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-31", callNumber:"909/ZIN/a", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:3, tersedia:0}, sinopsis:"Sejarah Amerika Serikat dituturkan dari sudut pandang rakyat biasa, buruh, dan kelompok yang termarjinalkan."},
  {id:"k031", judul:"Genealogi Kebangsaan Indonesia", penulis:"Tim Penulis", tahun:2010, genre:"Non-fiksi Sejarah", lantai:1, area:"Umum & Referensi", rak:"A-32", callNumber:"909/PEN/g", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Mengkaji pembentukan identitas kebangsaan Indonesia dari masa pergerakan hingga pasca kemerdekaan."},
  {id:"k032", judul:"Astrophysics for People in a Hurry", penulis:"Neil deGrasse Tyson", tahun:2017, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-07", callNumber:"500/TYS/a", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Pengantar singkat dan renyah tentang alam semesta, dari Big Bang hingga materi gelap, untuk pembaca yang sibuk."},
  {id:"k033", judul:"The Selfish Gene", penulis:"Richard Dawkins", tahun:1976, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-08", callNumber:"500/DAW/t", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Menjelaskan evolusi dari sudut pandang gen sebagai unit dasar seleksi alam yang mementingkan diri sendiri."},
  {id:"k034", judul:"Silent Spring", penulis:"Rachel Carson", tahun:1962, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-09", callNumber:"500/CAR/s", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Buku yang membuka mata dunia tentang bahaya pestisida terhadap lingkungan dan memicu gerakan lingkungan modern."},
  {id:"k035", judul:"On the Origin of Species", penulis:"Charles Darwin", tahun:1859, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-10", callNumber:"500/DAR/o", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:4, tersedia:0}, sinopsis:"Karya fundamental yang memaparkan teori evolusi lewat seleksi alam."},
  {id:"k036", judul:"Thinking in Systems: A Primer", penulis:"Donella Meadows", tahun:2008, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-11", callNumber:"500/MEA/t", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Pengantar berpikir sistem untuk memahami bagaimana bagian-bagian saling terhubung dalam suatu keseluruhan yang kompleks."},
  {id:"k037", judul:"The Elegant Universe", penulis:"Brian Greene", tahun:1999, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-12", callNumber:"500/GRE/t", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Menjelajahi teori dawai dan upaya fisika modern menyatukan hukum alam semesta dalam satu kerangka."},
  {id:"k038", judul:"Fisika Dasar untuk Pemula", penulis:"Tim Penulis", tahun:2018, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-13", callNumber:"500/PEN/f", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Pengantar konsep fisika klasik dan modern dengan bahasa sederhana dan contoh sehari-hari."},
  {id:"k039", judul:"Kimia Kehidupan Sehari-hari", penulis:"Tim Penulis", tahun:2019, genre:"Sains", lantai:3, area:"Sains & Teknologi", rak:"F-14", callNumber:"500/PEN/k", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Mengulas reaksi kimia di balik hal-hal yang kita temui setiap hari, dari memasak hingga membersihkan rumah."},
  {id:"k040", judul:"The Pragmatic Programmer", penulis:"David Thomas & Andrew Hunt", tahun:1999, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-17", callNumber:"005.1/THO/t", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:1, tersedia:0}, sinopsis:"Kumpulan prinsip praktis untuk menjadi programmer yang lebih baik, dari manajemen kode hingga kebiasaan kerja."},
  {id:"k041", judul:"Introduction to Algorithms", penulis:"Cormen, Leiserson, Rivest, Stein", tahun:1990, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-18", callNumber:"005.1/COR/i", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Buku rujukan klasik tentang algoritma dan struktur data yang dipakai luas di perkuliahan ilmu komputer."},
  {id:"k042", judul:"Design Patterns: Elements of Reusable Object-Oriented Software", penulis:"Gang of Four", tahun:1994, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-19", callNumber:"005.1/FOU/d", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Katalog pola desain perangkat lunak yang dapat dipakai ulang untuk memecahkan masalah pemrograman berorientasi objek."},
  {id:"k043", judul:"You Don't Know JS", penulis:"Kyle Simpson", tahun:2014, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-20", callNumber:"005.1/SIM/y", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Seri buku yang mengupas tuntas mekanisme inti bahasa JavaScript yang sering disalahpahami."},
  {id:"k044", judul:"Artificial Intelligence: A Modern Approach", penulis:"Stuart Russell & Peter Norvig", tahun:1995, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-21", callNumber:"005.1/RUS/a", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Buku teks komprehensif tentang teori dan aplikasi kecerdasan buatan."},
  {id:"k045", judul:"Dasar Pemrograman Python untuk Pemula", penulis:"Tim Penulis", tahun:2020, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-22", callNumber:"005.1/PEN/d", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Pengantar pemrograman Python dari sintaks dasar hingga proyek sederhana untuk pemula."},
  {id:"k046", judul:"Jaringan Komputer dan Keamanan Siber", penulis:"Tim Penulis", tahun:2021, genre:"Teknologi", lantai:3, area:"Sains & Teknologi", rak:"G-23", callNumber:"005.1/PEN/j", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Membahas dasar jaringan komputer serta ancaman dan praktik keamanan siber masa kini."},
  {id:"k047", judul:"Meditations", penulis:"Marcus Aurelius", tahun:180, genre:"Non-fiksi Filsafat", lantai:1, area:"Umum & Referensi", rak:"A-33", callNumber:"100/AUR/m", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Catatan renungan pribadi Kaisar Romawi yang menjadi salah satu karya utama filsafat Stoa."},
  {id:"k048", judul:"Sophie's World", penulis:"Jostein Gaarder", tahun:1991, genre:"Non-fiksi Filsafat", lantai:1, area:"Umum & Referensi", rak:"A-34", callNumber:"100/GAA/s", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Novel filsafat yang mengajak pembaca muda menjelajahi sejarah pemikiran Barat lewat surat-surat misterius."},
  {id:"k049", judul:"Republik", penulis:"Plato", tahun:-380, genre:"Non-fiksi Filsafat", lantai:1, area:"Umum & Referensi", rak:"A-35", callNumber:"100/PLA/r", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Dialog filsafat klasik tentang keadilan, negara ideal, dan hakikat pengetahuan."},
  {id:"k050", judul:"Etika Jawa", penulis:"Franz Magnis-Suseno", tahun:1984, genre:"Non-fiksi Filsafat", lantai:1, area:"Umum & Referensi", rak:"A-36", callNumber:"100/FRA/e", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:3, tersedia:0}, sinopsis:"Kajian filsafat moral dalam pandangan hidup masyarakat Jawa."},
  {id:"k051", judul:"Filsafat Ilmu: Sebuah Pengantar Populer", penulis:"Jujun S. Suriasumantri", tahun:1978, genre:"Non-fiksi Filsafat", lantai:1, area:"Umum & Referensi", rak:"A-37", callNumber:"100/SUR/f", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Pengantar filsafat ilmu yang mudah dipahami bagi pembaca umum dan mahasiswa."},
  {id:"k052", judul:"Being and Time", penulis:"Martin Heidegger", tahun:1927, genre:"Non-fiksi Filsafat", lantai:1, area:"Umum & Referensi", rak:"A-38", callNumber:"100/HEI/b", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Karya filsafat eksistensialisme yang mengupas pertanyaan mendasar tentang makna keberadaan."},
  {id:"k053", judul:"The 7 Habits of Highly Effective People", penulis:"Stephen R. Covey", tahun:1989, genre:"Pengembangan Diri", lantai:1, area:"Umum & Referensi", rak:"A-39", callNumber:"158/COV/t", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Kerangka tujuh kebiasaan untuk membangun efektivitas pribadi dan profesional secara berkelanjutan."},
  {id:"k054", judul:"Berani Tidak Disukai", penulis:"Ichiro Kishimi & Fumitake Koga", tahun:2013, genre:"Pengembangan Diri", lantai:1, area:"Umum & Referensi", rak:"A-40", callNumber:"158/KIS/b", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Dialog tentang psikologi Adlerian yang mengajarkan keberanian melepaskan diri dari ekspektasi orang lain."},
  {id:"k055", judul:"Mindset: The New Psychology of Success", penulis:"Carol S. Dweck", tahun:2006, genre:"Pengembangan Diri", lantai:1, area:"Umum & Referensi", rak:"A-41", callNumber:"158/DWE/m", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:4, tersedia:0}, sinopsis:"Membedakan pola pikir tetap dan pola pikir berkembang serta pengaruhnya terhadap keberhasilan hidup."},
  {id:"k056", judul:"Deep Work", penulis:"Cal Newport", tahun:2016, genre:"Pengembangan Diri", lantai:1, area:"Umum & Referensi", rak:"A-42", callNumber:"158/NEW/d", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Strategi untuk fokus tanpa gangguan di tengah dunia kerja yang penuh distraksi digital."},
  {id:"k057", judul:"The Power of Now", penulis:"Eckhart Tolle", tahun:1997, genre:"Pengembangan Diri", lantai:1, area:"Umum & Referensi", rak:"A-43", callNumber:"158/TOL/t", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Panduan untuk hidup sepenuhnya di masa kini dan melepaskan beban pikiran masa lalu."},
  {id:"k058", judul:"Grit: The Power of Passion and Perseverance", penulis:"Angela Duckworth", tahun:2016, genre:"Pengembangan Diri", lantai:1, area:"Umum & Referensi", rak:"A-44", callNumber:"158/DUC/g", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Mengungkap peran ketekunan dan hasrat jangka panjang sebagai kunci pencapaian, melebihi bakat semata."},
  {id:"k059", judul:"Long Walk to Freedom", penulis:"Nelson Mandela", tahun:1994, genre:"Biografi", lantai:1, area:"Umum & Referensi", rak:"A-45", callNumber:"920/MAN/l", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Otobiografi perjuangan Nelson Mandela melawan apartheid hingga menjadi presiden kulit hitam pertama Afrika Selatan."},
  {id:"k060", judul:"Becoming", penulis:"Michelle Obama", tahun:2018, genre:"Biografi", lantai:1, area:"Umum & Referensi", rak:"A-46", callNumber:"920/OBA/b", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:1, tersedia:0}, sinopsis:"Kisah hidup Michelle Obama, dari masa kecil di Chicago hingga menjadi Ibu Negara Amerika Serikat."},
  {id:"k061", judul:"Chairil Anwar: Sang Penyair Binatang Jalang", penulis:"Tim Penulis", tahun:2005, genre:"Biografi", lantai:1, area:"Umum & Referensi", rak:"A-47", callNumber:"920/PEN/c", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Biografi penyair legendaris Indonesia yang mengubah wajah puisi modern Tanah Air."},
  {id:"k062", judul:"Bung Karno: Penyambung Lidah Rakyat Indonesia", penulis:"Cindy Adams", tahun:1965, genre:"Biografi", lantai:1, area:"Umum & Referensi", rak:"A-48", callNumber:"920/ADA/b", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Otobiografi Presiden Soekarno yang dituturkan kepada jurnalis Amerika, Cindy Adams."},
  {id:"k063", judul:"Habis Gelap Terbitlah Terang", penulis:"R.A. Kartini", tahun:1911, genre:"Biografi", lantai:1, area:"Umum & Referensi", rak:"A-49", callNumber:"920/KAR/h", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Kumpulan surat-surat Kartini yang menyuarakan gagasan emansipasi perempuan Indonesia."},
  {id:"k064", judul:"Benjamin Franklin: An American Life", penulis:"Walter Isaacson", tahun:2003, genre:"Biografi", lantai:1, area:"Umum & Referensi", rak:"A-50", callNumber:"920/ISA/b", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Biografi salah satu Bapak Pendiri Amerika Serikat yang juga ilmuwan dan penulis."},
  {id:"k065", judul:"Petualangan Pinokio", penulis:"Carlo Collodi", tahun:1883, genre:"Anak", lantai:1, area:"Umum & Referensi", rak:"Anak-03", callNumber:"808.8/COL/p", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Kisah boneka kayu yang bermimpi menjadi anak sungguhan setelah melewati berbagai petualangan dan pelajaran hidup."},
  {id:"k066", judul:"Cerita Rakyat Malin Kundang", penulis:"Anonim", tahun:1990, genre:"Anak", lantai:1, area:"Umum & Referensi", rak:"Anak-04", callNumber:"808.8/ANO/c", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Legenda anak durhaka dari Sumatra Barat yang dikutuk menjadi batu oleh ibunya."},
  {id:"k067", judul:"Charlotte's Web", penulis:"E.B. White", tahun:1952, genre:"Anak", lantai:1, area:"Umum & Referensi", rak:"Anak-05", callNumber:"808.8/WHI/c", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Persahabatan seekor babi bernama Wilbur dan laba-laba bernama Charlotte yang menyelamatkannya dengan cara ajaib."},
  {id:"k068", judul:"Harry Potter dan Batu Bertuah", penulis:"J.K. Rowling", tahun:1997, genre:"Anak", lantai:1, area:"Umum & Referensi", rak:"Anak-06", callNumber:"808.8/ROW/h", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Awal petualangan seorang penyihir muda di Sekolah Sihir Hogwarts."},
  {id:"k069", judul:"Matilda", penulis:"Roald Dahl", tahun:1988, genre:"Anak", lantai:1, area:"Umum & Referensi", rak:"Anak-07", callNumber:"808.8/DAH/m", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Kisah anak perempuan jenius dengan kekuatan telekinesis yang melawan ketidakadilan orang dewasa di sekitarnya."},
  {id:"k070", judul:"Ensiklopedia Sains untuk Anak", penulis:"Tim Penulis", tahun:2019, genre:"Anak", lantai:1, area:"Umum & Referensi", rak:"Anak-08", callNumber:"808.8/PEN/e", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:3, tersedia:0}, sinopsis:"Kumpulan fakta sains yang dikemas menarik dengan ilustrasi berwarna untuk pembaca cilik."},
  {id:"k071", judul:"Aku Ini Binatang Jalang: Koleksi Sajak 1942-1949", penulis:"Chairil Anwar", tahun:1949, genre:"Puisi", lantai:2, area:"Fiksi & Sastra", rak:"D-01", callNumber:"811/ANW/a", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Kumpulan puisi penyair pelopor Angkatan 45 yang penuh semangat pemberontakan dan kebebasan."},
  {id:"k072", judul:"Hujan Bulan Juni", penulis:"Sapardi Djoko Damono", tahun:1994, genre:"Puisi", lantai:2, area:"Fiksi & Sastra", rak:"D-02", callNumber:"811/DAM/h", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Kumpulan puisi liris tentang cinta, kerinduan, dan kesunyian yang tenang namun mendalam."},
  {id:"k073", judul:"Empat Kumpulan Sajak", penulis:"W.S. Rendra", tahun:1961, genre:"Puisi", lantai:2, area:"Fiksi & Sastra", rak:"D-03", callNumber:"811/REN/e", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Kumpulan puisi awal Rendra yang memadukan lirisisme dengan kritik sosial."},
  {id:"k074", judul:"Malu Aku Jadi Orang Indonesia", penulis:"Taufiq Ismail", tahun:1998, genre:"Puisi", lantai:2, area:"Fiksi & Sastra", rak:"D-04", callNumber:"811/ISM/m", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kumpulan puisi kritik sosial dan politik karya salah satu penyair besar Indonesia."},
  {id:"k075", judul:"Leaves of Grass", penulis:"Walt Whitman", tahun:1855, genre:"Puisi", lantai:2, area:"Fiksi & Sastra", rak:"D-05", callNumber:"811/WHI/l", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:4, tersedia:0}, sinopsis:"Kumpulan puisi ikonik Amerika yang merayakan individualisme, alam, dan demokrasi."},
  {id:"k076", judul:"A Study in Scarlet", penulis:"Arthur Conan Doyle", tahun:1887, genre:"Misteri", lantai:2, area:"Fiksi & Sastra", rak:"D-06", callNumber:"813/DOY/a", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Kasus pertama detektif Sherlock Holmes bersama sahabatnya, Dr. Watson, memecahkan pembunuhan misterius di London."},
  {id:"k077", judul:"And Then There Were None", penulis:"Agatha Christie", tahun:1939, genre:"Misteri", lantai:2, area:"Fiksi & Sastra", rak:"D-07", callNumber:"813/CHR/a", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Sepuluh orang asing terjebak di sebuah pulau terpencil dan tewas satu per satu dengan cara misterius."},
  {id:"k078", judul:"Gone Girl", penulis:"Gillian Flynn", tahun:2012, genre:"Misteri", lantai:2, area:"Fiksi & Sastra", rak:"D-08", callNumber:"813/FLY/g", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kisah pernikahan yang berubah menjadi teka-teki kelam ketika seorang istri menghilang secara tiba-tiba."},
  {id:"k079", judul:"Rahasia Meede", penulis:"E.S. Ito", tahun:2007, genre:"Misteri", lantai:2, area:"Fiksi & Sastra", rak:"D-09", callNumber:"813/ITO/r", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Thriller sejarah tentang perburuan harta karun VOC yang melibatkan konspirasi lintas generasi."},
  {id:"k080", judul:"The Girl with the Dragon Tattoo", penulis:"Stieg Larsson", tahun:2005, genre:"Misteri", lantai:2, area:"Fiksi & Sastra", rak:"D-10", callNumber:"813/LAR/t", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:1, tersedia:0}, sinopsis:"Seorang jurnalis dan peretas jenius menyelidiki kasus orang hilang yang membongkar rahasia kelam sebuah keluarga."},
  {id:"k081", judul:"The Hobbit", penulis:"J.R.R. Tolkien", tahun:1937, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"E-01", callNumber:"813/TOL/t", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Petualangan Bilbo Baggins yang tak terduga bersama para kurcaci untuk merebut kembali harta yang dijaga naga."},
  {id:"k082", judul:"Percy Jackson dan Pencuri Petir", penulis:"Rick Riordan", tahun:2005, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"E-02", callNumber:"813/RIO/p", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Seorang remaja mengetahui dirinya putra dewa Poseidon dan harus mencegah perang antar dewa Olimpus."},
  {id:"k083", judul:"A Game of Thrones", penulis:"George R. R. Martin", tahun:1996, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"E-03", callNumber:"813/MAR/a", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Perebutan kekuasaan yang rumit antar keluarga bangsawan di benua fiksi Westeros."},
  {id:"k084", judul:"Eragon", penulis:"Christopher Paolini", tahun:2002, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"E-04", callNumber:"813/PAO/e", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Seorang petani muda menemukan telur naga yang mengubah hidupnya menjadi seorang penunggang naga."},
  {id:"k085", judul:"The Lion, the Witch and the Wardrobe", penulis:"C.S. Lewis", tahun:1950, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"E-05", callNumber:"813/LEW/t", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Empat bersaudara menemukan dunia ajaib Narnia lewat sebuah lemari tua dan membantu singa Aslan melawan penyihir jahat."},
  {id:"k086", judul:"Dune", penulis:"Frank Herbert", tahun:1965, genre:"Fiksi Ilmiah", lantai:2, area:"Fiksi & Sastra", rak:"E-06", callNumber:"813/HER/d", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Perebutan kekuasaan atas planet gurun penghasil rempah paling berharga di alam semesta."},
  {id:"k087", judul:"1984", penulis:"George Orwell", tahun:1949, genre:"Fiksi Ilmiah", lantai:2, area:"Fiksi & Sastra", rak:"E-07", callNumber:"813/ORW/1", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Distopia tentang negara totaliter yang mengawasi setiap gerak-gerik warganya lewat propaganda dan rasa takut."},
  {id:"k088", judul:"Brave New World", penulis:"Aldous Huxley", tahun:1932, genre:"Fiksi Ilmiah", lantai:2, area:"Fiksi & Sastra", rak:"E-08", callNumber:"813/HUX/b", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Masyarakat masa depan yang sempurna lewat rekayasa genetik dan kendali sosial total."},
  {id:"k089", judul:"Fahrenheit 451", penulis:"Ray Bradbury", tahun:1953, genre:"Fiksi Ilmiah", lantai:2, area:"Fiksi & Sastra", rak:"E-09", callNumber:"813/BRA/f", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Dunia di mana buku dilarang dan petugas pemadam kebakaran bertugas membakarnya."},
  {id:"k090", judul:"Ender's Game", penulis:"Orson Scott Card", tahun:1985, genre:"Fiksi Ilmiah", lantai:2, area:"Fiksi & Sastra", rak:"E-10", callNumber:"813/CAR/e", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:3, tersedia:0}, sinopsis:"Seorang anak jenius dilatih menjadi komandan militer untuk menghadapi invasi alien."},
  {id:"k091", judul:"Good to Great", penulis:"Jim Collins", tahun:2001, genre:"Bisnis", lantai:1, area:"Umum & Referensi", rak:"A-51", callNumber:"650/COL/g", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Riset tentang faktor-faktor yang mengubah perusahaan biasa menjadi perusahaan hebat dalam jangka panjang."},
  {id:"k092", judul:"The Lean Startup", penulis:"Eric Ries", tahun:2011, genre:"Bisnis", lantai:1, area:"Umum & Referensi", rak:"A-52", callNumber:"650/RIE/t", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Metodologi membangun bisnis rintisan lewat eksperimen cepat dan validasi produk berkelanjutan."},
  {id:"k093", judul:"Rich Dad Poor Dad", penulis:"Robert Kiyosaki", tahun:1997, genre:"Bisnis", lantai:1, area:"Umum & Referensi", rak:"A-53", callNumber:"650/KIY/r", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Perbandingan pola pikir finansial dua sosok ayah yang membentuk pandangan penulis tentang uang dan investasi."},
  {id:"k094", judul:"Zero to One", penulis:"Peter Thiel", tahun:2014, genre:"Bisnis", lantai:1, area:"Umum & Referensi", rak:"A-54", callNumber:"650/THI/z", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Gagasan tentang inovasi yang benar-benar menciptakan sesuatu yang baru, bukan sekadar menyalin yang sudah ada."},
  {id:"k095", judul:"Thinking, Fast and Slow", penulis:"Daniel Kahneman", tahun:2011, genre:"Psikologi", lantai:1, area:"Umum & Referensi", rak:"A-55", callNumber:"150/KAH/t", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:4, tersedia:0}, sinopsis:"Menjelaskan dua sistem berpikir manusia, cepat-intuitif dan lambat-analitis, serta bias yang menyertainya."},
  {id:"k096", judul:"Man's Search for Meaning", penulis:"Viktor Frankl", tahun:1946, genre:"Psikologi", lantai:1, area:"Umum & Referensi", rak:"A-56", callNumber:"150/FRA/m", status:"tersedia", eksemplar:{total:1, tersedia:1}, sinopsis:"Refleksi seorang psikiater tentang pencarian makna hidup berdasarkan pengalamannya di kamp konsentrasi Nazi."},
  {id:"k097", judul:"Emotional Intelligence", penulis:"Daniel Goleman", tahun:1995, genre:"Psikologi", lantai:1, area:"Umum & Referensi", rak:"A-57", callNumber:"150/GOL/e", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Mengangkat pentingnya kecerdasan emosional yang tak kalah penting dari kecerdasan intelektual dalam kesuksesan hidup."},
  {id:"k098", judul:"Quiet: The Power of Introverts", penulis:"Susan Cain", tahun:2012, genre:"Psikologi", lantai:1, area:"Umum & Referensi", rak:"A-58", callNumber:"150/CAI/q", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Membahas kekuatan tersembunyi para introvert di dunia yang mengagungkan ekstroversi."},
  {id:"k099", judul:"Why We Sleep", penulis:"Matthew Walker", tahun:2017, genre:"Kesehatan", lantai:1, area:"Umum & Referensi", rak:"A-59", callNumber:"613/WAL/w", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Mengungkap pentingnya tidur bagi kesehatan otak dan tubuh berdasarkan riset ilmiah terkini."},
  {id:"k100", judul:"Panduan Hidup Sehat Sehari-hari", penulis:"Tim Penulis", tahun:2020, genre:"Kesehatan", lantai:1, area:"Umum & Referensi", rak:"A-60", callNumber:"613/PEN/p", status:"dipinjam", kembali:"1 September 2026", eksemplar:{total:1, tersedia:0}, sinopsis:"Kumpulan tips praktis pola makan, olahraga, dan istirahat untuk menjaga kesehatan jangka panjang."},
  {id:"t001", judul:"Hafalan Shalat Delisa", penulis:"Tere Liye", tahun:2005, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-01", callNumber:"899.221/LIY/h", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kisah gadis kecil di Aceh yang berusaha menghafal bacaan shalat untuk ujian, hidupnya berubah ketika tsunami 2004 melanda kampungnya."},
  {id:"t002", judul:"Bidadari-Bidadari Surga", penulis:"Tere Liye", tahun:2008, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-02", callNumber:"899.221/LIY/b", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Laisa, kakak sulung yang berkorban membesarkan empat adiknya di lembah terpencil, dikenang dengan penuh haru oleh adik-adiknya yang kini sukses."},
  {id:"t003", judul:"Rembulan Tenggelam di Wajahmu", penulis:"Tere Liye", tahun:2009, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-03", callNumber:"899.221/LIY/r", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Ray, pria kaya raya di ujung usianya, mengajukan lima pertanyaan tentang hidup yang dijawab lewat perjalanan masa lalunya."},
  {id:"t004", judul:"Daun yang Jatuh Tak Pernah Membenci Angin", penulis:"Tere Liye", tahun:2010, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-04", callNumber:"899.221/LIY/d", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Tania dan adiknya, anak jalanan yang ditolong Danar, belajar menerima luka dan merelakan kehilangan."},
  {id:"t005", judul:"Ayahku (Bukan) Pembohong", penulis:"Tere Liye", tahun:2011, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-05", callNumber:"899.221/LIY/a", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Dam tumbuh dengan dongeng-dongeng ayahnya yang ia kira hanya karangan, lalu mencari kebenarannya setelah dewasa."},
  {id:"t006", judul:"Kau, Aku, dan Sepucuk Angpau Merah", penulis:"Tere Liye", tahun:2012, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-06", callNumber:"899.221/LIY/k", status:"dipinjam", kembali:"10 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Borno, pemuda pengemudi sepit di Sungai Kapuas, menjalani kisah cinta yang rumit di antara tradisi dan keluarga."},
  {id:"t007", judul:"Negeri Para Bedebah", penulis:"Tere Liye", tahun:2012, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-07", callNumber:"899.221/LIY/n", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Thomas, konsultan keuangan, berpacu dengan waktu menyelamatkan bank keluarganya di tengah krisis dan intrik kekuasaan."},
  {id:"t008", judul:"Sepotong Hati yang Baru", penulis:"Tere Liye", tahun:2012, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-08", callNumber:"899.221/LIY/s", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Kumpulan kisah tentang cinta, kehilangan, dan keberanian memulai lagi dengan hati yang baru."},
  {id:"t009", judul:"Negeri di Ujung Tanduk", penulis:"Tere Liye", tahun:2013, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-09", callNumber:"899.221/LIY/n", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Lanjutan kisah Thomas yang kini menghadapi dunia politik dan kekuasaan dengan taruhan yang lebih besar."},
  {id:"t010", judul:"Rindu", penulis:"Tere Liye", tahun:2014, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-10", callNumber:"899.221/LIY/r", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Perjalanan kapal haji dari Makassar pada tahun 1938, dengan para penumpang yang membawa pertanyaan tentang hidup dan masa lalu."},
  {id:"t011", judul:"Pulang", penulis:"Tere Liye", tahun:2015, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-11", callNumber:"899.221/LIY/p", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Bujang, anak dari pedalaman Sumatra, tumbuh dalam keluarga Tong di dunia gelap ekonomi bayangan, sambil bergulat dengan jati dirinya."},
  {id:"t012", judul:"Hujan", penulis:"Tere Liye", tahun:2016, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-12", callNumber:"899.221/LIY/h", status:"dipinjam", kembali:"10 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Berlatar masa depan, mengikuti Lail dan Esok menghadapi bencana besar serta kemajuan teknologi yang mengubah kehidupan manusia."},
  {id:"t013", judul:"Tentang Kamu", penulis:"Tere Liye", tahun:2016, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-13", callNumber:"899.221/LIY/t", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Zaman Zulkarnaen menelusuri kehidupan seorang perempuan bernama Sri Ningsih demi mengurus warisannya, dan menemukan kisah panjang yang mengharukan."},
  {id:"t014", judul:"Pergi", penulis:"Tere Liye", tahun:2018, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-14", callNumber:"899.221/LIY/p", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Kelanjutan kisah Bujang yang melanjutkan perjalanan menelusuri kota-kota besar sambil menghadapi pengkhianatan dan masa lalunya."},
  {id:"t015", judul:"Si Anak Spesial", penulis:"Tere Liye", tahun:2018, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-15", callNumber:"899.221/LIY/s", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Serial Anak Nusantara tentang Burlian, anak bungsu yang tumbuh di pedalaman Sumatra dengan petualangan dan pelajaran hidup."},
  {id:"t016", judul:"Si Anak Pintar", penulis:"Tere Liye", tahun:2018, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"TL-16", callNumber:"899.221/LIY/s", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Serial Anak Nusantara tentang Pukat, anak yang cerdas dan penuh rasa ingin tahu di tengah keluarga sederhana di kampung."},
  {id:"t017", judul:"Bulan", penulis:"Tere Liye", tahun:2015, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-17", callNumber:"899.221/LIY/b", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Lanjutan serial Bumi: Raib, Seli, dan Ali menjelajahi dunia paralel baru dan mengungkap rahasia Klan Bulan."},
  {id:"t018", judul:"Matahari", penulis:"Tere Liye", tahun:2016, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-18", callNumber:"899.221/LIY/m", status:"dipinjam", kembali:"10 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Novel ketiga serial Bumi yang membawa Raib, Seli, dan Ali ke petualangan baru di dunia paralel penuh bahaya."},
  {id:"t019", judul:"Bintang", penulis:"Tere Liye", tahun:2017, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-19", callNumber:"899.221/LIY/b", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Novel keempat serial Bumi, melanjutkan perjalanan tiga sahabat menghadapi ancaman lintas klan."},
  {id:"t020", judul:"Ceros dan Batozar", penulis:"Tere Liye", tahun:2018, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-20", callNumber:"899.221/LIY/c", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Kisah sampingan serial Bumi yang menjadi jeda sebelum konflik utama berlanjut."},
  {id:"t021", judul:"Komet", penulis:"Tere Liye", tahun:2018, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-21", callNumber:"899.221/LIY/k", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Novel kelima serial Bumi, Ali, Raib, dan Seli melanjutkan petualangan di dunia paralel."},
  {id:"t022", judul:"Komet Minor", penulis:"Tere Liye", tahun:2019, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-22", callNumber:"899.221/LIY/k", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Kelanjutan serial Bumi yang menutup rangkaian petualangan Raib, Seli, dan Ali dengan konflik besar."},
  {id:"t023", judul:"Bumi", penulis:"Tere Liye", tahun:2014, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-23", callNumber:"899.221/LIY/b", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Novel pembuka serial Bumi: Raib, remaja yang bisa menghilang, bersama Seli dan Ali menemukan pintu menuju dunia paralel."},
  {id:"t024", judul:"Selena", penulis:"Tere Liye", tahun:2020, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-24", callNumber:"899.221/LIY/s", status:"dipinjam", kembali:"12 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Buku ke-8 serial Bumi, menceritakan siapa orangtua Raib; sebaiknya dibaca berurutan dengan Nebula."},
  {id:"t025", judul:"Nebula", penulis:"Tere Liye", tahun:2020, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-25", callNumber:"899.221/LIY/n", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Buku ke-9 serial Bumi, pasangan Selena yang melanjutkan kisah tentang orangtua Raib di dunia paralel."},
  {id:"t026", judul:"Si Putih", penulis:"Tere Liye", tahun:2021, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-26", callNumber:"899.221/LIY/s", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Buku ke-10 serial Bumi, melanjutkan petualangan Raib, Seli, dan Ali di dunia paralel."},
  {id:"t027", judul:"Lumpu", penulis:"Tere Liye", tahun:2021, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-27", callNumber:"899.221/LIY/l", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Buku ke-11 serial Bumi, kelanjutan petualangan di dunia paralel yang semakin kompleks."},
  {id:"t028", judul:"Bibi Gill", penulis:"Tere Liye", tahun:2022, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-28", callNumber:"899.221/LIY/b", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Buku ke-12 serial Bumi, melanjutkan kisah petualangan di dunia paralel bersama Raib, Seli, dan Ali."},
  {id:"t029", judul:"SagaraS", penulis:"Tere Liye", tahun:2022, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-29", callNumber:"899.221/LIY/s", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Buku ke-13 serial Bumi, kelanjutan petualangan yang berpusat pada Ali dan teman-temannya di dunia paralel."},
  {id:"t030", judul:"Matahari Minor", penulis:"Tere Liye", tahun:2022, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-30", callNumber:"899.221/LIY/m", status:"dipinjam", kembali:"12 September 2026", eksemplar:{total:2, tersedia:0}, sinopsis:"Buku ke-14 serial Bumi, menyiapkan konflik besar yang jawabannya dilanjutkan di buku berikutnya."},
  {id:"t031", judul:"ILY", penulis:"Tere Liye", tahun:2023, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-31", callNumber:"899.221/LIY/i", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Buku ke-15 serial Bumi, menjawab berbagai konflik dari Matahari Minor dan membuat pembaca penasaran pada Aldebaran."},
  {id:"t032", judul:"Aldebaran Bagian 1", penulis:"Tere Liye", tahun:2024, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-32", callNumber:"899.221/LIY/a", status:"tersedia", eksemplar:{total:4, tersedia:4}, sinopsis:"Buku ke-16 serial Bumi, tentang persahabatan Raib dan Seli yang diuji setelah pertengkaran hebat, dengan perjalanan menuju Klan Aldebaran."},
  {id:"t033", judul:"Hana Tara Hata", penulis:"Tere Liye", tahun:2025, genre:"Fantasi", lantai:2, area:"Fiksi & Sastra", rak:"TL-33", callNumber:"899.221/LIY/h", status:"tersedia", eksemplar:{total:2, tersedia:2}, sinopsis:"Buku ke-17 serial Bumi sekaligus prekuel, mengisahkan Hana, penghuni Padang Perdu Klan Matahari yang mampu berbicara dengan alam."},
  {id:"n001", judul:"Dia Angkasa", penulis:"Nurwina Sari", tahun:2021, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"NS-01", callNumber:"899.221/SAR/d", status:"tersedia", eksemplar:{total:3, tersedia:2}, sinopsis:"Angkasa, siswa berandalan sekaligus ketua geng Satrova di SMA Andromeda, berubah setelah bertemu Aurelani Aurora, kisah remaja yang bermula dari Wattpad."},
  {id:"n002", judul:"Dia Aurora", penulis:"Nurwina Sari", tahun:2022, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"NS-02", callNumber:"899.221/SAR/d", status:"dipinjam", kembali:"14 September 2026", eksemplar:{total:3, tersedia:0}, sinopsis:"Sekuel Dia Angkasa: Aurora harus menghadapi kehilangan sang ayah setelah dua tahun ditinggal Angkasa, lalu bertemu sosok bersyal yang mengingatkannya pada kekasihnya."},
  {id:"n003", judul:"Dia Bara", penulis:"Nurwina Sari", tahun:2023, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"NS-03", callNumber:"899.221/SAR/d", status:"tersedia", eksemplar:{total:3, tersedia:2}, sinopsis:"Bara jatuh hati pada Salsa pada tahun 2019, dan bertahun-tahun kemudian bertanya-tanya apakah ia bisa memperjuangkan Salsa untuk kedua kalinya."},
  {id:"n004", judul:"3726 MDPL", penulis:"Nurwina Sari", tahun:2024, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"NS-04", callNumber:"899.221/SAR/3", status:"tersedia", eksemplar:{total:3, tersedia:3}, sinopsis:"Novel remaja tentang pendakian Gunung Rinjani (3.726 mdpl) yang direncanakan Rangga Raja bersama Andini Hangura."},
  {id:"n005", judul:"0 MDPL", penulis:"Nurwina Sari", tahun:null, genre:"Fiksi", lantai:2, area:"Fiksi & Sastra", rak:"NS-05", callNumber:"899.221/SAR/0", status:"tersedia", eksemplar:{total:3, tersedia:2}, sinopsis:"Lanjutan 3726 MDPL: kisah Rangga Raja setelah pendakian, bertemu orang-orang baru di puncak Rinjani, termasuk La Nina."}
];

const STORAGE_KEY = "pustakawan_ai_buku_tambahan";

function muatBukuTambahan(){
  try{
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  }catch(e){
    return [];
  }
}

function simpanBukuTambahan(){
  const tambahan = BUKU.filter(b => b.custom);
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(tambahan)); }catch(e){}
}

let BUKU = [...BUKU_AWAL, ...muatBukuTambahan()];

function namaAreaLantai(l){
  return {1:"Umum & Referensi", 2:"Fiksi & Sastra", 3:"Sains & Teknologi"}[l] || "Koleksi Umum";
}

function buatIdBaru(){
  let n = BUKU.length + 1;
  let id = "c" + String(n).padStart(3,"0");
  while(BUKU.some(b => b.id === id)){ n++; id = "c" + String(n).padStart(3,"0"); }
  return id;
}

let genreAktif = "Semua";
let queryAktif = "";

function semuaGenre(){
  const set = new Set(BUKU.map(b => b.genre));
  return ["Semua", ...Array.from(set).sort()];
}

function renderChips(){
  const row = document.getElementById('chipRow');
  row.innerHTML = "";
  semuaGenre().forEach(g => {
    const el = document.createElement('div');
    el.className = "chip" + (g === genreAktif ? " active" : "");
    el.textContent = g;
    el.onclick = () => { genreAktif = g; renderChips(); renderGrid(); };
    row.appendChild(el);
  });
}

function cocokQuery(b, q){
  if(!q) return true;
  const teks = (b.judul + " " + b.penulis + " " + b.genre + " " + b.sinopsis).toLowerCase();
  return teks.includes(q.toLowerCase());
}

function bukuTersaring(){
  return BUKU.filter(b => (genreAktif === "Semua" || b.genre === genreAktif) && cocokQuery(b, queryAktif));
}


/* ---------- Cover buku ---------- */
const COVER_CACHE_KEY = "pustakawan_ai_cover_cache_v2";
const COVER_OVERRIDE_KEY = "pustakawan_ai_cover_override";
const PENULIS_GENERIK = new Set(["Tim Penulis","Anonim","Anonim (Kompilasi)","Gang of Four"]);
const PALET_COVER = ["#24402F","#5E2626","#3C5233","#4a3b22","#2b3a4f","#44304a","#2f4f4f","#5b4a1e"];

function muatJson(k){ try{ return JSON.parse(localStorage.getItem(k)) || {}; }catch(e){ return {}; } }
function simpanJson(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); return true; }catch(e){ return false; } }
let coverCache = muatJson(COVER_CACHE_KEY);       // id -> url ("" = tidak ditemukan)
let coverOverride = muatJson(COVER_OVERRIDE_KEY); // id -> url / data URL pilihan pengguna

function hashStr(s){ let h = 0; for(const c of String(s)){ h = (h*31 + c.charCodeAt(0)) >>> 0; } return h; }
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

function coverHtml(b, besar){
  const warna = PALET_COVER[hashStr(b.judul) % PALET_COVER.length];
  return `<div class="cover${besar ? ' besar' : ''}" data-cover-id="${b.id}" style="--cv-bg:${warna}">
    <div class="cover-fallback"><span class="cf-judul">${esc(b.judul)}</span><span class="cf-penulis">${esc(b.penulis)}</span></div>
  </div>`;
}

function pasangCover(el, url){
  if(!el || !el.isConnected) return;
  const img = new Image();
  img.alt = "Sampul " + (el.dataset.coverId || "");
  img.onload = () => { if(img.naturalWidth > 1 && el.isConnected) el.appendChild(img); };
  img.src = url;
}

function normJudul(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g," ").trim(); }
function judulCocok(a, b){
  const x = normJudul(a), y = normJudul(b);
  if(!x || !y) return false;
  return x === y || x.startsWith(y + " ") || y.startsWith(x + " ");
}

async function cariCoverGoogleBooks(b, judulCari, penulisCari){
  const q = 'intitle:"' + judulCari + '" inauthor:"' + penulisCari + '"';
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + encodeURIComponent(q) +
    "&maxResults=8&printType=books&fields=items(volumeInfo(title,authors,imageLinks))";
  const r = await fetch(url);
  if(!r.ok) throw new Error("HTTP " + r.status);
  const d = await r.json();
  const nama = normJudul(penulisCari).split(" ").filter(Boolean).pop() || "";
  const cocok = (d.items || []).find(it => {
    const v = it.volumeInfo || {};
    const il = v.imageLinks || {};
    if(!(il.thumbnail || il.smallThumbnail)) return false;
    if(!judulCocok(v.title || "", judulCari)) return false;
    const penulisBuku = normJudul((v.authors || []).join(" "));
    return !nama || penulisBuku.includes(nama);
  });
  if(!cocok) return "";
  const il = cocok.volumeInfo.imageLinks;
  return (il.thumbnail || il.smallThumbnail).replace(/^http:/, "https:").replace("&edge=curl", "");
}

async function cariCoverOpenLibrary(b, judulCari, penulisCari){
  const url = "https://openlibrary.org/search.json?title=" + encodeURIComponent(judulCari) +
    "&author=" + encodeURIComponent(penulisCari) + "&limit=5&fields=title,cover_i";
  const r = await fetch(url);
  if(!r.ok) throw new Error("HTTP " + r.status);
  const d = await r.json();
  const cocok = (d.docs || []).find(x => x.cover_i && judulCocok(x.title || "", judulCari));
  return cocok ? "https://covers.openlibrary.org/b/id/" + cocok.cover_i + "-M.jpg" : "";
}

// Mencari sampul asli: Google Books dulu (lebih lengkap untuk buku Indonesia), lalu Open Library.
async function cariCoverOnline(b){
  if(PENULIS_GENERIK.has(b.penulis)) return "";
  const judulCari = b.judul.split(":")[0].trim();
  const penulisCari = b.penulis.split("&")[0].split(",")[0].replace(/\(.*?\)/g,"").trim();
  let galat = false;
  for(const sumber of [cariCoverGoogleBooks, cariCoverOpenLibrary]){
    try{
      const url = await sumber(b, judulCari, penulisCari);
      if(url) return url;
    }catch(err){ galat = true; }
  }
  if(galat) throw new Error("sumber cover tidak dapat dihubungi");
  return "";
}

const antreanCover = [];
const coverMenunggu = new Map(); // id -> daftar elemen yang menunggu
let coverAktif = 0;

function ambilCover(b, el){
  const kustom = coverOverride[b.id] || b.cover;
  if(kustom){ pasangCover(el, kustom); return; }
  if(b.id in coverCache){ if(coverCache[b.id]) pasangCover(el, coverCache[b.id]); return; }
  if(coverMenunggu.has(b.id)){ coverMenunggu.get(b.id).push(el); return; }
  coverMenunggu.set(b.id, [el]);
  antreanCover.push(b);
  jalankanAntreanCover();
}

function jalankanAntreanCover(){
  while(coverAktif < 3 && antreanCover.length){
    const b = antreanCover.shift();
    coverAktif++;
    cariCoverOnline(b).then(url => {
      coverCache[b.id] = url;
      simpanJson(COVER_CACHE_KEY, coverCache);
      if(url) (coverMenunggu.get(b.id) || []).forEach(el => pasangCover(el, url));
    }).catch(() => {}).finally(() => {
      coverMenunggu.delete(b.id);
      setTimeout(() => { coverAktif--; jalankanAntreanCover(); }, 150);
    });
  }
}

const pengamatCover = ('IntersectionObserver' in window)
  ? new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if(!en.isIntersecting) return;
        pengamatCover.unobserve(en.target);
        const b = BUKU.find(x => x.id === en.target.dataset.coverId);
        if(b) ambilCover(b, en.target);
      });
    }, {rootMargin:"250px"})
  : null;

function aktifkanCover(root){
  root.querySelectorAll('.cover[data-cover-id]').forEach(el => {
    if(pengamatCover){ pengamatCover.observe(el); return; }
    const b = BUKU.find(x => x.id === el.dataset.coverId);
    if(b) ambilCover(b, el);
  });
}

function bacaGambarJadiDataUrl(file, lebarMaks){
  lebarMaks = lebarMaks || 320;
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onerror = reject;
    fr.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const skala = Math.min(1, lebarMaks / img.width);
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * skala);
        c.height = Math.round(img.height * skala);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL('image/jpeg', 0.82));
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

function setCoverKustom(id, nilai){
  coverOverride[id] = nilai;
  if(!simpanJson(COVER_OVERRIDE_KEY, coverOverride)){
    alert("Penyimpanan browser penuh, cover tidak dapat disimpan.");
  }
  renderGrid();
  bukaDetail(id);
}
function hapusCoverKustom(id){
  delete coverOverride[id];
  simpanJson(COVER_OVERRIDE_KEY, coverOverride);
  const b = BUKU.find(x => x.id === id);
  if(b && b.cover){ delete b.cover; simpanBukuTambahan(); }
  renderGrid();
  bukaDetail(id);
}

function stempelHtml(b){
  if(b.status === "tersedia"){
    return `<span class="stempel tersedia">Tersedia</span>`;
  }
  return `<span class="stempel dipinjam">Dipinjam</span>`;
}

function kartuHtml(b){
  return `
  <div class="kartu" data-id="${b.id}">
    <span class="lubang l"></span><span class="lubang r"></span>
    <div class="garis-panduan">
      <div>
        <p class="judul-buku">${b.judul}</p>
        <p class="penulis">${b.penulis}${b.tahun ? " · " + b.tahun : ""}</p>
      </div>
      <span class="no-panggil">${b.callNumber}</span>
    </div>
    <div class="kartu-isi">
      ${coverHtml(b, false)}
      <div class="kartu-teks">
        <div class="meta-row"><span>${b.genre}</span>${b.custom ? '<span>· Ditambahkan</span>' : ''}</div>
        <p class="sinopsis-ringkas">${b.sinopsis.slice(0,100)}${b.sinopsis.length>100?'…':''}</p>
      </div>
    </div>
    <div class="kartu-footer">
      <span class="lokasi-badge">Lt.${b.lantai} · Rak ${b.rak}</span>
      ${stempelHtml(b)}
    </div>
  </div>`;
}

function renderGrid(){
  const grid = document.getElementById('grid');
  const daftar = bukuTersaring();
  document.getElementById('resultCount').textContent = daftar.length + " buku ditemukan";
  if(daftar.length === 0){
    grid.innerHTML = `<div class="no-result">Tidak ada buku yang cocok. Coba kata kunci lain.</div>`;
    return;
  }
  grid.innerHTML = daftar.map(kartuHtml).join("");
  grid.querySelectorAll('.kartu').forEach(el => {
    el.addEventListener('click', () => bukaDetail(el.dataset.id));
  });
  aktifkanCover(grid);
}

function petaLokasiHtml(b){
  const lantaiList = [1,2,3];
  const namaArea = {1:"Umum & Referensi", 2:"Fiksi & Sastra", 3:"Sains & Teknologi"};
  return `<div class="peta">` + lantaiList.map(l => `
    <div class="lantai-bar ${l === b.lantai ? 'aktif' : ''}">
      <span>Lantai ${l} — ${namaArea[l]}</span>
      ${l === b.lantai ? `<span class="rak-pill">Rak ${b.rak}</span>` : ''}
    </div>`).join("") + `</div>`;
}

function bukaDetail(id){
  const b = BUKU.find(x => x.id === id);
  if(!b) return;
  const ketersediaanText = b.status === "tersedia"
    ? `${b.eksemplar.tersedia} dari ${b.eksemplar.total} eksemplar tersedia di rak`
    : `Semua eksemplar sedang dipinjam · perkiraan kembali ${b.kembali}`;
  document.getElementById('detailKartu').innerHTML = `
    <button class="tutup-btn" id="tutupDetail" aria-label="Tutup">&times;</button>
    <span class="lubang l"></span><span class="lubang r"></span>
    <div class="detail-top">
      <div class="detail-head">
        ${coverHtml(b, true)}
        <div class="detail-head-teks">
          <span class="no-panggil">${b.callNumber}</span>
          <h2>${b.judul}</h2>
          <p class="penulis">${b.penulis}${b.tahun ? " · terbit " + b.tahun : ""}</p>
          <div class="detail-meta">
            <span>${b.genre}</span>
            <span>Lantai ${b.lantai}, Rak ${b.rak}</span>
          </div>
          <div class="cover-aksi">
            <label class="mini-btn">Unggah cover<input type="file" accept="image/*" hidden id="inCoverFile"></label>
            <button type="button" class="mini-btn" id="btnCoverUrl">Pakai URL</button>
            ${(coverOverride[b.id] || b.cover) ? '<button type="button" class="mini-btn" id="btnCoverReset">Hapus cover kustom</button>' : ''}
          </div>
        </div>
      </div>
    </div>
    <div class="detail-section-title">Sinopsis</div>
    <p class="sinopsis-full">${b.sinopsis}</p>
    <div class="detail-section-title">Peta lokasi</div>
    ${petaLokasiHtml(b)}
    <div class="ketersediaan-box">
      ${stempelHtml(b)}
      <span style="font-size:13px;color:var(--muted);">${ketersediaanText}</span>
    </div>
    <button class="tanya-ai-btn" id="tanyaTentangIni">Tanya AI tentang buku ini</button>
  `;
  document.getElementById('overlay').classList.add('show');
  document.getElementById('tutupDetail').onclick = tutupDetail;
  aktifkanCover(document.getElementById('detailKartu'));
  document.getElementById('inCoverFile').onchange = async (e) => {
    const berkas = e.target.files[0];
    if(!berkas) return;
    try{ setCoverKustom(b.id, await bacaGambarJadiDataUrl(berkas)); }
    catch(err){ alert("File gambar tidak dapat dibaca."); }
  };
  document.getElementById('btnCoverUrl').onclick = () => {
    const u = (prompt("Tempel alamat gambar cover (https://…):") || "").trim();
    if(/^https?:\/\//i.test(u)) setCoverKustom(b.id, u);
    else if(u) alert("Alamat harus diawali http:// atau https://");
  };
  const btnReset = document.getElementById('btnCoverReset');
  if(btnReset) btnReset.onclick = () => hapusCoverKustom(b.id);
  document.getElementById('tanyaTentangIni').onclick = () => {
    tutupDetail();
    bukaAiPanel();
    kirimPertanyaan(`Ceritakan lebih lanjut tentang buku "${b.judul}" dan di mana saya bisa menemukannya.`);
  };
}
function tutupDetail(){ document.getElementById('overlay').classList.remove('show'); }
document.getElementById('overlay').addEventListener('click', (e) => {
  if(e.target.id === 'overlay') tutupDetail();
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  queryAktif = e.target.value;
  renderGrid();
});

renderChips();
renderGrid();

/* ---------- Form tambah buku ---------- */
const formOverlay = document.getElementById('formOverlay');
const formTambah = document.getElementById('formTambah');
const formStatusMsg = document.getElementById('formStatusMsg');

function isiDatalistGenre(){
  const dl = document.getElementById('genreList');
  dl.innerHTML = semuaGenre().filter(g => g !== "Semua").map(g => `<option value="${g}"></option>`).join("");
}

function bukaFormTambah(){
  formTambah.reset();
  document.getElementById('in-eksemplar').value = 1;
  formStatusMsg.classList.remove('show');
  ['f-judul','f-penulis','f-tahun','f-genre','f-rak'].forEach(id => {
    document.getElementById(id).classList.remove('invalid');
    document.getElementById(id).querySelector('.field-error').classList.remove('show');
  });
  isiDatalistGenre();
  formOverlay.classList.add('show');
  document.getElementById('in-judul').focus();
}
function tutupFormTambah(){ formOverlay.classList.remove('show'); }

document.getElementById('tambahBukuBtn').addEventListener('click', bukaFormTambah);
document.getElementById('tutupForm').addEventListener('click', tutupFormTambah);
document.getElementById('batalForm').addEventListener('click', tutupFormTambah);
formOverlay.addEventListener('click', (e) => { if(e.target.id === 'formOverlay') tutupFormTambah(); });

function tandaiError(fieldId, valid){
  const el = document.getElementById(fieldId);
  el.classList.toggle('invalid', !valid);
  const err = el.querySelector('.field-error');
  if(err) err.classList.toggle('show', !valid);
}

formTambah.addEventListener('submit', async (e) => {
  e.preventDefault();
  const judul = document.getElementById('in-judul').value.trim();
  const penulis = document.getElementById('in-penulis').value.trim();
  const tahunStr = document.getElementById('in-tahun').value.trim();
  const genre = document.getElementById('in-genre').value.trim();
  const lantai = parseInt(document.getElementById('in-lantai').value, 10);
  const rak = document.getElementById('in-rak').value.trim();
  const callNumberInput = document.getElementById('in-call').value.trim();
  const status = document.getElementById('in-status').value;
  const eksemplarStr = document.getElementById('in-eksemplar').value.trim();
  const sinopsis = document.getElementById('in-sinopsis').value.trim();

  let valid = true;
  const judulValid = judul.length > 0;
  tandaiError('f-judul', judulValid); valid = valid && judulValid;
  const penulisValid = penulis.length > 0;
  tandaiError('f-penulis', penulisValid); valid = valid && penulisValid;
  const genreValid = genre.length > 0;
  tandaiError('f-genre', genreValid); valid = valid && genreValid;
  const rakValid = rak.length > 0;
  tandaiError('f-rak', rakValid); valid = valid && rakValid;
  const tahunNum = tahunStr === "" ? new Date().getFullYear() : parseInt(tahunStr, 10);
  const tahunValid = tahunStr === "" || (!isNaN(tahunNum) && tahunNum > 0 && tahunNum <= 2100);
  tandaiError('f-tahun', tahunValid); valid = valid && tahunValid;

  if(!valid) return;

  let coverVal = "";
  const berkasCover = document.getElementById('in-cover-file').files[0];
  if(berkasCover){
    try{ coverVal = await bacaGambarJadiDataUrl(berkasCover); }catch(err){ coverVal = ""; }
  }
  if(!coverVal){
    const urlCover = document.getElementById('in-cover-url').value.trim();
    if(/^https?:\/\//i.test(urlCover)) coverVal = urlCover;
  }

  const eksemplarTotal = Math.max(1, parseInt(eksemplarStr, 10) || 1);
  const idBaru = buatIdBaru();
  const bukuBaru = {
    id: idBaru,
    judul, penulis,
    tahun: tahunNum,
    genre,
    lantai,
    area: namaAreaLantai(lantai),
    rak,
    callNumber: callNumberInput || (lantai + "00/" + penulis.slice(0,3).toUpperCase() + "/" + judul.slice(0,1).toLowerCase()),
    status,
    kembali: status === "dipinjam" ? "Belum ditentukan" : undefined,
    eksemplar: { total: eksemplarTotal, tersedia: status === "tersedia" ? eksemplarTotal : 0 },
    sinopsis: sinopsis || "Belum ada sinopsis untuk buku ini.",
    cover: coverVal || undefined,
    custom: true
  };

  BUKU.push(bukuBaru);
  simpanBukuTambahan();
  renderChips();
  renderGrid();

  formStatusMsg.classList.add('show');
  setTimeout(() => { tutupFormTambah(); }, 900);
});

/* ---------- Panel Pustakawan AI ---------- */
const aiToggle = document.getElementById('aiToggle');
const aiPanel = document.getElementById('aiPanel');
const aiMessages = document.getElementById('aiMessages');
const aiInput = document.getElementById('aiInput');
const aiSend = document.getElementById('aiSend');

function bukaAiPanel(){
  aiPanel.classList.add('show');
  aiInput.focus();
}
aiToggle.addEventListener('click', bukaAiPanel);
document.getElementById('aiClose').addEventListener('click', () => aiPanel.classList.remove('show'));
aiInput.addEventListener('keydown', (e) => { if(e.key === 'Enter') kirimPertanyaan(); });
aiSend.addEventListener('click', () => kirimPertanyaan());

function tambahPesan(teks, peran){
  const div = document.createElement('div');
  div.className = "msg " + peran;
  div.textContent = teks;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  return div;
}

function tambahRekomendasi(idList){
  if(!idList || idList.length === 0) return;
  const wrap = document.createElement('div');
  wrap.className = "msg ai";
  const list = document.createElement('div');
  list.className = "rekomendasi-list";
  idList.forEach(id => {
    const b = BUKU.find(x => x.id === id);
    if(!b) return;
    const item = document.createElement('div');
    item.className = "rekomendasi-item";
    item.textContent = `${b.judul} — Lt.${b.lantai} Rak ${b.rak}`;
    item.onclick = () => { aiPanel.classList.remove('show'); bukaDetail(b.id); };
    list.appendChild(item);
  });
  wrap.appendChild(list);
  aiMessages.appendChild(wrap);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

/* ---------- Konfigurasi asisten AI ----------
   GitHub Pages hanya menyajikan file statis, dan API key tidak boleh ditaruh di kode browser.
   - ENDPOINT_AI kosong  -> asisten memakai pencarian lokal (tanpa internet, tanpa API key).
   - ENDPOINT_AI diisi   -> alamat proxy/serverless milikmu sendiri (mis. Cloudflare Worker) yang
     menerima body berformat Anthropic /v1/messages, menambahkan API key di sisi server,
     lalu meneruskan jawabannya apa adanya. */
const KONFIG = { ENDPOINT_AI: "" };

(function(){
  const hint = document.querySelector('.ai-hint');
  if(hint && !KONFIG.ENDPOINT_AI){
    hint.textContent = "Mode pencarian lokal: jawaban disusun dari data katalog di halaman ini.";
  }
})();

const KATA_ABAIKAN = new Set(["ada","adakah","buku","novel","tentang","yang","dan","di","mana","dimana","apa","apakah",
  "untuk","saya","aku","kamu","dengan","dari","ke","itu","ini","cari","carikan","tolong","bisa","bagaimana","lokasi",
  "rak","lantai","punya","judul","karya","penulis","oleh","atau","sebuah","para","bagi","pada","akan","ingin","mau",
  "rekomendasi","rekomendasikan","koleksi","perpustakaan","tersedia","dipinjam","pinjam","ceritakan","lebih","lanjut",
  "menemukan","bisakah","sedang","sudah","belum","juga","lagi","dong","ya","nih","the","of","and"]);

function normalisasi(s){
  return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();
}
function tokenisasi(s){
  return normalisasi(s).split(" ").filter(k => k.length > 2 && !KATA_ABAIKAN.has(k));
}
function ringkasStatus(b){
  return b.status === "tersedia"
    ? `tersedia (${b.eksemplar.tersedia} dari ${b.eksemplar.total} eksemplar)`
    : `sedang dipinjam${b.kembali ? ", perkiraan kembali " + b.kembali : ""}`;
}

function pencarianLokalFallback(q){
  const token = tokenisasi(q);
  const qNorm = normalisasi(q);
  const skor = BUKU.map(b => {
    const j = normalisasi(b.judul), p = normalisasi(b.penulis), g = normalisasi(b.genre), s = normalisasi(b.sinopsis);
    let n = 0;
    if(qNorm.length > 3 && j.includes(qNorm)) n += 6;
    token.forEach(t => {
      if(j.includes(t)) n += 3;
      if(p.includes(t)) n += 3;
      if(g.includes(t)) n += 2;
      if(s.includes(t)) n += 1;
    });
    return {b, n};
  }).filter(x => x.n > 0).sort((a, c) => c.n - a.n);

  if(skor.length === 0){
    return {jawaban: "Belum menemukan buku yang cocok di katalog. Coba gunakan judul, nama penulis, atau genre, misalnya \"Tere Liye\" atau \"fiksi ilmiah\".", rekomendasi_id: []};
  }
  const teratas = skor.slice(0, 4).map(x => x.b);
  const utama = teratas[0];
  let jawaban = `"${utama.judul}" karya ${utama.penulis} ada di Lantai ${utama.lantai} (${utama.area}), Rak ${utama.rak}, ${ringkasStatus(utama)}.`;
  if(teratas.length > 1){
    jawaban += " Buku lain yang relevan: " +
      teratas.slice(1, 3).map(b => `"${b.judul}" (Lt.${b.lantai}, Rak ${b.rak})`).join("; ") + ".";
  }
  return {jawaban, rekomendasi_id: teratas.map(b => b.id)};
}

async function kirimPertanyaan(preset){
  const pertanyaan = (typeof preset === 'string' ? preset : aiInput.value).trim();
  if(!pertanyaan) return;
  if(typeof preset !== 'string') aiInput.value = "";
  tambahPesan(pertanyaan, "user");
  aiSend.disabled = true;
  const typingEl = document.createElement('div');
  typingEl.className = "ai-typing";
  typingEl.textContent = "Pustakawan sedang mencari…";
  aiMessages.appendChild(typingEl);
  aiMessages.scrollTop = aiMessages.scrollHeight;

  const tampilkan = (hasil) => {
    typingEl.remove();
    tambahPesan(hasil.jawaban || "Maaf, belum ada jawaban yang bisa diberikan.", "ai");
    tambahRekomendasi(hasil.rekomendasi_id);
  };

  // Tanpa endpoint: langsung pakai pencarian lokal.
  if(!KONFIG.ENDPOINT_AI){
    setTimeout(() => { tampilkan(pencarianLokalFallback(pertanyaan)); aiSend.disabled = false; }, 250);
    return;
  }

  const katalogRingkas = BUKU.map(b => ({
    id:b.id, judul:b.judul, penulis:b.penulis, tahun:b.tahun || null, genre:b.genre,
    lantai:b.lantai, area:b.area, rak:b.rak, status:b.status,
    kembali: b.kembali || null, sinopsis:b.sinopsis
  }));
  const systemPrompt = `Kamu adalah pustakawan AI ramah di sebuah perpustakaan. Kamu HANYA boleh menjawab berdasarkan data katalog berikut, jangan mengarang buku atau lokasi yang tidak ada di data ini:
${JSON.stringify(katalogRingkas)}

Jawab dalam Bahasa Indonesia, singkat (maksimal 3 kalimat), ramah, dan sertakan lantai serta nomor rak bila relevan. Jika tidak ada buku yang cocok di data, katakan dengan jujur bahwa katalog belum memiliki buku itu.
Balas HANYA dalam format JSON valid tanpa markdown, tanpa teks lain, persis seperti ini:
{"jawaban": "teks jawabanmu di sini", "rekomendasi_id": ["id_buku1", "id_buku2"]}
rekomendasi_id berisi 0 sampai 3 id buku dari data di atas yang paling relevan dengan pertanyaan.`;

  try{
    const response = await fetch(KONFIG.ENDPOINT_AI, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{role:"user", content: pertanyaan}]
      })
    });
    if(!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    let teksMentah = (data.content || []).map(c => c.text || "").join("").trim();
    teksMentah = teksMentah.replace(/```json|```/g, "").trim();
    let hasil;
    try{ hasil = JSON.parse(teksMentah); }
    catch(e){ hasil = pencarianLokalFallback(pertanyaan); }
    tampilkan(hasil);
  }catch(err){
    tampilkan(pencarianLokalFallback(pertanyaan));
  }finally{
    aiSend.disabled = false;
  }
}
