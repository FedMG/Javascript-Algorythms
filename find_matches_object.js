const whatIsInAName = (collection, source) => {
  const arr = [];

  let newKeys = Object.keys(source);
  let newValues = Object.values(source);
  let ternary = 0;
  //console.log(ternary, 'ternary');
  //console.log(newKeys.length);



  console.log(newKeys, newValues);
  // console.log(collection[0].hasOwnProperty(newKeys)); */
  // console.log(collection[1][newKeys[0]]);


  for (let i in collection) {
    for (let x in collection[i]) {

      console.log(ternary, 'ternary');
      if (collection[i][x] == newValues[ternary] && x == newKeys[ternary]) {
        console.log(x, 'x');
        arr.push(collection[i],);
      }
      ternary += (newKeys.length > 1) ? 1 : 0;
    }
  }
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }));

// ----------------------------------------


function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let newProps, newObj;
  let newKeys = Object.keys(source);
  let newValues = Object.values(source);


  for (let x in newKeys) {
    for (let y in collection) {
      newObj = collection[y]; // selecciona un objecto
      // newProps = newObj
      console.log("x", x, "==", y, "y?");
      console.log(newKeys, newObj);
      console.log(newObj.hasOwnProperty(newKeys[x]));

      if (newObj.hasOwnProperty(newKeys[x])) {

      } /* else if () {
  
        }*/

    }
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/*
  Desarrollar una función que reciba un array con objetos
  y un objeto con {"key": "values"}.
  La función debe retorna un array con objetos, con
  aquellos objetos que coincidan con las claves del objeto
  pasado ¿y valores? ------> corroborar
 
 
  Necesitamos un iterador o dos.
  Necesitamos comparar cada "key" o no, cada valor,
  porque al "llamar" a la clave nos devuelve el valor.
  ¿Se puede comparar las claves? ¿cómo? -----> corroborar}
 
** (1) Primer paso---------------------------------------
 
  Un iterador se mueve entre elementos del array.
 
  arr[x] ------> array e indice
 
  [{},{},{}]
   0  1  2
   -
   -
   ----> {key: value}
 
** (2) Segundo paso-------------------------------------
 
   Otro iterador se mueve entre las claves del objeto.
 
   ----> {key: value}  ----> PUEDE HABER una o más claves
 
   PROBLEMA ------> Cómo accedo a la clave dinamicamente
                    si la tengo que escribir de forma
                    estática.
   RESUELTO ------> con "Object.keys();"
 
 
   ...Entonces, con otro iterador accedemos a la clave
   mediante, un nuevo array que los contiene a
   partir de "Object.keys()"
 
   Esta sentencia debe estar dentro de un condicional.
 
   let arrayKeys = Object.keys(arr[x])
 
   arrayKeys ----> recibe las claves del objeto como
                   strings en un nuevo array.
 
   ["key1", "key2"]
 
   accedemos a este array mediante el segundo iterador
   arrKeys[y]
 
    También accedemos de la misma forma a los valores
    con Object.values()
 
** (3) Tercer paso ------------------------------------
 
   Al acceder a las keys del objeto dado a comparar,
   comparamos las "keys":valores"
   con cada "keys":"values" 
 
 
   * Posible usos con: reduce, map, forEach, for.
   
 
   
   * PROBLEMA
 
   [{},{},{}] ---> collection
    -
    0
 
   {} ----------> elemento collection
    -
    0 
 
   ["", "", "", ...] -----> elemento collection
    
    0, 1
 
    iter --> source --> y ---> "prop"
    iter --> collec --> x ---> "{"","","",...}"
    PPC <--- PS0C
    PP0S == PPC[y] --> 0
            PPC[y] --> 1
            collec[y] --- cambia PPC
            PPC[x] ---> puede ser: PPC.len != PP0S.len
            variable que incremente, No, porque si
            cambia el valor de y cambia el objeto,
            entones da igual porque no se va iterar por
            completo el objeto.
            Con otro bucle o con "hasOwnProperty()"?
            guardamos la propiedad y en este punto:
 
    iter --> source --> y ---> "prop"
    iter --> collec --> x ---> "{"","","",...}"  ---> acá
    {"","",""} ---> utilizamos "prop" con "hasOwn..."
 
 
   {"":""} -----> source
   ["", "", "", ...] -----> source
    0, 1
*/



/**
 * 

  let auxArr
  let newKeys = Object.keys(source);
  let newValues = Object.values(source);
  let count = 0;
Object.keys(collection[1]).indexOf(Object.keys(source)[1])


 // map.filter.reduce
  // el objeto devuelto debe contener las propiedades pedidas.
  // agregar propiedades coincidentes en un nuevo objeto.
  // condicion que detecte si todas las propiedades coinciden en un ciclo del bucle.

// dos tipos de iteraciones:
// iterar 1 propiedad de source con todos las propiedades de 1 obj del array, luego
// iterar la siguiente propiedad de source con todas las propiedades del mismo obj del
// array. Si coinciden, break tal ciclo y comienza con el siguiente.

// iterar todas las propiedades de source con cada propiedad 1/1 de 1 obj del array.

console.log(collection.length,':length', 'position:', x,'have:',Object.keys(collection[x]).length, 'need:', Object.keys(source).length);

continue;

// pasar collection a valores de array, utilizar metodos de arrays sobre el. indexof...

  // console.log(collection[0].hasOwnProperty(newKeys));
  // console.log(collection[1][newKeys[0]]);
 newKeys[newKeys.length - 1] == x

CONDICIONES

1* Si coincide con 2 o más, la mitad o la mayoría de las propiedades del objeto, se guarda.
2* No es necesario que coincidencias sean totales para guardar el objeto.
 * 
 */