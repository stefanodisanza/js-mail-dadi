const emails = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com"];
    
    function checkEmail() {
      const email = prompt("Inserisci la tua email:");
      if (emails.includes(email)) {
        alert("Email trovata nella lista");
      } else {
        alert("Email non trovata nella lista");
      }
    }


