//Step 1


//allocate the memory through the keyword
// "=" assiging operator 
// ";" terminator operator
//"a" is a variable


// var a = 5;
// var b = 10;
// var c = a+b;
// alert(c); 
// console.log(c)



//Step 2

//translation (covert to code a machine language) ----> 1 & 0
//compilation (user write a code is known as compilation)
//interpretation ( left to right & line by line translation)
//assembler (using a major appliance)



// var x = 5;
// var y = "ali";
// var z = y+x; //contenation : this is merging of two particular elements 
// alert(z);



// var !noman = 20;// (legal & illegal concepts)

// var nomanNasir = 20; //(using camelcase)

// var f = 20;
// var g = "10";
// var h = f+g ; 
// alert(h);



// var f = 20;
// var g = "2";
// var h = f*g ; //concatenation is work only "+" operator
// alert(h);



// var a = 3;
// var b = 5;
// var c = 7;
// var d = b - a * c ;
// alert(d);


//(a++) ----> postincrement
//(++a) ----> preincrement
//(a--) ----> postdecrement
//(--a) ----> predecrement

// 5 + 7 + 7 + 6 + 6 - 5

// var a = 5;
// var b = ++a; 
// alert(b);
// alert(a);


// var x = 10;
// var y = x++ + ++x - x + x++ - ++x + x;
//         10  + 12  - 12 + 12 - 14  + 14
// alert(y);

// var x = 10;
// var y = x-- + --x - x + x-- - --x + x;
//         10  + 8  - 8 + 8 - 6  + 6
// alert(y);

// console.log(y);


///////////////////////////// CHAPTER NO # 09 (PROMPT)  ////////////////////

// var a = +prompt("Enter your age", "Your age is :"); //(your age is :) ---> placeholder
// var b = a  + 10;
// console.log(b);
// document.write("the output is" + " " + b);   //generte the screen value




/////////////////////////// CONDITIONAL STATEMENT ////////////////////////////

// var age  = 15;

// var age = +prompt("Enter your age");

// if(age === 20  )
// {
//     alert("your age is less");
// }
// else if(age < 20 ){
//     alert("you are no more with less age");
// }

// else{
//     alert("your age is more");
// }



// var age = +prompt("Enter your age");
// var gender = prompt("Enter your gender");

// if(age > 18  && gender === "male" )  //(||)--> this is or operator 
// {
//  alert("Your are allowed to right")
// }

// else{
//     alert("You are not allowed")
// }




// var a = "5";
// if(a == 5) //(==)-->two equals this is check only values
// {          //(===)--> three equals this is check two thing type and value
    // alert(true);
// }
// else{
//     alert(false);
// }



// var a = 10;
// if(a !== 10) 
// {
//     document.write("Correct");
// }
// else{
//     document.write("incorrect");
// }





///////////////////////////////  NESTED IF ELSE CONDITION  ///////////////////////////

// var percent = +prompt("Enter your percent");

// if(percent >= 80 && percent <= 100)
// {
//     alert("A+")
// }
// else if(percent >= 70 && percent <= 80){
//     alert("A")
// }

// else if (percent >= 60 && percent <= 70){
//     alert("B")
// }

// else if(percent >= 50 && percent <= 60){
//     alert("C")
// }

// else if(percent >= 40 && percent <= 50){
//     alert("D")
// }

// else if (percent >= 33 && percent <= 40){
//     alert("E")
// }

// else if(percent >= 0 && percent <= 33){
//     alert("F")
// }

// else{
//     alert("You dont write correct percentage")
// }




///////////////////// ARRAYS  ///////////////////////////

// var name = "noman";
// var name1 = "nasir";
// var name2 = "gulham";

// console.log(name1)

// var stds  = ["noman", "nasir", "gulham", 123]
// console.log("Welcome" + " " + stds[3])

// var names = [];

// names[0] = "Noman"
// names[1] = "Nasir"

