
// rafc para crear componente rapido con el snippet



export const GifImage = ({ title, url, iFd }) => {  //solo necesito que me traiga el titulo y la url


  return (
    //la imagen es un elemento uqe se autocierr. y 
    //el source SRC, va a ser igual a la url y el texto altenativo alt {va a ser = al title}


    <div className="card" >
      <img src={url} alt={title} />
      <p> {title}</p>
    </div>
  )
}



// para que no queden las palabras consecutivas el comp, debe recibir la imagen completa  o las propiedades