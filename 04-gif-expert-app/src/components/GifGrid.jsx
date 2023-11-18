import { GifItem } from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';


//FUNCIONAL COMPONENT
export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);
  //console.log({ isLoading});


  return (  
    <>
        <h3>{category}</h3>
        
        {
          //AND LOGICO
          isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
          {
            images.map((image) => (
              <GifItem
                  key={ image.id }
                  //ASI SE ESPARCEN LAS PROPIEDADESEN TODOS LOS COMOPENENTES URL, TITLE, ID
                  {...image}
                 
              />
            ))
          }
        </div>
    
    </>
  )
}
