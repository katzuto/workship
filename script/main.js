import { inputText, newTextInDiv, newDivContent, changeValue, changeDivOnInput } from "./firstInput.js";
import { listOfToDos, inputNote, toDoList, addNewToDoToArray, displayMessages } from "./addTask.js";


// меняет инпут на див 
inputText.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        changeValue()
    }

});

// меняет див на инпут обратно
newDivContent.addEventListener("click", () => {
        changeDivOnInput()
});


// добавляется таска вытаскивая ее из массива под индивидуальным индексом
inputNote.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        addNewToDoToArray()
    }
});





// добавление localstorage

