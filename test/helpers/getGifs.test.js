import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('pruebas en getGifs', () => {
  test('debe retornar un arreglo de gifs', async() => {

    const gifs = await getGifs('One Punch');
    //  console.log(gifs)

    expect( gifs.length ).toBeGreaterThan(0); //el arreglo tiene + de un elemento
    expect( gifs [0] ).toEqual ({
      id: expect.any (String),
      title: expect.any (String),
      url: expect.any( String),

    });

  });

});


/* La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction. una "promesa"
    Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y espera la 
    resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.
*/