function vovels(e,str){
    let found=false;

   for(i=0;i<str.length;i++){
    if(str.charAt(i)==e){
        found=true;
        break;
    }
   }
   if(found==true){
    console.log('present');
   }
   else{
    console.log('not present');
   }
}

vovels('aeiou','anshid ameen');

////////////////////////////////////

function vo(str){
    let liVovels="aeiouAEIOU"
    for(let i=0;i<str.length;i++){
        if(liVovels.includes(str[i])){
            return true
        }
        else{
           return false
        }
    }
}
console.log(vo('anshid'))