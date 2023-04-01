export const listOfToDos = document.querySelector(".list-of-todos")
export const inputNote = document.querySelector('.input-note')
export let toDoList = [];

// создаем новый объект который включает в себя написанное значение инпута
export function addNewToDoToArray() {
    const newToDo = {
        name: inputNote.value,
        checked: false,
    }
    toDoList.push(newToDo); // после ввода инпута объект со значением инпута добавляется в массив методом push()
    displayMessages()
}

// функция вывода сообщения из инпута в браузер
export function displayMessages() {
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

// удаление таски не работавет
// export function deleteTask() {
//     toDoList.forEach(function(item, index) {
//         toDoList.splice(index, 1)
//     })
// }