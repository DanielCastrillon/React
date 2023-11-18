//FUNCION NORMAL
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ma5moJ942HSbJwjhITkrGCf4bxJaEECE&q=${category}&limit=10`;
    const resp = await fetch(url)
    //DESESTRUCTURAR DATOS
    const {data} = await resp.json();
  
    //CREAR OBJETO PARA MOSTRAR
    const gifs = data.map(img => ({
      id:img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
  
    //console.log(gifs);
    return gifs;
  }