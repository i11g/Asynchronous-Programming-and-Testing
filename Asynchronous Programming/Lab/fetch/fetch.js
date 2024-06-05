const url='https:/swapi.dev/api';

fetch(`${url}/people/1`)
.then((response)=>{
    return response.json()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})