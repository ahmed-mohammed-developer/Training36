
/*
function sum_two_smallest_nums(arr) {
  // write your code here
      arr.sort((a, b) => a - b);
      //console.log(arr.sort((a, b) => a - b))
      return arr[0] + arr[1];
};

console.log(sum_two_smallest_nums([2, 5, 6, 7, 3]))
console.log(sum_two_smallest_nums( [4, 3, 60, 9]))


function divisible_by_five(num) {
  // write your code here
  return num % 5 === 0;
}

console.log(divisible_by_five(5))
console.log(divisible_by_five(3))
console.log(divisible_by_five(40))
console.log(divisible_by_five(25))


function cumulative_addition(elements_array) {
  // write your code here
      //console.log(newArr);
      const sum = elements_array.reduce(function(totle, current){
       return totle + current;
      }, 0)
      const lenArr = elements_array.length;
      return [sum, lenArr];
}
console.log(cumulative_addition([5, 1, 2, 4, 9, 10, 200]))


function calculate_circumference(radius) {
  // write your code here
   return 2 * 3.14 * radius;
}
console.log(calculate_circumference(3.1));

function odd_even(number) {
  // write your code here
  if (number % 2 === 0){
    return 'زوجي';
  }
  return 'فردي';
}

console.log(odd_even(5))
console.log(odd_even(2))


function areaOfParallelogram(height, base_value) {
  // write your code here
return height * base_value;
}
console.log(areaOfParallelogram(2.3, 9));


function mergeAndOrder(array1, array2) {
  // write your code here
  return [...array1, ...array2].sort((a,b) => a - b);
};

console.log(mergeAndOrder([1, 2], [3, 4]));
console.log(mergeAndOrder([1, 2],  [1, 5]));
console.log(mergeAndOrder([],  [1, 5]));

*/
function sum_even(arr) {
  // write your code here
  const even = arr.filter(function(num){
    return num % 2 === 0;
  });
  return even.reduce(function(totle, current){
    return totle + current;
  }, 0)
};


function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// اختبر الدالة
const myArray = [4, 5, 7, 8, 14, 45, 76];
const result = sumEvenNumbers(myArray);
console.log("مجموع الأعداد الزوجية هو:", result); // مجموع الأعداد الزوجية هو: 102



function numbers_range(number) {
  // write your code here
 for(let i = 0; i <= number; i++){
  console.log(i.toString());
 };
}



console.log(numbers_range(4))



function average(values) {
  // write your code here
  return values.reduce(function(totle, current){
    return totle + current / values.length
  }, 0)
}
console.log(average([3, 5, 67, 1]))


function delete_element_in_array(arr, index) {
  // write your code here
  return arr.filter(x => x === index);
}
console.log(delete_element_in_array([3, -3, 4, 0], 0))

function returnStringLetters(string1, string2) {
  // write your code here
  if (string1.length > string2.length){
    return string1.length
  }
  return string2.length
}

console.log(returnStringLetters('Khalid', 'Asma'));


function perimeter_of_prallelogram(base_value, length) {
  // write your code here
  return 2 * (base_value + length);
}
console.log(perimeter_of_prallelogram(5, 7));
console.log(perimeter_of_prallelogram(4, 7.7));

function div_remainder(a, b) {
  // write your code here
 return a % b;
}
console.log(div_remainder(3, 3))
console.log(div_remainder(19, 5))

function countWords(txt) {
  // write your code here
  return txt.split(", ").length;
}

console.log(countWords( 'Plant hope in the hearts of others'))




function convertPercent(percentage) {
  // write your code here
    return parseFloat(percentage) / 100;
}

console.log(convertPercent('9%'))




