const formatVal = (val)=>{
    if(val>=10){
        return val;
    }else{
        return "0"+val;
    }
}

function countdown(targetDate) {
  // Obtenir la date actuelle
  const now = new Date().getTime();

  // Calculer la différence entre la date cible et la date actuelle
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    // La date cible est déjà passée
    return "Le compte à rebours est terminé.";
  }

  // Calculer les jours, heures, minutes et secondes restants
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Créer une chaîne de compte à rebours formatée
  const countdownString = `${days} Jours : ${hours} Heures : ${minutes} Minutes : ${seconds} Secondes`;
  document.querySelector("#days").textContent = formatVal(days);
  document.querySelector("#hours").textContent = formatVal(hours);
  document.querySelector("#minutes").textContent = formatVal(minutes);
  document.querySelector("#seconds").textContent = formatVal(seconds);
  return countdownString;
}

// Date cible (remplacez ceci par la date que vous souhaitez)

const jourJ = document.querySelector("body").getAttribute("jour");

console.log("jour", jourJ);
const targetDate = new Date(jourJ).getTime();

// Appel de la fonction countdown avec la date cible et affichage du résultat
const countdownResult = countdown(targetDate);
console.log(countdownResult);

setInterval(() => {
  countdown(targetDate);
}, 1000);
