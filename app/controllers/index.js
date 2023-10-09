// Muốn xài obj thì phải khai new trước
// bằng cách dùng cái DSNV này mình ko cần phải new những cái obj mới khi mình muốn thêm obj mới
var dsnv = new DSNV();
var dsnvTheoLoai = new DSNV();

var dataJson = localStorage.getItem("DSNV");
// console.log('dataJson: ', dataJson);
if (dataJson !== null) {
    // chuyển string thành mảng
    dsnv.nhanVien = JSON.parse(dataJson);
    // console.log('dsnv.nhanVien : ', dsnv.nhanVien);
    // renderTable(dsnv.nhanVien);

    // Thêm thuộc tính vào cho nhanVien trong dsnv
    for (var i = 0; i < dsnv.nhanVien.length; i++) {
        // Cách 1:
        // var nv = dsnv.nhanVien[i];
        // nv = new SinhVien(
        //     nv.tkNV,
        //     nv.tenSV,
        //     nv.email,
        //     nv.matKhau,
        //     nv.ngaySinh,
        //     nv.khoaHoc,
        //     nv.diemToan,
        //     nv.diemLy,
        //     nv.diemHoa
        // );
        // dsnv.nhanVien[i] = nv;

        // Cách 2:
        dsnv.nhanVien[i] = new NhanVien(
            dsnv.nhanVien[i].tkNV,
            dsnv.nhanVien[i].tenNV,
            dsnv.nhanVien[i].email,
            dsnv.nhanVien[i].matKhau,
            dsnv.nhanVien[i].ngayLam,
            dsnv.nhanVien[i].luongCB,
            dsnv.nhanVien[i].chucVu,
            dsnv.nhanVien[i].gioLam,
        );
    }
    // console.log('dsnv.nhanVien : ', dsnv.nhanVien);
    // dùng map thì code sẽ ngắn gọn như sau
    // item tương ứng với từng phần tử trong array
    // map dùng giống callback function
    // dsnv.nhanVien = JSON.parse(dataJson).map(function (item) {
    //     return new SinhVien(
    //         item.tkNV,
    //         item.tenSV,
    //         item.email,
    //         item.matKhau,
    //         item.ngaySinh,
    //         item.khoaHoc,
    //         item.diemToan,
    //         item.diemLy,
    //         item.diemHoa
    //     );
    // });
    renderTable(dsnv.nhanVien);
}

// Hàm lấy thông tin từ giao diện và trả về
// Lúc tạo là tham số, truyền vào là đối số
function getEle(selector) {
    return document.querySelector(selector);
}


// Hàm reset form
function resetForm() {
    getEle("#tknv").value = "";
    // chỗ reset này ko cần cho disable
    getEle("#tknv").disabled = false;
    getEle("#name").value = "";
    getEle("#email").value = "";
    getEle("#password").value = "";
    getEle("#datepicker").value = "";
    getEle("#luongCB").value = "";
    getEle("#chucvu").value = "";
    getEle("#gioLam").value = "";
}

// Hàm renderTable với tham số là listArr để đưa thông tin ngoài giao diện
function renderTable(listArr) {
    // listArr: là tham số có kiểu dữ liệu là 1 mảng
    // render table
    // Tạo ra 1 string rỗng trước trước khi gán nó vào bảng
    var htmlString = "";

    for (var i = 0; i < listArr.length; i++) {
        var nhanVien = listArr[i];

        htmlString += `<tr>
            <td>${nhanVien.tkNV}</td>
            <td>${nhanVien.tenNV}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${nhanVien.tinhTongLuong()}</td>
            <td>${nhanVien.xepLoai()}</td>
            <td>
                <button class="btn btn-danger" onclick="suaNV('${nhanVien.tkNV}')" data-toggle="modal"
                data-target="#myModal">Edit</button>
                <button class="btn btn-danger" onclick="xoaNV('${nhanVien.tkNV}')">Delete</button>
            </td>
        </tr>`
    }
    // bỏ dữ liệu vào table đc tạo sẵn bên HTML
    getEle("#tableDanhSach").innerHTML = htmlString;
}

