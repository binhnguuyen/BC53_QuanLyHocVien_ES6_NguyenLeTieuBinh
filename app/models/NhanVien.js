function NhanVien(
    _tkNV,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam,
) {
    this.tkNV = _tkNV;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    //method
    // tính tổng lương
    this.tinhTongLuong = function () {
        var tongLuong = 0;
        if ( this.chucVu == "Giám đốc" ) {
            tongLuong = Number(this.luongCB) * 3;
        }
        else if ( this.chucVu == "Trưởng phòng" ) {
            tongLuong = Number(this.luongCB) * 2;
        }
        else if ( this.chucVu == "Nhân viên" ) {
            tongLuong = Number(this.luongCB);
        }
        else {
            //
        }
        return tongLuong;
    };
    // xếp loại nhân viên
    this.xepLoai = function () {
        var xepLoai = "";
        if ( Number(this.gioLam) >= 192 )
            xepLoai = "Xuất sắc";
        else if ( Number(this.gioLam) >= 176 ) {
            xepLoai = "Giỏi";
        }
        else if ( Number(this.gioLam) >= 160 ) {
            xepLoai = "Khá";
        }
        else {
            xepLoai = "Trung bình";
        }
        return xepLoai;
        

    };
}
