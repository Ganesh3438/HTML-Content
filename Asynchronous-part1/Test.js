let myData = [
    {name:'Manohar', age:38},
    {name:'Ashwini', age: 22},
    {name:'Shiva', age:33}
]

function getData(){
    myData.forEach((data)=>{

        setTimeout(()=>{
            console.log(data.name +" "+ data.age)
        }, 1000)
    })
}

function createNewData(newData, cb){

    setTimeout(()=>{
     myData.push(newData);
     cb()
    }, 3000)
}

// getData()

createNewData({name:'Ajay', age:28}, getData)

