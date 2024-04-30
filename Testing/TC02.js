function placeOrder(drink){

return new Promise(function(resolve, reject){

if(drink==='coffee'){
    resolve('Order for coffee placed')
}else{
    reject('Order cannot be placed')
}

})

}

function processOrder(orderProcessed){

    return new Promise(function(resolve){
        resolve(`${orderProcessed} and served`)
    })
}


function generateBill(bill){

    return new Promise(function(resolve){
        resolve(`${bill} and  served and bill generated with 200`)
    })
}

//
// placeOrder('coffee').then(function(orderStatus){

// console.log(orderStatus)
// return orderStatus

// }).then((orderStatus)=>{
//     let processedOrder = processOrder(orderStatus)
//     return processedOrder
// }).then((processedOrder)=>{
//     console.log(processedOrder)
//     return processedOrder
// }).then((processedOrder)=>{
//     let bill = generateBill(processedOrder)
//     return bill
// }).then((bill)=>{
//     console.log(bill)
// }).catch(function(error){
//     console.log(error)
// })

async function serveOrder(){

   let orderStatus = await placeOrder('coffee')
   console.log(orderStatus)

   let processedOrder = await processOrder(orderStatus);
   console.log(processedOrder)

   let bill = await generateBill(processedOrder)
   console.log(bill)

}

serveOrder()