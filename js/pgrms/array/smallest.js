function smallest(arr){
    let newArr=arr.sort((a,b)=>a-b);
    return newArr[0]
}

console.log(smallest([10,6,99,2,3]));

////////////////////////////////largest number in array////////////////

function largest(arr){
    let newArr=arr.sort((a,b)=>a-b);
    return [newArr[newArr.length-1],newArr[newArr.length-2]];
}
console.log(largest([10,6,99,2,3]));

/////////////////////////////////reverse//////////////

function reverse(arr){
    let newarr=[];
    for(let i=arr.length-1 ; i>=0 ;i--){
        newarr.push(arr[i]);    
    }
    return newarr
}
console.log(reverse([10,9,8,7,6]));

//////////////////////////////count frequncy///////////

function frequncy(arr){
    let frequncy={};
    for(let i=0;i<arr.length;i++){
        const num=arr[i];
       if(frequncy[num]){
        frequncy[num] +=1;
       }
       else{
        frequncy[num]=1
       }
    }
   return frequncy
}
console.log(frequncy([1,2,1,17,2,9]));