function getEle(selector) {
    return document.querySelector(selector);
}

const resetForm = () => {
    getEle("#modalForm").reset();
}