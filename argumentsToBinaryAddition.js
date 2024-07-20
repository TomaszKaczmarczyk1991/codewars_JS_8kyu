// 20.07.2024

function arr2bin(arr){
    let number = 0;
        for(let i = 0; i < arr.length; i++) {
            if(typeof arr[i] === 'number') number += arr[i];
        }
    return number.toString(2)
  }