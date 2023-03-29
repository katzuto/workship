inputText = document.querySelector(".input-title")
newTextInDiv = document.querySelector(".text-title")
newDivContent = document.querySelector(".text-content")



// change upper input into div
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


//add note with template
const checklist = document.querySelector('.checklist');
const templateText = document.querySelector('#template-text');
const inputNote = document.querySelector('.input-note')

function addNoteText() {
    const item = templateText.content.cloneNode(true);
    item.querySelector('span').textContent = `${inputNote.value}`
    checklist.append(item);
    inputNote.value = '';
};

inputNote.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        addNoteText();
        console.log('sndvjn');
    }
});