// console.log(names)



// var stds  = ["noman", "nasir", "gulham","ali", "asho", "maaz", "Siddique"]

// stds.shift()    //remove element for first element
// stds.unshift("bilal", "zunaib") //push element for start
// stds.pop()  //remove for last element
// stds.push("bilal","Zunaib")  //push element for last e lement 

// stds.splice(3,2,"bilal")  // three passing the parameters (0)-->target the element (1)-->three delete the element ("")-->konsa name insert krwana hai
// var copyStudents = stds.slice(1,4) //(1)-->target the element (3)--->copy the elements
// console.log(stds)
// console.log(copyStudents)

// console.log(stds)



// var a;
// for(a=1 ; a<=10 ; a = a+2)
// {
//     console.log(a);
// }


// for(var i=1 ; i<=10 ; i++)
// {
//     document.write("2" + "x" + i + "=" + 2*i + "<br>")
// }

// var names = ["noman", "fahad", "nasir"]

// for(var i = 0 ; i < names.length ; i++)
// {
//     if(names[i] === "fahad"){
//         console.log(names[i] + " " + "already availabe")
//        break; 
//     }
    
// }




// for (var i = 0 ; i < 20 ; i++ ){
//     if(i === 10)
//     {
//         break;
//     }
//     console.log("hello")
// }



/////////////////   NESTED FOR LOOP   ///////////////////////////


// for(var i = 0 ; i < 5 ; i++)
// {
//     for(var j = 0 ; j < 3 ; j++)
//     {
//         document.write("Pakistan Zindabad")
//     }
// }


// for(var i = 1 ; i <=5 ; i++){

//     for(var j = 1 ; j <=5 ; j++)
//     { 
//         if(i==j){
        
//         document.write("o")
//     }
//      else{
        
//     document.write("x")
//     } 
// }
//     document.write("<br>")
    
// }




// var word = prompt("Enter your word");
// var check = "";  // empty string becz this is not declaration

// for(var i = word.length - 1 ; i >= 0 ; i--)
// {
//     // console.log(word[i])
//     check += word[i]

// }
//     if( word === check){
//         alert(word +" is Palindrome word")

//     }
//     else{
//         alert(word+ " is not palindrome word")
//     }




// var name1 = "noman";

// name1 = name1.toUpperCase();

// alert(name1);

// var name1 = "Noman Nasir"

// console.log(name1.indexOf("r")) //count the index number










// var val1 = prompt("Enter your first value")
// var val2 = prompt("Enter your second value")
// var sign = prompt("Enter your operator")

// console.log(val1)
// console.log(val2)
// console.log(sign)

// console.log(val1+sign+val2)

// if(sign === '+')
// {
//     alert((+val1)+(+val2))
// }
// else if(sign === '-')
// {
//     alert(val1-val2)
// }

// else if(sign === '*')
// {
//     alert(val1*val2)
// }

// else if(sign === '%')
// {
//     alert(val1/val2*100 + '%')
// }






// var equ = prompt("Enter your equation");

// for(var i = 0 ; i < equ.length ; i++){
//     if(equ.slice(i,i+1) === '+' || equ.slice(i,i+1) === '-' || equ.slice(i,i+1) === '*' ||equ.slice(i,i+1) === '/' )
//     {
//         alert("sign is found")
//     }
// }



// var equ = prompt("Enter your equation"); 
// for(var i = 0 ; i < equ.length ; i++){
//     if(equ.slice(i,i+1) === " ")
//     {
//         alert("DOUBLE SPACES")
//     }
// }




// for(var a = 1 ; a <=100 ; a = a+10 ){
//     for(var b = a ; b< a+10 ; b++){

//  document.write(b + " ");
//     }
//     document.write("<br>")
// }






// var city = prompt("Enter your city")
// city = city.toUpperCase();

// var arr = ['karachi' , 'islamabad']

