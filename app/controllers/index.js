/**
 * @param {*} xetLoaiDoiTuong
 * Chức năng: xét đối tượng để hiện ra ô input cho phù hợp
 * Tham số: không
 * Chú ý:
 */
const student = "Student";
const employee = "Employee";
const customer = "Customer";
const xetLoaiDoiTuong = () => {
    let loaiDoiTuong = getEle("#personType").value;
    let studentTab1 = getEle("#studentTab1");
    let studentTab2 = getEle("#studentTab2");
    let studentTab3 = getEle("#studentTab3");
    let employeeTab1 = getEle("#employeeTab1");
    let employeeTab2 = getEle("#employeeTab2");
    let customerTab1 = getEle("#customerTab1");
    let customerTab2 = getEle("#customerTab2");
    let customerTab3 = getEle("#customerTab3");

    studentTab1.classList.add("d-none");
    studentTab2.classList.add("d-none");
    studentTab3.classList.add("d-none");
    employeeTab1.classList.add("d-none");
    employeeTab2.classList.add("d-none");
    customerTab1.classList.add("d-none");
    customerTab2.classList.add("d-none");
    customerTab3.classList.add("d-none");

    if (loaiDoiTuong === student) {
        studentTab1.classList.remove("d-none");
        studentTab2.classList.remove("d-none");
        studentTab3.classList.remove("d-none");
    }
    else if (loaiDoiTuong === employee) {
        employeeTab1.classList.remove("d-none");
        employeeTab2.classList.remove("d-none");
    }
    else if (loaiDoiTuong === customer) {
        customerTab1.classList.remove("d-none");
        customerTab2.classList.remove("d-none");
        customerTab3.classList.remove("d-none");
    }
    else {
        
    }
}




/**
 * @param {*} fetchPerson
 * Chức năng: fetch dữ liệu từ API về
 * Tham số: không
 * Chú ý:
 */
const fetchPerson = () => {
    onLoading();
    getPersonList()
        // thành công thì in ra sp
        .then(function (res) {
            renderTable(res.data);
            offLoading();
        })
        // thất bại thì báo lỗi, hoặc in ra thông báo tuỳ mình
        .catch(function (err) {
            offLoading();
            console.log("err", err);
        })
        // luôn luôn chạy dù thành công, thất bại
        .finally(() => {
            console.log("Xong");
        });
}
fetchPerson();


/**
 * @param {*} renderTable
 * Chức năng: render dữ liệu ra giao diện
 * Tham số: không
 * Chú ý:
 */
let trDiemToan = getEle("#trDiemToan");
let trDiemLy = getEle("#trDiemLy");
let trDiemHoa = getEle("#trDiemHoa");
let trDiemTB = getEle("#trDiemTB");
let trDay = getEle("#trDay");
let trSalaryForDay = getEle("#trSalaryForDay");
let trSalary = getEle("#trSalary");
let trCongTy = getEle("#trCongTy");
let trHoaDon = getEle("#trHoaDon");
let trDanhGia = getEle("#trDanhGia");

const renderTable = (list) => {

    trDiemToan.classList.add("d-none");
    trDiemLy.classList.add("d-none");
    trDiemHoa.classList.add("d-none");
    trDiemTB.classList.add("d-none");
    trDay.classList.add("d-none");
    trSalaryForDay.classList.add("d-none");
    trSalary.classList.add("d-none");
    trCongTy.classList.add("d-none");
    trHoaDon.classList.add("d-none");
    trDanhGia.classList.add("d-none");

    let htmlContent = "";
    list.forEach((value) => {
        htmlContent += `
            <tr>
                <td>${value.id}</td>
                <td>${value.namePerson}</td>
                <td>${value.address}</td>
                <td>${value.email}</td>
                <td>${value.type}</td>
                <td>
                    <button id="btnEdit" class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="editPerson(${value.id})">Edit</button>
                    <button id="btnDelete" class="btn btn-danger ml-3" onclick="deletePerson(${value.id})">Delete</button>
                </td>
            </tr>
        `
    })
    getEle('#tableDanhSach').innerHTML = htmlContent;
}


/**
 * @param {*} renderTableByType
 * Chức năng: render dữ liệu ra giao diện
 * Tham số: không
 * Chú ý:
 */
