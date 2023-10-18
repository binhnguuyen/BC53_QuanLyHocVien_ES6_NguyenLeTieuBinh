function getEle(selector) {
    return document.querySelector(selector);
}

const resetForm = () => {
    getEle("#personForm").reset();
}

// Tạo 2 hàm lúc loading khi đang khi request cho backend
function onLoading() {
    document.querySelector("#spinner").style.display = "flex";
}

function offLoading() {
    document.querySelector("#spinner").style.display = "none";
}