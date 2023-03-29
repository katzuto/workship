inputText = document.querySelector(".input-title")
newTextInDiv = document.querySelector(".text-title")
newDivContent = document.querySelector(".text-content")


// func add value from input to newDiv

// const changeValueInputToDiv = () => {
//     value = inputText.value;
//     function newTextDiv () {
//         newTextInDiv = value;
//         newTextDiv.style.display = block;
//         inputText.style.display = none;
//     }
// }

// inputText.addEventListener("keydown", changeValueInputToDiv)

function changeValue() {
    value = inputText.value
    newTextInDiv.innerHTML = `${inputText.value}`
    inputText.style.display = "none";
    newDivContent.style.display = "block"
}

function changeDivOnInput() {
    newDivContent.style.display = "none";
    inputText.style.display = "block";
    inputText = newDivContent.value;
}


inputText.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        changeValue()
    }
});

newDivContent.addEventListener("click", changeDivOnInput);