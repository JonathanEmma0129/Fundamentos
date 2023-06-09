function resolverEcuacionSegundoGrado(a, b, c) {
    const discriminante = b ** 2 - 4 * a * c;
  
    if (discriminante > 0) {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      return { x1, x2 };
    } else if (discriminante === 0) {
      const x = -b / (2 * a);
      return { x };
    } else {
      return 'No existen soluciones reales';
    }
  }