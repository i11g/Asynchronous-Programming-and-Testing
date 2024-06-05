const createTimeoutPromise= function(message, time) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
        })
    }, time)
} 

const groupPromise=Promise.all([
    Promise.resolve('First promise'),
    createTimeoutPromise('second promise',3000),
    createTimeoutPromise('thirdPromise', 1000 ),
    Promise.reject('fourth Promise')
])

groupPromise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})