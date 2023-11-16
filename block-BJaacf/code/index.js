// 1. Create an array named numbers and store 5 number values in it
let numbers=[10,20,30,40,50];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum=numbers.reduce((acc,num)=>acc+num,0);
console.log("sum of array items:",sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let average=sum/numbers.length;
console.log("average of array items are:",average);
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber=Math.max(...numbers);
console.log("highest number in an array:",highestNumber);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNumber=Math.min(...numbers);
console.log("lowest number in an array:",lowestNumber);
// 6. Find the even numbers in the array and print them to the console using console.log()
let evenNumbers=numbers.filter(num=>num%2===0);
console.log("even numbers in ana array:",evenNumbers);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let oddNumbers=numbers.filter(num=>num%2!==0);
console.log("odd numbers in ana array:",oddNumbers);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisibleBy5=numbers.filter(num=>num%5===0);
console.log("numbers divisible by 5 are:",divisibleBy5);
// 9. Log all the element of the array one by one
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
// 10. Find all the number in the array that is divisible by 3
let divisibleBy3=numbers.filter(num=>num%3===0);
console.log("numbers divisible by 3:",divisibleBy3);