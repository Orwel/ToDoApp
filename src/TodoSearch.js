import React from "react";  


function TodoSearch(){
  const [ searchValue, setSearchValue ] = React.
  useState('');

  console.log('Los usuarios buscan todos de ' + searchValue);


    return (
      <input
        placeholder="Cortar cebolla"
        className="Cortar cebolla"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)

        }}
      ></input>
    );
  }

  export { TodoSearch };