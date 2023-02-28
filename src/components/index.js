
/* este archivo, es una archivo de barril donde se van a almacenar las importaciones que 
estan dentro de la carpeta components
- cuando hagamos una referencia a la carpetade componentes y no ponemos un / xxx
  va a buscar por defecto el index
*/

export * from './AddCategory';
export * from './GifGrid';
export * from './GifImage';



/* en el archivo donde estan las IMPORTAOCIONES podemos "llamarlas" cuando ya se encuentran 
  en el doc index, y eso se logra unicamente dejando al final la carpeta donde se encuentra.. ej
  import { AddCategory, GifGrid } from "./components/AddCategory";
  import { GifGrid } from "./components/GifGrid";


  si solo hacemos referencia a la carpeta, va a buscar por defecto en INDEX.
  - si tenemos un index, basta con uqe apunten a la carpeta y por defecto va a ver el index
  import { AddCategory, GifGrid } from "./components"
  queda asi

  de esta forma es mas facil imoprta y exportar los archivos 

*/