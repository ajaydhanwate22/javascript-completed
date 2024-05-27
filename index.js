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
// a javscript strings is zero or more charcter written inside quotes.
  // javascript strings are used for storing and multipulating text.
  // you can use single or double quetoes 
  // strings can be created as permitives,
  // from strings literals, or as objects,usng the string()constructor 


  // how to find the lenht of a string 
  // string.prototype.lenght 
  // reflect the lenght of the string.

  // let myname ="ajaydhanwate123"
  // console.log(myname.length);







// what we will do 
// 1:escap character 
// 2:finding a strings in a string 
// 3:searching for string in a string 
// 4:extrating string parts
// 5:replacing string content
// 6:Extracting string chracter
// 7:other useful method  



// 1:escap character 
// backslash escap character 
// let anysentence = "my name is   \"ajay\" dhanwate"
// console.log(anysentence);
// if ypu want to mess,simply use aletrnative quetous 
// let anysentence2 = 'my name is "ajay" dhanwate'
// console.log(anysentence2);





// 2:finding a strings in a string 
//index numbar 0 se strat kiya jata hai 

// indexOf method 0 se start kiya jata hai or lastindexof methid last se kiya jta hai  
// let myname= 'i am ajay dhanwate';
// console.log(myname.indexOf("am"))

// let myname1= 'i am ajay dhanwate';
// console.log(myname1.lastIndexOf("am"))





// 3:searching for string in a string 
// string.prototypes.search(regexp)

// the search() method searches a string for a specific value and return the position of the match 

// let myname= 'i am ajay dhanwate';
// let newmyname =myname.search('ajay');
// console.log(newmyname);




// 4:extrating string parts
// there  are 3 methids of extrating a part of a strings :
// 1:slice(start ,end)
// 2:substring (start ,end)
// 3;substr (start,lenght)

// 1:slice () method 
// slice() extract a part of string and return the extract part 
// in  a new string 

// the metod takes 2 parameter:the start position and end position 
//  (end not include)
// the slice method selected the element starting at the 
// given start argument,and ends at,but does not includes,
// the given and argument.
// note:the original array will note be changed.

// let str = "apple, banannan,kivi "
// let res = str.slice(7,-2)
// console.log(res);


// challenge time ******************************8
// display only 280 character of a string like one used in twitter?
// let mytwets = "dafkljk dafkj asifj dyafhksj asfhkj iasfhkj"
// let myactultwets = mytwets.slice(0,280);
// console.log(myactultwets); 
// console.log(myactultwets.length); 


// 2:substring (start ,end)
// substring method is similar to slice().
// the diffrence is that substring subsring cannnot accept negative indexes
// let str = "apple, banannan,kivi "
// let res = str.substring(7,-2);
// console.log(res);


// 3;substr (start,lenght)
// substr()is similar to slice ().

// the diffrence is that the second parameter specified the lenght 
// of the exacted part.
// let str = "apple, banannan,kivi"
// let res = str.substr(-4);
// console.log(res);







// 5:replacing string content
// string.prototype.replace(searchfor,replacewih)
// the replace () method replace a specigied value with another value in a string 
// let myname = "my name is ajay dhanwte";
// let replacedata=myname.replace('ajay','Ajay');
// console.log(replacedata);


// point to remember :
// 1:the replece()method does nt change the string it is called on.
// it return a new string.
// 2:by default, the replce () method replce only the first match .
// 3:by default, the replace ()method is case sensitive.







// 6:Extracting string chracter
// there are 3 method for extracting tring character:
// 1:charAt(position )
// 2:charCodeAt(position)
// 3:property access []




// 1:charAt(position ) method
// the charAt () method return the character at a specified 
// index (position) in a string 
// let str = 'hello world'
// console.log(str.charAt(4));


// 2:charCodeAt(position)
// the charCodeAt() method return the unicode  of the charcter at a specific index in a string:
// the method return a UTF-16 code 
// (an integer between 0 and 65535).
// let str = 'hello world'
// console.log(str.charCodeAt(0));


// challenge time *******************************
//Q: retunr the unicode of the lat character in a string
// let str = "hello world"
// let lastchar = str.length-1;
// console.log(str.charCodeAt(lastchar));



// 3:property access []
// ECMAscript 5 (2009) allows property access [] on strings
// let str = "hello world"
// console.log(str[1]);









// 7:other useful method  

//1: toLowerCase,toLowerCase methods
// let myname = "ajay dhanwate "
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());

