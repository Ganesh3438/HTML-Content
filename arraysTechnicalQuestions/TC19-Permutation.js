let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j <arr.length; j++) {
    for (let k = 0; k <arr.length; k++) {
     
        if(i!==j && j!==k && k!==i){
            console.log(arr[i], arr[j], arr[k])
        }



    }
  }
}
