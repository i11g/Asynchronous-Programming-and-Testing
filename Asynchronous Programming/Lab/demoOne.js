console.log('start')
delayStart((islast)=>{
    if(islast) {
        return;
    }
console.log('delayed start1')
console.log('delayed start1')
delayStart(()=>console.log('double delay'), true)
console.log('delayed start1')
})


console.log('finish') 

function delayStart(callback) {
    setTimeout(()=>{
        callback()
    }, 2000)
} 