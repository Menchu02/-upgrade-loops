// **Iteración #4: Probando For...in**

// Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg',
}

for (var x in alien) {
  console.log(`La clave es ${x} y el valor es ${alien[x]}`)
}