// 2: the concat() method :
// This method are not use to "+" operators 

// let name = "ajay";
// let lastanme= "dhanwate";
// console.log(name.concat(lastanme));


// 3:string.trim()
// the trim() method removes whitespaces from both sodes of string 
// var str = "hello world"
// console.log(str.trim()); 


// 4:converting to string to an array
// to used split() method 
// var text = "a,b,c,d,e";
// console.log(text.split(",")); //split on commas 
// console.log(text.split( ));   //split on spaces 
// console.log(text.split("|"))    //splite on pipe 








// section 8 :Date & time in javascript**************************
// javascript date objects represent a single moment in time in a 
// platform independent format.date objects contain a number 
// that represent millisecond since 1januvary 1970 UTC.

// what we see you
// 1:date method (get and set)
// 2:time method (get and set)


// 1:date method (get and set)
// Creating date objects
// there are 4 ways  to create a new date object :
// new date()
// new date (year,month,day,hours,minutes, second,milliseconds)
// it takes 7 arguments
// new date(miliseconds)
// we cannot avoid month section
// new date (date string ) 

// new date()
// date objects are created with the new date() constructor .
// let curdate =new Date();
// console.log(curdate);
// console.log(new Date());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toString());


// Date.now()
// return thr numeric value corresponding to the current time-the number
//  of milliscond elepsed since januvar 1,1970 
// console.log(Date.now());


// new Date (year,month,day,hours,minutes,second &miliscond )
// note : javascript counts months from 0 to 11
// janavary is 0.december is 11
// var d = new Date (2022,0);
// console.log(d.toLocaleString());


// new Date(datestring)
// new Date (datestrings ) create a neew date object from a date string
// var d  = new Date ("october 13,2024 11:13:00");
// console.log(d.toLocaleDateString());

// dates method 
// const curDate  =new Date ();

// how to get indivisaul date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth())
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// how to set indivisaul date 
// console.log(curDate.setFullYear(2024));
// // the set full year optionally set month and day 
// console.log(curDate.setFullYear(2024,4,12))
// console.log(curDate.setMonth(4))
// console.log(curDate.setDate(12))







// 2:time method (get and set)

// how to get indivisula time 
// const curtime = new Date();
// console.log(curtime.getTime());
// console.log(curtime.getHours());
// console.log(curtime.getMinutes());
// console.log(curtime.getSeconds());
// console.log(curtime.getMilliseconds());

// how to set indivisaul date 
// const curtime = new Date();
// console.log(curtime.setTime());
// console.log(curtime.setHours(5));
// console.log(curtime.setMinutes(5));
// console.log(curtime.setSeconds(5));
// console.log(curtime.setMilliseconds(5));


// practice time
// new Date().toLocaleTimeString();  //only time used 
// new Date().toLocaleDateString();  //only date used 
// new Date().toLocaleString();      //time and date both 








// section 9 :Javascript math object**************************













// the javascript math objects allows you to perfform mathematical task on numbers.
// console.log(Math.PI);
// console.log(Math.PI);

// Math.round()
// retunr the value of x rounded to its nearest integer
// let num = 10.2565;
// console.log(Math.round(num));

// Math.ceil()
// Math.ceil(x) return the value of x rounded up to its nearest integer
// console.log(Math.ceil(99.1));

// Math.floor()
// Math.ceil(x) return the value of x rounded up to its nearest integer
// console.log(Math.floor(99.1));

// Math.pow()
// Math.pow(x,y) returns the value of x to the power of y 
// console.log(Math.pow(2,3));
// console.log(2**3);

// math.sqrt()
// math.sqrt(x) return the squre root of x
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// Math.abs()
// Math.abs(x) return the absoluete (positive value of x)
// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6)); 

// Math.min()
// lowest value in argument:
// console.log(Math.min(0,1,2,3,4,5,6,7,8));

// Math.max()
// highest value in argument:
// console.log(Math.max(0,1,2,3,4,5,6,7,8));

// Math.rondom()
// Math.rondom return random number between 0 (inclusive) and 1 (exlusive)
// console.log(Math.floor(Math.random()*10));

// Math.trunc()
// mathods are used to positive and negative value of number are return 
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-4.6));












// section 9 :DOM in javascript**************************
// what we will do 
// 1:window vs document
// 2:DOM vs Bom 
// 3:DOM navigation
// 4:Searching and getting element reference 


//1:window vs document


