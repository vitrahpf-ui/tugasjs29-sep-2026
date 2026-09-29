// 29/09/2026
let nama = "Emma";
let umur = 19;
let isStudent = true;
console.log(nama);
console.log(umur);
console.log(isStudent);

let namaDepan = "Emma";
let namaBelakang = "Watson";
let namaLengkap = namaDepan + " " + namaBelakang;
console.log(namaLengkap);

let angka1 = 15;
let angka2 = 4;

console.log("Penjumlahan: " + angka1 + angka2);
console.log("Perkalian: " + angka1 * angka2);
console.log("Sisa bagi: " + (angka1 % angka2));

let skor = 50;
skor *= 20;
console.log(skor);

// miss yang ini soalnya kebalik kan ya? di lms di tulis nya "Jika jam lebih dari jam 12, cetak "Selamat Pagi". Jika tidak, cetak "Selamat Siang"" ini kebalik kan ya miss? harusnya kurang dari jam 12 selamat pagi jika tidak selamat siang, soalnya dari tadi aku bingung kenapa jam 14 jawabanku selamat pagi padahal udah sesuai ikutin di lms. jadi aku bikin dua, yg kurang dari sama yang lebih dari
// sesuai sama lms (jam 14 itu selamat pagi)
let jam = 14;
if (jam > 12) {
  console.log("Selamat Pagi");
} else {
  console.log("Selamat Siang");
}

// ini yang jadinya jam 14 itu selamat siang
// let jam = 14;
// if (jam < 12) {
//   console.log("Selamat Pagi");
// } else {
//   console.log("Selamat Siang");
// }
