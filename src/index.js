import {Todo,TodoList} from './classes';
// import { TodoList } from './classes/todo-list.class.js';
// import { Todo } from './classes/todo.class.js';
import  {crearTodoHTML, saludar} from './js/componentes.js';
import './styles.css';

export const todoList = new TodoList();

console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHTML(todo));
// todoList.todos.forEach(crearTodoHTML);           //Hace lo mismo que la linea anterior