// window :
// 1:window is the main container or we can say the global obbjects and any operation
// releted to entire browser window can be a part of window object.
// 2:all the members like objects,methods or properties.
// if they are the part of window object then we do not refer the window object.
// 3:window has menthod,properties and objects.
// ex:settimeout() or setinterval() are the method,where as document is the object
//  of the window and .it also has a screeen object with propertuies desribing
//  the physical display.


// document :
// 1:whereas the dom is the child of window object.
// 2:where in the DOM we need to refere the document,
// if we want to use thr documnet object,methof or properties    
// 3:document is jsut the object of the global object thet is window,which deals 
//  with thr document,the HTML elment themselve,



// 2:DOM vs Bom 
// window
// dom =document 
// Bom =naviagtor ,screen,location,frames,hstory,xmlhttp request  
// javascript =object,array,function


// The DOM is the document object model,which deals with the document,
// the html element themselveles 

// for ex : 
// change the background color to red
// document.body.style.backgroundColor="red"

// the BOM is the browser object model,which deals with the browser componet
// aside from the document,like history,location,navigator and screen 
// (as well as same other that very by browser).OR 
// in simple meaning all the window opeartion which comes under the BOM are performed 
// using BOM





// 3:DOM navigation
// practie time 1:
// how to find check whether an elememt has child nodes or not?
// document.body.hasChildNodes()  ====>this way to check body me koi nodes hai ya nahi


// practie time 2:
// how to find the child in DOM tree?
// firstchild vs firstelementchild
// lastchild vs firstelementchild 
// document.body.hasChildNodes







// 4:Searching and getting element reference 
// we will see the index.html file:






// interviews questions:
// difference between getelementbyId and queryselector?
//  what is getelementbyID()?
// syntax:
// Element= document.getElementById(ID);

// returns a Reference to the element by its id.
// if the element with the specified ID is not in the document,
// it will return null.



// what is queryselector()?
// syntax:
// Element= document.querySelector('selctors');

// return the first element within the document 
// that matches the specific group of slectors ,
// or null if no matches are found.

















// section 10 :Event in javascript 
// what  we will do

//1: 4 ways of writing events in javascript
//2: whats is event object :
//3: Mouse event in javascript : 
//4: keyBoard in javascript  :
//5: inputEvent in javascript  :  


// what is event ?
// html events are "things" that happen to html elements.
// when javascript is used ib html  pages , javascript can "react" on those event.

// html events :
// an html evnets can be somethings the browser does,or somethings a user does.

// where are some examples of html events:
// an HTML web page has finished loading 
// an HTML input field waas changed
// an HTML buttons was clicked
// often, when events happen, you way want to be somethimgs .

// javascripts lets you executes code when evets are detected.

// html allows events handler atrrributes,with javsript code, 
// to be added to html element






// subsection 1: 4 ways of writing events in javascript
// 1:using inline event alert();
// 2:by calling a function( we aleready seen and most common way of writiing )
// 3: using inline event (HTML onclick property and element .onclick )
// 4:using evets listner (add events listener)

// check the event in Event.html files 
 





//subsction2: whats is event object :
// event object is the parent object of the event object.
// for exmaples:mouseevent,focusevent,keyboardEvent etc:


// check the eventobject in eventobject.html files. 











//subsction3: Mouse event in javascript : 
// those event which are related to mouse.
//event that occure when the mouse intract with the HTML 
//document belonges to the mouseevent object.   


// check the mouse event in Mouse.html files. 





//subsction4: keyboard event in javascript : 
// event that occurs when user presses a key on the keyboard,
// belong to the keyboardsEvent objects.



// check the keyboard event in Keyboard.html files. 


 





// subsection 5: inputEvent in javascript  
// The onchange event occures when the value of an element has been changed.
// for radiobuttons and checkboxes,the onchnage event occures when the checked state 
// has been changed.


 // check the keyboard event in inputevent.html files. 






//  ********interviews question*************


// diffrence between onclick and addEventListner?
// to read event.html file..........


// conclusin: 
// This is becasue addEventListner does not overwrite exitistng event handlers, 
//whereas onclick overwrite ant existing onclick =fn event handlers

// The other significant diffrence,of course,is that onclick will always work,
// whereas addEventListner does not work in intetnet explore before version 9.
// addEventListener is the best compare to the onclicked function










// section 11 :Time based Event in JS
// The window object allows execution of code at specified time interval.
// these time interval are called timing evevnts:



