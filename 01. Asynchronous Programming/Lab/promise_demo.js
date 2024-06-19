const engagment=new Promise ((resolve,reject)=>{
   if(Math.random()<0.3){
    reject("Sorry, it's me")
    return
   }

    setTimeout(()=>{
        resolve ("Just married")
    }, 2000)
}) 

engagment
.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})