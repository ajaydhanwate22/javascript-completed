//   -javscript improves the user experiece ofthe web page by converting it from a static page into itractive one. 
//- javscript is text based progarmming langage . 
//-used of js both client side and server side that allows you to make web page intractive. 
console.log('hello world');







// section 1 :values and variables in javascript 






// Naming variables rules
// 1:you cant use a nmber of first character 
// 2:variables names are case sensitive 
// 3:no limit to the lenght of the variabes name 
// 4:ypu cant use one of javascript reserved words as a variables name
// var myName ='ajay dhanwate';
// var myAge = 23;
// console.log (myName);






// section 2: data types in javscript 






// six data types that are primitives
// 1:undefined 2:boolen  3:number 4:string  5:bigint 6:Symbol 

// var myName ='ajay dhanwate';
// console.log (myName);

// var myAge =23;
// console.log(myAge)

// var iAmdhanwate = false;
// console.log(iAmdhanwate)  

// konse type ka data hai ye dekhane ke liye type of menthod 
// console.log (typeof(iAmdhanwate));

// ****** challenge time *********
// var myNum =9 + "5";
// console.log(myNum);     answer :95

// var myNum =9 - "5";
// console.log(myNum);     answer :*************bug*******************

// var myCource ="java" + "script"
// console.log(myCource)      answer :javascript 

//  var empty = "" + "";
// console.log(empty);         answer :

// var empty = "" + "0";
// console.log(empty);          answer :0  

// var myName ="ajay" - "dhanwate"
// console.log(myName)          answer :Nan

// var boolen = true + true    
// console.log(boolen)             answer :2  (1means true and 0 menas false)

// var boolen = true + false
// console.log(boolen)                  answer :1

// var booolen = false + true 
// console.log (booolen)                answer :1

// var booolen = false - true
// console.log (booolen)                  answer :-1
    
// ******interviews questions******  
//   diffrence between null and undefine :null means jiska use nahi hota,undefined matalb jiski vlaue defined nhi ki jate usko undefined bolte 

// ex:null
// var iamuseless = null;
// console.log(iamuseless);
// console.log(typeof(iamuseless));   *************bug*******************

// ex:undefined
// var imstandboy;
// console.log(imstandboy)

// ******interviews questions******  
// what is NAN :NAN property  of global object . not a number

// ex:
// var myPhoneNumber = 9579218227;
// var myName = "ajay dhanwate";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if (isNaN(myName)){
//     console.log('plz enter valid phone number')
// }

// challenge time
//  console.log(NaN === NaN);        false 
// console.log(Number.NaN===NaN);    false
// console.log (isNaN(NaN));         true
// console.log (isNaN(Number.NaN));   true
// console.log (Number.isNaN(NaN));   true








// section 3 :expressions and operators 









// ex : console.log(5+20); 
// 5 and 20 are operand : + symbol is operator
// combination of both is expression

// six type of operators 
//******** */ 1:assignment operators 2:arithmetic operators 3:comparisons operators 4:logical operators 5:string operators  6:conditional opeartors ******

// 1: assignment operators (=)
// an assignment operators assign a value to its left operand based on the value of its right operand .
// the simple asssignment operator is equal (=)

// var x = 5;
// var y = 10;
// console.log ("is both the x and y are equal" + x==y);

// 2:arithmetic operators  (-,+,/,*,%,x++,--x,x--,--x)
// an arithmeic operator takes numerical values as their oprand and return a single numerical values.
// console.log (3+3);
// console.log (10-5);
// console.log (20/5);
// console.log (5*6); 
// console.log ("reminder operator" + 27%4);
    
// increament operator and decreament operator:(x++,--x,x--,--x)
//postfix means operand ke bad : prefix menas oerand ke aage 

// postfix increaemnt opertor: 
// var num = 15;
// var newNum = num++ +5;
// console.log(num);  //ans :16
// console.log (newNum);  //ans :20

// prefix increaemnt opertor: 
// var num = 15;
// var newNum = ++num+5;
// console.log(num);   //16
// console.log (newNum);    //21

// postfix decreaemnt opertor: 
// var num = 15;
// var newNum = num-- -5;
// console.log(num);   //ans :14
// console.log (newNum);     //ans 10

