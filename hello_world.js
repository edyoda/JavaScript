// alert("Hello world!!!");
// console.log("working fine")

/*
Datatypes in JS:
  1. number 10 125.2555   Infinity => isFinite()  NaN => isNaN()
  2. string '' " " ``
  3. boolean true false
  4. Objects {"username":"abc","password":"abc@123"}
  5. undefined
  6. null

Variable name rules:
    1. start with alpha
    2. digits are allowed but not ata the start
    3. special char _ and $
    4. camelCasing firstName
    5. for constants use all caps

Operators :
  1. Arithmatic +,-,/,*,%,**
  2. Comparison ==,!=, === , <,>,<=,>=
  3. Assignment operators =,+=,-=,*=,/=
  4. Increment operators ++, --
  5. Logical operators ||,&&,!

Conditional operators :
  if (condition){

}else if{

}else{

}

Loops :
  For
  while
  do while
  for in
  for of
  for each

*/

// let num;
// num = 100;
// alert(num);
// alert(typeof(num))

//
// let s = " Welcome to JS";
// const HOST_ADDRESS = "127.28.7.25"
//
// alert(a);
// a = "127.28.7.27"
// alert(a);



// let user = {"username":"abc","password":"abc@123"}
// alert(typeof(user))

//
// let numbers = [10,20,30,40,50,60]
// alert(typeof(numbers))


// alert("Hi JS"/ 100)
// alert(100 / 0)

// let s = "10"
// let a  = "JS" / 2
// alert(isNaN(a))

//
// let b = 100 / 2
// alert(isFinite(b))

// let s1 = 10
// let s2 = 20
//
// alert(s1 + s2)


// let num1 = 10
// let num2 = '10'
// alert(num1 === num2)

//
// let num1 = 10;
// num1 += 1 ;
// alert(num1);


// alert( (10 ==10) && (11==10))

//
// char = 'a'
// if (char == 'a' || char == 'e'){
//   alert("vowel")
// }else{
//   alert('cosonent')
// }

//
// let num1 = 700;
// let num2 = 600;

// if (num1 > num2){
//   alert(`${num1} is greater than ${num2}`)
// }else if (num2 > num1){
//   alert("num2 is greater")
// }else{
//   alert("both are equal ")
// }

// let result = (num1 > num2) ? alert("num1 is greater") : alert("num2 is greater")


//
// if (1){
//   alert("Hi")
// }else{
//   alert("JS")
// }
//

// let numbers = [10,20,30,40,50]
// alert(numbers)

// let numbers = new Array(10,20,30,40,50,60)
// alert(numbers)

//
// let numbers = [10,20,30,40,50]
// let sum = 0
// for (let i = 0 ; i< numbers.length;i++){
//   sum = sum + numbers[i]
// }
//
// alert(sum)

// let numbers = [10,20,30,40,50,60,70];
// key = 20;
//
// for (let i = 0;i< numbers.length;i++){
//   console.log(i)
//   if (numbers[i] != key) {
//     continue;
//     alert("Hi");
//   }
//   else{
//     console.log("key found");
//     break;
//   }
// }
//
// let sum = 0;
// let count = 1;
//
// while(count <= 20){
//   sum = sum + count;
//   count+=1;
// }
// alert(sum)

//
// let numbers = [80,70,60,40,50,40,30]
// let count = 0
//
// while(count < numbers.length){
//
//   for (let i =0;i<numbers.length;i++){
//       if(numbers[i] > numbers[i+1]){
//           let temp = numbers[i]
//           numbers[i] = numbers[i+1]
//           numbers[i+1] = temp
//       }
//   }
//   count+=1;
// }
// alert(numbers)


//
// let n = [80,75,600,400,50,45,30]
// let max = 0;
//
// for(i=0;i<n.length;i++){
//     if (n[i] > max) {
//       max  = n[i]
//       console.log(max)
//     }
// }
//
// alert(max)
//
// for (let num of n){
//   console.log(num)
// }

// let user = {'username':'abc','password':'abc@123','email':'abc@gmail.com'}
// for (let x in user){
//   console.log(x,user[x])
// }
//
// let n = [80,75,600,400,50,45,30]
//
// n.forEach(item => console.log(item))

// do {
//
//
//
// }while();
//
// fun def
// fun call
// let n = [10,20,30,40,50,60,70];
// key = 20;
// let result = linear_search(n,key)
// alert(result)
//
//
// function linear_search(n,key){
//
//   for (let i = 0;i< n.length;i++){
//     // console.log(i)
//     if (n[i] != key) {
//       continue;
//     }
//     else{
//       return true
//
//     }
//   }
//   return false
// }
//

// let lSearch = function(n,key){
//     for (let i = 0;i< n.length;i++){
//       // console.log(i)
//       if (n[i] != key) {
//         continue;
//       }
//       else{
//         return true
//
//       }
//     }
//     return false
// };
//
//
// let n = [10,20,30,40,50,60,70];
// key = 20;
// let result = lSearch(n,key)
// alert(result)

// arrow functions
//
// let add = (a,b) => a+b;
//
// let result = add(10,20)
// alert(result)


//
// let lSearch = (n,key) => {
//     for (let i = 0;i< n.length;i++){
//       // console.log(i)
//       if (n[i] != key) {
//         continue;
//       }
//       else{
//         return true
//
//       }
//     }
//     return false
// };
//
// let n = [10,20,30,40,50,60,70];
// key = 20;
// let result = lSearch(n,key)
// alert(result)
//
// push() => add elemnt at the end
// pop() => remove element from the end
//
// shift() => remove from start
// unshift() => add elemnt at start

// let n = [10,20,30,40,10,50,40,40,40]
// let n = new Array(10,20,30,40,50)
// n.push(60,70,80)
// console.log(n)

// n.pop()
// console.log(n)

// n.unshift(60)
// console.log(n)
//
// n.shift()
// console.log(n)

// console.log(n.includes(10,2))
//
// console.log(n.indexOf(40))
// console.log(n.lastIndexOf(40))
// console.log(n.slice(2,6))
// let n = [10,20,30,40,10,50,40,40,40]

// n.splice(index,del_count,elements to insert)
// n.splice(2,0,200)
// n.splice(2,3,200,400)
// console.log(n)

// let n = [10,20,30,40,50]
// let result = n.map((item) => item * item )
// console.log(result)
//
// let n = [10,15,20,25,30,35,40,45,50]
// let result = n.filter((item) => item % 2 == 0 ? true : false)
// console.log(result)

//
// let n = [10,20,30,40,50]
// alert(n.isarray())


// let emp = new Object();
//
// emp.id = 101
// console.log(emp.id)
// console.log(emp['id'])
// console.log(emp['name'])


// let emp = {'id':101,"name":"abc","email":"abc@gmail.com"}
// console.log(emp.id)
// console.log(emp['id'])

// emp.name = "PQR"
// emp.id = 102
// console.log(emp['id'])
//
// delete emp.id
// console.log(emp['id'])

// console.log(Object.keys(emp))
// console.log(Object.values(emp))
// console.log(Object.entries(emp))
//
// user1 : first name ,last name,email , contact
// user2
// user3
//
// function User(firstName,lastName,email,contact){
//       console.log(firstName,lastName)
//       this.fName = firstName;
//       // console.log(this.fName)
//       // let lName = lastName;
//       // let email1 = email;
//       // let contact1 = contact;
// }
//
// let user1 = User("ABC","PQR","abc@gmail.com","9123456789");
// console.log(user1.fName)
