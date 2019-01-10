var MyArray = new Array();

MyArray[0] = "Bob";
MyArray[1] = "Bill";
MyArray[2] = "Joe";

//alert(MyArray[2] + " is a nice guy!");
//OR//

document.write(MyArray[0] + " and " + MyArray[2] + " are friends.");

//or CONDENSING THE ARRAY//

var SameArray = new Array("Ana", "Suzanne", "Mary");

document.write("<br>" + "It looks like" + SameArray[2] + " and " + SameArray[1] + " get alone very well.");

//LITERAL ARRAYS

var NextArray = ["Julia", "Joe", "Carla"];

document.write("<br>" + NextArray[1] + " is the son of " + NextArray[2]);

//MULTI-DIMENTIONAL ARRAY//

var MultiArray = [
  ["Ana", "Peter", "Jane"],
  ["John", "Tom", "Dan"]
];


document.write("<br>" + MultiArray[0][0] + " is the mother of " + MultiArray[1][0]);
document.write("<br>" + MultiArray[0][2] + " is the wife of " + MultiArray[1][0]);
document.write("<br>" + MultiArray[0][1] + " and " + MultiArray[1][1] +
  " are in a relationship. ");