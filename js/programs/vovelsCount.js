// const getCount = str => {
//     let vowelsCount = 0;
//     for (let char of str) {
//       if ('aeiou'.includes(char)) vowelsCount++;
//     }
//     return vowelsCount;
// };
// console.log(getCount('anshid'));

function countVovels(str){
    let vovels='aeiou';
    count=0
    for(let i=0;i<str.length;i++){
        if(vovels.includes(str[i])){
            count=count+1;
        }
    }
    return count;
}

console.log(countVovels('anshid'));