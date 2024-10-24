function largest(arr){

    let asc=arr.sort((a,b)=>a-b);
    let newArr=asc[asc.length-1];
    console.log(newArr)
    
}

largest([10,11,1,6,8,9]);

////////////////
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
    const name = prompt("Please enter your name:");
    callback(name); // Invoke the callback function with the input
}

processUserInput(greet); // Passing 'greet' as a callback
