function placeOrder(drink){

    return new Promise(function(resolve, reject){
        if(drink == 'coffee'){
            resolve('Order placed')
        }else{
            reject('Order cannot be placed')
        }
    })
}

function processOrder(orderProcess){

    return new Promise(function(resolve){
    resolve(`${orderProcess} and Served`)
    })
}

function billGeneration(bill){
    return new Promise(function(resolve){
        resolve(`${bill} and the bill for the coffee is 200Rs`)
    })
}

async function serveOrder(){

try{
    
    let orderStatus = await placeOrder('coffee')
    console.log(orderStatus)
    
    let orderIsProcessed = await processOrder(orderStatus)
    console.log(orderIsProcessed)

   let billAmount = await billGeneration(orderIsProcessed)
   console.log(billAmount)
    
}catch(error){
console.log(error)
}

}

serveOrder()