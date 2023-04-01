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



// const checklist = document.querySelector('.checklist');
// const templateText = document.querySelector('#template-text');
const listOfToDos = document.querySelector(".list-of-todos")
const inputNote = document.querySelector('.input-note')
let toDoList = [];




// function addNoteText() {
//     const item = templateText.content.cloneNode(true);
//     item.querySelector('span').textContent = `${inputNote.value}`
//     checklist.append(item);
//     inputNote.value = '';
// };


// создаем новый объект который включает в себя написанное значение инпута
function addNewToDoToArray() {
    const newToDo = {
        name: inputNote.value,
        checked: false,
    }
    toDoList.push(newToDo); // после ввода инпута объект со значением инпута добавляется в массив методом push()
    displayMessages()
}

// функция вывода сообщения из инпута в браузер
function displayMessages() {
    let displayMessage = ""; // создали пустую строку которая у нас будет отвечать за вывод сообщения в браузер
    toDoList.forEach(function(item, index) {
        displayMessage += `
            <li>
                <input type="checkbox" id="item_${index}" ${item.checked? "checked" : ""}>
                <label for="item_${index}">${item.name}</label>
                <button class="btn_${index}">delete</button>
            </li>
        ` // сочетаем строки стоит обратить на это внимание
        listOfToDos.innerHTML = displayMessage;
    })// метод forEach перебирает каждое значение массива и берет в себя коллбек функцию и применяет эту функцию к каждому элементу массива
}





// удаление таски
function deleteTask() {
    toDoList.forEach(function(item, index) {
        toDoList.splice(index, 1)
    })
}




inputNote.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        addNewToDoToArray()
    }
});





// добавление localstorage

