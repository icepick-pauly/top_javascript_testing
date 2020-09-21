function analyze(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    var avg = (sum / arr.length)
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    return `Average: ${avg}, Min: ${min}, Max: ${max}, Length: ${length}` 
}
analyze([2, 4, 6, 8, 10])
module.exports = analyze;