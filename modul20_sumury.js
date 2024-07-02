// function mul(a, b, c, d) {
//     const multi = a * b * c * d;
//     return multi;
// }



// function oddEven(numbers) {
//     for (const num of numbers) {
//         if (num % 2 === 0) {
//             console.log(num);
//             console.log("The divigation of even:",num /2);
//         }
//         else{
//             console.log(num);
//             console.log("The multlipication of odd:", num * 2);
//         }
//     }     
// }
// const numb = [2, 3, 4, 5];
// const numbe = oddEven(numb);

let total = 0;
let average = 0;
function ganja(numbers) {
    for (const num of numbers) {
        total = total + num;
    }
    average = total / numbers.length;
}
const numb = [1, 2, 3, 4, 5];
const numbe = ganja(numb);
console.log("the total of numbers", total);
console.log("the average of numbers are:", average);