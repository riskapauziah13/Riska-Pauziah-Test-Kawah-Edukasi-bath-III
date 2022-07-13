function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}

function segitiga2(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '*';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}

console.log(segitiga1(6));
console.log(segitiga2(6));