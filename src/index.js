const prompt = require("prompt-sync")();
const apprenants = require("./Data");

const {
  ajouterApprenant,
  enregistrerResultat,
  rechercherApprenant,
  calculerProgression,
  afficherApprenants,
  afficherTableauDeBord,
  trierAlphabetique,
  filtrerParNiveau,
  trierParProgression,
} = require("./fonctions");
let choix;

do {
console.log("\n====== MENU PRINCIPAL ======");

  console.log("1. Afficher le tableau de bord");
  console.log("2. Afficher la liste des apprenants");
  console.log("3. Ajouter un apprenant");
  console.log("4. Consulter un apprenant par identifiant");
  console.log("5. Rechercher un apprenant par nom");
  console.log("6. Ajouter ou modifier un résultat");
  console.log("7. Filtrer les apprenants par niveau");
  console.log("8. Trier les apprenants");
  console.log("0. Quitter");

  choix = prompt("Votre choix : ").trim();

  switch (choix) {

     case "0":
      console.log("Au revoir !");
      break;
      case "1":
      afficherTableauDeBord(apprenants);
      break;
      case "2":
      afficherApprenants(apprenants);
      break;
       case "3":
      let nom;

      do {
        nom = prompt("Entrer le nom : ").trim();

        if (nom === "") {
          console.log("Erreur : le nom ne peut pas être vide.");
        }
      } while (nom === "");

      let ville;

      do {
        ville = prompt("Entrer la ville : ").trim();

        if (ville === "") {
          console.log("Erreur : la ville ne peut pas être vide.");
        }
      } while (ville === "");

      let nouvelApprenant = ajouterApprenant(nom, ville);
      console.log(`Identifiant : ${nouvelApprenant.id}`);

      console.log("Apprenant ajouté avec succès !");
      break;
case "4":
      let idConsultation;

      do {
        idConsultation = Number(prompt("Entrer l'identifiant : "));

        if (!Number.isInteger(idConsultation) || idConsultation <= 0) {
          console.log("Erreur : veuillez entrer un identifiant valide.");
        }
      } while (!Number.isInteger(idConsultation) || idConsultation <= 0);

      let resultatID = rechercherApprenant(idConsultation);

      if (resultatID.length === 0) {
        console.log("Aucun apprenant trouvé avec cet identifiant.");
      } else {
        for (let apprenant of resultatID) {
          console.log("\n===== APPRENANT TROUVÉ =====");
          console.log(`ID : ${apprenant.id}`);
          console.log(`Nom : ${apprenant.nomComplet}`);
          console.log(`Ville : ${apprenant.ville}`);
        }
      }

      break;
 case "5":
      let nomRecherche;

      do {
        nomRecherche = prompt("Entrer le nom : ").trim();

        if (nomRecherche === "") {
          console.log("Erreur : le nom ne peut pas être vide.");
        }
      } while (nomRecherche === "");

      let resultatNom = rechercherApprenant(nomRecherche);

      if (resultatNom.length === 0) {
        console.log("Aucun apprenant trouvé avec ce nom.");
      } else {
        for (let apprenant of resultatNom) {
          console.log("\n===== APPRENANT TROUVÉ =====");
          console.log(`ID : ${apprenant.id}`);
          console.log(`Nom : ${apprenant.nomComplet}`);
          console.log(`Ville : ${apprenant.ville}`);
        }
      }

      break;


  default:
      console.log("Choix invalide !");
  }

} while (choix !== "0");