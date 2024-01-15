// q1

// var x = window.prompt("enter a number")
// console.log(x)

// ===================================

// q2

// var x = window.prompt("enter a number")
// if(x%3 == 0 && x%4 == 0)
// {
//     console.log("yes")
// }
// else
// {
//     console.log("no")

// }

// =================================

// q3


// var x = window.prompt("enter the first number")
// var y = window.prompt("enter the second number")

// if(x>y)
// {
//     console.log(x)
// }
// else
// {
//     console.log(y)

// }

//==========================================
// q4

// var x = window.prompt("enter a number")

// if (x > 0)
// {
//     console.log("positive number")
// }
// else{
//     console.log("negative number")

// }

// ======================================
// q5

// var x = window.prompt("enter the first number")
// var y = window.prompt("enter the second number")
// var z = window.prompt("enter the third number")
// var max = 0
// var min = 0
// if (x > y && x > z )
// {
//     max = x
//     if (y > z )
//     {
//         min = z
//     }
//     else 
//     {
//         min = y
//     }
// }
// else if (y > x && y > z)

// {
//     max = y 
//     if (x > z )
//     {
//         min = z
//     }
//     else 
//     {
//         min = x
//     }
// }
// else if (z > x && z > y)

// {
//     max = z
//     if (x > y )
//     {
//         min = y
//     }
//     else 
//     {
//         min = x
//     }
// }

// console.log("maximum number is : " , max)
// console.log("mainimum number is : " , min)


// =============================================
// q5

// var x = window.prompt("enter a  number")

// if (x % 2 == 0)
// {
//     console.log("this number is even");
// }else{
//     console.log("this number is odd");

// }

// ========================================

// Q8

// var x = window.prompt("enter a character:")
// if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U')
// {
//     console.log("vowel")
// }
// else{
//     console.log("not vowel")
// }

// ================================================
// q9

// var x = window.prompt("enter a number : ")

// for ( var i = 1 ; i <= x ; i++ )
// {
// console.log(i)
// }

// ===============================================
// q 10

// var x = window.prompt("enter a number : ")

// for ( var i = 1 ; i <= 12 ; i++ )
// {
// console.log(x ," * " , i ," = " ,x*i )
// }

// ========================================
// q11

// var x = window.prompt("enter a number : ")

// for ( var i = 1 ; i <= x ; i++ )
// {
//     if (i % 2 == 0)
//     {
//         console.log(i);
//     }
// }
// ========================================

// q12


// var x = window.prompt("enter first number : ")
// var y = window.prompt("enter second number : ")
// var power = 1
// for ( var i = 1 ; i <= y ; i++ )
// {
//   power = power * x 
// }
// console.log(power)

// ========================================

//q 13

// var x = Number(window.prompt("enter first mark : "))
// var y = Number(window.prompt("enter second mark : "))
// var z =Number( window.prompt("enter third mark : "))
// var a =Number( window.prompt("enter fourth mark : "))
// var b =Number( window.prompt("enter fifth mark : "))

// var total = a + b + x + y + z ;
// var average = total / 5 ; 
// var percent = (total / 500) * 100 ; 

// console.log("total marks = " , total)
// console.log("average marks = " , average)
// console.log("percentage  " , percent)

// ======================================================

// q14

// var x = Number(window.prompt("enter number of month : "))


//     if (x == 2)
//     {
//         console.log("days in month : 28")        
//     }
//     else if (x%2 == 0 )
//     {
//         console.log("days in month : 31")
//     }
//     else {
//         console.log("days in month : 30")
//     }

// ======================================================

//  q 15



// var x = Number(window.prompt("enter physics mark : "))
// var y = Number(window.prompt("enter chemistry mark : "))
// var z =Number( window.prompt("enter math mark : "))
// var a =Number( window.prompt("enter computer mark : "))
// var b =Number( window.prompt("enter biology mark : "))

// var total = a + b + x + y + z ;
// var percent = (total / 500) * 100 ; 

// console.log("percentage  " , percent)
// if (percent >= 90)
// {
//     console.log("grade A")

// }
// else if (percent >= 80)
// {
//     console.log("grade B")

// }
// else if (percent >= 70)
// {
//     console.log("grade C")

// }
// else if (percent >= 60)
// {
//     console.log("grade D")

// }else if (percent >= 40)
// {
//     console.log("grade E")

// }else if (percent <= 40)
// {
//     console.log("grade F")

// }

//=====================================================

//  Q 16

// month = Number(window.prompt("enter umber of a month"));

//     var totalDays;
  
//     switch (month) {
//       case 0: // January
//       case 2: // March
//       case 4: // May
//       case 6: // July
//       case 7: // August
//       case 9: // October
//       case 11: // December
//         totalDays = 31;
//         break;
//       case 3: // April
//       case 5: // June
//       case 8: // September
//       case 10: // November
//         totalDays = 30;
//         break;
//       case 1: // February
//         break;
//     }        
  

 
//   console.log("Total days in " ,month+1 ," = " , totalDays);


// ===========================================


// q 17

// var x = window.prompt("enter a character:")

  
//     switch (x) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         console.log(x, "is a vowel.");
//         break;
//       default:
//         console.log(x," is a consonant.");
//         break;
//     }
  
// ====================================================

// q18

  
// var x,y;
// x = window.prompt();
// y = window.prompt();

// switch (true) {
//     case (x>y):
//         console.log("the max "+x)
//         break;

//     case (y>x):
//         console.log("the max "+y)
//         break;
//     case (y==x):
//         console.log("equal ")
//         break;
// }
// */

//===============================================================================================










//q19
/*
var x;
x = window.prompt();
switch (true) {
    case (x%2==0):
        console.log("even")
        break;

    default:
        console.log("odd")
        break;
}
*/
//=======================================================================================







//  20
/*
var x;
x = window.prompt();
switch (true) {
    case (x>0):
        console.log("postive")
        break;
    case (x<0):
        console.log("negative")
        break;
    case (x==0):
        console.log("zero")
        break;

    default:
        break;
}
    
//=====================================================================================








//q21
/*
var result,shape;
var x,y; 
x=window.prompt("num1")
shape =window.prompt('Enter shape ( +, -, * , / ): ');
y=window.prompt("num2") 
switch(shape) {
    case '+':
         result = x + y;
        console.log(result);
        break;

    case '-':
         result = x - y;
        console.log(result);
        break;

    case '*':
         result = x * y;
        console.log(result);
        break;

    case '/':
         result = x / y;
        console.log(result);
        break;

    default:
        console.log('erorr');
        break;
        */