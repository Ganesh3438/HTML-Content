let myArray = [2,3,4,5,8]
function getArea(radiusArr){

    let result = [];

    for(let i=0; i<radiusArr.length; i++){

       result.push(3.14*radiusArr[i]*radiusArr[i])

    }

    return result;
}

function getCircumference(radiusArr){

    let result = [];

    for(let i=0; i<radiusArr.length; i++){

       result.push(2*3.14*radiusArr[i])

    }

    return result;
}

function getDiameter(radiusArr){

    let result = [];

    for(let i=0; i<radiusArr.length; i++){

       result.push(2*radiusArr[i])

    }

    return result;
}

// Area
let result = getArea(myArray);
console.log(result)

// Cirumference
let circum = getCircumference(myArray);
console.log(circum)

// Diameter
let diameter = getDiameter(myArray);
console.log(diameter)