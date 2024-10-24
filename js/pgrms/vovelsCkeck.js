function check(str){
    let vovels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vovels.includes(str[i])){
            return true;
        }
    }

    return false;
}

console.log(check("anshid"));

////////////////////////////////count of vovels////////////////////////////
function checkCount(str){
    let vovels="aeiouAEIOU";
    let count=0;
    for(let i=0;i<str.length;i++){
        if(vovels.includes(str[i])){
            count ++;
            
        }
       
    }
    return count;
    
}
console.log(checkCount("anshidamee"));

////////////////////////////////////////remove duplicates///////////////////////
function removeDupe(str){
    let newArr="";
    for(let i=0;i<str.length;i++){
        if(newArr.indexOf(str[i])==-1){
            newArr +=str[i];
        }
    }
    return newArr;
}

console.log(removeDupe("anshid ameen"));

///////////////////////////////////////reverse string//////////////////////////

function reverse(str){
    let newStr='';
    for(let i=str.length-1;i>=0;i--){
        newStr += str[i];
    }
    return newStr;
}
console.log(reverse('anshid'));

/////////////////////paliandrome///////////////////////

function paliandrome(str){
    let newStr='';
    for(let i=str.length-1;i>=0;i--){
        newStr +=str[i]
    }
    return str === newStr;
}
console.log(paliandrome('racecar'));

////////////////////////////////////////////largest///////////////////////////////////

function larges(str){
    let newArr=str.split('');
    newArr.sort();
    return newArr.join('');
}
console.log(larges('anshid'));

///////////////////////////////////////////
function largestArray(arr){
    newArr=arr.sort((a,b)=>a-b);
    return newArr[newArr.length-1];

}

console.log(largestArray([1,2,9,4,5]));

///////////////////////////////////prime or not/////////////

function prime(num){
    if (num<=1){
        return false
    }
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%2==0){
            return false
        }
    }
    return true
}

console.log(prime(10));