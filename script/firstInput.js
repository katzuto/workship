export const inputText = document.querySelector(".input-title")
export const newTextInDiv = document.querySelector(".text-title")
export const newDivContent = document.querySelector(".text-content")


// change upper input into div
export function changeValue() {
    let value = inputText.value
    console.log(value);
    newTextInDiv.innerHTML = value
    inputText.style.display = "none";
    newDivContent.style.display = "block"
}

export function changeDivOnInput() {
    let value = inputText.value;
    console.log(value)
    newDivContent.style.display = "none";
    inputText.style.display = "block";
}