const renderTableByType = (list) => {

    trDiemToan.classList.add("d-none");
    trDiemLy.classList.add("d-none");
    trDiemHoa.classList.add("d-none");
    trDiemTB.classList.add("d-none");
    trDay.classList.add("d-none");
    trSalaryForDay.classList.add("d-none");
    trSalary.classList.add("d-none");
    trCongTy.classList.add("d-none");
    trHoaDon.classList.add("d-none");
    trDanhGia.classList.add("d-none");
    let htmlContent = "";

    list.forEach((value) => {
        if (value.type === student) {
            trDiemToan.classList.remove("d-none");
            trDiemLy.classList.remove("d-none");
            trDiemHoa.classList.remove("d-none");
            trDiemTB.classList.remove("d-none");
            htmlContent += `
            <tr>
                <td>${value.id}</td>
                <td>${value.namePerson}</td>
                <td>${value.address}</td>
                <td>${value.email}</td>
                <td>${value.type}</td>
                <td>${value.diemToan}</td>
                <td>${value.diemLy}</td>
                <td>${value.diemHoa}</td>
                <td>${value.diemTB}</td>
                <td>
                    <button id="btnEdit" class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="editPerson(${value.id})">Edit</button>
                    <button id="btnDelete" class="btn btn-danger ml-3" onclick="deletePerson(${value.id})">Delete</button>
                </td>
            </tr>
            `
        }
        else if (value.type === employee) {
            trDay.classList.remove("d-none");
            trSalaryForDay.classList.remove("d-none");
            trSalary.classList.remove("d-none");
            htmlContent += `
            <tr>
                <td>${value.id}</td>
                <td>${value.namePerson}</td>
                <td>${value.address}</td>
                <td>${value.email}</td>
                <td>${value.type}</td>
                <td>${value.day}</td>
                <td>${value.salary}</td>
                <td>${value.tienLuong}</td>
                <td>
                    <button id="btnEdit" class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="editPerson(${value.id})">Edit</button>
                    <button id="btnDelete" class="btn btn-danger ml-3" onclick="deletePerson(${value.id})">Delete</button>
                </td>
            </tr>
            `
        }
        else if (value.type === customer) {
            trCongTy.classList.remove("d-none");
            trHoaDon.classList.remove("d-none");
            trDanhGia.classList.remove("d-none");
            htmlContent += `
            <tr>
                <td>${value.id}</td>
                <td>${value.namePerson}</td>
                <td>${value.address}</td>
                <td>${value.email}</td>
                <td>${value.type}</td>
                <td>${value.congTy}</td>
                <td>${value.hoaDon}</td>
                <td>${value.danhGia}</td>
                <td>
                    <button id="btnEdit" class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="editPerson(${value.id})">Edit</button>
                    <button id="btnDelete" class="btn btn-danger ml-3" onclick="deletePerson(${value.id})">Delete</button>
                </td>
            </tr>
            `
        }
    })
    getEle('#tableDanhSach').innerHTML = htmlContent;

}


/**
 * @param {*} getInfo
 * Chức năng: lấy dữ liệu người dùng nhập vào ô dữ liệu trên form
 * Tham số: không
 * Chú ý:
 */
const getInfo = () => {
    // lấy nguyên cái form rồi dom vào
    const elements = document.querySelectorAll('#personForm input, #personForm select');
    let person = {};

    elements.forEach((ele, index) => {
        // console.log(ele.value, ele.name, index)
        //destructuring
        const { value, name } = ele;
        person[name] = value;

    });

    // Destructuring (bóc tách phần tử)
    const { id, namePerson, address, email, type, diemToan, diemLy, diemHoa, day, salary, congTy, hoaDon, danhGia } = person;

    if (person.type === "Student") {
        return new Student(id, namePerson, address, email, type, diemToan, diemLy, diemHoa);
    }
    else if (person.type === "Employee") {
        return new Employee(id, namePerson, address, email, type, day, salary);
    }
    else if (person.type === "Customer") {
        return new Customer(id, namePerson, address, email, type, congTy, hoaDon, danhGia);
    }
    else {
        // do nothing
    }
}


/**
 * @param {*} addPerson
 * Chức năng: thêm người dùng vào API và render ra giao diện
 * Tham số: không
 * Chú ý: thêm hàm editFood vào đối tượng window, khi mình ấn edit thì nó sẽ đi tìm trong window có hàm editFood hay ko
 */
