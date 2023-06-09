function determinarGanador(jugador1, jugador2) {
    switch (jugador1) {
      case 'R':
        switch (jugador2) {
          case 'R':
            return 'Empate: Ambos jugadores eligieron roca.';
          case 'P':
            return 'Papel cubre roca. Gana el jugador 2.';
          case 'T':
            return 'Roca rompe tijeras. Gana el jugador 1.';
        }
        break;
      case 'P':
        switch (jugador2) {
          case 'R':
            return 'Papel cubre roca. Gana el jugador 1.';
          case 'P':
            return 'Empate: Ambos jugadores eligieron papel.';
          case 'T':
            return 'Tijeras cortan papel. Gana el jugador 2.';
        }
        break;
      case 'T':
        switch (jugador2) {
          case 'R':
            return 'Roca rompe tijeras. Gana el jugador 2.';
          case 'P':
            return 'Tijeras cortan papel. Gana el jugador 1.';
          case 'T':
            return 'Empate: Ambos jugadores eligieron tijeras.';
        }
        break;
      default:
        return 'Opción inválida. Los jugadores deben elegir R, P o T.';
    }
  }