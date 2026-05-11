// Mảng đồ dùng trong JavaScript

const doDung = [
  {
    id: 1,
    ten: "Bàn học",
    gia: 1500000
  },
  {
    id: 2,
    ten: "Ghế",
    gia: 500000
  },
  {
    id: 3,
    ten: "Đèn bàn",
    gia: 250000
  }
];

// In danh sách đồ dùng
console.log(doDung);

// Thêm đồ dùng mới
doDung.push({
  id: 4,
  ten: "Laptop",
  gia: 20000000
});

// Duyệt mảng
doDung.forEach(item => {
  console.log(item.ten + " - " + item.gia + "đ");
});

// Tìm đồ dùng theo id
const timDoDung = doDung.find(item => item.id === 2);

console.log(timDoDung);

// Lọc đồ dùng giá trên 1 triệu
const giaCao = doDung.filter(item => item.gia > 1000000);

console.log(giaCao);

// Lấy tên đồ dùng
const tenDoDung = doDung.map(item => item.ten);

console.log(tenDoDung);