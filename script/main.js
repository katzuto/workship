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

function changeValue () {
    value = inputText.value
    newTextInDiv.innerHTML = `${inputText.value}`
    inputText.style.display = "none";
    newDivContent.style.display = "block"
}


inputText.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        changeValue()
    }
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