// prefix decreaemnt opertor: 
// var num = 15;
// var newNum = --num-5;
// console.log(num);     //ans:14
// console.log (newNum);    //ans:9

// 3:comparison operator  (equal (==),not equal (!=),grater than (>)),grater than or equal  (>!),less than (<),less than or equal (<!)

// var a =30;
// var b = 10;

// // equal (==)
// console.log(a==b);

// // not equal (!=)
// console.log(a != b);

// //grater than (>)
// console.log(a>b);

//grater than or equal  (>!)
// console.log(a>!b);

// less than (<)
// console.log (a<b)

// less than or equal (<!)
// console.log (a<!b)

//4:logical operator  (And && , or || , Not !)
//logical operator typically used with boolen (logical) values;
//when they are ,they return a boolen values

// var a = 30;
// var b = -20;

//logical AND (&&)
// all operand are  true if and only if all of its operanda are true 
// console.log (a>b && b>-50 && b<0)

// logical OR (||)
//one expresion are true and then operanda are true 
// console.log (a>b || b<-50 || b>0)

//logical not (!)
//note operator true ko false of false ko kar deta hai 

//5 string operators :::: concatenation operators (+)
// coombination of two string 
// console.log("ajay " + "patil")

// *******challeng time ********
// 1:what will be the output of 3**3?
// 2:what will be the output ,when we add number and a string ?
// 3:write a program to swap two numbers ?
// 4:write a program to swap two numbers withot using third variables ?

// // sol1: output :27
// console.log(3**3);

// // sol2: output :77dhanwate 
// console.log(77 + "dhanwate");

//sol 3/4:
// var a= 5;
// var b=10;
// //output b=5; a=10
// a= a+b; //a =15
// b=a-b; //b=5
// a= a-b; //a=10;

// console.log ("the value of a is" + a);
// console.log ("the value of b is" + b);

// **** interveiws question *****
// what is the diffrence between == vs === ?
// == me sirf value check ki jate hai or === me value ke sathh data type bhi check kiya jata hai   


// 6:conditional (ternary) operator {exactly match with if else statment}
// conditional ternary operator is the only javscript oprator that takes three operands
// syantax variablename =(condition) ? value1:value2

// var age =19;
// if(age>!18){
//     console.log('you are eligibal to vote');
// }else{
//     console.log('you are not eligibal to vote');
// }
// var age = 17;

// console.log((age >! 18)  ? "you can vote" : "you cant vote");





// *********section 4: control statment & loops********* 






// 1:if else statment,2:switch statment ,3:while loop ,4:do-while loop,5:for loop ,6:for in loop ,7:for of loop,conditional operator

// 1:if else statment***********************************

// var tomr = 'college'
// if (tomr=='college'){
// console.log ('tommorow is college');
// }else{ 
//     console.log('tommorow is not college');
// }

// var tomr = 'rain'
// if(tomr=='rain'){
//     console.log('take a raincoat')
// }else{
//     console.log('no need take a raincoat')
// }

// challenge time********
//1:write a  program that works out whether if a given year is a leap year or not

// var year =2020;

// if(year%4==0){
//     if (year % 100==0 ){
//         if(year %400==0){
//             console.log("the year " + year + " is a leap year ");
//         }else{
//             console.log("the year " + year + " is not a leap year ");
//         }
//     }else{
//         console.log("the year " + year + " is a leap year ");
//     }

// }else{
//     console.log("the year " + year + " is not a leap year ");
// }

//2:what is truthy and falsy values in javascript?
//we have total 5 falsy values in javscript 
// (0,"",undefined,null,NAN,false)
// if(..){
//     console.log("omg we loss the game");
// }else{
//     console.log("yah we won the game");
// }


// ************switch statment **************
// find he area of circle,rectangle , tringle 


// old version
// var area ="rectangle";
// var PI =3.142, l=5, b=4, r=3;

// if(area=="circle"){
//     console.log("the area of circle : " + PI*r**2);
// } else if(area=="tringle"){
//     console.log("the area of tringle : " + (l*b)/2);
// }  else if (area == "rectangle"){
//     console.log("the area of rectangle : " + (l*b));
// } else{
//     console.log("plz inter the valid data");
// }

