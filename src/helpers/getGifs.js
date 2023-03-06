

 //se sacó la funcion del componente, y se llamala fn mandando la cat pra uqe funcione igual
  //SE CONSIDERA BUENA PRACTICA, por uqe el comp no va a volver a asignar espacon en memoria
  //funcionpara traer la informacion del api, cin un arreglo qeu nos va a devolver x cantidad de imagenes q regresa el api
  
  
  export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=V3yEYdrDyqOvqKXCggfp7x9sxSX0u0Du&q=${category}&limit=10`
    const resp = await fetch(url); // peticion http
    const { data } = await resp.json();

    //para extraer informacion puntual del api
    const gifs = data.map( img => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url
        
    }));

    return gifs;
  }
