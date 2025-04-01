function greet(){

    let name = "Steve";

    function displayName(){
        
        console.log('Name is '+ name)
      
        let age = 25;

        function displayAge(){
            console.log('Age is '+ age + " "+ name)
            
        }
       
        return displayAge
        

    }

    return displayName;

}

let fun = greet();
// console.log(fun)
let g1 = fun()
g1()

