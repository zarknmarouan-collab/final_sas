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