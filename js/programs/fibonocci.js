function fib(num){
    let newNum=0;
    for(i=0;i<=num;i++){
        newNum = i+(i+1);
        console.log(newNum);
    }
}

fib(6);