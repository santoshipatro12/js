const name="santoshi"
const repoCount =50

console.log(name + repoCount);
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("santoshi")
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const str1= "    santoshi   "
console.log(str1);

console.log(str1.trim());

const url ="https://santosahi.com%20patro"

console.log(url.replace('%20','_'));
console.log(url.includes('hello'));

console.log(gameName.split('s',3));

