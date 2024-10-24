const phoneArray= numbers =>{
   let newNumber=numbers.toString()
   let first= newNumber.slice(0,3);
   let second=newNumber.slice(3,6); 
   let third=newNumber.slice(6);
   
   let phonenunber=first+" "+second+"-"+third

   console.log(phonenunber);

}

phoneArray(8086226345)