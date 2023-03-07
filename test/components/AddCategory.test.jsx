import { fireEvent, render,screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 

  test('Debe de cambiar el valor de la caja de texto', () => { 

    render(< AddCategory onNewCategory={ () => {}  }/>); // semanda una funcion vacia para uqe pase
    const input = screen.getByRole ('textbox');

    fireEvent.input(input, {target: {value: 'Naruto'} });

    expect(input.value).toBe('Naruto');


   });

 });




  /* Linea8. establecer el sujeto de pruebas, es AddCategory,hay una property que hay que obligaqr si no cuando se ejecute hará un error entonces
        en el AddCategory.jsx se va a establecer como requerido (is required) y se realiza la importacion de los prop-types

        se renderiza el componente de @testinglibrary..,se importa, y se rendetiza el (<AddCategory/>)

        1- se crea el sujeto de pruebas, de cual se extrae el imput el cual tiene relacion directa con el === const input = screen.getByRole ('textbox');
        2- se dispara el evento === fireEvent.input(input, {target: {value: 'Naruto'} });
        3- se hace la acesrvcion de lo uqe se espera despues del evento === expect(input.value).toBe('Naruto');
   */   