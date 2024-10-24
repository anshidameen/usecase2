function middleChar(str){
    let charcherlength=str.length;
    let length=Math.floor(charcherlength/2)
    if( length % 2 === 0){
        return str.slice(length -1,length +1);
    }
    else{
        return str[length]
    }
    
}

console.log(middleChar('testi'));