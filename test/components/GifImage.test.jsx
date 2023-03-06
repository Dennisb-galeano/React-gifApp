import { render, screen } from "@testing-library/react";
import { GifImage } from "../../src/components/GifImage";



describe('Pruebas en <GifImage />', () => { 
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitana.jpg';


  test('debe de hacer match con el snapshot ', () => { 

    const { container} =render (<GifImage title={title} url={url}/>);
    expect(container).toMatchSnapshot();
   }); 


   test('debe mostrar la imagen con el URL y el ALT )indicado', () => { 

    render (<GifImage title={title} url={url}/>);
    // screen.debug();   //si no sabemos lo que se esta renderizando o haciendo y queremos ver el comonente. el screen se importa, se llama el metodo debug, y en las pruebas nos muestra el sujeto de pruebas
    const{src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt); // texto alternativo

    });



    test('debe mostrar el titulo en el componente', () => {   
      render (<GifImage title={title} url={url}/>);  //sujeto de pruebas
      expect(screen.getByText (title)).toBeTruthy(); // espero que en el screen.getbytexs va a buscar uqe el titulo exista (con el tobe trutly)

     });



});


//voy a esperrar que el screen.getByRole (va a buscar ) y de ahy voy a buscar la propiedad..



/* 1- test
   2. sujeto de prueba
   3. expect: lo que esperamos
*/ 