// new version
// switch statmemnt syntax: switch(){

// }
// break statment is used to be true statment are executed then later stop it here

// var area ="tringle";
// var PI =3.142, l=5, b=4, r=3;

// switch(area){
//     case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2) ;
//     break;
    
//     case 'tringle':
//         console.log("the area of the tringle is : " + (l*b)/2) ;
//     break;

//     case 'rectangle':
//             console.log("the area of the rectangle is : " + (l*b));
//     break;

//     default:
//     console.log("plz inter the valid data");
//     }

// ************while loop **************
// synatx:while(){

// }
// the while loop statment create a lopp thet executes a specifiead statment as long as the test condition evalutes to true .

// var num =0;

// while(num <= 100){
//     console.log(num); //infinite loop 
//     num++;
// }


// diffreaance between while loop and do while loop:
// while loop me condition ko check kiya jata hai uske bad output aata hai but do while loop me conditon check kiya nahi jata directly answer diya jata hai ...


// ************do while loop *************
//  syntax:do{

//  }while();   


// var num =0;

// do{
//     console.log(num); //infinite loop 
//     num++;
// }while(num <= 100);


// ************for loop *************

// syntax: for(initializer;condition;iteration){

// }

// for(var num=0;num<=10;num++){     //num=0 is intializer ;num<=10 is condition; iteration is num++
//     console.log(num);
// }

// for(var num=0; num<=10;num++){
//     console.log(num)
// }


// ****************challenge time ***********************

// javscript program print table for given Number(8)?

// for(var num=1;num<=10;num++ ){
//     var tableof=8;
//     console.log(tableof*num);
// }

// remaining;;;;;
// 6:for in loop ,7:for of loop

// both are completed on arrays section"""""""""'





// *********section 4: function in javscript********* 
// a javscript funnction is a block of code design to perform a perticular task.

// 1:functions defination 
// 2:calling a functuion 
// 3:function parameter
// 4:function argument
// 5:function expression 
// 6:return keyword
// 7:anonymous function





// 1:functions defination 
// before we use a function,we need to define it.
// a function defination also called a function declaration or function statment
// syntax:function function name (){
            //statment
// }


// function sum(){
//     var a=10,b=20;
//     var total =a+b;
// }


// diffrence between function defination and calling function ?
// function defination means function ko declared kiya jata hai or calling function means function 
// ko calll kiya jata hai!!

// 2:calling function 
// function sum(){
//     var a=10,b=20;
//     var total =a+b;
// console.log(total);
// }

// sum();


// 3:function parameter  & 5:function argument
// what is difrence between function parameter and function argument
// function parameter are named listed in the function defination.
// function argumnet are the real values passed to the function .

// function sum(a,b){
//         var total=a+b;
//         console.log(total)
// }
// sum(40,50)   


// *****************interviews  questions ********************
// why functions ?
// you can reuse code :define the code once,and use it many times.
// you can use it same code with diffrent argument,
// to produce diffrent result.

// or

// a function is a group of reusable code which can be called anywhere
//  in your program .thus eliminates the need if writing the same code 
// again and again.




// 5:functions exeession:create a function and put it into the variables 

// function sum(a,b){
//             var total=a+b;
//             console.log(total)
//     }
//   var funExp =sum(40,50) ;  




  // 6:return keyword:
  //when javascript reaches a return statmenet,the functtoon will stop executing.
//   function often compute a retunr value .
// the return value is "returned" back to the "caller" 

// function sum(a,b){
//     return total =a+b;
//     }
//   var funExp =sum(40,50) ;
//   console.log('the sum of two number is'+ funExp);


  // 6: anonymous function:
//   a  function expression is similar to and has the same synatax 
// as a function declaration on can defined "named"
// function expression (where the name of the expression might 
// be used in the call stack for the examples)
// or anonymous function expression.

// function sum(a,b){
//     return total =a+b;
//     }
//   var funExp =sum(40,50) ;
//   console.log('the sum of two number is'+ funExp);









////////////////// welcome to ECMA script ////////////////


