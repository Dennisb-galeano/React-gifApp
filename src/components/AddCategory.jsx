import { useState } from "react";



export const AddCategory = ({ onNewCategory }) => { //componente que maneja el imput

  const [inputValue, setinputValue] = useState( ) //este es el valo inicial uqe va a tener ese inputvalue

  const onInputChange = ({ target }) => { //desestructura el target para no tener que colocar event
    setinputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim())
    setinputValue('');
  }

  return (

    <form onSubmit={(event) => onSubmit(event)}> {/*formulario - cuando doy enter automaticamamte se envia el submit*/}

      <input
        type="text"
        placeholder="Buscar gifs" //aparece texto provisional en el imput
        value={inputValue}
        onChange={onInputChange} //tenemos un evento .. y este se lo estamos mandando a la funcion

      />

    </form>
  )
}



// el form se usa cuando hay mas de un elemento uqe va a ser el nodo root del elemento
//dnetro de ese form puedo tener cualquier cantidad de imput

