var i = 1;
function addItem() {
  //create for adding a list
  var item = document.getElementById('text').value;
  // adding span to show given text
  var text1 = document.createElement('span');
  text1.setAttribute('id', 'text' + i);
  text1.innerHTML = item;
  // adding input for updating the text
  var text2 = document.createElement('input');
  text2.setAttribute('id', 'addText' + i);
  text2.type = 'text';
  text2.setAttribute('value', item);
  text2.style.display = 'none';
  // added list for easy convenience
  var newItem = document.createElement('li');
  newItem.setAttribute('id', 'li' + i);
  //adding checkbox
  var checkBox = document.createElement('input');
  checkBox.type = "checkbox";
  checkBox.addEventListener('click', checkboxItem, false);
  //adding button for edit
  var editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "edit";
  editButton.setAttribute('id', i);
  editButton.onclick = function () {
    editItem(this.id);
  };
  i++;
  //adding button for delete
  var deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener('click', removeItem, false);
  //appening childs to newItem
  newItem.appendChild(checkBox);
  newItem.appendChild(text2);
  newItem.appendChild(text1);
  newItem.appendChild(editButton);
  newItem.appendChild(deleteButton);

  document.getElementById('todo').appendChild(newItem);
  document.getElementById('text').value = '';
}
//working of checkBox
function checkboxItem(e) {
  var currentElement = e.target;
  var nearestList = currentElement.closest("li");
  document.getElementById(nearestList.id);
  if (e.currentTarget.checked) {
    document.getElementById('completed').append(nearestList);
  } else
    document.getElementById('todo').append(nearestList);
}
// working of edit button
function editItem(x) {
  var list = document.getElementById('addText' + x);
  var list1 = document.getElementById('text' + x);
  if (list.style.display === 'none') {
    list.style.display = 'inline';
    list1.style.display = 'none';
  }
  else {
    list1.innerHTML = list.value;
    list1.style.display = 'inline';
    list.style.display = 'none';
  }
}
// working of remove button
function removeItem(e) {
  var currentElement = e.target;
  var nearestList = currentElement.closest("li");
  document.getElementById(nearestList.id).remove();
}