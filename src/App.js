import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from "react";

import './contenedorPrincipal.css'

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a react.js", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Llorar ghghkk", completed: false },
];

function App() {
  return (
    //Después del return, solo puede recibir un elemento, aunque ese elemento tenga más elementos adentro.

    //Para eso, existe React.Fragment, en lugar del <div className="app"> que toma la clase app del HTML.

    // Esta es una forma de renderizar elementos sin agregar nodos adicionales al DOM (React.Fragment), aunque es lo mismo que colocar <>

    < >
      <div className='contenedor-principal'>
        <CreateTodoButton />
        

        <div
          style={{
            
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(221, 218, 218)",
            padding: "20px",
            minWidth: "300px", 
            minHeight: "400px",
            borderRadius: "50px",
            margin: "10px",
            boxSizing: "border-box",

          }}
        >
          <TodoCounter completed={16} total={25} />
          <TodoSearch />
          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App;

 
   /* Sí, en el contexto de React, la expresión que proporcionaste{" "}
      {[<TodoCounter />, <TodoList />]} se está utilizando para crear un array
      con dos elementos, donde cada elemento es una instancia de un componente
      de React. */
 
