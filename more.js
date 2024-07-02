const friends = ["Elon", "Bill", "Waren", "Mark", "Jeff"]
// // console.log(friends);
// for (const friend of friends) {
//     // console.log(friend);
// }
const rev=[];
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    rev.unshift(friend)
}
console.log(rev);

// const number = [1, 2,3 ,4 ,5 ,6, 7];
// console.log(number.reverse());

// let reverse = [];
// const number = [1, 2,3 ,4 ,5 ,6, 7];
// for (const num of number) {
//     reverse.unshift(num)
// }
// console.log(reverse);

// const rev =[];
// const number = [1, 2,3 ,4 ,5 ,6, 7];
// for (let i= number.length -1; i>=0; i--) {
//     const num = number[i];
//     console.log(num);
//     rev.push(num)
// }
// console.log(rev);