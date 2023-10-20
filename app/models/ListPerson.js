const BASE_URL = "https://651d525844e393af2d598dd0.mockapi.io/person";
const getPersonList = (val) => {
    return axios({
        url: BASE_URL,
        method: "GET",
        // những cặp key-value khai báo bên trong object params sẽ đc gửi lên url theo định dạng
        // example.com/products?key1=value1&key2=value2
        params: {
        name: val || undefined,
        },
    });
}

const delPersonList = (id) => {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
    });
}

const addPersonList = (per) => {
    // nhớ phải có return
    return axios({
        url: BASE_URL,
        method: "POST",
        // phải có data mới up lên đc APi
        data: per,
    });
}

const addStudentList = (per) => {
    // nhớ phải có return
    return axios({
        url: BASE_URL,
        method: "POST",
        // phải có data mới up lên đc APi
        data: {
            // spread operator
            ...per,
            diemTB: per.tinhDiemTB(),
        },
    });
}

const addEmployeeList = (per) => {
    // nhớ phải có return
    return axios({
        url: BASE_URL,
        method: "POST",
        // phải có data mới up lên đc APi
        data: {
            // spread operator
            ...per,
            tienLuong: per.tinhLuong(),
        },
    });
}

const editPersonByID = (id) => {
    // nhớ phải có return
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "GET",
    });
}

const updatePersonByID = (id, per) => {
    if ( per.type === "Student" ) {
        per = {
            ...per,
            diemTB: per.tinhDiemTB(),
        }
    }
    else if ( per.type === "Employee" ) {
        per = {
            ...per,
            tienLuong: per.tinhLuong(),
        }
    }
    // nhớ phải có return
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "PUT",
        // phải có data mới up lên đc API
        data: per,
    });
}