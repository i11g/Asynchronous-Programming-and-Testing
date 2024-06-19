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

fetch('http://localhost:3030/jsonstore/books')
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))