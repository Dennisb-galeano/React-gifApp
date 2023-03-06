
// rafc para crear componente rapido con el snippet

import propTypes from 'prop-types'


export const GifImage = ({ title, url, iFd }) => {  //solo necesito que me traiga el titulo y la url

  return (
    <div className="card" >
      <img src={url} alt={title} />
      <p> {title}</p>
    </div>
  )
}
    //la imagen es un elemento uqe se autocierr. y 
    //el source SRC, va a ser igual a la url y el texto altenativo alt {va a ser = al title}

    GifImage.propTypes ={
      title: propTypes.string.isRequired,
      url: propTypes.string.isRequired

    }



// para que no queden las palabras consecutivas el comp, debe recibir la imagen completa  o las propiedades