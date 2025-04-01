let dataArray = [
    {'name': 'Shiva', 'age': 36},
    {'name': 'Kumar', 'age': 37}
]

function getData(){

    setTimeout(function(){
        let output = '';
        
        dataArray.forEach(function(data){
            output += `<li>${data.name} ${data.age}</li>`
            
        })
        document.body.innerHTML = output
    }, 2000)
}

function createData(newData, cb){

   setTimeout(function(){
    dataArray.push(newData)
    cb()
   }, 1000)
}

createData({'name': 'Ganesh', 'age': 38}, getData)
// getData()