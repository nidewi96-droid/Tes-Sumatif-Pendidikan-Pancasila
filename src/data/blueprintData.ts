import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase A (Kelas II) Mata Pelajaran Pendidikan Pancasila
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Pendidikan Pancasila Kelas II Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal berbagai aturan yang berlaku di lingkungan keluarga sehari-hari.',
    indikatorSoal:
      'Disajikan gambar kegiatan merapikan tempat tidur dan mainan pada pagi hari, peserta didik dapat menentukan lingkungan tempat aturan tersebut berlaku.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat memahami tujuan diberlakukannya aturan berpamitan di lingkungan keluarga.',
    indikatorSoal:
      'Disajikan narasi siswa yang berpamitan sebelum berangkat ke sekolah, peserta didik dapat menentukan tujuan dari aturan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menunjukkan sikap mematuhi aturan saat makan bersama keluarga di rumah.',
    indikatorSoal:
      'Disajikan gambar keluarga yang berdoa sebelum makan, peserta didik dapat mengidentifikasi sikap patuh pada aturan makan bersama.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan manfaat mematuhi aturan di rumah bagi diri sendiri dan keluarga.',
    indikatorSoal:
      'Disajikan cerita kebiasaan anak menata sepatu dan belajar teratur, peserta didik dapat menyimpulkan manfaat mematuhi aturan di rumah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal simbol-simbol sila Pancasila pada perisai lambang negara Garuda Pancasila.',
    indikatorSoal:
      'Disajikan gambar lambang negara Garuda Pancasila, peserta didik dapat menentukan sila yang dilambangkan oleh simbol bintang emas.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi lambang sila-sila Pancasila secara tepat.',
    indikatorSoal:
      'Disajikan bunyi sila kedua Pancasila, peserta didik dapat menyebutkan simbol yang sesuai pada perisai Garuda Pancasila.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mencocokkan bunyi sila keempat Pancasila dengan simbolnya.',
    indikatorSoal:
      'Disajikan bunyi sila keempat Pancasila, peserta didik dapat menentukan lambang sila keempat pada perisai Garuda Pancasila.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memahami makna lambang pohon beringin pada sila ketiga Pancasila.',
    indikatorSoal:
      'Disajikan deskripsi pohon beringin yang rindang dan berakar kuat, peserta didik dapat menentukan makna lambang sila ketiga Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memahami makna lambang padi dan kapas pada sila kelima Pancasila.',
    indikatorSoal:
      'Disajikan informasi tentang simbol padi dan kapas, peserta didik dapat menjelaskan makna keadilan pangan dan sandang pada sila kelima.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi penerapan nilai persatuan Pancasila dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan gambar anak-anak bergotong royong membersihkan taman bersama, peserta didik dapat menentukan sila Pancasila yang diamalkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi penerapan nilai musyawarah Pancasila di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan gambar siswa yang bermusyawarah dengan tertib di kelas, peserta didik dapat menentukan sila Pancasila yang sesuai.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menunjukkan sikap menolong sesama sebagai penerapan sila kedua Pancasila.',
    indikatorSoal:
      'Disajikan cerita anak yang menolong temannya saat terjatuh, peserta didik dapat menentukan sila Pancasila yang diterapkan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengelompokkan contoh aturan menjaga kerapian di lingkungan keluarga.',
    indikatorSoal:
      'Disajikan gambar aktivitas pagi di kamar dan tiga pilihan perilaku, peserta didik dapat memilih semua contoh aturan menjaga kerapian rumah yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis kesesuaian antara simbol dan makna sila-sila Pancasila.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang makna simbol bintang, kepala banteng, dan rantai emas, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi sikap yang mencerminkan nilai Pancasila dalam kegiatan gotong royong.',
    indikatorSoal:
      'Disajikan gambar kerja bakti bersama dan tiga pilihan sikap, peserta didik dapat memilih semua perilaku yang sesuai dengan nilai Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan aturan yang baik dan tidak baik di lingkungan keluarga.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang aturan belajar, jam tidur, dan menjaga kebersihan rumah, peserta didik dapat menentukan kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menilai sikap mematuhi aturan saat makan bersama keluarga.',
    indikatorSoal:
      'Disajikan gambar keluarga berdoa sebelum makan dan tiga pernyataan sikap, peserta didik dapat menentukan nilai Benar atau Salah pada tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi pasangan lambang dan urutan sila pada perisai Garuda Pancasila.',
    indikatorSoal:
      'Disajikan gambar Garuda Pancasila dan tiga pernyataan letak serta pasangan simbol sila, peserta didik dapat menentukan Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis makna filosofis sederhana dari lambang dan nilai sila Pancasila.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai makna kepala banteng, mata rantai, dan sila pertama, peserta didik dapat menentukan kebenaran tiap pernyataan (Benar/Salah).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menilai sikap terpuji dalam kegiatan bermusyawarah di kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan gambar musyawarah siswa di kelas dan tiga pernyataan perilaku, peserta didik dapat menentukan Benar atau Salah pada setiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan aturan sopan santun sebelum keluar rumah dalam keluarga.',
    indikatorSoal:
      'Disajikan kalimat rumpang tentang kewajiban sebelum berangkat sekolah, peserta didik dapat menuliskan jawaban singkat yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan contoh aturan kemandirian setelah bangun tidur di rumah.',
    indikatorSoal:
      'Disajikan kalimat rumpang tentang tindakan terhadap selimut dan bantal di pagi hari, peserta didik dapat melengkapi dengan kata yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan dampak positif sikap mematuhi aturan di rumah.',
    indikatorSoal:
      'Disajikan pernyataan tentang kepatuhan anggota keluarga terhadap aturan, peserta didik dapat menuliskan kondisi suasana rumah yang tercipta.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'UUD NRI Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menunjukkan sikap patuh dan hormat saat mendengarkan nasihat orang tua.',
    indikatorSoal:
      'Disajikan situasi orang tua sedang memberi nasihat, peserta didik dapat menuliskan sikap yang seharusnya dilakukan dengan sopan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan bentuk simbol sila pertama Pancasila berdasarkan gambar.',
    indikatorSoal:
      'Disajikan gambar Garuda Pancasila, peserta didik dapat menuliskan nama simbol yang berada di tengah perisai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan simbol sila ketiga Pancasila.',
    indikatorSoal:
      'Disajikan bunyi sila ketiga Pancasila, peserta didik dapat melengkapi nama pohon yang menjadi lambang sila ketiga.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan makna simbol rantai emas pada sila kedua Pancasila.',
    indikatorSoal:
      'Disajikan deskripsi mata rantai yang saling menyambung, peserta didik dapat menuliskan makna hubungan antarsesama manusia.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan makna simbol kapas pada sila kelima Pancasila.',
    indikatorSoal:
      'Disajikan perbandingan makna padi sebagai pangan, peserta didik dapat menuliskan kebutuhan pokok yang dilambangkan oleh kapas.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan istilah kerja sama dalam penerapan nilai Pancasila di masyarakat.',
    indikatorSoal:
      'Disajikan gambar anak-anak membersihkan taman bersama, peserta didik dapat menuliskan istilah untuk kegiatan bekerja bersama-sama tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi urutan sila Pancasila dari contoh sikap berdoa dan toleransi beragama.',
    indikatorSoal:
      'Disajikan contoh sikap beribadah dan menghormati teman berbeda agama, peserta didik dapat menuliskan nomor sila Pancasila yang sesuai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    case 'isian_singkat':
      return 'Isian Singkat';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  if (q.type === 'isian_singkat') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : '-';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami materi ${q.topic} dalam pelajaran Pendidikan Pancasila.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus mengenai ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('aturan')) {
    return 'UUD NRI Tahun 1945';
  }
  return 'Pancasila';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0, isian_singkat: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & mengevaluasi nilai',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg || 0,
      percentage: total > 0 ? Math.round(((typeCountMap.pg || 0) / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk || 0,
      percentage: total > 0 ? Math.round(((typeCountMap.pgk || 0) / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori || 0,
      percentage: total > 0 ? Math.round(((typeCountMap.pgk_kategori || 0) / total) * 100) : 0,
    },
    {
      type: 'isian_singkat',
      label: 'Isian Singkat',
      count: typeCountMap.isian_singkat || 0,
      percentage: total > 0 ? Math.round(((typeCountMap.isian_singkat || 0) / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
