
// este es un custom hook, custom hook nuevo, le vamos a mandar la categoria
// un hook no es mas uqe ina funcio que regresa algo, en este caso regresa un objeto en el cual estan las imagenes y el isLoading

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);// para establecer las imagenes debo llamar setimages 
  const [isLoading, setisLoading] = useState(true);


  const getImages = async () => {
    const newImages = await getGifs(category);  //instruccion que manda hacer la peticion del http
    setImages(newImages);
    setisLoading(false);
  }

  useEffect(() => {
    getImages();
  }, []
  )


  return {
    images,  // cuando hay una propiedad apunta al mismo nombre de una variable con ese nombre se puede dejar asi o tambien en este caso se dejaría images: images,
    isLoading

  }
}


//linea 11, cuando cargamoas las imagenes esas caen el el useState, y estas imagenes
//          son las que se van a mandar en el return
//el isloading es un state : para uqe la primera vaz cargue en true, despues se llama en false
//solo  renderiza una vez gracias al react18
