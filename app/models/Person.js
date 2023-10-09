class Person {
    constructor(
        _id,
        _name,
        _address,
        _email,
    ) {
        this.id = _id;
        this.namePerson = _name;
        this.address = _address;
        this.email = _email;
    }
}

class Student extends Person {
    constructor(_id, _name, _address, _email, _toan, _ly, _hoa) {
        super(id, namePerson, address, email);
        this.toan = _toan;
        this.ly = _ly;
        this.hoa = _hoa;
    }
}

class Employee extends Person {
    constructor(_id, _name, _address, _email, _day, _salary) {
        super(id, namePerson, address, email);
        this.day = _day;
        this.salary = _salary;

    }
}

class Customer extends Person {
    constructor(_id, _name, _address, _email, _congTy, _hoaDon, _danhGia) {
        super(id, namePerson, address, email);
        this.congTy = _congTy;
        this.hoaDon = _hoaDon;
        this.danhGia = _danhGia;
    }
}



//method
// tính tổng lương
// this.tinhTongLuong = function () {
//     var tongLuong = 0;
//     if ( this.chucVu == "Giám đốc" ) {
//         tongLuong = Number(this.luongCB) * 3;
//     }
//     else if ( this.chucVu == "Trưởng phòng" ) {
//         tongLuong = Number(this.luongCB) * 2;
//     }
//     else if ( this.chucVu == "Nhân viên" ) {
//         tongLuong = Number(this.luongCB);
//     }
//     else {
//         //
//     }
//     return tongLuong;
// };
// // xếp loại nhân viên
// this.xepLoai = function () {
//     var xepLoai = "";
//     if ( Number(this.gioLam) >= 192 )
//         xepLoai = "Xuất sắc";
//     else if ( Number(this.gioLam) >= 176 ) {
//         xepLoai = "Giỏi";
//     }
//     else if ( Number(this.gioLam) >= 160 ) {
//         xepLoai = "Khá";
//     }
//     else {
//         xepLoai = "Trung bình";
//     }
//     return xepLoai;

// };