// Hàm lấy thông tin từ form
function layThongTinTuForm() {
    var tkNV = getEle("#tknv").value;
    var tenNV = getEle("#name").value;
    var email = getEle("#email").value;
    var matKhau = getEle("#password").value;
    var ngayLam = getEle("#datepicker").value;
    var luongCB = getEle("#luongCB").value;
    var chucVu = getEle("#chucvu").value;
    var gioLam = getEle("#gioLam").value;

    return new NhanVien(
        tkNV,
        tenNV,
        email,
        matKhau,
        ngayLam,
        luongCB,
        chucVu,
        gioLam
    );
}

function validationNV(value) {
    // thông qua hàm layThongTinTuForm mình đã tạo 1 obj NhanVien mới, và dc trả về giá trị đc gán vào nv
    var accErr = getEle("#tbTKNV");
    var nameErr = getEle("#tbTen");
    var emailErr = getEle("#tbEmail");
    var passErr = getEle("#tbMatKhau");
    var dayErr = getEle("#tbNgay");
    var salaryErr = getEle("#tbLuongCB");
    var positionErr = getEle("#tbChucVu");
    var hourErr = getEle("#tbGiolam");

    var messBlankTK = "Mã nhân viên không đc để trống";
    var messLengthTK = "Độ dài mã nhân viên phải 4-6 ký tự";
    var messBlankName = "Tên nhân viên không đc để trống";
    var messCharName = "Tên nhân viên phải là chữ";
    var messBlankMail = "Email nhân viên không đc để trống";
    var messFormMail = "Email nhân viên không đúng định dạng";
    var messBlankPass = "Mật khẩu nhân viên không đc để trống";
    var messPass = "Mật khẩu nhân viên phải chứa ít nhất ,1 số, 1 ký tự in hoa, 1 ký tự đặc biệt và dài 6-10 ký tự ";
    var messBlankDay = "Ngày làm không đc để trống";
    var messFormDay = "Ngày làm phải đúng định dạng dd/mm/yyyy";
    var messBlankSalary = "Lương không đc để trống";
    var messMinMaxSalary = "Lương phải là số trong 1000000-20000000";
    var messTruePosition = "Chức vụ không hợp lệ";
    var messBlankHour = "Số giờ làm không đc để trống";
    var messMinMaxHour = "Số giờ làm phải là số trong 80-200 giờ";
    var messCheckNnum = "Số giờ làm phải là số";

    // sử dụng "&&" chỉ chạy khi tất cả đều đúng, nên khi thằng đầu sai nó sẽ ko chạy thằng sau nữa
    // còn nếu sd & thì nó chạy thằng thứ nhất xong dù đúng hay sai nó vẫn chạy thằng thứ 2
    // ① "&"
    // Toán tử  "&" là 1 toán tử logic cũng là bitwise(ビット演算: AND, OR, XOR, NOT, Shift)
    // Nó đánh giá 2 trá trị trước sau của mình
    // Kết quả trả lại giá trị nhị phân nếu trong TH đánh giá dữ liệu booleans
    // Hoạt động dựa trên dữ liệu booleans(True or False) và dữ liệu nhị phân
    // Sử dụng để kiểm tra điều kiện logic và cũng được sử dụng để che dấu các bit nhất định như bit chẵn lẻ.
    // ②"&&"
    // Toán tử  "&" hoàn toàn là toán tử logic
    // Nó đánh giá trá trị trước mình đúng thì nó mới đánh giá trị theo sau mình
    // Chỉ được sử dụng để kiểm tra điều kiện logic.

    // kiểm tra mã tài khoản nv có bỏ trống, và có đúng số ký tự hay ko
    var valid = kiemTraRong(value.tkNV, accErr, messBlankTK) && kiemTraDoDai(value.tkNV, accErr, 4, 6, messLengthTK);

    // kiểm tra tên value có bỏ trống, và có ký tự nào ngoài chữ hay ko
    valid &= kiemTraRong(value.tenNV, nameErr, messBlankName) && kiemTraChuoi(value.tenNV, nameErr, messCharName);

    // kiểm tra email có bỏ trống, và đúng định dạng của email hay ko
    valid &=
        kiemTraRong(value.email, emailErr, messBlankMail) &&
        kiemTraEmail(value.email, emailErr, messFormMail);

    // kiểm tra mật khẩu có bỏ trống, và đúng định dạng của mật khẩu (có 1 số, 1 ký tự thường, 1 ký tự in hoa và dài 6-10 ký tự) hay ko
    valid &=
        kiemTraRong(value.matKhau, passErr, messBlankPass) &&
        kiemTraMatKhau(value.matKhau, passErr, messPass);

    // kiểm tra ngày làm có để trống và đúng định dạng dd/mm/yyy hay ko
    valid &=
        kiemTraRong(value.ngayLam, dayErr, messBlankDay) &&
        kiemTraDinhDangNgay(value.ngayLam, dayErr, messFormDay);

    // kiểm tra lương có để trống hay ko
    valid &=
        kiemTraRong(value.luongCB, salaryErr, messBlankSalary) && kiemTraLonNho(value.luongCB, salaryErr, 1000000, 20000000, messMinMaxSalary);

    // kiểm tra chức có hợp lệ hay ko
    var chucVu = ["Giám đốc", "Trưởng phòng", "Nhân viên"];
    valid &= kiemTraChucVu(value.chucVu, chucVu, positionErr, messTruePosition);

    // kiểm tra số giờ làm có để trống hay ko
    valid &=
        kiemTraRong(value.gioLam, hourErr, messBlankHour) &&
        kiemTraSo(value.gioLam, hourErr, messCheckNnum) &&
        kiemTraLonNho(value.gioLam, hourErr, 80, 200, messMinMaxHour);

    if (valid) {
        return valid;
    }
    else {
        accErr.style.display = "block";
        nameErr.style.display = "block";
        emailErr.style.display = "block";
        passErr.style.display = "block";
        dayErr.style.display = "block";
        salaryErr.style.display = "block";
        positionErr.style.display = "block";
        hourErr.style.display = "block";
    }
}

