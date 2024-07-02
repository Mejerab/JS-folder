const mobile ={
    brand: "Samsung",
    price: "$40000",
    camera: "12mpx",
    isNew: true,
}
// for (const prop in mobile) {
//     console.log(prop, ":", mobile[prop]);
// }

const keys =Object.keys(mobile);
// console.log(keys);
for (const key of keys) {
    console.log(key, ":", mobile[key]);
}