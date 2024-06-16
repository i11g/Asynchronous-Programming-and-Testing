

console.log('start')
delayStart(()=>console.log('delaystart'))
console.log('finish') 

function delayStart(callback) {
    setTimeout(()=>{
        callback()
    }, 2000)
} 
