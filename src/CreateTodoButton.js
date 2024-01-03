import './CreateTodoSection.css'
function CreateTodoButton(){
    return (
      <div className="create-todo-section1">
        <form className="create-todo-section2">
          <input type="text" placeholder="Ingresa una tarea" name="taskInput" />
          <button 
          type="submit"
          className='CreateTodoButton'
          onClick={
            (event) => {
              console.log('le diste click')
              console.log(event.target)
            }
          }
          >Agregar Tarea</button>
        </form>
      </div>
    );
  }

  export { CreateTodoButton };