const apprenants = require("./Data");

function normaliserNom(nom) {
  let a = nom.trim();
  return a;
}
function validerResultat(realises, proposes) {
  if (realises < 0 || proposes < 0) {
    return false;
  } else if (realises > proposes) {
    return false;
  }
  return true;
}
//==============================================/
function ajouterApprenant(nom, ville) {
  let apprenant = {
    id: apprenants.length + 1,
    nomComplet: normaliserNom(nom),
    ville: ville,
    resultats: [],
  };
  apprenants.push(apprenant);
  return apprenant;
}

// //************************************* */
function enregistrerResultat(
  id,
  jour,
  exercicesPropose,
  exerciceTermine,
  challengeTermine,
) {
  let apprenant = apprenants.find(function (apprenant) {
    return apprenant.id === id;
  });

  if (apprenant === undefined) {
    return false;
  }

  let resultat = apprenant.resultats.find(function (resultat) {
    return resultat.jour === jour;
  });

  if (resultat !== undefined) {
    resultat.exercicesTermines = exerciceTermine;
    resultat.totalExercices = exercicesPropose;
    resultat.challengeTermine = challengeTermine;

    return true;
  } else {
    apprenant.resultats.push({
      jour: jour,
      exercicesTermines: exerciceTermine,
      totalExercices: exercicesPropose,
      challengeTermine: challengeTermine,
    });

    return true;
  }
}

// //************************************* */