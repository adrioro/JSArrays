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

document.write("<br>" + NextArray[1] + " is the son of " + NextArray[2])
''