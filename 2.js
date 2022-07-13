var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

function validateString(str) {
    var found = str.replace(/[^0-9]/g,'')
    if(found) {
        console.log(`Sistem kami menolak untuk inputan berisi angka ${found}`)
    } else {
        console.log(`Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${str}`)
    }
}

validateString(input1)
validateString(input2)
validateString(input3)
validateString(input4)
