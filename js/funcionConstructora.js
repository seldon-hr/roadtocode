function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }

  var carros = [];
  var serie = prompt ("Numero de autos:");

  for(var i = 0; i <= serie; i++){
       var marca = ("Marca " +(i+1));
       var modelo = ("Modelo " + (i+1));
       var annio = (annio+1);
       carros.push(new auto(marca, modelo, annio));
  }

  function show(serie) {
    console.log(`Auto, ${serie}`);
}

  for (var serie of carros){
        show(serie);
    }


