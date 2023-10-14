function getEle(selector) {
    return document.querySelector(selector);
}

const resetForm = () => {
    getEle("#personForm").reset();
}