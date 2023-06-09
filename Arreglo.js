function insertarElemento(arr, elemento, posicion) {
    if (posicion < 0 || posicion > arr.length) {
      console.log('La posición ingresada está fuera de rango.');
      return arr;
    }
  
    arr.splice(posicion, 0, elemento);
    return arr;
  }