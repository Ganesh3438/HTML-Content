// some is basically method which return a boolean value based on particular condition.
// Note: some will only return a true when atleast one element 
// from an array or object that satisfies the condition

let arrNames= ['Mohan', 'Siva', 'Ganesh', 'Kumar']

let res = arrNames.some(function(name){
    if(name === 'Ganesh'){
    console.log(`The name is present ${name}`)
    return true;
   }
   return false;
})

console.log(res)


console.log('--------------Using Object----------------')

let myObj = {

    firstName: 'Ram',
    lastName: 'Kumar',
    age : 34


}


let ans = Object.values(myObj).some(function(data){
    if(data==='Ramm'){
        console.log('Data Exist');
        return true
    }
   
})

if(!ans){
    
        console.log('No data exist')
    
}

