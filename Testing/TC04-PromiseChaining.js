function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink === 'coffee'){
            resolve('Order placed')
        }else{
            reject('Order cannot be placed')
        }
    })
}

function processOrder(orderProcessed){

    return new Promise(function(resolve){
      resolve(`${orderProcessed} and Served`)
    })
}

function billGeneration(bill){
    return new Promise(function(resolve){
        resolve(`${bill} and bill is 200Rs`)
    })
}


placeOrder('coffee').then(function(orderStatus){
console.log(orderStatus)
return orderStatus
}).then(function(orderStatus){
    let orderIsProcessed = processOrder(orderStatus)
    return orderIsProcessed;
}).then(function(orderIsProcessed){
    console.log(orderIsProcessed)
    return orderIsProcessed
}).then(function(orderIsProcessed){
    let billAmount = billGeneration(orderIsProcessed)
    return billAmount;
}).then(function(billAmount){
    console.log(billAmount)
}).catch(function(err){
    console.log(err)
})
