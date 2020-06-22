///===Chapter 21-25===///
////===Task:1===////
//  var a=prompt("First name", "Harry ");
//  var b=("last name", "Potter");
// var c= prompt("full name");
// var c=a+b;
// alert(c);

////===Task:2===////


// document.write("<br>Length of string:</br>");

// var str = "Samsung Galaxy S6 Edge Plus";
// var n = str.length;
// document.write("<br>Length of string:</br>"+n);
   
///===Chapter 21-25===   Task:3 ///

// var str = "Pakistani";
// var n = str.length;
// document.write("index of n:"+n);


///===Chapter 21-25===   Task:4///
//   var str = "Hello world";
// var n = str.lastIndexOf("l");
// document.write(n);

///===Chapter 21-25===   Task:5///
// var str = "Pakistani";
// var res = str.charAt(3);
// document.write("String:Pakistani");
// document.write("<br>Character at index 3:</br>"+res);

///===Chapter 21-25===   Task 6///
// var str1 = "Harry ";
// var str2 = "Potter";
// var b = str1.concat(str2);
// document.write(b);

///===Chapter 21-25===   Task 7///
// document.write("City:Hyderabad")
// var str = "Hyderabad";
// var v = str.replace("Hyder", "Islam");
// document.write("<br>After replacement:</br>"+v)

///===Chapter 21-25===   Task 8///

// var str = " Ali and Sami are best friends. They play cricket and football together";
//  var v = str.replace(/and/g, " &" );

// document.write(v);

///===Chapter 21-25===   Task 9///
// var x = parseInt("427", 10);
// document.write("TYPE STRING TO NUMBER:"+x);


///===Chapter 21-25===   Task 10///
// document.write("User input:peanuts")
// var text1 = "peanuts";       
// var text2 = text1.toUpperCase();
// document.write("<br>Upper Case:</br>"+ text2);


///===Chapter 21-25===   Task 12///


//   num = 35.36;
// num = num.toString();
// newNum = num.split('.').join("");
// document.write("Number: "+num);
// document.write("<br>");
// document.write("Result: "+newNum);


/////====------Chapter 26-30=====----- Task:1////////

// document.write("number:3.45214");
// var num=3.45214;
// var round=Math.round(num);

// document.write("<br></br>round of value:"+round);

// var nums=3.45214;
// var floor=Math.floor(nums);
// document.write("<br></br>floor value:"+floor);

// var numss=3.45214;
// var ceil=Math.ceil(numss);

// document.write("<br></br>ceil value:"+ceil);

/////====------Chapter 26-30=====----- Task:2////////

//   document.write("number:-2.673");
//  var b=-2.673;
//  var round=Math.round(b);
//  document.write("<br> </br>round of value:"+ round);
//  var c=-2.673;
//  var floor=Math.floor(c);
//  document.write("<br> </br>floor value:"+ floor);
//  var b=-2.673;
//  var ceil=Math.ceil(b);
//  document.write("<br> </br>ceil value:"+ ceil);

/////====------Chapter 26-30=====----- Task:3////////
// var abs=Math.abs(-4);
// document.write("The absolute value of -4 is <br></br>"+abs);

/////====------Chapter 26-30=====----- Task:4////////
// var abs=Math.random(4);
// document.write("  <br></br>The dise value of 4 is"+abs);
// var abc=Math.random(6);
// document.write(" <br></br>The dise value of 6 is"+abc);

/////====------Chapter 26-30=====----- Task:5////////

// var headnumber=prompt("random coin value");
// var toss =Math.random() ;
// var floor=Math.floor(toss)
// document.write(floor);
// if(floor == 0){
//   alert ("Heads")
// }
// else{
//   alert("Tails")
// }
////====------Chapter 26-30=====----- Task:6////////
// var randomNumber = Math.floor(Math.random() * 100);
// document.write("random number between 1 and 100:"+randomNumber);

////====------Chapter 26-30=====----- Task:7////////
// var1 =50;
// var weight = prompt("Enter your weight in kilograms");

////====------Chapter 31-34=====----- Task:1////////


// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   document.write("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// document.write("Current Time : "+hour + prepand + " : " + minute + " : " + second);

////====------Chapter 31-34=====----- Task:2////////


// window.document("current month"+n);
// function myFunction() {
//   var month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//   month[4] = "May";
//   month[5] = "June";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//   month[10] = "November";
//   month[11] = "December";

//   var d = new Date();
//   var n = month[d.getMonth()];
//   document.getElementById("demo").innerHTML = n;
//   window.document("current month"+n);
// }
////====------Chapter 31-34=====----- Task:2////////


// function calculate_age(dob) { 
//   var diff_ms = Date.now() - dob.getTime();
//   var age_dt = new Date(diff_ms); 

//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// document.write(calculate_age(new Date(1982, 11, 4)));

// document.write(calculate_age(new Date(1962, 1, 1)));