// future of   ecma script 2015 also known as ES6 
// 1:let vs const   vs var  
// const: variables ko change nahi kar sakte 
// var =>function scope
//let const =>block scope


// function biodata (){
//         let myfirstname="ajay";
//         console.log( myfirstname);
//         if(true){
//         let mylastname ="dhanwate"
//         console.log('inner ' + mylastname);
//         console.log('inner ' +myfirstname);
//         }
//         console.log('innerouter ' + mylastname)
// }
// biodata(20,20); 



// 2:templet literal :(templete string)
// javascript program to pirnt to givne number (8)?


// for(let num =1;num<=10;num++){
//     let tableof =8;
//     console.log( `${tableof * num}` )
// }




//3: default parameter
// default function parameter allow named parameter to be 
// initialized with default values if no value or defined is passed.

// function mult (a,b=5){
//     return a*b
// }
// console.log(mult(5));


// 4:fat arrows funtion

// normal way to write a function:
// function sum(a,b){
//     return total =a+b;
// }
// let funExp = sum(22,16);
// console.log(`the sum of two number is ${funExp}`);

// how to convert it into fat arrrow function :

// const sum =()=> `the sum of the two number is ${(a=4)+(b=6)}`;
// console.log(sum());


// *remaning***********************************************
// 5:object properties 
// 6:distructuring








// section 6:Arrays in javascript 
// single  variable me multiple data store kar sakte hai :
// when we use var ,we can store only one value at a time.
// when we feel like storing multiple values in one variable then insted of variale ,
// we  will use an aarray 
// in javscript, we have an arrys class,and arrays ae the prototype of this class.
// examples:
// synatax:var name =['aiyushjk',"dfahjk"];
// first element ko lower index bolte hai ;or last element ko upper index bolte hai ;
// index:0,1,2,3,4 index element serial 
// var myfreinds =['ajay','akash','vivek',]



// what we wiill do :
// 1:traversal of an arry
// 2:searhing a filter of an arraay 
// 3:how to sort an compare an array
// 4:hoe to isert,add,replace and delete element in an array (CRUD):
// 5:map(),reduce(),filter()



// arrays subsection: 1 traversal of an arry
//if we want to get the single data at a ime and also 
// if we want to change the data 

// var myfreinds =['ajay','akash','vivek','siddhnat']
// console.log(myfreinds[2]);

// if we want to check the lenght of element of an array 
// console.log(myfreinds[myfreinds.length-1]);



// we use for loop navigate:for in loop and for of loop
// var myfreinds =['ajay','akash','vivek','siddhnat']
// for(var i=0; i<myfreinds,length; i++){
//       console.log(myfreinds[i]);
// }

// after ES6 we have for in and for of loop: 
// var myfreinds =['ajay','akash','vivek','siddhnat']


// for in loop index number deta hai 
// for (let element in myfreinds){
//   console.log(element);
// }

// for of loop uske element ka number deta hai 
// for (let element of myfreinds){
//   console.log(element);
// }

// arrays.prototypes.foreach()
// callls a function of each element in arrays.

// var myfreinds =['ajay','akash','vivek','siddhnat']

// myfreinds.forEach(function(element,index,array){
//       console.log(element +"index : " +index + " "+array);
// });


// using:fat arrow function
// var myfreinds =['ajay','akash','vivek','siddhnat']
// myfreinds.forEach((element,index,array)=>{
//     console.log(element + "index: "+index +" "+array );
// });


// arrays subsection: 2 searching & filter in an arrray
// array.prototypes.indexof()
// returns the first(least )index of an element within array equal to an element or 
// -1 if none is found, if search the element from the 0th imdex number

// var myfreinds =['ajay','akash','vivek','siddhnat']


// video are not played 



// arrays subsection: 4 perform CRUD 
// array.prototype.push()
// the push()method add one or more element to the end of an array and return
// the new lenght of the array :

// const animaal = ['ship','goat','pigs']
// animaal.push('chicken','cow','buffelo');
// console.log(animaal);


// Arrys.protootype.unshift()
// The unshift() menthod adds one or more element to the beginning of an array
// an return the new lenght of an arrays 

// 1st exapmles-
// const animaal = ['ship','goat','pigs']
// animaal.unshift('chicken','cow','buffelo');
// console.log(animaal);