const addPerson = () => {
    let loaiDoiTuong = getEle("#personType").value;
    // lấy thông tin món ăn từ user nhập lên form
    const person = getInfo();

    if (loaiDoiTuong === student) {
        addStudentList(person)
            .then((res) => {
                console.log("res.data", res.data);
                // call API lấy lại danh sách người dùng mới sau khi thêm thành công
                fetchPerson();
                // Đóng modal sau khi add
                getEle("#btnDong").click();

            })
            .catch((err) => {
                console.log("err: ", err);
            })
            // luôn luôn chạy dù thành công, thất bại
            .finally(() => {
                console.log("Xong");
            });
    }
    else if (loaiDoiTuong === employee) {
        addEmployeeList(person)
            .then((res) => {
                console.log("res.data", res.data);
                // call API lấy lại danh sách người dùng mới sau khi thêm thành công
                fetchPerson();
                // Đóng modal sau khi add
                getEle("#btnDong").click();

            })
            .catch((err) => {
                console.log("err: ", err);
            })
            // luôn luôn chạy dù thành công, thất bại
            .finally(() => {
                console.log("Xong");
            });
    }
    else {
        addPersonList(person)
            .then((res) => {
                console.log("res.data", res.data);
                // call API lấy lại danh sách người dùng mới sau khi thêm thành công
                fetchPerson();
                // Đóng modal sau khi add
                getEle("#btnDong").click();

            })
            .catch((err) => {
                console.log("err: ", err);
            })
            // luôn luôn chạy dù thành công, thất bại
            .finally(() => {
                console.log("Xong");
            });
    }

    resetForm();
}


/**
 * @param {*} deletePerson
 * Chức năng: thêm người dùng vào API và render ra giao diện
 * Tham số: không
 * Chú ý:   // nếu dùng const thì nó sẽ bị lỗi is not defined
            // sửa lại thành window. để nó đem ra global ra ngoài cái file foodList
            // bất cứ file nào cũng đọc đc file của global nên mình phải đưa ra window
            // thêm hàm editFood vào đối tượng window, khi mình ấn edit thì nó sẽ đi tìm trong window có hàm editFood hay ko
 */
window.deletePerson = (id) => {
    delPersonList(id)
        .then((res) => {
            console.log("res.data", res.data);
            // call API lấy lại danh sách món ăn mới sau khi xoá thành công
            fetchPerson();
        })
        .catch((err) => {
            console.log("err: ", err);
        })
        // luôn luôn chạy dù thành công, thất bại
        .finally(() => {
            console.log("Xong");
        });
}


/**
 * @param {*} editPerson
 * Chức năng: thêm người dùng vào API và render ra giao diện
 * Tham số: không
 * Chú ý:   // nếu dùng const thì nó sẽ bị lỗi is not defined
            // sửa lại thành window. để nó đem ra global ra ngoài cái file foodList
            // bất cứ file nào cũng đọc đc file của global nên mình phải đưa ra window
            // thêm hàm editFood vào đối tượng window, khi mình ấn edit thì nó sẽ đi tìm trong window có hàm editFood hay ko
 */
// Edit person
window.editPerson = (id) => {
    // ẩn btn thêm nhân viên
    getEle('#btnThemNV').style.display = 'none'
    // hiện thị btn cập nhật
    getEle('#btnCapNhat').style.display = 'inline-block'

    editPersonByID(id)
        .then((res) => {
            console.log("res.data", res.data);
            let person = res.data

            // đưa person.id vào trong button cập nhật
            // khi làm thế này thì cái button cập nhật của mình sẽ thêm vào cái data-id có id bằng cái id của food mình ấn sửa
            getEle("#btnCapNhat").setAttribute("data-id", person.id);

            getEle("#personID").value = person.id;
            getEle("#personName").value = person.namePerson;
            getEle("#personAddress").value = person.address;
            getEle("#personEmail").value = person.email;
            getEle("#personType").value = person.type;
            xetLoaiDoiTuong();
            if (person.type === "Student") {
                getEle("#studentDiemToan").value = person.diemToan;
                getEle("#studentDiemLy").value = person.diemLy;
                getEle("#studentDiemHoa").value = person.diemHoa;
            }
            else if (person.type === "Employee") {
                getEle("#employeeDay").value = person.day;
                getEle("#employeeSalary").value = person.salary;
            }
            else if (person.type === "Customer") {
                getEle("#customerCongTy").value = person.congTy;
                getEle("#customerHoaDon").value = person.hoaDon;
                getEle("#customerDanhGia").value = person.danhGia;
            }
            else {
                // do nothing
            }
        })
        .catch((err) => {
            console.log("err: ", err);
        })
        // luôn luôn chạy dù thành công, thất bại
        .finally(() => {
            console.log("Xong");
        });
}


