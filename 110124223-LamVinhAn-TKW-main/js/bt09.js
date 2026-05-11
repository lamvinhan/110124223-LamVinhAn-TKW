function inBangCuuChuong() {
    let num = document.getElementById("soNhap").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerHTML = "Vui lòng nhập số!";
        return;
    }

    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += num + " x " + i + " = " + (num * i) + "<br>";
    }

    result.innerHTML = output;
}