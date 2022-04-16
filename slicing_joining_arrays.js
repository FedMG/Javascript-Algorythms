
// Falta terminarlo...
function frankenSplice(arr1, arr2, n) {
    let newArr = [];
    console.log(newArr = arr2.splice(n, ));
  
    for (let i in arr1) {
      arr2.push(arr1[i]);
      if (i == arr1.length-1) {
        for (let i in newArr) { 
          arr2.push(newArr[i]);
        }
      }
    }
    return arr2;
  }
  
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  
  


 // Terminado
  const frankenSplice = (arr1, arr2, n) => {
    let newArr = [], auxArr = [];
  
    newArr = arr2.splice(0, n);
    auxArr.push(...newArr);
    newArr.push(...arr1);
    newArr.push(...arr2);
    arr2.unshift(...auxArr);
  
    return newArr;
  }
  
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));