// for(var i=0 ; i<arr.length ; i++){
//     if(arr[i] === city){
//         alert("City has found");
//         break;
//     }
//     else{
//         alert("City has not found")
//         break;
//    }
//  }




// var city = prompt("Enter your city")

// var firstChar = city.slice(0,1);

//firstChar = firstChar.toUpperCase();

// var otherChar = city.slice(1);
//otherChar = otherChar.toLowerCase();

// var city = firstChar + otherChar;
// console.log(city);
// var arr = ['Karachi' , 'Lahore', 'Islamabad']

// for(var i=0 ; i<arr.length ; i++){
//     if(arr[i] === city){
//         alert("City has found");
//         break;
//     }
//     else{
//         alert("City has not found")
//         break;
//     }
// }




// var text = "Name is Noman";
// var indexNum = text.indexOf("n");
// var firstText = text.slice(0,indexNum)
// var replacingText = "Nokia";
// var thirdText=" ";
// console.log(firstText+replacingText+thirdText)




// var text = "this Name is this Noman";
// var indexNum = text.lastIndexOf("a");
// var firstText = text.slice(0,indexNum)
 // var replacingText = "Nokia";
// var thirdText= " ";
// console.log(firstText + replacingText + thirdText)


// var a = "Noman";
// console.log(a.charAt(1)); //charAt index number pr konsa a alphabet parha howa hai


// var para = "this is example";

// var para1 = para.replace("example" ,"text");
// console.log(para1)



// var para = "this is example, this is example";

// var para1 = para.replace(/this/g ,"text"); // g using this global example agr repeat horha hai to for example (/example/g)--> krky ap repeation element replace krwaskta hai

// console.log(para1)





//////////// ROUNDING FUNCTIONS ////////////////////////

// var num = 1.4;
// var round = Math.round(num); //round nearest value uthayega
// console.log(round);



// var num = 1.3;
// var round = Math.ceil(num); //ceil biggest value pick kareyga
// console.log(round);


// var num = 1.7;
// var round = Math.floor(num);  //floor smallest value pick kareyga
// console.log(round);





/////////////////// GENERATING RADOM VALUE  ///////////////// 


// var headuser = prompt("Enter heads username");
// var tailsuser = prompt("Enter tails username");

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)

// if(floor === 0){
//     alert("heads " + headuser + " win the toss")
// }
// else{
//     alert("tails " + tailsuser + " win the toss")
// }

// console.log(floor)



///////////////////// Converting string to integers and decimals   //////////////////

// var num = parseInt("10");
// console.log(num);


///////////////////////  Converting string to number   ///////////////////


// var num = 10;
// console.log(num.toString());


////////////////////////////  Controlling the length and decimal   ////////////////////////

var num = 10.544546565;
var cont = num.toFixed(2) // decimal ki length ko control krny ky liye humain (toFixed()) ---> lgana paryega
console.log(cont); 



//////////////////////////  DATE AND TIME //////////////////////////////////////


// var dob = new Date("6/10/2000")

// var dob = new Date(prompt("Enter your date of birth" , "Oct 6, 2000"))

// var dobmili = dob.getTime();
// var today = new Date();

// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accurate = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accurate)


// function agecalc(){

// var dob = new Date("6/10/2000")

// var dob = new Date(prompt("Enter your date of birth" , "Oct 6, 2000"))

// var dobmili = dob.getTime();
// var today = new Date();

// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accurate = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accurate)

// }

// agecalc();


/////////////////////////   FUNCTIONS   /////////////////////////

// function greeting(greet){
//     alert(greet)
// }

// greeting("Hello");

// function greeting(){
//     alert("Hello")
// }

// greeting();


// function add(a,b,c){
//     alert(a+b+c)
// }

// add(3,4,6);



// function add(a,b,c){
//     var c = a+b+c 
//     return c ; // return agr koi value leni hoto ussy aik variable main stored krna hoga
// }
// var g = add(5,5,5);
// alert(g);



