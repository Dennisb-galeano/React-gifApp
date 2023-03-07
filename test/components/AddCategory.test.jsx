import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  test('Debe de cambiar el valor de la caja de texto', () => {

    render(< AddCategory onNewCategory={() => { }} />); // semanda una funcion vacia para uqe pase
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Naruto' } });

    expect(input.value).toBe('Naruto');

  });
  /* TEST 1 -Linea8. establecer el sujeto de pruebas, es AddCategory,hay una property que hay que obligaqr si no cuando se ejecute hará un error entonces
          en el AddCategory.jsx se va a establecer como requerido (is required) y se realiza la importacion de los prop-types
  
          se renderiza el componente de @testinglibrary..,se importa, y se rendetiza el (<AddCategory/>)
  
          1- se crea el sujeto de pruebas, de cual se extrae el imput el cual tiene relacion directa con el === const input = screen.getByRole ('textbox');
          2- se dispara el evento === fireEvent.input(input, {target: {value: 'Naruto'} });
          3- se hace la acesrvcion de lo uqe se espera despues del evento === expect(input.value).toBe('Naruto');
     */

  test('debe llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Naruto';
    const onNewCategory = jest.fn(); //mock: es una simulacion en testing, unsa simulacion de la fn
    

    render(< AddCategory onNewCategory={ onNewCategory} />);

    const input = screen.getByRole ('textbox');  // referencia al input
    const form = screen.getByRole ('form');  // referencia al formulario

    //disparar los eventos, cambiar el valor de la caja de texto

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });



    test('no debe llamar el onNewCategory si el imput esta vacio', () => { 

      const onNewCategory = jest.fn(); //mock: es una simulacion en testing, usa simulacion de la fn
      render(< AddCategory onNewCategory={ onNewCategory} />);

      const form = screen.getByRole ('form');
      fireEvent.submit(form);

      expect(onNewCategory).toHaveBeenCalledTimes(0);

     })

});




