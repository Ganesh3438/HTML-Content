// const { promises } = require("dns")

function placeOrder(drink){
     return new Promise(function(resolve, reject){
        if(drink==='coffee'){
            resolve('Order for coffee placed')
        }else{
            reject('Order cannot be placed')
        }
     })
}

function processYourOrder(orderPlaced){

    return new Promise(function(resolve){
         resolve(`${orderPlaced} and served`)
    })

}

function generateBill(processedOrder){
   return new Promise(function(resolve){
         resolve(`${processedOrder} and Bill generated with 200Rs`)
   })
}

placeOrder('coffee').then(function(orderStatus){
    console.log(orderStatus)
    return orderStatus
}).then(function(orderStatus){
let orderIsProcessed = processYourOrder(orderStatus)
// console.log(orderIsProcessed)
return orderIsProcessed;
}).then(function(orderIsProcessed){
    console.log(orderIsProcessed)
    return orderIsProcessed
}).then(function(orderIsProcessed){
    let bill = generateBill(orderIsProcessed)
    return bill
}).then(function(bill){
    console.log(bill)
}).catch(function(error){
    console.log(error)
})

// processYourOrder()