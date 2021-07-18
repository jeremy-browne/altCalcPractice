function newQuestionData() {
    document.getElementById("elevation").innerHTML = Math.floor(Math.random() * 8000) + " ft";
    document.getElementById("QNH").innerHTML = (Math.random() < 0.5 ? 1013 - Math.floor(Math.random() * 30) : 1013 + Math.floor(Math.random() * 30)) + " hPa";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("actualTemp").innerHTML = (Math.random() < 0.5 ? 15 - Math.floor(Math.random() * 10) : 15 + Math.floor(Math.random() * 10)) + "°c";
    document.getElementById("ISATemp").innerHTML = "";
    document.getElementById("ISADev").innerHTML = "";
    document.getElementById("densityAltitude").innerHTML = "";
}

function getPressureHeight() {
    let pressureHeight = parseInt(document.getElementById("elevation").innerHTML) + parseInt((1013 - parseInt(document.getElementById("QNH").innerHTML))) * 30;
    document.getElementById("answer").innerHTML = pressureHeight + " ft";
    return pressureHeight;
}

function getDensityHeight() {
    let actualTemp = parseInt(document.getElementById("actualTemp").innerHTML);
    let ISATemp = 15 - Math.floor((getPressureHeight() / 1000) * 2);
    let ISADev = actualTemp - ISATemp;
    let densityAltitude = getPressureHeight() + 120 * ISADev;
    document.getElementById("ISATemp").innerHTML = ISATemp + "°c";
    document.getElementById("ISADev").innerHTML = actualTemp - ISATemp + "°c";
    document.getElementById("densityAltitude").innerHTML = densityAltitude + " ft";
}

function toggleFormulas() {
    var elem = document.getElementById("formulas");
    if (elem.style.display === "none") {
        elem.style.display = "block";
        document.getElementById("toggleFormulas").innerHTML = "Hide Formulas";
    } else {
        elem.style.display = "none";
        document.getElementById("toggleFormulas").innerHTML = "Show Formulas";
    }
}