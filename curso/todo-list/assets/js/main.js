// Referências aos elementos principais da interface
const taskInput = document.querySelector('.input-new-task');
const addTaskButton = document.querySelector('.btn-add-task');
const tasksList = document.querySelector('.task');

// Cria dinamicamente um <li> para representar uma nova tarefa
function createListItem() {
  return document.createElement('li');
}

// Limpa o campo de entrada e mantém o foco para facilitar a UX
function clearAndFocusInput() {
  taskInput.value = '';
  taskInput.focus();
}

// Anexa ao <li> um botão de exclusão com atributos semânticos
function addDeleteButtonToListItem(li) {
  li.innerText += ' ';
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.setAttribute('class', 'delete'); // Classe usada para identificar o botão
  deleteButton.setAttribute('title', 'Delete this task'); // Acessibilidade
  li.appendChild(deleteButton);
}

// Encapsula a lógica de criação de tarefas, tornando o processo reutilizável
function addTaskToList(taskText) {
  const li = createListItem();
  li.innerText = taskText;
  tasksList.appendChild(li);

  clearAndFocusInput();
  addDeleteButtonToListItem(li);
  saveTasks(); // Garante que a lista sempre esteja atualizada no localStorage
}

// Cria a tarefa ao clicar no botão, se houver conteúdo
addTaskButton.addEventListener('click', function () {
  if (!taskInput.value) return; // Evita criar tarefas vazias
  addTaskToList(taskInput.value);
});

// Permite adicionar tarefas pressionando Enter, aumentando a usabilidade
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (!taskInput.value) return;
    addTaskToList(taskInput.value);
  }
});

// Escuta o documento todo e identifica cliques em botões de exclusão
document.addEventListener('click', function(e) {
  const el = e.target;

  // Se for um botão com a classe 'delete', remove a tarefa correspondente
  if (el.classList.contains('delete')) {
    el.parentElement.remove();
    saveTasks(); // Atualiza a lista persistida
  }
});

// Serializa a lista de tarefas e salva no localStorage
function saveTasks() {
  const liTasks = tasksList.querySelectorAll('li');
  const toDoList = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace('Delete', '').trim(); // Remove o texto do botão antes de salvar
    toDoList.push(taskText);
  }

  const jsonTasks = JSON.stringify(toDoList);
  localStorage.setItem('tasks', jsonTasks); // Persistência
}

// Ao carregar a página, restaura tarefas salvas previamente
function addSavedTasks() {
  const tasks = localStorage.getItem('tasks');
  if (!tasks) return;
  
  const toDoList = JSON.parse(tasks);

  for (let task of toDoList) {
    addTaskToList(task); // Reutiliza a função principal para garantir consistência
  }
}

// Inicializa o app carregando tarefas anteriores
addSavedTasks();
