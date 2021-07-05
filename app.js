// test database
// let projectsDataBase = [
//   {
//     id:1,
//     project_name:"project1",
//     project_todo:["todo1","todo2","todo3"],
//     project_comment:"this is good"
//
//   },
//   {
//     id:2,
//     project_name:"project2",
//     project_todo:["todo1"],
//     project_comment:"this is good2"
//   },
//   {
//     id:3,
//     project_name:"project3",
//     project_todo:["todo1","todo2"],
//     project_comment:"this is good3"
//   },
// ]


// constants
const body = document.querySelector('body');
const head = document.createElement('header');
const nav = document.createElement('nav');
const rightSection = document.createElement('section');
  const rightContainer = document.createElement('div')
const rightContainerTopic = document.createElement('div')
const createTodoForm1 = document.createElement('div')
const rightFrom= document.createElement('form')
const rightFormInput = document.createElement('input')
const rightFormButton = document.createElement('button')
const rightFormButtonI = document.createElement('i')
const rightFormSectionDiv = document.createElement('div')


const rightContainerUl = document.createElement('ul')
const rightContainerLi = document.createElement('li')
const rightContainerConclude= document.createElement('div')
const rightContainerButton = document.createElement('button')


//left
const leftSection = document.createElement('section');
const leftContainer = document.createElement('div')
const leftContainerTopic = document.createElement('div')
const topic2 = document.createElement('h1')
const topic2Em= document.createElement('em')
//form starts
const createTodoForm = document.createElement('div')
const leftForm = document.createElement('form')
const leftFormInput = document.createElement('input')
const leftFormButton = document.createElement('button')
const leftFormButtonI = document.createElement('i')
const leftFormSectionDiv = document.createElement('div')
const leftFormSection = document.createElement('section')
const leftFormOption1 = document.createElement('option')
const leftFormOption2 = document.createElement('option')
const leftFormOption3 = document.createElement('option')
const leftContainerUlDiv = document.createElement('div')
const leftContainerUl = document.createElement('ul');
const leftContainerLi = document.createElement('li')
const leftContainerConclude = document.createElement('div')
const leftContainerButton = document.createElement('button')
const LOCAL_STORAGE_LIST_KEY = 'task.projectsDataBase'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let projectsDataBase = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)
//asigning
// nav bar/
head.classList.add('head')
nav.classList.add('nav')
nav.innerHTML='<a class="a" href="#">Todo<em>Folio</em></a>'


// right side
rightSection.classList.add('rightSection')
rightContainer.classList.add('rightContainer')
rightContainerTopic.classList.add('rightContainerTopic')
rightContainerTopic.innerHTML='<h1 class="topic1">List Of Project</h1> '
createTodoForm1.classList.add('createTodoForm1')
rightFrom.classList.add('form1')
rightFormInput.classList.add('todo-input1')
rightFormButton.classList.add('todo-button1')
rightFormButton.type = "text"
rightFormButtonI.classList.add('fa-plus-square')
rightFormButtonI.classList.add('fa')
rightFormSectionDiv.classList.add('select1')

rightContainerUl.classList.add('rightContainerUl')
rightContainerLi.classList.add('rightContainerLi')
rightContainerConclude.classList.add('rightContainerConclude')
rightContainerButton.classList.add('rightContainerButton')



//left side
leftSection.classList.add('leftSection')
leftContainer.classList.add('leftContainer')
leftContainerTopic.classList.add('leftContainerTopic')
topic2.classList.add('topic2')
topic2.innerText='Project Todo: '
topic2Em.innerText= 'Here'

// leftContainerTopic.innerHTML='<h1 class="topic2">Project: <em>Cooking rice</em> Todo list</h1><hr>'
createTodoForm.classList.add('createTodoForm')
leftForm.classList.add('form')
leftFormInput.classList.add('todo-input')
leftFormButton.classList.add('todo-button')
leftFormButton.type = "text"
leftFormButtonI.classList.add('fa-plus-square')
leftFormButtonI.classList.add('fa')
leftFormSectionDiv.classList.add('select')
leftFormSection.classList.add('filter-todo')
leftFormSection.name='todos'
leftFormOption1.value='all'
leftFormOption1.innerText="All"
leftFormOption2.value='completed'
leftFormOption2.innerText="Completed"
leftFormOption3.value='completed'
leftFormOption3.innerText="Uncompleted"
leftContainerUlDiv.classList.add('todo-container')
leftContainerUl.classList.add('leftContainerUl')
leftContainerLi.classList.add('leftContainerLi')
leftContainerConclude.classList.add('leftContainerConclude')
leftContainerButton.classList.add('leftContainerButton')



