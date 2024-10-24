function reverseStr(str){ 
   let newStr='';
   for(i=str.length-1;i>=0;i--){
    newStr +=str[i];
   }
   console.log(newStr);
}

reverseStr("anshidameen is great");

const newReverse=(str1)=>str1.split('').reverse().join('');
console.log(newReverse('anshid'));
////////////////////////////////
function reverseArr(arr){

   let newArr=[];
   for(let i=arr.length-1;i>=0;i--){
      newArr.push(arr[i])
   }
   return newArr
}
console.log(reverseArr([1,2,3,4,5]));


///////////////////////////////
