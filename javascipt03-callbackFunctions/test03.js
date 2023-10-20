let myRadiusArray = [2,3,4,5,8]

// To define area, circumference and diameter for all these radiuses

function calculateArea(radiusArr) {
    
    let result = []

    for(let i=0; i<radiusArr.length; i++){
        
        
        result.push(3.14*radiusArr[i]*radiusArr[i]);


    }

    return result;

}

function calculateCircumference(radiusArr){
    let result = []

    for(let i=0; i<radiusArr.length; i++){
        
        
        result.push(2*3.14*radiusArr[i]);


    }

    return result;
}

function calculateDiameter(radiusArr){
    let result = []

    for(let i=0; i<radiusArr.length; i++){
        
        
        result.push(2*radiusArr[i]);


    }

    return result;
}

let ans = calculateArea(myRadiusArray)
console.log(ans)

let ansCircumference = calculateCircumference(myRadiusArray)
console.log(ansCircumference)

let ansDiameter = calculateDiameter(myRadiusArray)
console.log(ansDiameter)

// What is DRY principle: This principle says that do not repeat yourself.  