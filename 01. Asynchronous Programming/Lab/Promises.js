const promiseExample=new Promise((resolve, reject )=>{
    if(Math.random()<0.3) {
        return reject("Nothing is OK")
    }
    
    setTimeout(()=>{
        return resolve("Everything is OK")
    }, 2000)
}) 

promiseExample
   .then(function(message){
    console.log(message)
   })
   .catch(message=>{
    console.log(message)
   })

   