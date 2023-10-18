const getEle = (selector) => {
    return document.querySelector(selector);
}

const resetForm = () => {
    getEle("#personForm").reset();
}

// Tạo 2 hàm lúc loading khi đang khi request cho backend
const onLoading = () => {
    document.querySelector("#spinner").style.display = "flex";
}

const offLoading = () => {
    document.querySelector("#spinner").style.display = "none";
}