function removeVovels(str){
  let vovels='aeiou';
  let result='';
  for(let i=0;i<str.length;i++){
    if(!vovels.includes(str[i])){
        result +=str[i];
    }
  }
  return result;
}

console.log(removeVovels('anshid'));
