//This function will show and alert message when clickin the element
function alertMessage() {
    window.alert("Cargando informe meteorológico...");
}

//This function will remove the container when clicking the button accept
function removeMessage() {
    let cookieMessage = document.querySelector(".bodyContainerMessage");
    cookieMessage.remove();
}

//This function will convert from Fahrenheit to Celsius and viceverse
function convert(element) {
    let elementValue = element.value;
    let elementMax = document.querySelectorAll(".max");
    let elementMin = document.querySelectorAll(".min");
    if (elementValue === "f°") {
        for (let i = 0; i < elementMax.length; i++) {
            //Valores máximos
            let valorMax = elementMax[i].innerText;
            let fahrenheitMax = (valorMax * 9) / 5 + 32;
            elementMax[i].innerText = Math.round(fahrenheitMax);
            //Valores minimos
            let valorMin = elementMin[i].innerText;
            let fahrenheitMin = (valorMin * 9) / 5 + 32;
            elementMin[i].innerText = Math.round(fahrenheitMin);
        }
    }

    if (elementValue === "c°") {
        for (let i = 0; i < elementMax.length; i++) {
            //Valores máximos
            let valorMax = elementMax[i].innerText;
            let celsiusMax = (valorMax - 32) * (5 / 9);
            elementMax[i].innerText = Math.round(celsiusMax);
            //Valores minimos
            let valorMin = elementMin[i].innerText;
            let celsiusMin = (valorMin - 32) * (5 / 9);
            elementMin[i].innerText = Math.round(celsiusMin);
        }
    }
}