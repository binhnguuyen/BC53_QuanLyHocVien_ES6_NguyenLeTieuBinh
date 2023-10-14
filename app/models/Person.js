class Person {
    constructor(
        _id,
        _name,
        _address,
        _email,
        _type
    ) {
        this.id = _id;
        this.namePerson = _name;
        this.address = _address;
        this.email = _email;
        this.type = _type;
    }
}

class Student extends Person {
    constructor(_id, _name, _address, _email, _type, _toan, _ly, _hoa) {
        super(_id, _name, _address, _email, _type);
        this.diemToan = _toan;
        this.diemLy = _ly;
        this.diemHoa = _hoa;
    }
    tinhDiemTB = () => {
        return ( Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa) ) / 3;
    }
}

class Employee extends Person {
    constructor(_id, _name, _address, _email, _type, _day, _salary) {
        super(_id, _name, _address, _email, _type);
        this.day = _day;
        this.salary = _salary;

    }
    tinhLuong = () => {
        return Number(this.day) * Number(this.salary);
    }
}

class Customer extends Person {
    constructor(_id, _name, _address, _email, _type, _congTy, _hoaDon, _danhGia) {
        super(_id, _name, _address, _email, _type);
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