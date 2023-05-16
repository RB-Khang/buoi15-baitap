// bai 1
var btnTest = document.getElementById('btn__test');
btnTest.onclick = function () {
    var khuVuc = document.getElementById('kv');
    var doiTuong = document.getElementById('dt');
    var diemCong1, diemCong2;
    var diemChuan = +document.getElementById('diem__chuan').value;

    if (khuVuc.value === "A") {
        diemCong1 = 2;
    }
    else if (khuVuc.value === "B") {
        diemCong1 = 1;
    } else if (khuVuc.value === "C") {
        diemCong1 = 0.5;
    }
    else {
        diemCong1 = 0;
    }


    if (doiTuong.value === "1") {
        diemCong2 = 2.5;
    }
    else if (doiTuong.value === "2") {
        diemCong2 = 1.5;
    }
    else if (doiTuong.value === "3") {
        diemCong2 = 1;
    }
    else {
        diemCong2 = 0;
    }



    var diemCong = diemCong1 + diemCong2;
    var diem1 = +document.getElementById('diem__1').value;
    var diem2 = +document.getElementById('diem__2').value;
    var diem3 = +document.getElementById('diem__3').value;
    var tongDiem = diem1 + diem2 + diem3 + diemCong;
    var result2 = "Đậu";

    if (tongDiem < diemChuan || diem1 <= 0 || diem2 <= 0 || diem3 <= 0) {
        result2 = "Trượt";

    } else {
        document.getElementById('faker').style.display = 'block';
    }
    document.getElementById('ket__qua').innerHTML = 'Tổng diểm đạt được là: ' + tongDiem + '  Kết quả: ' + result2;

}


// bai 2
var btnTienDien = document.getElementById('btn__tien__dien');

btnTienDien.onclick = function () {
    var tienDien;
    var soKW = +document.getElementById('kW').value;
    if (soKW <= 50) {
        tienDien = soKW * 500;
    } else if (soKW <= 100) {
        tienDien = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1110;
    }
    else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }
    document.getElementById('tien__dien').innerHTML = 'Tổng tiền điện phải trả là: ' + tienDien.toLocaleString();
}



// bai 3
var btnThue = document.getElementById('btn__thue');
btnThue.onclick = function () {
    var income = +document.getElementById('thu__nhap').value;
    var nguoiPhuThuoc = +document.getElementById('nguoi__pt').value;
    var netIncome;
    var taxRate;
    function thueSuat(a) {
        if (a <= 60) {
            return 5 / 100;
        } else if (a <= 120) {
            return 10 / 100;
        } else if (a <= 210) {
            return 15 / 100;
        }
        else if (a <= 384) {
            return 20 / 100;
        } else if (a <= 624) {
            return 25 / 100;
        } else if (a <= 960) {
            return 30 / 100;
        } else return 35 / 100;
    }
    taxRate = thueSuat(income);
    netIncome = income * 1000000 - 4000000 - nguoiPhuThuoc * 1600000;
    var tax = taxRate * netIncome;
    document.getElementById('thue').innerHTML = 'Tổng thuế phải nộp là: ' + tax.toLocaleString();
}





// bai 4

var typeKH = document.getElementById('type__kh');
var ketNoi = document.getElementById('so__ketnoi');
// var soKetNoi = +ketNoi.value;
var kenhCaoCap = document.getElementById('so__kenhcc');

var btnCap = document.getElementById('btn__cap');
function hienThi() {
    if (typeKH.value == "DN") {
        ketNoi.style.visibility = 'visible';
    } else if (typeKH.value == "ND") {
        ketNoi.style.visibility = 'hidden'
    }
}
var tongTienCap;
var tienKetNoi;
var tienCaoCap;
btnCap.onclick = function () {
    var soKetNoi = +ketNoi.value;
    var soKenhCC = +kenhCaoCap.value;
    if (typeKH.value == "DN") {
        if (0 < soKetNoi <= 10) {
            tienKetNoi = 75 * soKetNoi;
        } else if (10 < soKetNoi) {
            tienKetNoi = 750 + (soKetNoi - 10) * 5;
        }
        tienCaoCap = soKenhCC * 50;
        tongTienCap = tienKetNoi + tienCaoCap + 15;
    } else if (typeKH.value == "ND") {
        tienCaoCap = soKenhCC * 7.5;
        tongTienCap = 20.5 + tienCaoCap + 4.5;
    }
    document.getElementById('tien__cap').innerHTML = 'Tổng tiền phải trả là: ' + tongTienCap;
}
