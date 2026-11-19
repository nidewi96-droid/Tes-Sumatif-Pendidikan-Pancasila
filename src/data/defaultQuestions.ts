import { Question } from '../types';
import imgAturanPagi from '../assets/images/aturan_keluarga_pagi_1795060778668.jpg';
import imgSikapMakan from '../assets/images/sikap_patuh_makan_1795060781185.jpg';
import imgGaruda from '../assets/images/lambang_garuda_pancasila_1795060780070.jpg';
import imgGotongRoyong from '../assets/images/gotong_royong_bersama_1795060780749.jpg';
import imgMusyawarah from '../assets/images/musyawarah_kelas_1795060781039.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================
  // 1. PILIHAN GANDA (12 SOAL: ID 1 s.d. 12)
  // =========================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Berbagai Aturan di Keluargaku',
    difficulty: 'Mudah',
    imageUrl: imgAturanPagi,
    imageCaption: 'Ilustrasi anak merapikan tempat tidur dan mainan pada pagi hari',
    text: 'Perhatikan gambar di atas! Kegiatan merapikan selimut dan membereskan mainan setelah bangun tidur merupakan contoh aturan yang berlaku di...',
    options: [
      { id: 'A', text: 'Lingkungan rumah / keluarga' },
      { id: 'B', text: 'Jalan raya' },
      { id: 'C', text: 'Perpustakaan sekolah' },
      { id: 'D', text: 'Pasar tradisional' },
    ],
    correctAnswer: 'A',
    explanation:
      'Merapikan tempat tidur dan membereskan mainan setelah digunakan merupakan contoh berbagai aturan yang berlaku di rumah atau lingkungan keluarga agar rumah tetap rapi dan nyaman.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Berbagai Aturan di Keluargaku',
    difficulty: 'Mudah',
    text: 'Setiap pagi sebelum berangkat ke sekolah, Dayu selalu berpamitan dan mencium tangan ayah serta ibu. Aturan tersebut bertujuan agar...',
    options: [
      { id: 'A', text: 'Diberi uang jajan lebih banyak' },
      { id: 'B', text: 'Orang tua mengetahui keberadaan kita dan merasa tenang' },
      { id: 'C', text: 'Tidak perlu mengerjakan pekerjaan rumah' },
      { id: 'D', text: 'Boleh pulang terlambat dari sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berpamitan kepada orang tua sebelum keluar rumah adalah aturan sopan santun di keluarga supaya orang tua mengetahui tujuan kita dan tidak merasa khawatir.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Sikapku Mematuhi Aturan',
    difficulty: 'Mudah',
    imageUrl: imgSikapMakan,
    imageCaption: 'Ilustrasi keluarga berdoa bersama sebelum makan',
    text: 'Perhatikan gambar di atas! Sikap mematuhi aturan saat akan makan bersama keluarga yang ditunjukkan pada gambar tersebut adalah...',
    options: [
      { id: 'A', text: 'Berbicara keras saat mulut penuh makanan' },
      { id: 'B', text: 'Berebut lauk-pauk yang ada di meja' },
      { id: 'C', text: 'Duduk dengan rapi dan berdoa bersama sebelum makan' },
      { id: 'D', text: 'Makan sambil berdiri dan berjalan-jalan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Gambar menunjukkan ayah, ibu, dan anak-anak duduk rapi di kursi makan dan berdoa bersama dengan tertib sebelum menyantap makanan.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Sikapku Mematuhi Aturan',
    difficulty: 'Sedang',
    text: 'Made selalu meletakkan sepatu di rak sepatu setelah pulang sekolah dan belajar pukul 19.00 setiap malam. Manfaat yang dirasakan Made dan keluarganya karena mematuhi aturan tersebut adalah...',
    options: [
      { id: 'A', text: 'Rumah menjadi berantakan dan sulit mencari barang' },
      { id: 'B', text: 'Hidup menjadi lebih disiplin, tertib, dan rumah tetap rapi' },
      { id: 'C', text: 'Membuat adik menjadi sering bertengkar' },
      { id: 'D', text: 'Waktu bermain menjadi hilang sama sekali' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mematuhi aturan di rumah melatih sikap disiplin, menjaga kerapian barang, serta menciptakan suasana keluarga yang tertib dan harmonis.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Lambang Pancasila',
    difficulty: 'Mudah',
    imageUrl: imgGaruda,
    imageCaption: 'Lambang Negara Indonesia: Garuda Pancasila dan lima simbol pada perisainya',
    text: 'Perhatikan gambar lambang negara Garuda Pancasila di atas! Di bagian tengah perisai terdapat simbol bintang berwarna emas dengan latar hitam. Simbol bintang tersebut melambangkan sila ke-...',
    options: [
      { id: 'A', text: 'Satu (Ketuhanan Yang Maha Esa)' },
      { id: 'B', text: 'Dua (Kemanusiaan yang Adil dan Beradab)' },
      { id: 'C', text: 'Tiga (Persatuan Indonesia)' },
      { id: 'D', text: 'Empat (Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Simbol bintang emas yang berada di bagian tengah perisai Garuda Pancasila merupakan lambang sila pertama Pancasila, yaitu Ketuhanan Yang Maha Esa.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Lambang Pancasila',
    difficulty: 'Mudah',
    text: 'Bunyi sila kedua Pancasila adalah "Kemanusiaan yang Adil dan Beradab". Lambang dari sila kedua Pancasila tersebut adalah...',
    options: [
      { id: 'A', text: 'Pohon beringin' },
      { id: 'B', text: 'Rantai emas' },
      { id: 'C', text: 'Kepala banteng' },
      { id: 'D', text: 'Padi dan kapas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Urutan lambang sila Pancasila adalah: 1. Bintang, 2. Rantai emas, 3. Pohon beringin, 4. Kepala banteng, 5. Padi dan kapas. Jadi sila kedua dilambangkan oleh rantai emas.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Lambang Pancasila',
    difficulty: 'Mudah',
    text: 'Sila keempat Pancasila berbunyi "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan". Simbol sila keempat pada perisai Garuda Pancasila adalah...',
    options: [
      { id: 'A', text: 'Bintang emas' },
      { id: 'B', text: 'Pohon beringin' },
      { id: 'C', text: 'Kepala banteng' },
      { id: 'D', text: 'Padi dan kapas' },
    ],
    correctAnswer: 'C',
    explanation:
      'Sila keempat Pancasila dilambangkan dengan gambar kepala banteng berwarna hitam dengan latar warna merah pada bagian kiri atas perisai.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Makna Sila dan Lambang Pancasila',
    difficulty: 'Sedang',
    text: 'Sila ketiga Pancasila dilambangkan dengan pohon beringin yang besar dan berakar kuat. Makna pohon beringin sebagai lambang sila ketiga adalah...',
    options: [
      { id: 'A', text: 'Tempat berlindung yang kokoh sehingga seluruh rakyat Indonesia bersatu meski berbeda-beda' },
      { id: 'B', text: 'Hewan sosial yang senang berkumpul bersama kelompoknya' },
      { id: 'C', text: 'Cahaya kerohanian dari Tuhan bagi seluruh manusia' },
      { id: 'D', text: 'Kebutuhan pokok makanan dan pakaian yang adil bagi semua rakyat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pohon beringin memiliki daun rimbun untuk berteduh dan akar gantung yang menjulur. Hal ini melambangkan Indonesia sebagai tempat berteduh yang kokoh dan pemersatu berbagai suku dan budaya.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Makna Sila dan Lambang Pancasila',
    difficulty: 'Sedang',
    text: 'Lambang sila kelima Pancasila adalah padi dan kapas. Makna dari simbol padi dan kapas tersebut adalah...',
    options: [
      { id: 'A', text: 'Keberanian membela kebenaran di mana saja' },
      { id: 'B', text: 'Pemenuhan kebutuhan pangan dan sandang secara adil dan makmur bagi seluruh rakyat' },
      { id: 'C', text: 'Kebiasaan bermusyawarah untuk mengambil keputusan' },
      { id: 'D', text: 'Kewajiban menjalankan ibadah sesuai agama masing-masing' },
    ],
    correctAnswer: 'B',
    explanation:
      'Padi melambangkan makanan (pangan) dan kapas melambangkan pakaian (sandang). Keduanya merupakan kebutuhan dasar manusia untuk mencapai keadilan dan kemakmuran bersama.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Penerapan Nilai-Nilai Pancasila di Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    imageUrl: imgGotongRoyong,
    imageCaption: 'Ilustrasi anak-anak bekerja sama membersihkan taman lingkungan',
    text: 'Perhatikan gambar di atas! Anak-anak dari berbagai latar belakang bekerja sama membersihkan taman agar tetap asri. Sikap yang ditunjukkan pada gambar mencerminkan penerapan nilai Pancasila sila ke-...',
    options: [
      { id: 'A', text: 'Satu' },
      { id: 'B', text: 'Tiga' },
      { id: 'C', text: 'Empat' },
      { id: 'D', text: 'Lima' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bekerja sama dan bergotong royong menjaga lingkungan tanpa membeda-bedakan teman menunjukkan kerukunan dan persatuan sesuai dengan nilai sila ketiga Pancasila (Persatuan Indonesia).',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Penerapan Nilai-Nilai Pancasila di Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    imageUrl: imgMusyawarah,
    imageCaption: 'Ilustrasi siswa berdiskusi dan bermusyawarah di ruang kelas',
    text: 'Perhatikan gambar di atas! Siswa kelas II sedang bermusyawarah memilih ketua kelas dengan tertib dan mengacungkan tangan sebelum berbicara. Sikap tersebut sesuai dengan pengamalan sila ke-...',
    options: [
      { id: 'A', text: 'Dua' },
      { id: 'B', text: 'Tiga' },
      { id: 'C', text: 'Empat' },
      { id: 'D', text: 'Lima' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bermusyawarah untuk mencapai mufakat dan menghargai pendapat teman saat berdiskusi merupakan penerapan nilai sila keempat Pancasila.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Penerapan Nilai-Nilai Pancasila di Kehidupan Sehari-hari',
    difficulty: 'Mudah',
    text: 'Saat jam istirahat, Putu melihat temannya terjatuh di halaman sekolah hingga lututnya tergores. Putu segera menolong temannya dan mengantarkannya ke ruang UKS. Sikap Putu mencerminkan pengamalan sila Pancasila ke-...',
    options: [
      { id: 'A', text: 'Satu' },
      { id: 'B', text: 'Dua' },
      { id: 'C', text: 'Empat' },
      { id: 'D', text: 'Lima' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menolong teman yang mengalami musibah atau kesulitan dengan penuh kasih sayang adalah wujud sikap kemanusiaan sesuai sila kedua Pancasila (Kemanusiaan yang Adil dan Beradab).',
  },

  // =========================================================
  // 2. PILIHAN GANDA KOMPLEKS (3 SOAL: ID 13 s.d. 15)
  // Setiap soal memiliki 3 pilihan jawaban, kemungkinan >1 benar
  // =========================================================
  {
    id: 13,
    type: 'pgk',
    topic: 'Berbagai Aturan di Keluargaku',
    difficulty: 'Sedang',
    imageUrl: imgAturanPagi,
    imageCaption: 'Ilustrasi anak merapikan kamar dan mainan di rumah',
    text: 'Perhatikan gambar di atas dan ingat kembali aturan di keluargamu! Manakah contoh aturan menjaga kerapian di rumah yang BENAR? (Pilih semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Melipat selimut dan merapikan bantal setelah bangun tidur' },
      { id: 'B', text: 'Mengembalikan mainan ke dalam kotak setelah selesai bermain' },
      { id: 'C', text: 'Membiarkan buku dan mainan berserakan di lantai sepanjang hari' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Aturan menjaga kerapian di rumah antara lain merapikan tempat tidur setelah bangun (A benar) dan menyimpan mainan kembali ke tempatnya (B benar). Membiarkan barang berserakan melanggar aturan kerapian (C salah).',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Makna Sila dan Lambang Pancasila',
    difficulty: 'Sukar',
    text: 'Bacalah pernyataan mengenai lambang dan makna sila Pancasila berikut ini! Manakah pernyataan yang BENAR? (Pilih semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Bintang emas melambangkan cahaya Tuhan Yang Maha Esa bagi seluruh rakyat' },
      { id: 'B', text: 'Kepala banteng melambangkan sila kedua karena banteng adalah hewan yang kuat' },
      { id: 'C', text: 'Rantai emas yang saling menyambung melambangkan hubungan sesama manusia yang saling membantu' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Bintang emas adalah lambang sila ke-1 yang bermakna cahaya ketuhanan (A benar). Rantai emas adalah lambang sila ke-2 yang bermakna persaudaraan dan saling menolong (C benar). Kepala banteng adalah lambang sila ke-4, bukan sila ke-2 (B salah).',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Penerapan Nilai-Nilai Pancasila di Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    imageUrl: imgGotongRoyong,
    imageCaption: 'Ilustrasi kegiatan gotong royong membersihkan taman bersama teman',
    text: 'Perhatikan gambar kegiatan membersihkan taman bersama! Sikap mana sajakah yang sesuai dengan nilai-nilai Pancasila saat melakukan kegiatan tersebut? (Pilih semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Membagi tugas dengan adil dan bekerja sama tanpa membedakan teman' },
      { id: 'B', text: 'Ikut menyapu daun dan membuang sampah pada tempatnya dengan gembira' },
      { id: 'C', text: 'Hanya menonton teman bekerja sambil membuang sampah sembarangan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Bekerja sama tanpa membedakan teman (A) serta ikut menjaga kebersihan bersama dengan gembira (B) mencerminkan sila ke-2, ke-3, dan ke-5 Pancasila. Bermalas-malasan dan membuang sampah sembarangan tidak sesuai nilai Pancasila (C salah).',
  },

  // =========================================================
  // 3. PILIHAN GANDA KOMPLEKS KATEGORI (5 SOAL: ID 16 s.d. 20)
  // Setiap soal memiliki 3 pernyataan yang harus direspons Benar / Salah
  // =========================================================
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Berbagai Aturan di Keluargaku',
    difficulty: 'Mudah',
    text: 'Perhatikan beberapa pernyataan tentang aturan yang berlaku di rumah berikut ini. Tentukan apakah setiap pernyataan tersebut BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Mengerjakan tugas sekolah tepat waktu merupakan contoh aturan belajar di rumah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menonton televisi hingga larut malam pada hari sekolah adalah aturan yang baik bagi siswa kelas II.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menjaga kebersihan halaman dan membuang sampah di tempat sampah merupakan aturan bersama di keluarga.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Belajar dan mengerjakan PR tepat waktu termasuk aturan di rumah (BENAR).\n2. Tidur terlalu malam membuat anak mengantuk di sekolah; aturan tidur yang baik adalah tidak larut malam (SALAH).\n3. Membuang sampah pada tempatnya menjaga kebersihan rumah bersama (BENAR).',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Sikapku Mematuhi Aturan',
    difficulty: 'Sedang',
    imageUrl: imgSikapMakan,
    imageCaption: 'Ilustrasi keluarga makan bersama dengan tertib dan berdoa',
    text: 'Amati gambar keluarga yang sedang berdoa sebelum makan di atas! Tentukan apakah sikap mematuhi aturan pada pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Mencuci tangan dengan bersih dan berdoa sebelum makan menunjukkan sikap patuh pada aturan keluarga.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mengambil makanan secukupnya dan menghabiskannya adalah sikap terpuji saat makan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Berteriak dan mendorong adik saat mengambil makanan merupakan sikap mematuhi aturan di meja makan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Mencuci tangan dan berdoa sebelum makan adalah aturan baik dan tertib (BENAR).\n2. Mengambil makanan secukupnya agar tidak mubazir adalah sikap terpuji (BENAR).\n3. Berteriak dan mendorong adik melanggar aturan sopan santun di meja makan (SALAH).',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Lambang Pancasila',
    difficulty: 'Sedang',
    imageUrl: imgGaruda,
    imageCaption: 'Perisai Garuda Pancasila dan lima simbol sila Pancasila',
    text: 'Perhatikan gambar perisai Garuda Pancasila di atas! Tentukan kebenaran dari pernyataan mengenai simbol Pancasila berikut ini (BENAR atau SALAH):',
    statements: [
      {
        id: 's1',
        text: 'Simbol pohon beringin terletak di bagian kanan atas perisai dan melambangkan sila ketiga.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Simbol padi dan kapas melambangkan sila keempat Pancasila.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Simbol rantai emas pada perisai melambangkan sila kedua Pancasila.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Pohon beringin berada di kanan atas perisai dan menjadi lambang sila ke-3 (BENAR).\n2. Padi dan kapas adalah lambang sila ke-5, sedangkan sila ke-4 adalah kepala banteng (SALAH).\n3. Rantai emas adalah lambang sila ke-2 Pancasila (BENAR).',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Makna Sila dan Lambang Pancasila',
    difficulty: 'Sukar',
    text: 'Bacalah dengan teliti pernyataan tentang makna sila dan lambang Pancasila berikut. Pilihlah BENAR atau SALAH untuk setiap pernyataan!',
    statements: [
      {
        id: 's1',
        text: 'Banteng merupakan hewan sosial yang suka berkumpul, sehingga kepala banteng melambangkan musyawarah bersama.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rantai pada sila kedua terdiri dari mata rantai berbentuk persegi dan lingkaran yang melambangkan persatuan laki-laki dan perempuan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Makna sila pertama Pancasila adalah tidak perlu menghargai teman yang berbeda agama.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Banteng suka berkumpul sehingga dijadikan simbol musyawarah pada sila ke-4 (BENAR).\n2. Mata rantai segi empat (laki-laki) dan lingkaran (perempuan) saling mengait melambangkan kebersamaan dan saling membantu (BENAR).\n3. Sila pertama justru mengajarkan kita untuk beriman kepada Tuhan dan saling menghormati antarumat beragama (SALAH).',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Penerapan Nilai-Nilai Pancasila di Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    imageUrl: imgMusyawarah,
    imageCaption: 'Ilustrasi musyawarah siswa di dalam kelas',
    text: 'Perhatikan gambar siswa yang sedang bermusyawarah di kelas! Tentukan apakah pernyataan mengenai penerapan nilai Pancasila berikut ini BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Mengangkat tangan sebelum menyampaikan pendapat saat diskusi adalah sikap tertib dan sopan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Memaksakan kehendak sendiri agar pendapat kita selalu dipilih oleh teman-teman adalah sikap yang benar.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menerima hasil keputusan musyawarah bersama dengan lapang dada merupakan pengamalan sila keempat Pancasila.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Mengacungkan tangan sebelum berbicara membuat diskusi berjalan tertib dan menghormati orang lain (BENAR).\n2. Dalam musyawarah tidak boleh memaksakan kehendak pribadi (SALAH).\n3. Melaksanakan keputusan bersama dengan ikhlas adalah inti pengamalan sila ke-4 Pancasila (BENAR).',
  },

  // =========================================================
  // 4. ISIAN SINGKAT (10 SOAL: ID 21 s.d. 30)
  // =========================================================
  {
    id: 21,
    type: 'isian_singkat',
    topic: 'Berbagai Aturan di Keluargaku',
    difficulty: 'Mudah',
    text: 'Sebelum berangkat ke sekolah atau keluar rumah untuk bermain, kita wajib meminta izin atau ... kepada ayah dan ibu.',
    correctAnswer: 'berpamitan',
    acceptedAnswers: ['berpamitan', 'pamit', 'minta izin', 'meminta izin', 'izin'],
    explanation:
      'Meminta izin atau berpamitan kepada orang tua adalah aturan utama di keluarga sebelum bepergian agar orang tua tahu ke mana kita pergi.',
  },
  {
    id: 22,
    type: 'isian_singkat',
    topic: 'Berbagai Aturan di Keluargaku',
    difficulty: 'Mudah',
    text: 'Setelah bangun tidur di pagi hari, selimut, bantal, dan tempat tidur harus segera kita ...',
    correctAnswer: 'rapikan',
    acceptedAnswers: ['rapikan', 'dirapikan', 'bereskan', 'dibereskan', 'merapikan', 'lipat'],
    explanation:
      'Salah satu aturan pagi hari di rumah adalah segera merapikan atau membereskan tempat tidur sendiri setelah bangun tidur.',
  },
  {
    id: 23,
    type: 'isian_singkat',
    topic: 'Sikapku Mematuhi Aturan',
    difficulty: 'Mudah',
    text: 'Jika seluruh anggota keluarga mematuhi aturan di rumah, maka suasana di rumah akan terasa rukun dan ...',
    correctAnswer: 'damai',
    acceptedAnswers: ['damai', 'nyaman', 'tenang', 'aman', 'tentram', 'tertib', 'harmonis'],
    explanation:
      'Mematuhi aturan di keluarga membuat hubungan antaranggota keluarga menjadi rukun, damai, nyaman, dan tertib.',
  },
  {
    id: 24,
    type: 'isian_singkat',
    topic: 'Sikapku Mematuhi Aturan',
    difficulty: 'Sedang',
    text: 'Ketika orang tua sedang berbicara atau memberikan nasihat, sikap anak yang patuh adalah ... dengan sopan dan tidak memotong pembicaraan.',
    correctAnswer: 'mendengarkan',
    acceptedAnswers: ['mendengarkan', 'dengarkan', 'menyimak', 'memperhatikan'],
    explanation:
      'Mendengarkan dan menyimak nasihat orang tua dengan sopan merupakan bentuk sikap patuh dan hormat dalam keluarga.',
  },
  {
    id: 25,
    type: 'isian_singkat',
    topic: 'Lambang Pancasila',
    difficulty: 'Mudah',
    imageUrl: imgGaruda,
    imageCaption: 'Lambang Negara Garuda Pancasila dengan simbol di bagian tengah perisai',
    text: 'Perhatikan gambar perisai pada dada Garuda Pancasila di atas! Simbol sila pertama Pancasila yang terletak di tengah perisai berbentuk ...',
    correctAnswer: 'bintang',
    acceptedAnswers: ['bintang', 'bintang emas'],
    explanation:
      'Simbol sila pertama Pancasila (Ketuhanan Yang Maha Esa) yang berada di tengah perisai berbentuk bintang emas.',
  },
  {
    id: 26,
    type: 'isian_singkat',
    topic: 'Lambang Pancasila',
    difficulty: 'Mudah',
    text: 'Bunyi sila ketiga Pancasila adalah "Persatuan Indonesia". Lambang sila ketiga Pancasila adalah pohon ...',
    correctAnswer: 'beringin',
    acceptedAnswers: ['beringin', 'pohon beringin'],
    explanation:
      'Sila ketiga Pancasila yang berbunyi Persatuan Indonesia dilambangkan dengan gambar pohon beringin.',
  },
  {
    id: 27,
    type: 'isian_singkat',
    topic: 'Makna Sila dan Lambang Pancasila',
    difficulty: 'Sedang',
    text: 'Lambang sila kedua Pancasila berupa mata rantai emas yang saling menyambung dan tidak terputus. Hal tersebut bermakna sesama manusia harus saling ...',
    correctAnswer: 'membantu',
    acceptedAnswers: ['membantu', 'menolong', 'tolong menolong', 'tolong-menolong', 'bersatu', 'bekerja sama', 'menyayangi'],
    explanation:
      'Mata rantai yang saling berkaitan tanpa putus melambangkan bahwa manusia membutuhkan orang lain dan harus saling membantu serta menolong.',
  },
  {
    id: 28,
    type: 'isian_singkat',
    topic: 'Makna Sila dan Lambang Pancasila',
    difficulty: 'Sedang',
    text: 'Simbol sila kelima Pancasila adalah padi dan kapas. Padi melambangkan kebutuhan makanan (pangan), sedangkan kapas melambangkan kebutuhan ...',
    correctAnswer: 'pakaian',
    acceptedAnswers: ['pakaian', 'sandang', 'baju'],
    explanation:
      'Dalam simbol sila kelima Pancasila, padi melambangkan bahan makanan (pangan) dan kapas melambangkan bahan pakaian (sandang).',
  },
  {
    id: 29,
    type: 'isian_singkat',
    topic: 'Penerapan Nilai-Nilai Pancasila di Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    imageUrl: imgGotongRoyong,
    imageCaption: 'Ilustrasi anak-anak membersihkan lingkungan taman secara bersama-sama',
    text: 'Perhatikan gambar di atas! Kegiatan bekerja bersama-sama untuk membersihkan lingkungan agar pekerjaan cepat selesai dan terasa ringan disebut ...',
    correctAnswer: 'gotong royong',
    acceptedAnswers: ['gotong royong', 'kerja bakti', 'bekerja sama', 'kerja sama', 'kerjasama'],
    explanation:
      'Bekerja bersama-sama secara sukarela demi kepentingan bersama agar pekerjaan cepat selesai disebut gotong royong (atau kerja bakti).',
  },
  {
    id: 30,
    type: 'isian_singkat',
    topic: 'Penerapan Nilai-Nilai Pancasila di Kehidupan Sehari-hari',
    difficulty: 'Mudah',
    text: 'Rajin beribadah, berdoa sebelum dan sesudah belajar, serta menghormati teman yang berbeda agama merupakan penerapan nilai Pancasila sila ke-...',
    correctAnswer: '1',
    acceptedAnswers: ['1', 'satu', 'pertama', 'kesatu'],
    explanation:
      'Beribadah, berdoa kepada Tuhan, dan saling menghormati antarumat beragama merupakan penerapan sila ke-1 Pancasila (Ketuhanan Yang Maha Esa).',
  },
];
