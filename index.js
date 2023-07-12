let array = [50, 30, 100 ,20, 40, 90, 89, 1];

function bubbleSort(myArr) {
  for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr.length - i - 1; j++) {
      if (myArr[j] > myArr[j + 1]) {
        let temp = myArr[j];
        myArr[j] = myArr[j + 1];
        myArr[j + 1] = temp;
      }
    }
  }
  return myArr;
}
console.log(array);
console.log(bubbleSort(array));
