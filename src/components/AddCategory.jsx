import { useState } from "react";
import propTypes from "prop-types";


export const AddCategory = ({ onNewCategory }) => { //componente que maneja el imput

  const [inputValue, setInputValue] = useState(''); //este es el valo inicial uqe va a tener ese inputvalue

  const onInputChange = ({ target }) => { //desestructura el target para no tener que colocar event
    setInputValue(target.value);
  }

  const onSubmit = (event) => { //metodo
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    
    setInputValue('');
    onNewCategory( inputValue.trim() ); // innew..se llama con el valor d la caja de extp 
  }

  return (

    <form onSubmit={onSubmit} aria-label="form"> {/*formulario - cuando doy enter automaticamamte se envia el submit*/}

      <input
        type="text"
        placeholder="Buscar gifs" //aparece texto provisional en el imput
        value={inputValue}
        onChange={onInputChange} //tenemos un evento .. y este se lo estamos mandando a la funcion
      />
    </form>
  )
}

AddCategory.proptypes = {
  onNewCategory: propTypes.func.isRequired,
}



// el form se usa cuando hay mas de un elemento uqe va a ser el nodo root del elemento
//dnetro de ese form puedo tener cualquier cantidad de imput

