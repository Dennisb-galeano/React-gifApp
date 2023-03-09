import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en hook useFetchGifs', () => { 

  test('esta prueba debe regresar el estado inicial', () => { 

    const { result } = renderHook( () => useFetchGifs('Naruto') );
    const {images , isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy ();
   });  



 /*el estado inicial del hook es que las imagenes sean un arreglos vacio y 
 que el isloading este en true ,, sujeto de pruebas usefetch.. 
 
 los hooks solo pueden ser lalmados dentro de el cuerpo de un componente
 - importar de testing library - renderHook
 - dentro del render hook, se manda a llamar el useFetchGifs. dentro de una Funcion
*/



   test('Debe de retornar un arreglo de imagenes y isloading en false', async() => { 

    const {result } = renderHook ( () => useFetchGifs ('Naruto') );

    await waitFor(   //espera a que la condicion se cumpla ,osea a uqe el expext sea mayor que 0
      () => expect( result.current.images.length). toBeGreaterThan(0) 
    );
    const{images,isLoading} = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

    });

 });


 //evaluamos el comportamiento del hook basado en el return o en las acciones uqe vayan a tener