// what we will do:
//1: setTimeout(function, millisecond):
// Executes a function, after waiting a specified number of millisecond.
//2: setInterval(function, millisecond):
// same as setTimeout(),but repeat the execution of the function continously.
//3: clearTimeout()
//4: clearInterval()


































// Interview  Questions: 
// 1: Diffrence between setTimeout and setInterval()?
// setTimeout :is work for after a few second,minutes ya day ke bad ak hi bar use call kiya jata hai ;
// setInterval:are the work for one things are repeated in many time.














// section 12 :OOPs IN javascript

// what we will see:
// what is Object Literals?
// what is "this" object ?




//1: what is Object Literals?
// Object literls is simply a key :value pair data structure.
// storing variables and function togther is one container,
// we can refer this as an object.

// obbject = school bag.


// how to create an object?

// 1st way
// let bioData = {
// myName :"ajay dhanwate",
// myAge :22,
// getData: function(){
//   console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
// }

// }
// console.log(bioData.getData());


// 2nd way: no need to write function as well after es6
// let bioData = {
//   myName :"ajay dhanwate",
//   myAge :22,
//   getData(){
//     console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
  
//   }
// bioData.getData();


// what if we want objext as a value inside an object 

// let bioData = {
//   myName : {
//      realname:"ajay dhanwate",
//     myfacebbokname:"ajay dhanwte patil"},
//   myAge :22,
//   getData(){
//     console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
  
//   }
// bioData.getData();









//2: what is "this" object ?
// this is defination of "this" object is that it cnatain the current context.
// the this object can have diffrent values depending on where it is placed.

// for examples 1
// console.log (this.alert('awesome'));
// if refers to the current context and that is window global object 


// for examples 2
// function myName (){
//   console.log(this);
// }
// myName();





// for examples 3

// let mynames = 'vinod';
// function myname(){
//   console.log(this.myname)
// }
// mynames();




// for examples 4
// const obj = {
//   myAge :22,
//   myName(){
//       console.log(this.myAge);
//   }
// }
// obj.myName();





// for examples 5
// fat arrows function are not work properly:













// ECMAScript 2016/ES7 ramaning :
//1: distructuring 
//2:object properties 
//3:spread operators








// distructuring in ES6
// the distructuring assignment syntax is a javascript expresssion 
// that makes it possible to unpak values from  arrays,
// or properties from objects, into distinct variables


// 1: Array destructuring:
// const mybiodata =['ajay', 'dhanwate',26];
// let [myfname,mylastname,myage]=mybiodata;
// console.log(mylastname);

// we can add the values:
// const mybiodata =['ajay', 'dhanwate',26];
// let [myfname,mylastname,myage,mydegree='IT']=mybiodata;
// console.log(mydegree);



// 2: object destructuring:
// const mybiodata ={
//   myFname:"Ajay",
//   myLname:"Dhanwate",
//   myAge:26
// }

// let age=mybiodata.age;
// let myFname=mybiodata.myfname;

// let {myFname,myAge,myDegree='IT'}=mybiodata;
// console.log(myFname);










//2:object properties 
// we can now use Dynamic Properties:
// let myname="ajay";
// const mybiodata= {
//   [myname]:"hello how are you?",
//   [20+6]:"is my age"
// }
// console.log(mybiodata);



// no need to write key and value,if both are same

// let myName="ajay dhanwate";
// let myAge=22;

// const mybiodata = {myName,myAge}

// console.log(mybiodata);














//3:spread operators:
// const colors= ['red','green','blue','white'];
// const myfavcolor=[...colors, 'yellow','black'];
// console.log(myfavcolor);

// to write the spred operator ...or function name...













// ECMAScript 2017/ES8*************************************************************
// 1:string padding
// 2:object.values()
// 3:object.entris()



// 1:string padding
// const message = 'my name is ajay';
// console.log(message);
// console.log(message.padEnd(10));
// console.log(message);




// 2:object.values()
// const person ={name:'ajay',age:22};
// console.log(Object.values(person));




// 3:object.entris()
// const person ={name:'ajay',age:22};
// console.log(Object.entries(person));






// ES2018 
// const person ={name:'ajay',age:22};
// const sperson ={...person};
// console.log(person);
// console.log(sperson);










``











// section 13 :Advanced javascript part 1
// Whats we will see:


// Event propgation (Event Bubbling and Event capturing)
// highrt order function 
// callback function 
// Function curring 
// Callback hell 
// AJAX using XMLHttprequest
// BONUS section JSON
// Fetch API 
// Promises
// Async-await
// Errror-handaling in js