// Hàm thêm nhân viên
function ThemNV() {
    var nv = layThongTinTuForm();

    // Do kiểm tra trùng ko dùng trong phần cập nhật nên phải sử dụng riêng mình nó ở đây
    var accErr = document.querySelector("#tbTKNV");
    var messDuplicateTK = "Mã nhân viên này đã tồn tại";
    var valid = validationNV(nv) && kiemTraTrung(nv.tkNV, dsnv.nhanVien, accErr, messDuplicateTK);

    if (valid) {
        // sau khi kiểm tra validation rồi thì dùng hàm _themNhanVien bên DSNV để push thuộc tính trong nv vào obj nhanVien
        dsnv._themNhanVien(nv);
        // console.log("dsnv", dsnv.nhanVien);

        // localStorage: nơi lưu trữ (chỉ chấp nhận json) - json là 1 kiểu dữ liệu
        // JSON.stringify: convert array to json
        var data = JSON.stringify(dsnv.nhanVien);
        // lưu data xuống localStorage
        localStorage.setItem("DSNV", data);

        resetForm();
        renderTable(dsnv.nhanVien);
    }
    else {
        accErr.style.display = "block";
    }
}


// Hàm xoá sinh viên
function xoaNV(maNVTuButton) {
    dsnv._xoaNhanVien(maNVTuButton);
    renderTable(dsnv.nhanVien);
    // Xoá xong phải update dữ liệu lại cho local storage ko thì F5 xong nó lại hiện ra như chưa xoá
    // localStorage: nơi lưu trữ (chỉ chấp nhận json) - json là 1 kiểu dữ liệu
    // JSON.stringify: convert array to json
    var data = JSON.stringify(dsnv.nhanVien);
    // lưu data xuống localStorage
    localStorage.setItem("DSNV", data);
}


