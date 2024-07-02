// const sentence = "I am vengence";
// let reverse = "";
// for (const letter of sentence) {
//     reverse = letter + reverse;
// }
// console.log(reverse);

// for(i=0; i< sentence.length; i++){
//     const letter = sentence[i];
//     reverse = letter + reverse;
// }
// console.log(reverse);

// const sentence = "I am vengence";
// let reverse = sentence.split('').reverse().join('');
// console.log(sentence);
// console.log(reverse);

// const bottle = {
//     brand:"Apple",
//     Price:55,
//     color:'White',
//     clean:true,
//     'fav places' : ['ranga', 'mati', 'ganja']
// }
// // console.log(bottle);
// const name = "brand";
// // console.log(bottle["brand"]);

// const key = 'fav places';
// console.log(bottle[key]);



// console.log(Object.keys(computer));
// console.log(Object.values(computer));

const computer = {
    brand : "Asus",
    price : 40000,
    innerThing:{
        prossssor : "Intel",
        hhd : "128gb",
        ram : ["4gb", "4gb", "4gb"],
    },
    outerThings:{
        headPhone: "Asus",
        keyBoard: "A4Tech",
        mouse: "Logitech"
    }
}
computer.innerThing.ram[1] = "8gb";
console.log(computer.innerThing.ram[1]);

computer.outerThings.headPhone =[ "Logitech", "Asus"].join(" & ")
delete computer.outerThings.mouse
console.log(computer.outerThings);