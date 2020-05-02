'use strict'
 

/* Ejercicio 3
Given a linked list, remove all consecutive nodes that sum to zero. Print out the remaining nodes.
For example, suppose you are given the input 3 -> 4 -> -7 -> 5 -> -6 -> 6. 
In this case, you should first remove 3 -> 4 -> -7, then -6 -> 6, leaving only 5.
*/

// Declaro una función exerciseExample que se mandará a llamar en la carpeta rutas
function exerciseExample(req,res){
    // recibo los parámetros del backend mediante  body en este caso se están enviando por postman 
    const params = req.body; 
    var numbers = params.numbers; // recogo el valor del imput que viene por postman en este caso es numbers
    const nodos=new Array(); // declaro un arreglo vacío
    // Cada que se agrege un número al input nunbers se agrega dentro del array nodos  con el metódo push
    nodos.push(parseInt(numbers)); 
    //const nodos =[3,4,-7,5,6,-6,4,4,-5];  // Ejemplo de valores inyectados directamente en el backend
    var sum=0; // declaro un variable que va a sumar todos los elementos cuando se recorra el arreglo
    
    /*  nodos contiene la colección de números almacenados en el arreglo para eliminar  
        los consecutivos ,se recorre la lista con el metodo foreach*/
    nodos.forEach((element)=>{ 
        /*  cada va entrando si encuentra un número negativo  suma los valores positivos con el negativo
            en este caso si los dos números son iguales los iguala a 0 */
        sum+=element;
        /*  Si elemento es menor a 0 en este caso los números  negativos entonces suma los valores que positivos
            igualandolos a 0 */
        if(element < 0){
            // Si los valores son 0 que no los muestre y me regrese solo los valores que no tiene con quien sumar 
            if(sum!=0){ 
              sum;
            }    
        }   
    });
    // Cuando termina todo el proceso regresa solo los nodos restantes  ejemplo [3,4,-7,5,6,-6,4,4,-5];  = 8
    return res.status(200).send({nodo_restante :sum}); 
    next(); // La función next corta el proceso de la función  
}   

module.exports = {
    exerciseExample
};