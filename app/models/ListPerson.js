const BASE_URL = "https://651d525844e393af2d598dd0.mockapi.io/person";

class ListPerson {
    // mảng đối tượng này chứa các đối tượng khác nhau
    constructor (_Student, _Employee, _Customer) {
        super(Student, Employee, Customer)
    }

    getProductList(val) {
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

    delProductList(id) {
        return axios({
            url: `${BASE_URL}/${id}`,
            method: "DELETE",
        });
    }

    addProductList() {
        // nhớ phải có return
        return axios({
            url: BASE_URL,
            method: "POST",
            // phải có data mới up lên đc APi
            data: person,
        });
    }

    editProductByID(id) {
        // nhớ phải có return
        return axios({
            url: `${BASE_URL}/${id}`,
            method: "GET",
        });
    }

    updateProductByID(id, sp) {
        // nhớ phải có return
        return axios({
            url: `${BASE_URL}/${id}`,
            method: "PUT",
            // phải có data mới up lên đc APi
            data: person,
        });
    }


}


