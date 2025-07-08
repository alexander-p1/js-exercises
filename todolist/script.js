const todoValue = document.getElementById("todoText");
const todoAlert = document.getElementById("alert");
const listItems = document.getElementById("listItems");
const addUpdate = document.getElementById("addUpdateClick");

let todo = JSON.parse(localStorage.getItem("todo-list"));
if (!todo) {
  todo = [];
}

// Function for updating
const createTodoItems = () => {
  if (todoValue.value === "") {
    todoAlert.innerText = "Skriv vad du behöver göra!";
    todoValue.focus();
  } else {
    let isPresent = false;
    todo.forEach((element) => {
      if (element.item == todoValue.value) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setAlertMessage("Detta har du redan skrivit!");
      return;
    }

    let li = document.createElement("li");
    const todoItems = `<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div>
                    <img class="edit todo-controls" onclick="UpdateToDoItems(this)" />
                    <img class="delete todo-controls " onclick="DeleteToDoItems(this)" " /></div></div>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);

    if (!todo) {
      todo = [];
    }
    let itemList = { item: todoValue.value, status: false };
    todo.push(itemList);
    setLocalStorage();
  }
  todoValue.value = "";
  setAlertMessage("En todo skapad!");
};
