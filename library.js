function Add(a, b) {
    return a + b;
}

function Subtract(a, b) {
    return a - b;
}

// module.exports = {
//     Add:function(a,b){
//         return a + b;
//     },
//     Subtract:function(a,b){
//         return a - b;
//     },
//     num : 40
// }

const Car = {
    name: "Corolla",
    company: "Toyota",
    model: 2020,
    moving() { console.log("Car is moving") }
}

module.exports = { Car, Add, Subtract }