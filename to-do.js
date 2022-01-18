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
