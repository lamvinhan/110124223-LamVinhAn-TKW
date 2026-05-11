let soluong = document.getElementsByClassName("sl");
let dongia = document.getElementsByClassName("dg");
let thanhtien = document.getElementsByClassName("tt");

let tongthanhtien = 0;

for (let i = 0; i < soluong.length; i++) {

    let tt = Number(soluong[i].innerHTML) * Number(dongia[i].innerHTML);

    thanhtien[i].innerHTML = tt;

    tongthanhtien += tt;
}

document.getElementById("tong").innerHTML = tongthanhtien;