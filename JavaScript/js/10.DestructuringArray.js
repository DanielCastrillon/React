const tecnologias = ["HTML",20,30,true, "react","Angular"]

const [var1, var2, var3, var4] = tecnologias;

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);


const cliente = {
    nombre: 'Daniel',
    tipo: 'Premium'
}
const [ , , , , var5] = tecnologias;

const {tipo} = cliente;
console.log(tipo);
console.log(var5);