console.clear();

// ---------------------------------------------
// Task 1
// ---------------------------------------------
var divNode = document.getElementById("fiddle");
//adds a variable name to the id identified with the name fiddle


// ---------------------------------------------
// Task 2
// ---------------------------------------------
var pNode = document.createElement("p");
//creates a p element with name pNode
var pTextNode = document.createTextNode("CSCI 215: Lab 5 Todo");
//creates a text node
pNode.appendChild(pTextNode);
//appends pTextNode to pNode
divNode.appendChild(pNode);
//appends pNode to divNode

// ---------------------------------------------
// Task 3
// ---------------------------------------------
var hrNode = document.createElement("hr");
divNode.appendChild(hrNode);
//appends hrNode to divNode

// ---------------------------------------------
// Task 4
// ---------------------------------------------
var olNode = document.createElement("ol");
var liNode1 = document.createElement("li");
var linode2 = document.createElement("li");
var liTextNode1 = document.createTextNode("Read Assignment");
var liTextNode2 = document.createTextNode("Code Assignment");
liNode1.appendChild(liTextNode1);
linode2.appendChild(liTextNode2);
olNode.appendChild(liNode1);
olNode.appendChild(linode2);
divNode.appendChild(olNode);




// ---------------------------------------------
// Task 5
// ---------------------------------------------

var imgNode = document.createElement("img");
var srcAttr = document.createAttribute("src");
srcAttr.value = "http://munsellb.people.cofc.edu/img/prettypicture.jpg";
imgNode.setAttributeNode(srcAttr);
divNode.appendChild(imgNode);




