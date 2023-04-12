import { inputText, newTextInDiv, newDivContent, changeValue, changeDivOnInput } from "./firstInput.js";
import { addMessage, todo, todoList, displayMessages, } from "./addtask.js";


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

// button.addEventListener("click", function() {
//     if (!addMessage.value) {
//         return;
//     }
//     const newTodo = {
//         todo: addMessage.value,
//         checked: false,
//         important: false,
//     }

//     todoList.push(newTodo);
//     displayMessages()
//     localStorage.setItem("todo", JSON.stringify(todoList));
//     addMessage.value = ""
// })

addMessage.addEventListener("keypress", (e) => {
    if(e.keyCode == 13) {
        if (addMessage.value == 0) {
            return
        }
        const newTodo = {
            todo: addMessage.value,
            checked: false,
            important: false,
        }
    
        todoList.push(newTodo);
        displayMessages()
        localStorage.setItem("todo", JSON.stringify(todoList));
        addMessage.value = ""
    } 
})






// добавление localstorage

