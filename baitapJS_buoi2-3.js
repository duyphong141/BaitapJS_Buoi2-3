//! Bài 1: Tính tiền lương nhân viên
/**
 * Sơ đồ 3 khối
 * Khối 1: Input
 * luong1Ngay
 * soNgayLam
 * 
 * Khối 2: Quy trình tính toán
 * luongTong = luong1Ngay * soNgayLam
 * 
 * Khối 3: Output
 * luongTong
 * 
 */

document.getElementById('btnTinhLuong').onclick = function() {
    var luong1Ngay = Number(document.getElementById('luong1Ngay').value);
    var soNgayLam = Number(document.getElementById('soNgayLam').value);
    
    var luongTong = luong1Ngay * soNgayLam;
    document.getElementById('luongTong').innerHTML = luongTong.toLocaleString() + ' VNĐ';
}


//! Bài 2: Tính giá trị trung bình  
/**
 * Sơ đồ 3 khối
 * Input:
 * so1, so2, so3, so4, so5
 * 
 * Output:
 * giaTriTrungBinh
 * 
 * Tính toán:
 * 
 * giaTriTrungBinh = (so1 + so2 + so3 +so4 +so5)/5;
 */

document.getElementById('btnTinhTrungBinh').onclick = function() {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);
    var so4 = Number(document.getElementById('so4').value);
    var so5 = Number(document.getElementById('so5').value);
    
    var giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5)/5;
    document.getElementById('giaTriTrungBinh').innerHTML = giaTriTrungBinh;
}


//! Bài 3: Quy đổi tiền
/**
 * Sơ đồ 3 khối
 * Input: gia_1Usd
 * Output: gia_2Usd
 * Tính toán: gia_2Usd = gia_1Usd * 2;
 */

document.getElementById('btnDoiTien').onclick = function() {
    var soDo = Number(document.getElementById('soDo').value);
    var ketQuaQuyDoi = 23500 * soDo;
    document.getElementById('ketQuaQuyDoi').innerHTML = ketQuaQuyDoi.toLocaleString() + ' VNĐ';
}


//! Bài 4: Tính diện tích, chu vi hình chữ nhật
/**
 * Sơ đồ 3 khối:
 * Input:
 * chieuDai
 * chieuRong
 * 
 * Output:
 * chuVi, dienTich
 * 
 * Tính toán:
 * chuVi = (chieuDai + chieuRong) * 2;
 * dienTich = chieuDai * chieuRong;
 */

 document.getElementById('btnTinh').onclick = function() {
var chieuDai = Number(document.getElementById('chieuDai').value);
var chieuRong = Number(document.getElementById('chieuRong').value);
var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;

document.getElementById('chuViDienTich').innerHTML = 'Diện tích: ' + dienTich + '; Chu vi: ' + chuVi;
}

//! Bài 5: Tính tổng 2 ký số
/** Sơ đồ 3 khối
 * Input: Nhập vào 1 số có 2 chữ số
 * var number = 23
 * 
 * Tính toán:  Lấy số hàng chục và đơn vị
 * var soHangChuc = Math.floor(number/10);
 * var soHangDonVi = soHangChuc % 10;
 * 
 * Output:
 * tong = soHangChuc + soHangDonVi;
 */

document.getElementById('btnTinhTong').onclick = function() {
    var number = Number(document.getElementById('nhapSo').value);
    var soHangChuc = Math.floor(number/10);
    var soHangDonVi = number % 10;
    var tong = soHangChuc + soHangDonVi;

    document.getElementById('ketQuaTinhTong').innerHTML = tong;

}

