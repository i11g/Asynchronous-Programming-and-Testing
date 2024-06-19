const url= 'https://swapi.dev/api' 

fetch(`${url}/people/1`)
.then(resolve=>{
    console.log(resolve)
})
.catch(error=>{
    console.log(error.message)
})