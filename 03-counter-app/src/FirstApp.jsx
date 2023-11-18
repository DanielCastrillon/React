const nombre = 'Daniel Castrillon!';
const objeto = {
  name: 'Daniel Castrillon',
  cargo: 'Desarrollador web',
  eficiencia: 100
};

const sumar = (n1, n2) => {
  return n1+n2;
}

export const FirstApp = () => {

  return (
    <>
      <div>{objeto.name} - Desarrollador</div>
      <p>Hola soy desarrollador web</p>
      <p>{objeto.cargo}</p>
      <p> ´Hola estring desde apostrofe con variable ${objeto.eficiencia}´</p>
      <p>La suma es {sumar(2,5)}</p>  
    </>
  )
}
