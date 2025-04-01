
let myPromise = new Promise(function(resolve, reject){

    let a = 4;
    let b = 5;

    setTimeout(()=>{
        if(a==b){
            resolve('The values are equal')
        }else{
            reject('the values are not equal')
        }
    }, 2000)


})

// console.log(myPromise)
myPromise.then((result)=>{
    console.log(result)
})

myPromise.catch((failedResult)=>{
    console.log(failedResult)
})