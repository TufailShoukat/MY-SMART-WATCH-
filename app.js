

var get_input_to_do = document.getElementById("input_todo");
var get_send_to_do_button = document.getElementById("Add_todo_button");
var get_DeleteAll_to_do_button = document.getElementById("DeleteAll_todo_button"); 
var get_todo_list = document.getElementById("todo_list");

get_send_to_do_button.addEventListener('click', function() {
    if (!get_input_to_do.value) return alert("Please add the Todo!");

    var listItem = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = get_input_to_do.value;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.onclick = function() {
        deleteFun(deleteButton);
    };

    var editButton = document.createElement('button');
    editButton.textContent = 'EDIT';
    editButton.onclick = function() {
        editFun(editButton);
    };

    listItem.appendChild(span);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    get_todo_list.appendChild(listItem);

    get_input_to_do.value = '';
});

function DeleteAll() {
    get_todo_list.innerHTML = '';
}

function deleteFun(element) {
    element.parentElement.remove();
}

function editFun(element) {
    var listItem = element.parentElement;
    var span = listItem.querySelector('span');
    var currentText = span.textContent;
    var newText = prompt("Edit your todo:", currentText);
    if (newText !== null) {
        span.textContent = newText;
    }
}















