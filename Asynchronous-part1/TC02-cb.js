// Note: You should execute it from index.html

let dataArray = [
    {name:"Adam", age:23},
    {name:"Steve", age:25}
]  // dummy api

function getData(){

setTimeout(()=>{

    let output = "";
    dataArray.forEach(function(data){

        output += `<li> ${data.name} ${data.age} </li>` 

    })

    document.body.innerHTML = output
}, 2000)

}


// Creating a function to create the data into an object
// function createData(newData,){

//     setTimeout(function(){
//         dataArray.push(newData)
//     }, 1000)
// }

// To avoid above piece of code we need to use call back function inside our function 
function createData(newData, cb){

    setTimeout(function(){
        dataArray.push(newData)
        cb()
    }, 3000)
}

// Calling the functions
// createData({name:"Mark", age: 30})
// getData()

// After the creating call back function 
createData({name:"Mark", age: 30}, getData)



