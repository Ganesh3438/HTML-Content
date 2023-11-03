let myData = [
  { name: "Peter", age: 23 },
  { name: "Steve", age: 28 },
  { name: "Tom", age: 29 },
];

function getData() {
  //    console.log(myData)
  myData.forEach((data) => {
    setTimeout(function () {
      console.log(data.name + " " + data.age);
    }, 1000);
  });
}

// create the new data
// function createNewData(newData){
//     setTimeout(function(){

//         myData.push(newData)

//     }, 3000)
//   }

// create the new data
function createNewData(newData, cb) {
  setTimeout(function () {
    myData.push(newData);
    cb();
  }, 3000);
}

// calling the function
// createNewData({"name": "Mark", "age":21})
// getData()

createNewData({ name: "Mark", age: 21 }, getData);
