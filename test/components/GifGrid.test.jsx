import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import {  useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( '../../src/hooks/useFetchGifs' );


describe('Pruebas en < GifGrid />', () => { 

  const category = 'One Punch';

  test('Esta prueba debe mostrar el loading inicialmente', () => { 
      
    useFetchGifs.mockReturnValue ({
      images: [],
      isLoading: true

    });

    render (<GifGrid category={ category}/>);
    // screen.debug();
    expect(screen.getByText('cargando...'));
    expect(screen.getByText (category ) );

   });



 /* ('Pruebas en < GifGrid />' : el GiGrid  trabaja basado en un customHook, no se va a probar el hook suponiendo que este funcionacomo se  espera. no es responsabilidad del Gifgrid que el useEfectgifs funcione
 Las pryebas se estan evaluando individualmente
 1- const se llama category y va a ser igual a 'one punch'
 2- sujeto de pruebas: se crea el render, se importa y renderizamos nuestro componente (<GifGrid/>);
    -  nuestro componente necesita la categoria, y hay uqe establecerle los proptypes en GitGrid.jsx 
      - se crea el GifGrid.propTypes ={
                     category: PropTypes.string.isRequired, y se importa desde prpo-types
 3- se manda la categoria que se definió
 4- se llama el screen.debug para poder ver en las pruebas que sucede
 5- las ascerciones serpian, que en el expect espero que en el screen.getByText tenga el 'cargando' y uqe tenga la categoria}
        CON ESTAS SE EVALUA EL ESTADO INICIAL 
 */

        //HACER UN MOCK O IMPLEMENTACION COMPLETA
        
  test('esta prueba debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
    
    const gifs = [  //arreglo de gifs
      {
        id: 'ABC',
        title: 'Naruto',
        url: 'https://localhost/naruto.jpg '

      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg '

      },

    ]
    useFetchGifs.mockReturnValue ({
      images: gifs,
      isLoading: false

    });
    
    render (<GifGrid category={ category}/>);

   
    expect(screen.getAllByRole('img').length).toBe(2);  //estoy buscanso las dos onag
     screen.debug();
   });

});

// screen:

    