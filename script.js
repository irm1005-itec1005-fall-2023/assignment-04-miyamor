

function Add(){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("ToDo");

    if (taskInput.value !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <label for="container">
            <input type="checkbox" > <section class="wrapper"> ${taskInput.value} </section>
            <input type="button" value="Delete" class="Delete" Onclick="Delete(this)">
        </label>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function Delete(button){
    //console.log("Delete clicked for element:", button);
    const taskItem = button.parentNode.parentNode;
    taskItem.parentNode.removeChild(taskItem);

    
 }



function clearAll(){
    const myList = document.getElementById('ToDo');

  // Remove all li items using removeChild
    while (myList.firstChild) {
        myList.removeChild(myList.firstChild);
    }
}


document.addEventListener('DOMContentLoaded', function() {

    // let deleteButtons = document.getElementsByClassName("Delete");
    // for (let i = 0; i < deleteButtons.length; i++) {
    //     deleteButtons[i].addEventListener('mousedown', function(event) {
    //         Delete(event.target);
    //     });
    // }

    //Keyboard handling 
    document.getElementById("taskInput").addEventListener("keypress",function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          Add();
        }
      });




    document.getElementById("AddTask").addEventListener('mousedown', Add);

    document.getElementById("clearAll").addEventListener('mousedown', clearAll);

})