var form = document.getElementById('add');
var activityList = document.getElementById('activities');
var lists = document.querySelector('.list-group-item');
//var box = document.querySelectorAll('.checkbox');
console.log(lists);


// Add activity event
form.addEventListener('submit', addActivity);
// Delete event
activityList.addEventListener('click', removeActivity);
// activity event


//lists.addEventListener('mouseout', removeSteps);

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
    check.className = 'checkbox';
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


const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('checkbox_class');
    const activities = document.getElementsByTagName('small')
    checkboxes.forEach((checkbox) => {
        if(checkbox.checked === true) {
            return activities.classList.add('strike_through')
        }
    })

}
    
document.addEventListener('DOMContentLoaded', handleCheckboxChange);