//1: Event propgation (Event Bubbling and Event capturing)
// Event propogation mode determine in which order the element recieve the event.


// event bubbling and capturing are two ways of event propogation in the HTML DOM API, when an event occurs in an element inside another element, and both element have registerd a handle for that event.

// The Event propagation mode determine in which order the element recieve the element.



// what is event bubbling ?
// With event bubbling,the event is first captured and handled by the innermost element and then propogated to the outer elements. 


// what is event capturing?
// With event capturing the event is first captured by outermost element and propogat to the inner element.



//2:highrt order function

// we need to create calculator:
// const add = (a,b)=>{
//   return a+b;
// }

// const subs = (a,b)=>{
//   return Math.abs(a-b);
// }

// const mult = (a,b)=>{
//   return a*b;
// }

// const calculator = (num1,num2,operator)=>{
//        return operator(num1,num2);
// }

// console.log(calculator(5,2,subs));





// difference between HOF and callback function?






// 3:How Javqascript Works And Asyncronus Javascript

// what we will see:

// hosting in javascript 
// scope chain 
// lexical scopig in javascript 
// use strict mode
// This keyword 
// closure in javascript 
// what is asychronus javascript programming
// what is Event loop? 




//1: Hosting in javascript 
// we have a createdphase and execution phase.
// hoisting in javascript is a mechanism where variables and funtions 
// declaration are moved to the top of their scope before the code executes.

// for examples :
// console.log(Myname);
// var Myname ;
// Myname ='ajay';


// How it will be in output during creation phase:
// var Myname;
// console.log(Myname);
// Myname='ajay';



// in ES6 hosting is avoided by using the let keyword
// instead of var.(The other diffrence is that variables declared with let are local to the surrounded block, not the entire function.)


//2:3 what is scope chaine and lexiacal scoping in javascript?
// The scope chain is used to resolve the value of variables name in javascript.
// scope chain in javascript is lexically defined,which means thet we can see what the scope chain willl be by looking at the code.

// at the top,we have the global scope,which is the window object in the browser.

// lexical scoping means now,the inner function can get access to their parent functions variables but the vice-versa is not true.



// for examples 

// let a = "hello world:"

// const first =()=>{
//   let b = "How are you?";
//   const second =()=>{
//       let c ="hii am i am fine thanku";
//       console.log(a+b+c); 
//   }
//   second();
//   // console.log (a+b+c);// i cant use C
// }
// first();




//4 closure in javascript 
//A closure is the combination of a function bundlet together(enclosed)with reference
// to its surrpunding state (The lexical Enviroment).

//in others words, a closure gives you access to an outer functions scope from an inner funtion


// in javascript closure are created every time a fuuction is created,at function creation time.


// for examples


// const outerfun = (a) =>{
//    let b=10;
//    const innerfun = ()=>{
//     let sum =a+b;

//     console.log(`the  sum of two numbers is ${sum}`);
//    }
//    return innerfun;
//   }
  
// let checkClosure= outerfun(5);
// checkClosure();
// console.dir(checkClosure);

// its time like lexical scoping







// interviews questions::""""""""""""""""""""""""""""""""""""""""""""
// Diffrene Between synchronus and asynchronus javascript?
// synchronus means ak program execute hone ke bad dusra chalu hota hai:
// or asynchronus means jo kam jaldi hita hai wo executes kiya jata hai :










// what is Event loop in javascript?
// An event loop is a looping algorithm or we can say a job scheduling algorithm that schedules the events based on the priorities of the task and then executes it. 


// This algorithm makes use of a queue data structure for scheduling the tasks and then it uses a stack data structure called Call stack for executing the tasks.








//interviews functions
// what is function curring
// curring is a techniques of evaluting function with multiple argument,into sequence of function with single argument 
//EX: output of sum (5)(3)(8)?
// function sum (num1){
//   return function (num2){
//     return function (num3){
//       console.log(num1+num2+num3);
//     }
//   }
// }
// sum (5)(3)(8);





// what is call back hell?

// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.



// ex:
// setTimeout(()=>{
// console.log(`1 works is done`)
// setTimeout(()=>{
//   console.log(`1 works is done`)
//   },5000)
//   setTimeout(()=>{
//     console.log(`1 works is done`)
//     },4000)
//     setTimeout(()=>{
//       console.log(`1 works is done`)
//       },3000)
//       setTimeout(()=>{
//         console.log(`1 works is done`)
//         },2000)
// },1000)



