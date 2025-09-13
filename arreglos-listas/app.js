const resultado = document.getElementById("txtresultado"); 
 function mensaje(texto){
    console.log(texto);
    alert(texto);
    const resultado = document.getElementById("txtresultado");
    resultado.textContent = texto;
 }
    
 function agregar(palabras){
    resultado.textContent = palabra;

 }
  function buscar(palabras){
    
 }
  function eliminar(palabras){
    
 }
  function modificar(palabras){
    
 }
 const btnagregar =document.getElementById("btnagregar");

 const btnbuscar =document.getElementById("btnbuscar");

 const btneliminar =document.getElementById("btneliminar");

 const btnmodificacion =document.getElementById("btnmodificar");
 
 btnagregar.addeventlistener("click", agregar("klk"));
 
 btnbuscar.addeventlistener("click", buscar("klk"));
 
 btneliminar.addeventlistener("click", eliminar("klk"));
 
 btnmodificacion.addeventlistener("click",modificar("klk"));
 