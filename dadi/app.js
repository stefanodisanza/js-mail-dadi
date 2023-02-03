function rollDice() {
      const player = Math.floor(Math.random() * 6) + 1;
      const computer = Math.floor(Math.random() * 6) + 1;
      if (player > computer) {
        alert(`Hai vinto! Il tuo punteggio è ${player} e il punteggio del computer è ${computer}.`);
      } else if (player < computer) {
        alert(`Hai perso! Il tuo punteggio è ${player} e il punteggio del computer è ${computer}.`);
      } else {
        alert(`Pareggio! Entrambi i punteggi sono ${player}.`);
      }
    }