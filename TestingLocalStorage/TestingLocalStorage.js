let textElement = document.getElementById("message");
let buttonElement = document.getElementById("saveButton");

buttonElement.onclick = function() {
    let userInputText = textElement.value;
    localStorage.setItem("userInputText", userInputText);
}
let storedInputValue = localStorage.getItem("userInputText");
if (storedInputValue === "") {
    textElement.value = "";
} else {
    textElement.value = storedInputValue;
}