let myPromise = new Promise(function(resolve, reject){

    let a = 5;
    let b = 5;

    if(a==b){
        resolve('Yes, They are equal')
    }else{
        reject('No, They are not equal')
    }


})

// then method

myPromise.then((data)=>{
  
    console.log(data)
    // console.log(err)

})

myPromise.catch(function(error){
    console.log(error)
})