//building up the DOM

body.appendChild(head);
head.appendChild(nav);
body.appendChild(rightSection)
rightSection.appendChild(rightContainer)
rightContainer.appendChild(rightContainerTopic)


rightContainer.appendChild(createTodoForm1)
createTodoForm1.appendChild(rightFrom)
rightFrom.appendChild(rightFormInput)
rightFrom.appendChild(rightFormButton)
rightFormButton.appendChild(rightFormButtonI)
rightFrom.appendChild(rightFormSectionDiv)
rightFormSectionDiv.appendChild(rightContainerUl)

// rightContainer.appendChild(rightContainerUl)
// rightContainerUl.appendChild(rightContainerLi)
rightContainer.appendChild(rightContainerConclude)
rightContainerConclude.appendChild(rightContainerButton);



body.appendChild(leftSection)
leftSection.appendChild(leftContainer)
leftContainer.appendChild(leftContainerTopic)
leftContainerTopic.appendChild(topic2)
topic2.appendChild(topic2Em)
leftContainer.appendChild(createTodoForm)
createTodoForm.appendChild(leftForm)
leftForm.appendChild(leftFormInput)
leftForm.appendChild(leftFormButton)
leftFormButton.appendChild(leftFormButtonI)
leftForm.appendChild(leftFormSectionDiv)
leftFormSectionDiv.appendChild(leftFormSection)
leftContainer.appendChild(leftContainerUlDiv)
leftContainerUlDiv.appendChild(leftContainerUl)
leftContainer.appendChild(leftContainerConclude)
leftContainerConclude.appendChild(leftContainerButton)


//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.leftContainerUl');
// right
const todoInput1 = document.querySelector('.todo-input1');
const todoButton1 = document.querySelector('.todo-button1');
const todoList1 = document.querySelector('.rightContainerUl');

// const mainProjectItemId = document.querySelector('[data-list-id]')
//event listeners

todoButton1.addEventListener('click', mainProjectAddingItems);
todoList1.addEventListener('click',deleteCheckFromMainProject);

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);

const listDisplayContainer = document.querySelector('.leftSection')
const listTitleElement = document.querySelector('.topic2')
// notes
// data-list-display-containger = .leftContainer
// data-list-title = .topic2
// i do not have the count yet
// data-task = leftContainerUl
// const listCountElement =
// const taskContainer = document.querySelector('.leftContainerUl')

// const filterOption = document.querySelector('.leftContainerLi');








//funtions
function save(){
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(projectsDataBase))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}
function saveAndLoadProjectItems(){
  save()
  mainProjectLoadingItems()

}
function clearElement(element){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  }
}
function createList(name){
  return {id:Date.now().toString(), project_name:name,project_todo:[]}
}

function createTasks(name){
  return {id:Date.now().toString(), name:name,complete:false, project_comment:""}
}

// left section todo
function addTodo(event){
  //prevent form form submit
  event.preventDefault();
  //checking for empty string
  if(todoInput.value===""){
    return;
  }

  const data = createTasks(todoInput.value)

  const selectedList = projectsDataBase.find(dataId => dataId.id === selectedListId)
  selectedList.project_todo.push(data)
  todoInput.value=""
  saveAndLoadProjectItems()

}

// leftsection delete
function deleteCheck(event){

  const item = event.target


  //delet // TODO:
  if(item.classList[0]==="trash-btn"){
    const selectedList1 = projectsDataBase.find(list=>list.id===selectedListId)
    selectedList1.project_todo = selectedList1.project_todo.filter(task => !task.complete);

    
    saveAndLoadProjectItems()

  }


  //checkmak
  if(item.classList[0]==="complete-btn"){
    const selectedList = projectsDataBase.find(list=>list.id===selectedListId)
    const selectedTask = selectedList.project_todo.find(task => task.id===item.id)

    selectedTask.complete= !selectedTask.complete
    // selectedTask.complete = item.checked
    saveAndLoadProjectItems()


  }

}



