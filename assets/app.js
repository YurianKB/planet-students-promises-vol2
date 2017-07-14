var url = "data/earth-like-results.json";
var planetas = [];

function getJSON(url) {
  return new Promise(function(resolve, reject) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url)
    ajax.send()
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4) {
        var response = JASON.parse(ajax.responseText)
        resolve(response)
      }
    }
  })
}

//aquí se debe hacer un  for para que recorra todo el objeto de los planetas
getJSON(url).then(function(respuesta){
  for ( var i = 0; i < respuesta.results.lenght ; i++) {
    planetas.push(getJSON(respuesta.results[i]));
    planetas[i].then(function(planeta){
      console.log(planeta);
      obtenerDatos(planeta)
    });
}
});

//función para haver tarjeta
var obtenerDatos = function (planeta){
 var nombre = planeta.pl_name;
 var telescope = planeta.pl_telescope;
 var masa = planeta.pl_masse;
 var fecha = planeta.pl_disc;
 crearTarjeta(nombre, telescope, masa, fecha);

 var crearTarjeta = function (nombre, telescope, masa, fecha){

 }


//.then(function(mensaje){return getJSON(mensaje.results[0])})
//.then(function(resultado){(console.log(resultado)})