// 2nd expamle -
// const mynumbers =[1,2,3,5,]
// mynumbers.unshift(4,6);
// console.log(mynumbers);


// Arrys.protootype.pop()
// the pop menthod removes the last elment from an arrrys and return that element.
// this method changes the lenght if the arrays .

// const plants = ['mango','apple','banana','tomato'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants)



// arrays.prototypes.unshift()
// the shift() menthod remives the first element fro an arrays abd return that removes 
// elemnt.this methid changes the lenght of elmmnet
// const plants = ['mango','apple','banana','tomato'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants)



// challenge time :::
// array.prototype.splice()
// add and/or remove element in an arrrays.

// 1:add dec at the end of an array ?
// 2:what is the return value of splice method ?
// 3:update marc to march (update)?
// 4:delete june from an array?
// const months =['june','mrach','april','june','july'];

// sol:1
// const newmonth = months.splice(months.length,0,"decamber")
// console.log(months);

// sol:2
// console.log(newmonth);

// sol:3
// const months =['jan','march','april','june','july'];

// const indexOfMonths = months.indexOf('march');
// if (indexOfMonths => -1){
//   const updateMonths = months.splice(indexOfMonths,1,'March');
//   console.log(months);
// }else{
// console.log('no such data is found');
// }


// sol:3
// const months =['jan','march','april','june','july'];
//   const indexOfMonths = months.indexOf('june');
// if (indexOfMonths => -1){
//   const updateMonths = months.splice(indexOfMonths,1);
//   console.log(months);
//   console.log(updateMonths);
// }else{
// console.log('no such data is found');
// }




// arrays subsection: 5 :map(),reduce(),filter()
// array.prototype.map()

// let newArray =arr.map(callbackcurrent value[,index[,arry]] {
      //return the new array after executig somethings 
// }[,thisArg];

// return a new array containing the result of calling a function on every 
// elemnth in this array .

// const array1 =[1,4,9,16,25];
// // num > 9
// let newArr = array1.map((curelem,index,arr)=>{
//   return curelem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr =array1.map((index,curelem,arr)=>{
//   return `index no =${index} and the value is ${curelem} belong to ${arr}`
// })
// console.log(newArr);
// console.log(array1);


// let newArrfor =array1.forEach((index,curelem,arr)=>{
//   return `index no =${index} and the value is ${curelem} belong to ${arr}`
// })
// console.log(newArrfor);
// console.log(array1);

// it return the new array without multing the original arrray 

// diffrence btween map and for each method 
// :::map method new array generate ki jate hai without multipling original array 
// :::for each method me first array rahata hai usko cjhnage kiya jata hai  



// challenge time *********************************
// 1:find the square root of each element in an array ?
// To add used Math.sqrt 
// let arr =[25,36,49,64,81];

// let arrsqr =arr.map((curelem)=>{
//      return Math.sqrt (curelem);   
// })
// console.log(arrsqr);


// 2:multiplyimg each elmenth by 2 and return only those element which are
//  greater than 10 ?
// we can use chaining method :
// sol:2
// let arr =[2,3,4,6,8,10];
// let arr2 =arr.map((curelem)=>{
//     return curelem * 2;
// }).filter ((curelem)=>{
//   return curelem>10;
// })
// console.log(arr2);



// reduce method 
// flatten an array means to convert the 3rd or 2nd array into a 
// single diamention array 

// the reducer function takes four arguments :
// accumaltor 
// curelemet
// current index
// source Array

// let arr =[5,6,7,8];

// let sum =arr.reduce((accumaltor,curelem,index,arr)=>{
//         return accumaltor *= curelem;
// })

// console.log(sum);  


// how to flatten an array 
// converting 2nd and 3rd array into one diamentional array 
// const arr =[
//   ['zone1','zone2'],
//   ['zone3','zone4'],
//   ['zone5','zone6'],
//   ['zone7','zone8'],
//   ['zone9','zone10'],
// ]

// let flattenarr= arr.reduce((accumaltor,curelem,index,arr)=>{
//           return accumaltor.concat(curelem);
// })
// console.log(flattenarr);













// section 7:Strings in javascript 