// var h = 15; //global variable
// function add(a,b,c)
// {
//     alert(h);
//     var f = 15; // function ky undr local variable ajaty hai jo outside the function use nhe krskty
//     var z = a+b+c;
//     return z;
// }

// var g = add(4,4,4)
// alert(g);
// console.log(f);



// function add(a,b){
//     return "Hello";
// }

// alert(add(3,4));


// var a  = "Noman"

// function first(){
//     a = "Ahmed"
// }

// // first();
// alert(a);




// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1+num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }
//     else if(opr === "/"){
//         return num1 / num2
//     }
//     else{
//         return "Incorrect operator"
//     }
// }

// var result = calc(5,"+",5)

// var result1 = calc(5,"-",2)

// var result2 = calc(5,"$",4)

// alert(result)
// alert(result1)
// alert(result2)


// default parameter 
// function foo(a,b = 3){
//    return a+b;
// }

// alert(foo(2)); // value agr b = 5 na mily to uppr default main b=3 hai wo uthalo



///////////////////////   SWITCH STATEMENT   ///////////////////////////

// var first = "ahmed";

// switch(first){
//     case "Noman":
//         alert("Hello 1")
//         break;

//         case "Nasir":
//         alert("Hello 2")
//         break;
//         default: //default tab use hoga jesy ap if else main else lgaty thy waisy ye default use hoga
//             alert("Wrong")

// }






////////////////   WHILE AND DO-WHILE LOOP   / /////////////////////////


//WHILE AS COMPARE TO FOR LOOP COMPILE TIME FASTER HAI 
//DO WHILE AIK CONDITION AIK BAAR LAZMI CHALTA HAI


// for(var a = 0 ; a<10 ; a++){
//     console.log(a)
// }

// var b = 0;
// while(b<10){
//     console.log(b)
//     b++;
// }


// var c = 0;
// do{
//  console.log(c)
//  c++;
// }
// while(c<10);





//////////////////////  STARTING CHAPTER NO # 51 ///////////////////////////////



// function readMore(){

// var text = document.getElementById('text').innerHTML;
// var peragraf = document.getElementById("pera");
// peragraf.innerHTML = text  //innerHtml means parapgraph or div main kaam kr rhy  hoon to innerHtml use hoga (value mean input fields sy hoga)
  
// }


// function big(){
//     var img  = document.getElementById('car');
//     img.className += ' hidden'; // (+= ' hidden)---> iss sy ye hoga ky phely jetni bhi classes lgayi hongyi wo ignore krky hidden wali apply krdeya
// }



// function changeImage()
// {
//     var carImage = document.getElementById('img');
//     carImage.src = "images/Stunning.jpg"
// }

// function changeImageBefore(){
//     var carImage = document.getElementById('abc');
//     carImage.src = "images/Stunning.jpg"
// }


// function changeImage(id,src){
//     var carImage = document.getElementById(id);
//     carImage.src  = src;   
// }





// function changeImage(){
//     var carImage = document.getElementById('para');
//     carImage.style.fontSize = '2em';  //this is apply the styling with the help javascript 
// }



// var parent = document.getElementById('parent');
// var para = parent.getElementsByTageName('p');
// // var para = document.getElementsByTagName('p');   //this is apply the target on tag name 
//     // para[2].style.color = "red"
//     for(var i = 0 ; i < para.length ; i++){
//         para[i].style.color = 'blue';
//     }


// var para = document.getElementsByTagName('p');   //this is apply the target on tag name 
//     para[2].style.color = "red"
//     for(var i = 0 ; i < para.length ; i++){
//         para[i].style.color = "blue"










///////////////     INTRODUCTION TO DOM(DOCUMENT OBJECT  MODEL)      /////////////////
 
// var a = document.getElementById('papa')

// // console.log(a.childNodes)
// // console.log(a.nodeType)
// console.log(a.nodeName)

