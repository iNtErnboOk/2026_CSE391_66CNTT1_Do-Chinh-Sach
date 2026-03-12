console.log("Hello from JavaScript!");
let age = 20;
const name = "An";
let isStudent = true;

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);

console.log(1 + 2 * 3);
console.log("Hello " + "world");
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
console.log(tinhDiemTrungBinh(7, 8, 9));
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  if (avg >= 8) {
    console.log("Giỏi");
  } else if (avg >= 6.5) {
    console.log("Giỏi");
  } else if (avg >= 5) {
    console.log("Giỏi");
  } else {
    console.log("Giỏi");
  }
}
