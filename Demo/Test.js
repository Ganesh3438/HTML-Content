class Car{

     username;

   test(){
    console.log('I am from car class')
   }

   speed(){
    console.log('I am from Car class')
   }

   usernameDetails(username){
        this.username = username;
   }


}

// export default Car;

// exports.default = Car; 

module.exports = Car;

// module.exports = {a:2, b:5}

