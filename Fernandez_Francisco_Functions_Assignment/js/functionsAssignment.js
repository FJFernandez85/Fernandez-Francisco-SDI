/*
Francisco Fernandez
4-29-2015
Functions Assignment
*/

//Team Caps

//welcome alert to team caps
alert ("Welcome to Team Caps!");
console.log("Welcome to Team Caps");

//prompt user to choose team
var capTEAM = prompt("Choose a team from the list by typing purchase cost!\n1.SanAntonio Spurs ($25)\n2.Golden State Warriors ($30)\n3.Cleveland Cavaliers ($20)\n4.Chicago Bulls ($35)\nex.(25, 30)");
console.log("Choose a team from the list by typing purchase cost!\n1.SanAntonio Spurs ($25)\n2.Golden State Warriors ($30)\n3.Cleveland Cavaliers ($20)\n4.Chicago Bulls ($35)\nex.(25, 30)");

//validating capTeam prompt
while(capTEAM==="" || isNaN(capTEAM)){
    capTEAM = prompt("Please do not leave blank and only use numbers.\nChoose a team from the list by typing purchase cost!\n1.SanAntonio Spurs ($25)\n2.Golden State Warriors ($30)\n3.Cleveland Cavaliers ($20)\n4.Chicago Bulls ($35)\nex.(25, 30)");
}

//prompt user to choose cap style
var capSTYLE = prompt("Choose the cap style you want by typing the cost of it!\n1.Fitted : $10\n2.Snapback : $5");
console.log("Choose the cap style you want by typing the cost of it!\n1.Fitted : $10\n2.Snapback : $5");

//validating capSTYLE prompt
while(capSTYLE==="" || isNaN(capSTYLE)){
    capSTYLE = prompt("Please do not leave blank and only use numbers.\nChoose the cap style you want by typing the cost of it!\n1.Fitted : $10\n2.Snapback : $5");
}

//prompt user to type number of caps to be purchased
var numberOFCAPS = prompt("Type number of caps that you want.");
console.log("Type number of caps that you want.");

//validating numberOFCAPS prompt
while(numberOFCAPS==="" || isNaN(numberOFCAPS)){
    numberOFCAPS = prompt("Please do not leave blank and only use numbers.\nType number of caps that you want.");
}


//create function with 3 parameters, and returned value

var returnedValue = checkoutCOST(capTEAM, capSTYLE, numberOFCAPS);

console.log("Your Final charge is" + returnedValue);

function checkoutCOST(team, style, quantity){
    var finalCost = (team + style) * quantity;
    console.log(finalCost);
    return finalCost;

}
checkoutCOST(25,10,0);
checkoutCOST(25,10,1);
checkoutCOST(25,10,2);
checkoutCOST(25,10,3);
checkoutCOST(25,10,4);
checkoutCOST(25,10,5);

