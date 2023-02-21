// callbackFunction = Math.floor()
// result = {
//     '4': [4.2],
//     '6': [6.1, 6.3]
// }
//

function groupBy(arr, callbackFunction) {
    // floor all
    // get array of unique floored values
    //
    let flooredArr = arr.forEach((item) => Math.floor(item));

    arr.forEach(function(item, i) {

    });


}

let arr = [6.1, 4.2, 6.3];

console.log(groupBy(arr, Math.floor));