// Mục đích làm thêm cái OBJ DSNV này là khi mình muốn mở rộng ra thêm tính năng quản lý nv giỏi, ql nv nghèo...bla...bla..., mà cùng chung muôn các thuộc tính của nhân viên phải đc thống nhất, ko đc có sự khác nhau dựa vbao2 người nhập thì mình nên làm cách này 
// Mình sẽ tách 1 cái obj ra rồi khi thêm nhân viên vào viện nghèo, giỏi hay gì đó mình sẽ khai như sau
// làm cách này thì sau này khi mình nảy ra thêm nhu cầu thêm viện gì gì đó thì sẽ có sự thống nhất các thuộc tính, đặt tên, ko có mỗi người 1 kiểu nữa
// ví dụ khi mình khai báo new như sau bên index thì mình sẽ tạo dc 1 obj mới
// var quanLySVNgheo = new DSSV()
// var quanLySVGioi = new DSSV()
// var quanLySVNgu = new DSSV()
function DSNV() {
    // mảng nhanVien này chứa các đối tượng nhân viên
    this.nhanVien = []; 

    // tìm hiểu thêm new Map, new Set

    // Phương thức thêm nhân viên, hàm này chỉ có chức năng duy nhất là thêm nhân viên
    this._themNhanVien = function (nv) {
        this.nhanVien.push(nv);
    };

    // Phương thức tìm vị trí nhân viên
    this._timViTriNhanVien = function (tkNV) {
        // mở lên xem thử coi có ra đc tkNV ko
        // alert("ma SV" + tkNV);
        /**
       * Tìm vị trí
       *   index = -1
       *  - Duyệt mảng => lấy từng object sinh vien
       *               => {tkNV: 1, tenSV: Nguyen Van A.,...}
       *               => so sánh cái tkNV trong object bằng tkNV truyền vào
       *               => gán lại ví trí index = i , break;
       *               => không tìm thấy nhanVien thì index = -1
       */
        var index = -1;
        for (var i = 0; i < this.nhanVien.length; i++) {
            var nv = dsnv.nhanVien[i]; // {tkNV: ..., tenNV: Nguyen Van A...,...}
            if (nv.tkNV == tkNV) {
                index = i;
                // nếu đúng rồi thì break luôn ko cần duyệt nữa
                break;
            }
        }
        return index;
    };

    // Phương thức tìm vị trí nhân viên
    /*
    this._timViTriNhanVienTheoLoai = function (loaiNV) {

        var index = [];
        for (var i = 0; i < this.nhanVien.length; i++) {
            var nv = dsnv.nhanVien[i]; // {tkNV: ..., tenNV: Nguyen Van A...,...}
            if (nv.xepLoai() == loaiNV) {
                index += i;
            }
        }
        return index;
    };
    */

    // Phương thức lấy thông tin nhân viên
    this._layThongTinNhanVien = function (tkNV) {
        var index = this._timViTriNhanVien(tkNV);
        // nhanVien[index] : {tkNV:1, name: "",...}
        if (index !== -1) {
            var nv = this.nhanVien[index];
            return nv;
        }
    }

    // Phương thức xoá nhân viên
    this._xoaNhanVien = function (tkNV) {
        // có thể xoá trực tiếp mà ko cần tìm index
        // mình có thể chạy for, nếu tkNV giống nhau thì xoá phần tử nhanVien đó
        var index = this._timViTriNhanVien(tkNV);
        if (index !== -1) {
            // Xoá phần tử của mảng: dùng splice dựa vào vị trí và số lượng
            this.nhanVien.splice(index, 1);
        }
    };

    // Phương thức sửa nhân viên
    this._capNhatNhanVien = function (nhanVien) {
        // nhanVien: {tkNV:"" , name:""}
        // tìm vị trí dựo vào
        var index = this._timViTriNhanVien(nhanVien.tkNV);
        // console.log("index: ", index);
        // this.nhanVien[index];
        // console.log('this.nhanVien[index];: ', this.nhanVien[index]);
        // lặp qua cái this.nhanVien và thay đổi giá trị mới... Các bạn về làm
        // this.nhanVien[index] lấy ra giá trị phần tử tại vị trí index trong mảng nhanVien
        // sau đó gán giá trị mới cho nó là nhanVien
        if (index !== -1) {
            this.nhanVien[index] = nhanVien;
        }
    };

    // Phương thức tìm sinh viên
    this.timNhanVien = function (loaiNV) {
        var index = this._timViTriNhanVienTheoLoai(loaiNV);
        // nhanVien[index] : {tkNV:1, name: "",...}
        if (index !== -1) {
            var sv = this.nhanVien[index];
            return sv;
        }
    }
}


