// function ganja(size) {
//     const str = size.length;
//     console.log(size, str);
//     if (str % 2===0) {
//         console.log("even numver");
//     }
//     else{
//         console.log("Odd number");
//     }
// }
// ganja("Dhaka")
// ganja("Math")

// function nothing(num) {
//     if (nothing % 2 ===0) {
//         console.log(num * 2);
//     } else {
//         console.log(num * 3);
//     }
// }
// nothing(2);
// nothing(3);


// let total = 0;
// function sum(numbers) {
//     for (const num of numbers) {
//         console.log(num);
//         total = total + num;
//     }
//     return total;
// }
// const numb = [5, 4 ,3 ,2, 1];
// const jog = sum(numb)
// console.log("Sum of the number is:", total);


// let total = 0;
// function evenNumbers(numbers) {
//     for (const num of numbers) {
//         if (num % 2 === 0) {
//             console.log(num);
//             total = total + num;
//         }
//     }
//     return total;
// }
// const onlyNum = [5, 1,6 ,7 ,2];
// const sum = evenNumbers(onlyNum);
// console.log("The sum of the even numbers are:", total);


let total = 0;
const odd = [];
function evenNumbers(numbers) {
    for (const num of numbers) {
        if (num % 2 !== 0) {
            console.log(num);
            odd.push(num)
            total = total + num;
        }
    }
    return total;
}
const onlyNum = [5, 1,6 ,7 ,2];
const sum = evenNumbers(onlyNum);
console.log("The sum of the even numbers are:", total);
console.log(odd);