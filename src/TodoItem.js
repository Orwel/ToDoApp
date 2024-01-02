import './TodoItem.css'
function TodoItem(props){
    return (
      <li className="estilos-lista">
        <span>V</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }

  export { TodoItem };