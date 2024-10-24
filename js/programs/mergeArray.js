function mergeArray(arr1,arr2){
    let a1=arr1.sort((a,b)=>a-b);
    let a2=arr2.sort((a,b)=>a-b);

    let a3=a1.concat(a2);
    console.log(a1);
    console.log(a2);
    console.log(a3);


}

mergeArray([5,4,3,2,1],[10,9,8,7,6]);