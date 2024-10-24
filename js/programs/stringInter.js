// let c= "anshid";
// let b="ameen";

// let d=` My name is ${c} ${b}`;
// console.log(d);

///////////////////////////////////////reverse string

const revereS= str=>{
    let b='';
    for (let i = str.length  -1; i >=0; i--){
         b =b + str.at(i);     
    }
    return b;
}
console.log(revereS("anshid"));  


/////////////////////////Plaindrome


let paliandrome= str1 =>{
    let newPaliandrome=''
    for (i=str1.length-1;i>=0;i--){
        newPaliandrome=newPaliandrome + str1.at(i);
    }
    if (newPaliandrome == str1){
        console.log("true");
     }
     else{
        console.log("false")
     }
  
}

paliandrome("deified");

///////////////////count Vovels

const vovelsCount= str2 =>{
    let vovels = 'aAeEiIoOuU';
    let count=0;
    for(i=0;i<str2.length;i++){
        if(vovels.indexOf(str2.at(i))!==-1){
            count=count+1
        }
    }
    return count;
}

console.log(vovelsCount("anshidameenii"));

//////////////////////non repeating character

function nonRep(str){
    let rep={};
    for (const char of str){
     rep[char]=(rep[char]||0)+1;

    }
    for (const char of str){
        if(rep[char]===1){
            return char
        }
    }
    return null
}
console.log(nonRep('smass'));

////////
const str = 'Hello, World!';

for (const char of str) {
    console.log(char);
}


