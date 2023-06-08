function esPalindromo(frase) {
    frase = frase.toLowerCase().replace(/\s/g, '');
  
    for (let i = 0; i < frase.length / 2; i++) {
      if (frase[i] !== frase[frase.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  function obtenerLetraInicial(frase) {
    return frase[0];
  }
  
  function obtenerLetraMitad(frase) {
    const mitad = Math.floor(frase.length / 2);
    return frase.length % 2 === 0 ? frase[mitad - 1] + frase[mitad] : frase[mitad];
  }