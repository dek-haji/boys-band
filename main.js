var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";
// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.querySelector("#vegetables")

//start the loop
for (let i = 0; i <loopCount; i++) {
    currentBand = bands[i]
    console.log(currentBand)
    bandElement.innerHTML += "<li>" + currentBand + "</li>"
}
for(let i = 0; i < loopCount; i++) {
    currentVeggie = vegetables[i]
    veggieElement.innerHTML += `<li> ${currentVeggie}</li>`
}