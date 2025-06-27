let arr = [1, 2, 6, 5, 3, 7];

function findPeaks(arr) {
let numPeaks = [];

if (arr.length > 1 && arr[0] > arr[1]){
    numPeaks.push(arr[0]);
}

for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i -1] && arr[i] > arr[i + 1]) {

        numPeaks.push(arr[i]);
  }  
 }

 if (arr.length > 1 && arr[arr.length - 1] > arr[arr.length - 2]) {
        numPeaks.push(arr[arr.length - 1]);
 }

return numPeaks;

}



console.log(findPeaks(arr));