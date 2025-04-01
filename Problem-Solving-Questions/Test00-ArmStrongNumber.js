// let n = 153;
// let temp = n;
// let sum = 0;
// // console.log(temp)
// while(temp>0){

//     let rem = temp % 10;
//     // console.log(rem)
//     sum = sum + rem*rem*rem;
//     temp = Math.floor (temp/10);

// }

// console.log(`The sum number is ${sum}`)

// if(sum === n){
//     console.log('It is an armstrong number')
// }else{
//     console.log('It is not an armstrong number')
// }

// let name = "JavaScript is very PowerFul tool";
// let temp = ''
// for (let i = 0; i < name.length; i++) {
//   let ch = name.charAt(i);
//   if (ch >= "A" && ch <= "Z") {
//     // console.log(ch);
//     temp = temp + ch + " "
//   }
// }
// console.log(temp)

// let name = 'JavaScript';
// let temp = "";

// for(let i=name.length; i>=0; i--){
//     let ch = name.charAt(i);
//     temp = temp + ch;
// }

// console.log(temp)

let name = 'Interactive very is JavaScript'
let word = name.split(' ');
let temp = ''
console.log(temp)
for(i=word.length-1; i>=0; i--){

if(i==0){
    temp = temp + word[i];
}else{
    temp = temp + word[i] + " ";
}

}

console.log(temp)