function mainProjectLoadingItems(){
  renderProjectItems()
  const selectedList = projectsDataBase.find(list => list.id ===selectedListId)

  if (selectedListId ==null){
    listDisplayContainer.style.display='none'
  }else{
      listDisplayContainer.style.display=''
      listTitleElement.innerHTML = 'Project Name: <em>'+selectedList.project_name+'</em>'
      // renderTaskCount(selectedList)
      clearElement(todoList)
      renderTasks(selectedList)

  }
}
function renderTasks(selectedList){

  for(var i =0; i<selectedList.project_todo.length;i++){
    let todos =selectedList.project_todo[i]

    let task_name = selectedList.project_todo[i].name;
    let completeTodo = selectedList.project_todo[i].complete
    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    if(completeTodo===true){
    todoDiv.classList.add('completed');
    }
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText=task_name;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //check mark todoButton
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class = "fa fa-check"></i>'
    completedButton.classList.add('complete-btn');
    completedButton.id= todos.id
    completedButton.dataset.checked = todos.complete

    todoDiv.appendChild(completedButton);
    //checkmak


    //check button
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class = "fa fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    trashButton.id = todos.id
    todoDiv.appendChild(trashButton);



    //append to listen
    todoList.appendChild(todoDiv);



  }

}

// function renderTaskCount(){
//   const incompleteTasksCount = selectedList.project_todo.filter(project_todo => !task.complete).length
//   const taskString = incompleteTasksCount ===1? "task" : "tasks"
//   listDisplayContainer.innerHTML='<h5>'+incompleteTasksCount+' '+taskString+' remaining'
// }


function renderProjectItems(){

    clearElement(todoList1)
  for(var i =0; i<projectsDataBase.length;i++){

    //todo div
    const todoDiv1 = document.createElement('div')
    todoDiv1.classList.add('todo1');

    //create li
    const newTodo1 = document.createElement('li');
    newTodo1.dataset.listId=projectsDataBase[i].id;
    newTodo1.innerText=projectsDataBase[i].project_name;
    if(projectsDataBase[i].id === selectedListId){
      newTodo1.classList.add('active-list1')
      todoDiv1.classList.add('active-list');


      //check mark todoButton
      const completedButton1 = document.createElement('button');
      completedButton1.innerHTML= '<i class = "fa fa-check"></i>'
      completedButton1.classList.add('complete-btn1');
      todoDiv1.appendChild(completedButton1);

      //check button
      const trashButton1 = document.createElement('button');
      trashButton1.innerHTML= '<i class = "fa fa-trash"></i>'
      trashButton1.classList.add('trash-btn1');
      todoDiv1.appendChild(trashButton1);


    }
    newTodo1.classList.add('todo-item1');
    todoDiv1.appendChild(newTodo1);


    //append to listen
    todoList1.appendChild(todoDiv1);
  }
}


function mainProjectAddingItems(event){
  //prevent form form submit
  event.preventDefault();
  //checking for empty string
  if(todoInput1.value===""){
    return;
  }
  const list = createList(todoInput1.value)
  todoInput1.value=''
  projectsDataBase.push(list)
  saveAndLoadProjectItems()
}


mainProjectLoadingItems()




function deleteCheckFromMainProject(event){
  event.preventDefault();
  const item1 = event.target

  //delet // TODO:


  if(item1.tagName.toLowerCase()=== 'li'){
    selectedListId = item1.dataset.listId;

    saveAndLoadProjectItems()
  }


  if(item1.classList[0]==="trash-btn1"){
    // selectedListId = item1.dataset.listId;
      projectsDataBase = projectsDataBase.filter(list=>list.id !== selectedListId)
      selectedListId = null
      saveAndLoadProjectItems()

    // const todo1 = item1.parentElement;
    // todo1.remove()


  }


  //checkmak
  if(item1.classList[0]==="complete-btn1"){
    const todo1 = item1.parentElement;
    todo1.classList.toggle('completed');
  }

}

//
//
//























            // mm
