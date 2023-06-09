function intentarAccederPropiedades(objeto) {
    for (let propiedad in objeto) {
      const valor = objeto[propiedad];
      console.log(`Intentando acceder a la propiedad ${propiedad}:`);
  
      if (valor !== undefined) {
        console.log(`Acceso exitoso. El valor de la propiedad ${propiedad} es ${valor}.`);
      } else {
        console.log(`No se pudo acceder a la propiedad ${propiedad}.`);
      }
    }
  }