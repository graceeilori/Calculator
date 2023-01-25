let display = document.getElementById("TheDisplay");
let clear = Array.from(document.getElementsByClassName("clear"));
let de = Array.from(document.getElementsByClassName("de"));
let percentage = Array.from(document.getElementsByClassName("percentage"));
let operations = Array.from(document.getElementsByClassName("operations"));
let numbers = Array.from(document.getElementsByClassName("numbers"));
let solution = Array.from(document.getElementsByClassName("solution"));

numbers.forEach(function(button){
    button.addEventListener('click', function(){
        display.textContent += button.textContent;
    });
});

operations.forEach(function(button){
    button.addEventListener('click', function(){
        display.textContent += button.textContent;
    });
});

clear.forEach(function(button){
    button.addEventListener('click', function(){
        display.textContent = "";
    });
});

percentage.forEach(function(button){
    button.addEventListener('click', function(){
        let currentValue = parseFloat(display.textContent);
    if (isNaN(currentValue)) {
        display.textContent = "";
    } else {
        let percentageValue = currentValue * 0.01;
        display.textContent = percentageValue;
    }
    });
});

de.forEach(function(button){
    button.addEventListener('click', function(){
            let displayText = display.textContent;
            if(displayText.length > 0){
            let newText = displayText.substring(0, displayText.length - 1);
            display.textContent = newText;
        }});
    })

solution.forEach(function(button) {
    button.addEventListener("click", function() {
        if (display.textContent === "") {
            display.textContent = "";
        } else {
            result = eval(display.textContent);
            display.textContent = result;
        }
    });
});
