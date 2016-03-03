var reltext = [];
reltext[1] = "The Himalayas is incorrect." 
reltext[2] = "The Rocky Mountains is incorrect."
reltext[3] = "The Alps is correct!" 
reltext[4] = "The Andes is incorrect."

function getAnswer(ans, rel) {
document.getElementById("para").innerHTML = reltext[rel];
if (ans == "1c") {alert ("That is the right answer!")}
else {alert ("No - try again")}
};

reltext[5] = "The Netherlands is incorrect." 
reltext[6] = "Spain is incorrect."
reltext[7] = "France is correct!" 
reltext[8] = "Russia is incorrect."

function getAnswer(ans, rel) {
document.getElementById("para2").innerHTML = reltext[rel];
if (ans == "2c") {alert ("That is the right answer!")}
else {alert ("No - try again")}
};

reltext[9] = "Syria is incorrect." 
reltext[10] = "Saudi Arabia is correct!"
reltext[11] = "Iraq is incorrect." 
reltext[12] = "Egypt is incorrect."

function getAnswer(ans, rel) {
document.getElementById("para3").innerHTML = reltext[rel];
if (ans == "3b") {alert ("That is the right answer!")}
else {alert ("No - try again")}
};

reltext[13] = "Jerusalem is correct!" 
reltext[14] = "Rome is incorrect."
reltext[15] = "Mecca is incorrect." 
reltext[16] = "Damascus is incorrect."

function getAnswer(ans, rel) {
document.getElementById("para4").innerHTML = reltext[rel];
if (ans == "4a") {alert ("That is the right answer!")}
else {alert ("No - try again")}
};

reltext[17] = "Greece is incorrect." 
reltext[18] = "Turkey is correct!"
reltext[19] = "Syria is incorrect." 
reltext[20] = "Israel is incorrect."

function getAnswer(ans, rel) {
document.getElementById("para4").innerHTML = reltext[rel];
if (ans == "5b") {alert ("That is the right answer!")}
else {alert ("No - try again")}
};