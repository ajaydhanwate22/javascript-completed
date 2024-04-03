//   -javscript improves the user experiece ofthe web page by converting it from a static page into itractive one. 
//     - javscript is text based progarmming langage . 
//     -used of js both client side and server side that allows you to make web page intractive. 
console.log('hello world');


// section 3 :values and variables in javascript 

// Naming variables rules
// 1:you cant use a nmber of first character 
// 2:variables names are case sensitive 
// 3:no limit to the lenght of the variabes name 
// 4:ypu cant use one of javascript reserved words as a variables name
// var myName ='ajay dhanwate';
// var myAge = 23;
// console.log (myName);


// section 4: data types in javscript 

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