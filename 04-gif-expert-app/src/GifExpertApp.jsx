import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    if (categories.includes( newCategory )) return;
    setCategories([ newCategory, ...categories]);
  }



  return (
    <>
      {/* TITULO */}
        <h1>Buscador de GIFs</h1>
    
      {/* INPUT */}
      <AddCategory 
        //setCategories={setCategories}
        onNewCategory={(value)=> onAddCategory(value) }
      />

      {
        categories.length == 1 && (<h2>Escribe algo que quieras buscar...</h2>)
      }

      {
        categories.map((category) => 
          (
            <GifGrid 
              key={category} 
              category={category}/>
          )
        )
      }
    </>
  )
}
