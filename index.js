var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

/* PSEUDOCODE
Total number of months - either a for loop or just console.log(arrayName.length)

net total of profit/loss - for loop going through each items nested array and adding together arrayName[i][1], know each profit is going to be in the 2nd position in the nested array
so looping  through the whole array [i] and then the 2nd position of the nested array

average changes profit/loss - track total change of profits - loop going through whole array, two nested arrays finding the value of each item in the array ie i and i+1
then use Math.abs() to calculate the difference between them and put that into an array using .push(), then add all these items in the array together and / total months/array.length

The greatest increase in profits (date and amount) over the entire period.
The greatest decrease in losses (date and amount) over the entire period. :
both use similar methodolgies, for loop going through whole array then if statements, if first item is bigger/smaller then second item, newbiggest/smallest = array total would again probably have to
use nested loops to find i and i+1 to compare then
*/

//Generates and defines variables
var totalMonths = finances.length;
var netTotal = 0;
var changeTotal = 0;
var changeArray = [];
var biggestIncrease = finances[0][1];
var biggestDecrease = finances[0][1];

//Loops through array and adds the current net total with the next item in the array
for (var i = 0; i < totalMonths; i++){
    netTotal += finances[i][1];
    //Loops until the final array index i and i+1, so the next along, and subtracts them into a new array
    if ( i < totalMonths-1){
        var profitChange = (finances[i][1] - finances[i+1][1]);
        changeArray.push(profitChange);
    }
        //Checks to see if current array position is bigger than stored array position, if yes then current position becomes new stored position
        if (biggestIncrease >= finances[i][1]){
            biggestIncrease = biggestIncrease
        }
        else if (biggestIncrease < finances[i][1]){
            biggestIncrease = finances[i][1];
            var monthIncrease = finances[i];
        }
        //Checks to see if current array position is smaller than stored array position, if yes then current position becomes new stored position
        if (biggestDecrease <= finances[i][1]){
            biggestDecrease = biggestDecrease
        }
        else if (biggestDecrease > finances[i][1]){
            biggestDecrease = finances[i][1];
            var monthDecrease = finances[i];
        }
}
//Loops through new array for change and adds them all together to get total change over the financial period
for (var i = 0; i< changeArray.length; i++){
    changeTotal += changeArray[i];
}
//Gets the average change, use the original array as changeArray only has 85 items as you can't compare the last item to anything so it isn't added into array
var averageChange = changeTotal/totalMonths;

//Presentation
console.log("Financial Analysis\n------------------\n")
console.log("Total Months: " + totalMonths);
console.log("Net Profit: " + "£"+netTotal);
console.log("Average Change: £"+averageChange.toFixed(2));
console.log("Greatest increase in profits: " + monthIncrease.toString());
console.log("Greatest decrease in profits: "+ monthDecrease.toString());