// Hàm sửa sinh viên
// Hàm này để đưa thông tin SV đc click lên table
function suaNV(maSVTuButton) {
    var nv = dsnv._layThongTinNhanVien(maSVTuButton);

    if (nv) {
        getEle("#tknv").value = nv.tkNV;
        // khi sửa thì ko đc sửa mã NV thì ta nên làm ẩn để user ko sửa đc
        getEle("#tknv").disabled = true;
        getEle("#name").value = nv.tenNV;
        getEle("#email").value = nv.email;
        getEle("#password").value = nv.matKhau;
        getEle("#datepicker").value = nv.ngayLam;
        getEle("#luongCB").value = nv.luongCB;
        getEle("#chucvu").value = nv.chucVu;
        getEle("#gioLam").value = nv.gioLam;
    }
}

// Hàm cập nhật nhân viên
// trước khi cập nhật thì nó lại lấy thông tin đã đc sửa từ trên table xuống
function capNhatNV() {
    var nv = layThongTinTuForm();
    var valid = validationNV(nv);
    if (valid) {
        dsnv._capNhatNhanVien(nv);
        resetForm();
    }
    else {
        // do nothing
    }

    renderTable(dsnv.nhanVien);

    // Sửa xong phải update dữ liệu lại cho local storage ko thì F5 xong nó lại hiện ra như chưa sửa
    // localStorage: nơi lưu trữ (chỉ chấp nhận json) - json là 1 kiểu dữ liệu
    // JSON.stringify: convert array to json
    var data = JSON.stringify(dsnv.nhanVien);
    // lưu data xuống localStorage
    localStorage.setItem("DSNV", data);
}


// Hàm tìm kiếm sinh viên
// trước khi cập nhật thì nó lại lấy thông tin đã đc sửa từ trên table xuống
function timNV() {
    var loaiNVErr = getEle("#tbLoaiNV");
    var textSearch = getEle("#searchName").value.trim()?.toLowerCase();
    var messNotFound = "Không tìm thấy loại nhân viên này";
    var messFound = "Kết quả tìm kiếm được như sau";
    var messReqToType = "Vui lòng nhập từ khoá";
    var result = [];

    if (textSearch.length > 0) {
        result = dsnv.nhanVien.filter(function (nv) {
            // tìm kiếm trong danh sách nhân viên mà có xếp loại sau khi đã chuyển về từ thường mà có gồm từ khoá mà muốn tra
            return nv.xepLoai().toLowerCase().includes(textSearch);
        });
        renderTable(result);
        console.log('result: ', result);
    } else {
        renderTable(dsnv.nhanVien);
    }

    if (textSearch.length == 0) {
        loaiNVErr.innerHTML = messReqToType;
        loaiNVErr.style.display = "block";
    }
    else if (textSearch.length > 0 && result == "") {
        loaiNVErr.innerHTML = messNotFound;
        loaiNVErr.style.display = "block";
    }
    else {
        loaiNVErr.innerHTML = messFound;
        loaiNVErr.style.display = "block";
    }

    // index = dsnv._timViTriNhanVienTheoLoai(loaiNV);


    /*
    var htmlString = "";

    for (var i = 0; i < index.length; i++) {
        var nhanVien = dsnv.nhanVien[index[i]];

        htmlString += `<tr>
            <td>${nhanVien.tkNV}</td>
            <td>${nhanVien.tenNV}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${nhanVien.tinhTongLuong()}</td>
            <td>${nhanVien.xepLoai()}</td>
            <td>
                
            </td>
        </tr>`
        tableLoaiNVBody.innerHTML = htmlString;
    }
    */
}

