var form = document.getElementById('add');
var activityList = document.getElementById('activities');


// Add activity event
form.addEventListener('submit', addActivity);
// Delete event
activityList.addEventListener('click', removeActivity);

// Add activity
function addActivity(e){
    e.preventDefault();
    // Get the added activity
    var newActivity = document.getElementById('activity').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';

    // create checkbox
    var check = document.createElement('input');

    check.type = 'checkbox';
    check.style.marginRight = '7px';

    li.appendChild(check);

    // Add new input to li
    li.appendChild(document.createTextNode(newActivity));
    
    // Create a button for the new li element
    var deletebtn = document.createElement('button');
    // Add class to the button 
    deletebtn.className = 'btn float-right text-white delete';
    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deletebtn);


    // Append li to the activities
    activityList.appendChild(li);
}

// Remove activity
function removeActivity(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            activityList.removeChild(li);
        }
    }
}


  // create checkbox element
  // var checkbox = document.createElement('input');

  // // assigning attributes to checkbox
  // checkbox.type = "checkbox";
  // checkbox.name = "name";
  // checkbox.value = "value";
  // checkbox.id = "id";

  // // creating label for checkbox
  // var label = document.createElement('label');

  // // Add styles to it
  // checkbox.style.display = 'flex';
  // checkbox.style.float = 'left';
  // checkbox.style.marginTop = '8px';
  // checkbox.style.marginRight = '6px';

  // const target = document.querySelector('.list');  
  // target.parentNode.insertBefore(checkbox, target);

  