/////////////////  chap = 65 (ATTRIBUTES)  ////////////////////////


var target = document.getElementById("p1");

if(target.hasAttribute("id")){
    alert("available")
}
else{
    alert("not attribute")
}



var target = document.getElementById("p1");


// console.log(target.setAttribute("class","blue"))

// console.log(target.getAttribute("class"))

// console.log(target.attributes[0].nodeType)


// var p = document.createElement('h1')
// var text = document.createTextNode("Hello World")
// p.appendChild(text)  //kisi bhi tag ky andar agr koi text insert krna ho to appendChild ka method use hoga


// var main = document.getElementById("main")
// main.appendChild(p)
// console.log(p)


// function addMessage()
// {
//     var val = document.getElementById("val")
//     var p   = document.createElement("p")
//     var textNode = document.createTextNode(val.value);
//     p.appendChild(textNode)
//     var message = document.getElementById("messages")
//     messages.appendChild(p)
//     val.value = "" 
// }




///////////////////////    CREATE A OBJECT   /////////////////////////

// var webCourse = {
//  t1 : "ali",    //general structure an object
//  t2 : "ghous" , 
//  t3 :  "basit"
// }




// var myQuestions = [
//     {
//         question : "What is Your Name",
//         answer   : {
//             a : "ali",
//             b : "ghous",
//             c : "basit" 
//         }, 
//         correctAnswer : "c"
//     },

//     {
//         question : "What is Your Name",
//         answer   : {
//             a : 15,
//             b : 12,
//             c : 16 
//         }, 
//         correctAnswer : "b"
//     },
// ]
// q

// function Course (t1, t2, t3){
//     this.t1 = t1; //this basically ye defined krta hai ky jis location pr ye t1 ki property mojood hai
//     this.t2 = t2; 
//     this.t3 = t3;
// }
// a/c to object oriented program
// var xyx = new Course("ali", "noman", "ghous") //create a instance of oop
 

////////  prototype  //////////

// Student.prototype.getName = function(){
//     return this.name;
// }

var course = {
    name : 'nomi',
    roll : 123 ,
    school : 'saylani'

}

// for(var prop in course){
// console.log(prop,course[prop])
// }

console.log("roll" in course)


function saveData(){
    var name = document.getElementById('name')
    var roll = document.getElementById('roll')
    
    var student = {
        name : name.value,
        roll : roll.value
    }
    

    firebase.database().ref('student').set(student)

}

function getFirebaseData(){
    firebase.database().ref('student').once('value' , function(data){
        console.log(data.val())
    })


}

getFirebaseData()

/////////////////  Add to cart functionality   /////////////////

// function addtocart(){
//     var img = document.getElementById("product");

// }

    
// if(true){
//     let name = "noman";
// }

// for(var i = 0 ; i < 5 ; i++){
//     let name = "basit" // let mean variable ka naam unique hona lazmi hai

// }



// const school = " saylani";

// var obj = {
//     schoolName : school
// }

// console.log(obj)


////////////////     template literals    /////////////////


// let firstName = "nomi";
// let lastName = "noman";

// console.log(`My Name is ${firstName} ${lastName}`) //concatenate krwany ky liye ye kaam ata hai ES6 main


var students1 = ["ghous", "basit"]

var students2 = [...students1, "ashfaq", "nasir"] // ap iss tarah merge krogy (...)--> dy kr ES6 main

// var merge = students1.concat(students2) //ye tareeka basic JS ka hai


/////// ap iss tarah objects ko merged krskty hain    ///////////////////////

var students1 = {
    name : "saylani"
}
var students2 = {
    ...students1, saylani: "school"
}


console.log(students2)


/////////////////    object destructuring   /////////////////////////////

// var student = {
//     name : "Noman",
//     school : "saylani",
//     rollNo : 123
// }

// console.log(student.rollNo)


// let {name,school,roll} = student;

