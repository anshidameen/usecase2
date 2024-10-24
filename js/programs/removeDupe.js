function removeDupe(str){
    let uniqueArt=[];

    for(let i=0;i<str.length;i++){
        if(uniqueArt.indexOf(str[i])==-1){
            uniqueArt.push(str[i])
        }
    }
    return uniqueArt
}

console.log(removeDupe(['a','m','e','e','n']));
/////////////////////////////////////////////


// function prime(num){
//     if(num<=0){
//         return false
//     }
//     for(let i=2;i<num;i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//  return true
// }

// console.log(prime(10));

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
console.log(obj1)
obj2.b.c = 3;
console.log(obj1.b.c);  // Output: 3 (because of shallow copying)
