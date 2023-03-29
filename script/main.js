inputText = document.querySelector(".input-title")
newTextInDiv = document.querySelector(".text-title")
newDivContent = document.querySelector(".text-content")


function changeValue() {
    value = inputText.value
    console.log(value);
    newTextInDiv.innerHTML = value
    inputText.style.display = "none";
    newDivContent.style.display = "block"
}

function changeDivOnInput() {
    value = inputText.value;
    console.log(value)
    newDivContent.style.display = "none";
    inputText.style.display = "block";
}


inputText.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        changeValue()
    }

});

newDivContent.addEventListener("click", () => {
        changeDivOnInput()
});