/**
 * @param {*} updatePerson
 * Chức năng: cập nhật person
 * Tham số: không
 * Chú ý: 
 */
const updatePerson = () => {

    // lấy thông tin person sau khi chỉnh sửa
    const person = getInfo();

    // lấy id của person muốn cập nhật
    // cái data-id này đã đc set trong hàm editPerson
    const idPer = getEle("#btnCapNhat").getAttribute("data-id")

    updatePersonByID(idPer, person)
        .then((res) => {
            console.log("res.data", res.data);

            // call API lấy lại danh sách person mới sau khi xoá thành công
            fetchPerson();
            // cập nhât xong thì đóng modal
            getEle("#btnDong").click();
        })
        .catch((err) => {
            console.log("err: ", err);
        })
        // luôn luôn chạy dù thành công, thất bại
        .finally(() => {
            console.log("Xong");
        });
}


/**
 * @param {*} arrangePerToOrder
 * Chức năng: Sắp xếp person theo họ tên
 * Tham số: không
 * Chú ý: thêm hàm editFood vào đối tượng window, khi mình ấn edit thì nó sẽ đi tìm trong window có hàm editFood hay ko
 */
const arrangePerToOrder = () => {
    getPersonList()
        // thành công thì in ra sp
        .then(function (res) {
            const person = res.data;
            const result = person.sort((a, b) => a.namePerson.localeCompare(b.namePerson));
            renderTable(result);

        })
        // thất bại thì báo lỗi, hoặc in ra thông báo tuỳ mình
        .catch(function (err) {
            console.log("err", err);
        })
        // luôn luôn chạy dù thành công, thất bại
        .finally(() => {
            console.log("Xong");
        });

}

/*
* @param {*} filterPerson
* Chức năng: hàm lọc person
* Tham số: không
* Chú ý:
*/
const filterPerson = () => {
    var selectPersonType = getEle("#selectPersonType").value;
    var filterResult = [];
    var all = "All";

    getPersonList()
        // thành công thì in ra person
        .then(function (res) {
            var person = res.data;
            if (selectPersonType === all) {
                renderTable(person);
            }
            else {
                person.forEach((value, index) => {
                    if (value.type === selectPersonType) {
                        filterResult.push(value);
                    }
                })
                renderTableByType(filterResult);
            }
        })
        // thất bại thì báo lỗi, hoặc in ra thông báo tuỳ mình
        .catch(function (err) {
            console.log("err", err);
        });
}


/*
* @param {*} findPersonByName
* Chức năng: hàm tìm kiếm person theo name
* Tham số: không
* Chú ý:
*/
const findPersonByName = () => {
    var searchName = getEle("#searchName").value.trim()?.toLowerCase();
    var tbfilterPerson = document.querySelector("#tbFilterPerson");

    // gọi data từ API
    getPersonList()
        .then(function (res) {
            var person = res.data;
            // tìm kiếm trong danh sách sp mà có tên sau khi đã chuyển về từ thường mà có gồm từ khoá mà muốn tra
            var result = person.filter(function (value) {
                return value.namePerson.toLowerCase().includes(searchName);
            });

            if (result.length == 0) {
                tbfilterPerson.classList.remove("d-none");
                tbfilterPerson.classList.add("d-block");
            } else {
                tbfilterPerson.classList.remove("d-block");
                tbfilterPerson.classList.add("d-none");
                //render lại kết quả tìm thấy
                renderTable(result);
            }
        })
        .catch(function (err) {
            console.log("err", err);
        });
}


/*
* @param {*} ẩn nút cập nhật khi ấn bút thêm hàm tìm kiếm person theo name
* Tham số: không
* Chú ý:
*/
getEle("#btnThem").onclick = () => {
    // ẩn btn cập nhật
    getEle('#btnCapNhat').style.display = 'none';
    // hiển btn thêm
    getEle('#btnThemNV').style.display = 'inline-block';
}


/*
* @param {*} reset form
* Tham số: không
* Chú ý:
*/
getEle("#btnReset").onclick = () => {
    resetForm();
}

