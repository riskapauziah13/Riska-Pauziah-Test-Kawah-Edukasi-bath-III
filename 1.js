var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

function count_duplicate(arr){
    let counts = {}

    arr.forEach(function(x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    
    // Get an array of the keys:
    let keys = Object.keys(counts);

    // Then sort by using the keys to lookup the values in the original object:
    keys.sort(function(a, b) { return counts[b] - counts[a] });
    console.log(`total data paling banyak keluar adalah ${keys[0]} dengan jumlah ${counts[keys[0]]}`)
}


count_duplicate(data1)
count_duplicate(data2)
count_duplicate(data3)
