//CUSTOM HOOK EN REACT
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  //HOOK USE STATE
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true)

  //FUNCION PARA TRAER IMAGENES
  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsloading(false)
  }
 
  //EVITA DISPARAR EVENTOS SECUNDARIOS
  useEffect(() => {
    getImages();

  }, [ ])
  
  return {
    images,
    isLoading
  }
}

export default useFetchGifs