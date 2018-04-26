/*
*
*/

var colors = ["red", "green", "blue"];
var numberOfLines = prompt("Enter a number");

for (i = 0, j = 0; i < numberOfLines; i++, j++)
{
 if (j >= 3)
 {
  j = 0;
 }
 console.log(colors[j] + " " + j);
 
}

