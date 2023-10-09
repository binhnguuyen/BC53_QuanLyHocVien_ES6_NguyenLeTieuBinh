// /** enter: cú pháp tạo cmt code

/**
 * hàm này nhận vào 1 mảng và trả về vị trí index của số lớn nhất
 * @param {*} arr mảng được truyền vào để tìm vị trí của số lớn nhất
 * @returns trả về vị trí index của số lớn nhất
 */
function findIndexMax(arr) {
    var indexMax = 0;
    var maxScore = arr[0];
    for (var index = 1; index < arr.length; index++) {
        if (arr[index] > maxScore) {
            maxScore = arr[index];
            indexMax = index;
        }
    }
    return indexMax;
}

/**
 * hàm này nhận vào 1 mảng và trả về vị trí index của số nhỏ nhất
 * @param {*} arr mảng được truyền vào để tìm vị trí của số nhỏ nhất
 * @returns trả về vị trí index của số nhỏ nhất
 */
function findIndexMin(arr) {
    var indexMin = 0;
    var minScore = arr[0];
    for (var index = 1; index < arr.length; index++) {
        if (arr[index] < minScore) {
            minScore = arr[index];
            indexMin = index;
        }
    }
    return indexMin;
}

/**
 * hàm này nhận vào 1 mảng và trả về vị trí index của số dương nhỏ nhất
 * @param {*} arr mảng được truyền vào để tìm vị trí của số dương nhỏ nhất
 * @returns trả về vị trí index của số dương nhỏ nhất
 */
function findIndexPosMin(arr) {
    var indexPosMin = 0;
    var cnt = 0;
    var minScore = arr[cnt];
    for (var i = 0; i < arr.length; i++) {
        if (minScore <= 0) {
            cnt++;
            minScore = arr[cnt];
            indexPosMin = cnt;
        }
        else {
            for (var index = cnt + 1; index < arr.length; index++) {
                if (arr[index] > 0) {
                    if (arr[index] < minScore) {
                        minScore = arr[index];
                        indexPosMin = index;
                    }
                }
                else {
                    // do nothing
                }
            }
            break;
        }
    }
    return indexPosMin;
}



function findPrimeNumMethod(num) {
    var primeNum;
    var cnt = 0;


    if (num <= 1) {
        primeNum = -1;
    }
    else if (num == 2) {
        // vì 2 là SNT nên bỏ trả về
        primeNum = num;
    }
    else {
        // for (var i = 2; i <= num; i++) {
        for (var j = 2; j <= num; j++) {
            if (num % j == 0) {
                if (num != j) {
                    cnt = 0;
                    break;
                }
                else {
                    cnt++;
                }
            }
            else {
                cnt++;
            }
        }
        if (cnt == (num - 2 + 1)) {
            // soNguyenTo += i + "  ";
            cnt = 0;
            // đây là SNT nên trả về
            primeNum = num;
        }
        else {
            primeNum = -1;
        }
        // }
    }
    return primeNum;
}




/**
 * Hàm nhận vào 1 mảng và 1 số cố định
 */
// function demSoSVGioi(arrNumber, target) {
//     var count = 0;
//     for (var index = 0; index < arrNumber.length; index++) {
//         if (arrNumber[index] > target) {
//             count++;
//         }
//     }

//     return count;
// }

// function findIndexBiggerThan(arrNumber, target) {
//     var indexArr = [];
//     for (var index = 0; index < arrNumber.length; index++) {
//         if (arrNumber[index] >= target) {
//             indexArr.push(index);
//         }
//     }
//     return indexArr;
// }




