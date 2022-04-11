// 1. Print 1 - 135

// Write a program using JavaScript that will print all the numbers from 1 to 135.

for (let i = 1; i <= 135; i++) {
    console.log(i) 
}
// 2. Print Odd Numbers 1 - 135

// Write a program using JavaScript that will print all the odd numbers from 1 to 135.
for (let i = 1; i <= 135; i+=2) {
    console.log(i)
}
// 3. Sum of Printed Numbers

// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// Number is: 0 Sum: 0

// Number is: 1 Sum: 1

// Number is: 2 Sum: 3

// Number is: 3 Sum: 6

// sum = 0;

// for (let i = 1; i <= 135; i++) {
//     sum +=i,
//     console.log(`Number is: ${i} sum: ${sum}`)
// }


// 4. Print the elements of an array

// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

x = [1,4,2,12,55,66,77,5,1000000]
console.log(x)

// 5. Find Max

// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.
array = [1,4,2,12]
let max = array[0]
for (let i = 1; i < array.length; i++) {
if(array[i]>max){
    max= array[i]
} 

}
// console.log(max)
// Get Average

// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.
array = [2,1,3]
// sum = 2 + 1 + 3,
// console.log(sum)
// Avrage = sum/array.length
// console.log(Avrage)
sum = 0
for (let i = 0; i < array.length; i++) {

    sum +=array[i]

    avrage= sum/array.length
    
}
console.log(sum)
console.log(avrage)

// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].


n = [2,-1,4,-3]
for(let i = 0; i < n.length; i++) {
    if(n[i]<0){
        n[i]=0
    } 
}
console.log(n)

// 8. Number to String

// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].
w = [1,-4,0,-1]

for(let i = 0; i < w.length; i++) {
    if(w[i]<0){
        w[i]="Turing"
    } 
}
console.log(w)

