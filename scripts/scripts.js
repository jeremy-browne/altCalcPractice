function newQuestionData() {
    document.getElementById("elevation").innerHTML = Math.round(Math.random() * 8000) + " ft";
    document.getElementById("QNH").innerHTML = (Math.random() < 0.5 ? 1013 - Math.round(Math.random() * 30) : 1013 + Math.round(Math.random() * 30)) + " hPa";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("actualTemp").innerHTML = (Math.random() < 0.5 ? 15 - Math.round(Math.random() * 10) : 15 + Math.round(Math.random() * 10)) + "°c";
    document.getElementById("ISATemp").innerHTML = "";
    document.getElementById("ISADev").innerHTML = "";
    document.getElementById("densityAltitude").innerHTML = "";
}

function getPressureHeight() {
    let elevation = parseInt(document.getElementById("elevation").innerHTML)
    let QNH = parseInt(document.getElementById("QNH").innerHTML)
    let pressureHeight = elevation + parseInt(1013 - QNH) * 30;
    document.getElementById("answer").innerHTML = pressureHeight + " ft";
    console.log(elevation + " + ((1013 - " + QNH + ") x 30)");
    console.log("Elevation: " + elevation + " | QNH: " + QNH + " | Pressure Height: " + pressureHeight);
    return pressureHeight;
}

function getDensityHeight() {
    let pressureHeight = getPressureHeight();
    let actualTemp = parseInt(document.getElementById("actualTemp").innerHTML);
    let ISATemp = Math.round(15 - Math.round(pressureHeight) / 1000 * 2);
    let ISADev = actualTemp - ISATemp;
    let densityAltitude = pressureHeight + 120 * ISADev;
    console.log("Rounded ISA Temp to: " + ISATemp);
    console.log("Actual Temp: " + actualTemp + " | ISA Temp: " + ISATemp);
    document.getElementById("ISATemp").innerHTML = ISATemp + "°c";
    document.getElementById("ISADev").innerHTML = actualTemp - ISATemp + "°c";
    document.getElementById("densityAltitude").innerHTML = densityAltitude + " ft";
    return densityAltitude;
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