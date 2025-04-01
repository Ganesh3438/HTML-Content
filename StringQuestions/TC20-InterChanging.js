let name = "Automation"; // op: uAotamitno
let temp = "";
let temp1 = "";

for (let i = 0; i < name.length; i++) {
  let ch = name.charAt(i);
  if (i % 2 == 0) {
    temp = temp + ch;
  }
}

for (let i = 0; i < name.length; i++) {
  let ch = name.charAt(i);
  if (i % 2 != 0) {
    temp1 = temp1 + ch;
  }
}

for (let i = 0; i < temp1.length; i++) {
  let ch = temp1.charAt(i);

  for (let j = 0; j < temp.length; j++) {
    if (i == j) {
      let ch1 = temp.charAt(i);
      let ch2;
      ch2 = ch1; // ch2 = A
      ch1 = ch; // ch1 = u

    //   console.log(ch1 + "" + ch2);
      process.stdout.write(ch1 + "" + ch2);
    }
  }
}
