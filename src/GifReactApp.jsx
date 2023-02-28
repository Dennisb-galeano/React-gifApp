
import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //estan en el index "barril"


export const GifReactApp = () => {

  const [categories, setCategories] = useState(['naruto']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) { // validacion de nombrs duplicados: si, newcat.la categoria existe en el arreglo .includes return(no haga nada )
      return;  //  si, newcat.la categoria existe en el arreglo .includes return(no haga nada ), si no, incluir

    }

    setCategories([newCategory, ...categories])


  }

  return (
    <>
      {/* TITULO  */}
      <h1>GifReactApp</h1>


      {/* INPUT  */}
      <AddCategory  /* mi comp va a emitir el evento que va a tener el valor  */
        onNewCategory={(value) => onAddCategory(value)}  /* onNewCat.. es una propiedad de mi comp*/
      />



      {/* LISTADO DE GIF  */}

      {/*<button onClick={onAddCategory} type="button" className="btn btn-primary">AGREGAR</button> {/* boton con boostrap */}

      <ol>                         {/* este es un order least, crea la lista */}
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category} 
              
            />                /* lo que quiero mostrar es la categoria que esta aho, po reso la coloco en el segundo {xxx } */
          ))
        }

      </ol>
      {/* - el .map me permite barrer cada uno de los elementos del arr y regresar algo nuevo 
        - el key={ } es Obligatorio usarlo cuando e usa el .map para evitar WARNING  
        - el warning sale por que no se puede insermar mas de un elemento con el mimsmo nombre  
        - ON quere decir que se esta emitiendo algo, y uqe es un evento */}
    </>


  )
}
