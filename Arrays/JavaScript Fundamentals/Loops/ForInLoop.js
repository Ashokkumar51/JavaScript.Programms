const user = {fname:"Ashokkumar", lname:"Soutapalli", age:21};

let text = "";
for (let x in user) {
  text += user[x] + " ";
}
console.log(text);