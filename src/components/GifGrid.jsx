
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifImage } from "./GifImage";


// grid se usa para hacer una cuadricula, se va a realizar la peticion HTTP
//la funcion que realiza la peticion esta en helpers getGifs

export const GifGrid = ({ category }) => {

  const {images, isLoading } = useFetchGifs (category); // custom hook nuevo, le vamos a mandar la categoria
//  console.log({ isLoading});

  
  return ( 
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2> cargando...</h2> )

      }

      <div className="card-grid"> 

        
        {/* usando images.map....*/}
          {
            images.map( (image ) => (

              <GifImage  // el nuevo componente para mostrar las img, el key es el id que es unico 
                 key={image.id}
                 {...image} 
                  // usando el operador spread, aca me sirve para esparcir la imagenes "o las propertyes"
                  //esto para uqe el gifImage reciba cada una de las propiedades que tiene la imagen como propertyes
                  // se usa cuando hay ej..100 propiedades en el ojbjeto ,, facilemnte con el mismo cod. se puede esparcir. el componente tambien puede tener acc 
                 
              />  
            ))
          }
        

      </div>

    </>

  )
}



/*react cada vez que detecta un cambio en el componente lo vuelde a jejecutar para redibujarlo
useEfect :hay funciones que pueden manterner el estado o dicerle a REACT que no vuelva a ejecutar

1.	   va una función con el código que queremos ejecutar. En este caso el getgif.
2.	Va entre llaves cuadradas [ definiendo el arreglo de las dependencias  ], si dejo el arreglo vacio. Significa que el HOOK solo se va a disparar la primera vez que se crea y construye el componente 
*/
