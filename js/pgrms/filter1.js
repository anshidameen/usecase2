const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 }
];

// const adults=users.filter(value=>value.age>18);
// console.log(adults);

const adult1=users.filter(
    value=>value.age>18 && value.name.startsWith('A')
)
console.log(adult1); 
////////////////////////////////////////////////////

const users1 = [
    { name: 'Alice', isActive: true },
    { name: 'Bob', isActive: false },
    { name: 'Charlie', isActive: true },
    { name: 'David', isActive: false }
];

const active=users1.filter(
    value=>value.isActive==true
);
console.log(active);
/////////////////////////////////////////

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Monitor', price: 150 }
];

function fliterProduct(products, max ,min){
    return products.filter(
        value=>value.price>min && value.price<max
    )
}

console.log(fliterProduct(products,800,200));

//////////////////////////////////////////////////////
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 90 },
    { name: 'David', grade: 65 }
];

function filterByGrade(students,min){
    return students.filter(value=>value.grade>min)
}
console.log(filterByGrade(students,80));
/////////////////////////////////////////////////////////
// const teams = [
//     { name: 'Team A', players: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 19 }] },
//     { name: 'Team B', players: [{ name: 'Charlie', age: 30 }, { name: 'David', age: 15 }] },
//     { name: 'Team C', players: [{ name: 'Eve', age: 22 }, { name: 'Frank', age: 24 }] }
// ];

// function filterByAge(teams, min){
//    return teams.filter(
//     value=>value.players.some(player=>player.age>min)
//    )
// }
// console.log(filterByAge(teams,21))
////////////////////////////////////////////////////////////////////////////////////////