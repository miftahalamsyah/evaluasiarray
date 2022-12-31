export const Questions = [
  {
    id: Math.random(),
    question: "Buatlah sebuah array dengan jenis integer dengan nama myNumbers!",
    correctAnswer: "int myNumbers[] = {4, 2, 0, 6, 9};",
    wrongAnswers: [
      "int myNumbers[] = [4, 2, 0, 6, 9]",
      "int myNumbers{} = {4, 2, 0, 6, 9};",
      "INT myNumbers {4, 2, 0, 6, 9};"
    ]
  },

  {
    id: Math.random(),
    question: "Print value dari elemen kedua dalam array myNumbers!",
    correctAnswer: "int myNumbers[] = {4, 2, 0, 6, 9}; printf(\"%d\", myNumbers[1] );",
    wrongAnswers: [
      "int myNumbers[] = {4, 2, 0, 6, 9}; printf(\"%d\", myNumbers[2] );",
      "int myNumbers[] = {4, 2, 0, 6, 9}: printf(\"%c\", myNumbers[2] ):",
      "int myNumbers[] = {4, 2, 0, 6, 9}; printf(\"%c\", myNumbers[1] );"
    ]
  },

  {
    id: Math.random(),
    question: "Ubah value elemen pertama menjadi 33!",
    correctAnswer: "int myNumbers[] = {4, 2, 0, 6, 9}; myNumbers[0] = 33;",
    wrongAnswers: [
      "int myNumbers[5] = {4, 2, 0, 6, 9}; myNumbers[1] = 33;",
      "int myNumbers[0] = {4, 2, 0, 6, 9}: myNumbers[0] = 33:",
      "int myNumbers[] = {4, 2, 0, 6, 9}; myNumbers[1] = 33 ;"
    ]
  },
  
  {
    id: Math.random(),
    question: "Loop elemen yang ada dalam array menggunakan for loop!",
    correctAnswer: "int myNumbers[] = {4, 2, 0, 6, 9}; int i; for (i = 0; i < 5; i++) { printf(\"%d\\n\", myNumbers[i] ); }",
    wrongAnswers: [
      "int myNumbers[] = {4, 2, 0, 6, 9}; int i; for (i = 0; i < 5; i++) { printf(\"%c\\n\", myNumbers[i] ); }",
      "int myNumbers[] = {4, 2, 0, 6, 9}; int i; for (i = 0; i < 5; i++) { printf(\"%c\\n\", myNumbers[5] ); }",
      "int myNumbers[] = {4, 2, 0, 6, 9}; int i; for (i = 0; i < 5; i++) { printf(\"%d\\n\", myNumbers[5] ); }"
    ]
  },
  {
    id: Math.random(),
    question: "Manakah inisialisasi yang digunakan untuk membuat array satudimensi?",
    correctAnswer: "int nama_array[10];",
    wrongAnswers: [
      "int nama_array(10);",
      "integer nama_array(10):",
      "integer nama_array[10];"
    ]
  },
  {
    id: Math.random(),
    question: "Cara ambil huruf C dari array berikut: char huruf[5] = {'a', 'b', 'c', 'd', 'e'};",
    correctAnswer: "huruf[2];",
    wrongAnswers: [
      "huruf[3];",
      "huruf(2);",
      "huruf(3);"
    ]
  },
  
  {
    id: Math.random(),
    question: "Keluaran dari kode berikut " +
        " char huruf[5] = {'a', 'r', 'a', 'y', 'x'}; " +
        "printf(\"Huruf: %c\\n\", huruf[2]);",
    correctAnswer: "Huruf: a",
    wrongAnswers: [
      "Huruf: r",
      "Error",
      "Kesalahan sintaks"
    ]
  },

  {
    id: Math.random(),
    question: "Buat array dengan indeks array ke 1 adalah 20 dan 4 adalah 2",
    correctAnswer: "int myNumbers[] = {4, 20, 31, 43, 2};",
    wrongAnswers: [
      "int myNumbers() = (4, 20, 31, 43, 2);",
      "int myNumbers[] = {20, 4, 43, 21, 31};",
      "int myNumbers() = (20, 4, 43, 21, 31);"
    ]
  },

  // {
  //   id: Math.random(),
  //   question: "Quais o menor e o maior pais do mundo?",
  //   correctAnswer: "Vaticano e Russia",
  //   wrongAnswers: [
  //     "Brasil e E.U.A",
  //     "Angola e Reino Unido",
  //     "Bélgica e Maurícias"
  //   ]
  // },
  //
  // {
  //   id: Math.random(),
  //   question: "Quantas casas decimais tem o numero PI?",
  //   correctAnswer: "Infinitas",
  //   wrongAnswers: [
  //     "Duas",
  //     "Cem",
  //     "Tres"
  //   ]
  // },
  //
  // {
  //   id: Math.random(),
  //   question: "Atualmente, quantos elementos químicos a tabela periódica possui?",
  //   correctAnswer: "118",
  //   wrongAnswers: [
  //     "53",
  //     "164",
  //     "97"
  //   ]
  // },
  //
  // {
  //   id: Math.random(),
  //   question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
  //   correctAnswer: "8 minutos",
  //   wrongAnswers: [
  //     "1 segundo",
  //     "1 dia",
  //     "8 segundos"
  //   ]
  // },
]

export const topics = [
  "Biology",
  "Maths",
  "English",
  "History",
]