// console.log(name)
// console.log(school)



////////////  ternary operators  ////////////////////

var age = 20;
var check = 
age > 30 ?
 "30 se bara hai" : "30 se chota hai";
 console.log(check)

// if(age > 30){
//     console.log("30 sy bara hai")
// }

// else{
//     console.log("30 sy chota hai")
// }




////////////////// Asychronous or synchronous

// var name1;
// setTimeout(function(){

//    name1 = "Nomi"
    
// // console.log("Number 1")
 

// }, 1000);

// console.log(name1)
// // console.log("Number 2")

// console.log("Number 3")


 ///////   promise /////////


//  var promise = new Promise(function(resolve,reject){///////////// create a promise

//     var zinger = "Nahi khilaya";

//     if(zinger === "Available"){
//         resolve("han khila dya")
//     }
//     else{
//         reject("nhe khilaya")
//     }


//  })

//  promise.then(function(data){

//     console.log(data)
//  })
//  .catch(function(error){

//     console.log(error)

//  })




// let obj = {
//     name : "Noman",
//     email : "noman@gmail.com"
// }

// let {name,email} = obj

// let name = obj.name;


////////////// ARRAY DESTRUCTURING /////////////////////


// let arr = ["ghous","basit","Noman"]

// // let [name1,name2,name3] = arr;
// console.log(name1)








/////////////////////   function expression   //////////////////////////////


// let foo = function(){
 //     console.log("Hello World")
// }

// foo();


////////////////////   arrow function   ////////////////////////

// let hello = () => "Noman" 
//     // console.log(`Hello ${name1} and ${name2}`)


// // hello("Noman","Nasir")
// console.log(hello())





/////////////////////   call back functions   //////////

// setInterval(() => console.log("hello"), 1000)

// setTimeout()


// let getData = () =>{
//     firebase.database().ref('/').on("child_added",(data)=>{
//         console.log(data.val)
//     })
// }

// let render_data = () => {

// }

//////////////  array/higher functions

// let arr = [{name: "Noman", age: 20}, {name : "basit", age: 30}]

// let filter = arr.filter(a => a.age ===20)


// console.log(filter)  //// higher order function


//////////////  search

// let name = "Noman"
// let search = "d"

// console.log(name.endsWith(search))

// console.log(name.startsWith(search))
// if(search.startsWith(name)){

//     console.log(name)
// }


//////////////  ARRAY MAP  /////////////////

// let arr = [{name: "Nomi"}, {name: "basit"}];


// console.log(arr)

// let multiple = arr.map(a => a*2)

// let multiple = arr.map(a => a.name = "umair" )


// let multiple = arr.map(a => {
//     document.getElementById("table").innerHTML = a.name
// })

// console.log(multiple)









//////////////////////////  EVENT: LINK  ////////////////////////////

// function foo(greet){
//     // var a = 2 + 2
//     // alert('hello word')
//     alert(greet);
// }


// function clickBtn(){
//     alert("Click");
// }


// function getName()
// {
//     var name = document.getElementBy("xyz");  //(document.getElementbyid)---> Element ko get kro uss ki id sy
//     alert(name.value)
//     name.value = " "
// }



    // function setName()
    // {
    //     var name = document.getElementById("xyz")
    //     name.value = "Noman";
    //     var para = document.getElementById("para");
    //     para.innerHTML = "Hello this is an example"
    // }
    // setName();

































 function getNumber(num){
    // console.log(num);
     var result = document.getElementById("result");
     result.value += num;
}


function clearResult(){
    var result = document.getElementById("result");
    result.value = " ";  
}

// function openBracket(){
//     var result = document.getElementById("result");
//     result.value = eval(result.value);
// }

function getResult(){
    var result = document.getElementById("result");
    // console.log(result.value);
    result.value = eval(result.value);
}





























//////////////////////   CREATE A STOP-WATCH   /////////////////////////////

