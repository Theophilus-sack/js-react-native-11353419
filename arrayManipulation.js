function processArray(arr) {
  return arr.map(num => {
      if (num % 2 === 0) {
      
          return num * num;
      } else {
    
          return num * 3;
      }
  });
}




function formatArrayStrings(strArr, numArr) {
  return strArr.map((str, index) => {
      const num = numArr[index];
      if (num % 2 === 0) {
          return str.toUpperCase();
      } else {
          return str.toLowerCase();
      }
  });
}



const numbers = [11, 22, 30, 16, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);  


const strings = ["This", "Is", "Very", "Amazing", "Indeed"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);  