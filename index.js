let BodyContainer = document.querySelector(".Body-Container");
let HeaderContainer = document.querySelector(".Header-Container");
let LayoutContainer = document.querySelector(".Layout-Container");
let LeftBarContainer = document.querySelector(".Left-Bar-Container");
let MainContainer = document.querySelector(".Main-Container");
let PopUp = document.querySelector(".PopUp");
let PopUpForm = document.querySelector(".PopUpForm");
let PopUpButtonContainer = document.querySelector(".PopUpButtonContainer");
let newListInput = document.querySelector(".newListInput");
let listNameArray = [];


//NEW LIST BUTTON STUFF
let newListButton = document.createElement('button');
newListButton.id = "newListButton";
newListButton.classList.add("myButton")
newListButton.textContent = "New List..."
LeftBarContainer.appendChild(newListButton);

var newListButtonHandler = function() {
  PopUp.style.visibility = "visible";
}
newListButton.addEventListener('click', newListButtonHandler);

//ADD LIST BUTTON STUFF
let PopUpAddButton = document.createElement('button');
PopUpAddButton.id = "PopUpAddButton";
PopUpAddButton.classList.add("myButton")
PopUpAddButton.textContent = "Add List..."
PopUpButtonContainer.appendChild(PopUpAddButton);

var PopUpAddButtonHandler = function() {
  if(newListInput.value == ""){
    alert("Please enter a name.");
    return;
  }

  let newListDiv = document.createElement('div');
  newListDiv.id = ("listContainer"+ listNameArray.length);
  newListDiv.classList.add("listContainer")
  MainContainer.appendChild(newListDiv);
  console.log("I'm here!")

  let newListHeader = document.createElement('h1');
  newListDiv.classList.add("listHeader");
  newListDiv.appendChild(newListHeader);
  newListHeader.textContent = newListInput.value;

  let newOList = document.createElement('ol');
  newOList.classList.add("list");
  newListDiv.appendChild(newOList);

  let newListButtonContainer = document.createElement('div');
  newListButtonContainer.classList.add("ListButtonContainer");
  newListDiv.appendChild(newListButtonContainer);

  //Adding Add List Element Button
  let ListAddButton = document.createElement('button');
  ListAddButton.id = "ListAddButton";
  console.log(ListAddButton.id);
  ListAddButton.classList.add("myButton")
  ListAddButton.textContent = "Add Item..."
  newListButtonContainer.appendChild(ListAddButton);

  var ListAddButtonHandler = function() {
    let item = prompt("Enter new item for list:", "New Item");
    if (item == null || item == "") {
      return;
    }
    else
    {
      let newListElement = document.createElement('li');
      newListElement.classList.add("ListElement");
      newListElement.textContent = item;
      newOList.appendChild(newListElement); //will this always refer to the same one???

      let deleteButton = document.createElement('button');
      deleteButton.classList.add("miniDeleteButton");
      newListElement.appendChild(deleteButton); //will this always refer to the same one???
      deleteButton.visibility = 'hidden';
      deleteButton.innerHTML = '';

      var deleteButtonHandler = function() {
        newListElement.remove();
        deleteButton.remove();
      }
      deleteButton.addEventListener('click', deleteButtonHandler);

    }
  //set stuff::::::document.getElementById("demo").innerHTML = text;
  }
  ListAddButton.addEventListener('click', ListAddButtonHandler);


  //Adding Toggle Show Delete List Element Button
  let ToggleDeleteButton = document.createElement('button');
  ToggleDeleteButton.id = "ToggleDeleteButton";
  ToggleDeleteButton.classList.add("myButton")
  ToggleDeleteButton.textContent = "Delete Items..."
  newListButtonContainer.appendChild(ToggleDeleteButton);

  var ToggleDeleteButtonHandler = function() {
    if(true){
      alert("Button Works");
      return;
    }
  }
  ToggleDeleteButton.addEventListener('click', ToggleDeleteButtonHandler);

  //Adding Nav Button to Left Bar
  let NavButton = document.createElement('button');
  NavButton.id = "NavButton";
  NavButton.classList.add("myButton")
  NavButton.textContent = newListInput.value;
  LeftBarContainer.appendChild(NavButton);

  var NavButtonHandler = function() {
    if(true){
      alert("Button Works");
      return;
    }
  }
  NavButton.addEventListener('click', NavButtonHandler);

  PopUp.style.visibility = "hidden";
  newListInput.value = ""
}
PopUpAddButton.addEventListener('click', PopUpAddButtonHandler);



//CANCEL BUTTON STUFF
let PopUpCancelButton = document.createElement('button');
PopUpCancelButton.id = "PopUpCancelButton";
PopUpCancelButton.classList.add("myButton")
PopUpCancelButton.textContent = "Cancel"
PopUpButtonContainer.appendChild(PopUpCancelButton);

var PopUpCancelButtonHandler = function() {
  PopUp.style.visibility = "hidden";
}
PopUpCancelButton.addEventListener('click', PopUpCancelButtonHandler);








// addListButton.addEventListener('click', function() {
//   alert("YOU'RE REALLY PUSHING MY BUTTONS!!!!!");
// });

//LeftBarContainer.insertBefore(newButton, container.childNodes[0]);
//let content = document.createTextNode('Click Me!');
//newButton.appendChild(content);
