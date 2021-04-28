// add the add button on click execute the function addTodoItem
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
// add the empty button on click execute the function emptyList
    var emptybutton = document.getElementById("empty-button");
    emptybutton.addEventListener("click", emptyList);


    // add the element input entry box
    var toDoEntryBox = document.getElementById("todo-entry-box");
    
    // add the element todo list
    var toDoList = document.getElementById("todo-list");
    
    function newToDoItem(itemText) {
      // create the element li
      var toDoItem = document.createElement("li");
      // create the text node item text
      var toDoText = document.createTextNode(itemText);
      
      // append the li item(listed order) with the text entered
      toDoItem.appendChild(toDoText);
      // append the whole li with text to the unordered list(todo-list)
      toDoList.appendChild(toDoItem);
  }
  function addToDoItem() {
    // bring the value from the input entry box
    var itemText = toDoEntryBox.value;
    // call the function newtodo item
    newToDoItem(itemText);
}
function emptyList() {
// on click remove todoentrybox
var toDoItems = toDoList.children;
while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
}
}