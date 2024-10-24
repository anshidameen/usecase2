function duplicate(str){
    
    for(i=0;i<str.length;i++){
        let count=0;
        const char=str[i];
        for(j=0;j<str.length;j++){
            if(str[j]==char){
                count++
            }
        }
    }

}
