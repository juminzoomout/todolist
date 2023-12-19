const addTodoModal = document.getElementById('add-modal');
const startAddTodoButton = document.getElementById('plus_btn');
const cancelAddTodoButton = addTodoModal.querySelector('.btn--passive');
const confirmAddTodoButton = cancelAddTodoButton.nextElementSibling;
const userInputs = addTodoModal.querySelectorAll('input');

const todo = [];

const updateUI = () => {
  if (todo.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const renderNewTodoElement = (whatToDo) => {
  const newTodoElement = document.createElement('li');
  newTodoElement.className = 'todo-element';
  newTodoElement.innerHTML = `
    <div class="todo-element__info">
      <h3>${whatToDo}</h3>
    </div>
  `;
  /*newTodoElement.addEventListener(
    'click'
    startDeleteMovieHandler.bind(null, id)
  );*/
  const listRoot = document.getElementById('todo-list');
  listRoot.append(newTodoElement);
};

const closeTodoModal = () => {
  addTodoModal.classList.remove('visible');
};

const showTodoModal = () => {
  addTodoModal.classList.add('visible');
};

const clearTodoInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddTodoHandler = () => {
  closeTodoModal();
  clearTodoInput();
};

const addTodoHandler = () => {
  const whatToDoValue = userInputs[0].value;

  if (whatToDoValue.trim() === '') {
    alert('할 일이 없어보이네요. 부럽다...ㅎ');
    return;
  }

  const newTodo = {
    id: Math.random().toString(),
    whatToDo: whatToDoValue,
  };

  todo.push(newTodo);
  console.log(todo);
  closeTodoModal();
  clearTodoInput();
  renderNewTodoElement(newTodo.whatToDo);
  updateUI();
};

let date = document.querySelectorAll('tr td');

for (let i = 0; i < date.length; i++) {
  date[i].onclick = function () {
    let tabID = this.querySelector('a').getAttribute('href');
    console.log(this.classList);
    document.querySelectorAll('.days .day').forEach(function (item) {
      item.classList.remove('active');
    });
    document.querySelector(tabID).classList.add('active');
    // this.classList.add('active');
  };
}

startAddTodoButton.addEventListener('click', showTodoModal);
cancelAddTodoButton.addEventListener('click', cancelAddTodoHandler);
confirmAddTodoButton.addEventListener('click', addTodoHandler);
