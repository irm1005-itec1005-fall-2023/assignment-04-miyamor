document.addEventListener('DOMContentLoaded', function() {


document.getElementById("taskInput").addEventListener("keypress",function(event) {
        
        if (event.key === "Enter") {
          event.preventDefault(); 
          Add();
        }
      });




    document.getElementById("AddTask").addEventListener('mousedown', Add);

    document.getElementById("clearAll").addEventListener('mousedown', clearAll);

})
