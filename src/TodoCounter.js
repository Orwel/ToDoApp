
const estilos = {
  backgroundColor: 'red'
}

function TodoCounter({ total, completed }){

    return (

      //Con las props logramos que 3 de 5 sea dinámico, no son parámetros sino props porque son distintos 
      //Las props por dentro son un objeto
      //Las dobles llaves son la forma de hacerlo en React.
      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px',
      }
      }>Has completado {completed} de {total} Todos</h1>
    );
  }

  export { TodoCounter };