// What is high order function
// Higher order function are those function where function can be passed
// as arguments

let myRadiusArray = [2, 3, 4, 5, 8];

// Here parameter cb is call back function  
function calculateMyArea(radiusArray, cb) {
  let result = [];

  for (let i = 0; i < radiusArray.length; i++) {
    result.push(cb(radiusArray[i]));
  }

  return result;
}

function circleAreaFunction(radius){

    return  3.14 * radius * radius;

}

function calculateDiameter(radius){
    return 2*radius;
}

function calculateCircumference(radiusArr){
    
    return 2*3.14*radiusArr
}

let areaAns = calculateMyArea(myRadiusArray, circleAreaFunction);
console.log(areaAns);

// let diameterAns = calculateMyArea(myRadiusArray, calculateDiameter)
// console.log(diameterAns);

// let circumferenceAns = calculateMyArea(myRadiusArray, calculateCircumference)
// console.log(circumferenceAns)



