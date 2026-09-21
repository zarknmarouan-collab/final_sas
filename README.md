
# SAS Progress Console

Application JavaScript en console permettant de gérer des apprenants fictifs, leurs résultats journaliers et leur progression.

Ce projet est réalisé dans le cadre du **projet final de synthèse du SAS JavaScript**. Il rassemble les principales notions étudiées pendant les sept journées du SAS dans une seule application Node.js.

---

## 🎯 Objectif du projet

L'objectif est de créer une application simple permettant à un formateur de suivre la progression d'un groupe d'apprenants à partir de leurs résultats journaliers.

L'application permet de :

- afficher la liste des apprenants ;
- ajouter un apprenant ;
- consulter un apprenant par identifiant ;
- rechercher un apprenant par nom ;
- ajouter ou modifier un résultat journalier ;
- calculer automatiquement la progression ;
- déterminer le niveau de progression ;
- filtrer les apprenants par niveau ;
- trier les apprenants par progression ;
- trier les apprenants par ordre alphabétique ;
- afficher un tableau de bord global.

Les données utilisées dans le projet sont fictives.

---

## 🧠 Notions JavaScript utilisées

Le projet permet de mettre en pratique les notions étudiées pendant les sept journées du SAS :

- variables et types de données ;
- opérateurs ;
- conditions `if / else` ;
- boucles `for`, `for...of` et `do...while` ;
- `switch` ;
- fonctions ;
- chaînes de caractères ;
- tableaux ;
- objets ;
- recherche ;
- filtrage ;
- tri ;
- calculs ;
- validation des données.

### Méthodes JavaScript utilisées

Quelques méthodes utilisées dans le projet :

```text
trim()
toLowerCase()
includes()
find()
filter()
push()
slice()
sort()
localeCompare()
````

---

## 📁 Structure du projet

```text
Projet_finale/
│
├── README.md
└── src/
    ├── Data.js
    ├── fonctions.js
    └── index.js
```
Description des fichiers:
 data.js : contient les données des apprenants.
 progression.js : contient les fonctions principales de l'application.
 index.js : contient le menu et l'interaction avec l'utilisateur.
 scenarios.js : contient les scénarios de test.
 README.md : présente et explique le projet.

### `src/Data.js`

Contient les données fictives des apprenants et leurs résultats journaliers.

Exemple :

```js
{
    id: 1,
    nomComplet: "Sara Dev",
    ville: "Nador",
    resultats: [
        {
            jour: 1,
            exercicesTermines: 18,
            totalExercices: 20,
            challengeTermine: true
        }
    ]
}
```

### `src/fonctions.js`

Contient les fonctions responsables de la logique de l'application :

* ajout d'un apprenant ;
* enregistrement d'un résultat ;
* modification d'un résultat ;
* recherche ;
* calcul de progression ;
* filtrage ;
* tri ;
* affichage.

### `src/index.js`

Contient :

* le menu principal ;
* le sous-menu de tri ;
* les saisies utilisateur ;
* la validation des entrées ;
* l'appel des fonctions ;
* l'affichage des résultats dans la console.

---

## 👨‍🎓 Gestion des apprenants

### Ajouter un apprenant

L'utilisateur doit saisir :

* le nom complet ;
* la ville.

Le nom est nettoyé avant d'être enregistré.

Un identifiant est attribué automatiquement au nouvel apprenant.

### Consulter un apprenant

L'utilisateur peut consulter un apprenant à partir de son identifiant.

### Rechercher un apprenant

La recherche permet d'utiliser :

* le nom complet ;
* une partie du nom ;
* différentes écritures en majuscules ou minuscules.

Exemple :

```text
Recherche : sara
```

peut retrouver :

```text
Sara Dev
```

---

## 📝 Gestion des résultats

Pour enregistrer un résultat journalier, l'utilisateur saisit :

* l'identifiant de l'apprenant ;
* le numéro de la journée ;
* le nombre d'exercices proposés ;
* le nombre d'exercices terminés ;
* si le challenge est terminé ou non.

### Validation des journées

Le numéro de la journée doit être compris entre :

```text
1 et 7
```

### Validation des exercices

Le nombre d'exercices proposés doit être un entier positif ou égal à zéro.

Le nombre d'exercices terminés doit respecter :

```text
0 ≤ exercices terminés ≤ exercices proposés
```

### Challenge

La réponse doit être :

```text
oui
```

ou :

```text
non
```

---

## 🔄 Ajouter ou modifier un résultat

Lorsqu'un résultat est enregistré pour une journée qui n'existe pas encore, il est ajouté.

Si un résultat existe déjà pour cette journée, il est modifié.

Cela permet d'éviter d'avoir plusieurs résultats pour la même journée.

Exemple :

```text
Jour 3 → résultat existant
```

Un nouvel enregistrement pour le jour 3 remplacera les anciennes valeurs au lieu de créer un deuxième résultat.

---

## 📊 Calcul de la progression

La progression est calculée automatiquement à partir des résultats enregistrés.

### Formule

```text
Progression =
(total des exercices terminés / total des exercices proposés) × 100
```

Exemple :

```text
32 exercices terminés
40 exercices proposés

32 / 40 × 100 = 80 %
```

La progression est arrondie à l'entier le plus proche.

### Cas particulier

Lorsque le nombre total d'exercices proposés est égal à `0`, aucune division n'est effectuée.

La progression est alors :

```text
0 %
```

---

## 🏷️ Niveau de progression

Le programme attribue un niveau en fonction du pourcentage calculé.

| Progression   | Niveau         |
| ------------- | -------------- |
| 80 % ou plus  | Solide         |
| 50 % à 79 %   | En progression |
| Moins de 50 % | À renforcer    |

Ces niveaux représentent uniquement les résultats enregistrés dans le projet.

---

## 🎯 Challenges et journées manquantes

Le programme distingue deux situations.

### Journée manquante

Une journée est considérée comme manquante lorsqu'aucun résultat n'a été enregistré pour cette journée.

Exemple :

```text
Jour 5 → aucun résultat
```

### Challenge non terminé

La journée possède un résultat mais le challenge n'a pas été terminé.

Exemple :

```js
challengeTermine: false
```

Le programme affiche donc séparément :

* les journées non renseignées ;
* les challenges non terminés.

---

## 🔎 Recherche

L'application permet de rechercher un apprenant :

### Par identifiant

Exemple :

```text
ID : 3
```

### Par nom

La recherche accepte une partie du nom et ne tient pas compte des majuscules et minuscules.

La recherche utilise notamment :

```js
toLowerCase()
includes()
```

---

## 🔍 Filtrage par niveau

Les apprenants peuvent être filtrés selon leur niveau de progression.

Les niveaux disponibles sont :

```text
Solide
En progression
À renforcer
```

Le programme vérifie également que le niveau saisi correspond à l'un des niveaux disponibles avant de continuer.

---

## ↕️ Tri des apprenants

Le programme propose deux types de tri.

### Tri par progression décroissante

Les apprenants sont classés selon leur pourcentage de progression, du plus élevé au plus faible.

La méthode utilisée est :

```js
sort()
```

avec une comparaison basée sur la progression calculée.

### Tri alphabétique

Les apprenants sont classés selon leur nom.

Le programme utilise :

```js
localeCompare()
```

pour comparer les noms.

Une copie du tableau est utilisée avec :

```js
slice()
```

afin de ne pas modifier directement le tableau original.

---

## 📋 Tableau de bord

Le tableau de bord affiche les principales informations concernant le groupe.

Il présente :

* le nombre total d'apprenants ;
* la progression de chaque apprenant ;
* la progression moyenne du groupe ;
* le nombre d'apprenants `Solide` ;
* le nombre d'apprenants `En progression` ;
* le nombre d'apprenants `À renforcer` ;
* le classement par progression ;
* les journées manquantes ;
* les challenges non terminés.

### Progression moyenne du groupe

La moyenne est calculée à partir des progressions individuelles :

```text
Somme des progressions individuelles
/
Nombre total d'apprenants
```

Les résultats affichés sont calculés directement à partir des données enregistrées.

---

## 🖥️ Menu principal

L'application utilise un menu principal avec `do...while` et `switch`.

```text
====== MENU PRINCIPAL ======

1. Afficher le tableau de bord
2. Afficher la liste des apprenants
3. Ajouter un apprenant
4. Consulter un apprenant par identifiant
5. Rechercher un apprenant par nom
6. Ajouter ou modifier un résultat
7. Filtrer les apprenants par niveau
8. Trier les apprenants
0. Quitter
```

### Sous-menu de tri

L'option `8` affiche :

```text
========== SOUS-MENU TRI ==========

1. Trier par progression décroissante
2. Trier par ordre alphabétique
0. Retour au menu principal
```

---

## ✅ Validation des entrées

Les saisies utilisateur sont vérifiées avant leur utilisation.

Lorsqu'une valeur est incorrecte, le programme affiche un message d'erreur et redemande la valeur.

Les validations concernent notamment :

* les choix du menu ;
* les identifiants ;
* les noms ;
* les villes ;
* les numéros de journée ;
* le nombre d'exercices proposés ;
* le nombre d'exercices terminés ;
* le choix `oui/non` pour les challenges ;
* le niveau de progression.

L'objectif est de ne pas enregistrer de données incorrectes.

---

## 🧪 Tests et vérifications

Les fonctionnalités du projet ont été **testées manuellement pendant le développement** directement dans la console.

Aucun fichier de tests automatisés n'a été utilisé.

### Scénario 1 — Ajouter un apprenant valide

Vérification que :

* l'apprenant est ajouté correctement ;
* un identifiant lui est attribué ;
* l'apprenant peut être retrouvé par son identifiant.

### Scénario 2 — Modifier une journée

Un résultat est enregistré pour une journée.

Le même jour est ensuite enregistré une deuxième fois avec de nouvelles valeurs.

Vérification que le résultat est mis à jour et qu'il n'y a pas de doublon pour la même journée.

### Scénario 3 — Calculer et rechercher un apprenant

Vérification du calcul de progression.

Une recherche partielle avec une casse différente est également effectuée afin de vérifier que la recherche ne dépend pas des majuscules et minuscules.

### Scénario 4 — Identifiant invalide

Vérification que le programme refuse :

* un identifiant incorrect ;
* un identifiant inexistant.

Le programme affiche un message d'erreur et redemande une valeur valide.

### Scénario 5 — Résultat incohérent

Vérification que le programme refuse :

* une journée inférieure à `1` ;
* une journée supérieure à `7` ;
* un nombre d'exercices négatif ;
* un nombre d'exercices terminés supérieur au nombre d'exercices proposés.

### Scénario 6 — Cas limite : aucun exercice proposé

Vérification qu'une journée avec :

```text
0 exercice proposé
```

ne provoque pas de division par zéro.

La progression obtenue est :

```text
0 %
```

---

## ⚠️ Gestion des cas limites

Le programme prend en compte plusieurs situations particulières :

* saisie vide ;
* identifiant invalide ;
* apprenant inexistant ;
* journée hors de `1 à 7` ;
* nombre d'exercices négatif ;
* exercices terminés supérieurs aux exercices proposés ;
* aucun exercice proposé ;
* résultat déjà enregistré pour une journée ;
* journée non renseignée ;
* challenge non terminé.

---

## 📦 Installation

Le projet utilise **Node.js**.

Après avoir récupéré le projet, installer les dépendances :

```bash
npm install
```

La bibliothèque utilisée pour les saisies dans la console est :

```text
prompt-sync
```

Si nécessaire :

```bash
npm install prompt-sync
```

---

## ▶️ Lancer le projet

Depuis le dossier du projet :

```bash
node src/index.js
```

Le menu principal s'affiche ensuite dans la console.

---

## 🛠️ Technologies utilisées

* JavaScript
* Node.js
* prompt-sync
* Git
* GitHub

Le projet est une application exécutée dans la console.

---

## 📚 Objectif pédagogique

Ce projet permet de réunir dans une seule application les principales notions JavaScript étudiées pendant les sept journées du SAS.

L'objectif est de produire un code :

* compréhensible ;
* organisé ;
* fonctionnel ;
* testable ;
* maintenable ;
* et suffisamment maîtrisé pour pouvoir expliquer son fonctionnement.

---

## 👤 Auteur

**Marouan**

Projet réalisé dans le cadre du :

**SAS JavaScript — Projet final de synthèse**

---

## 📌 Conclusion

**SAS Progress Console** est une application JavaScript en console permettant de gérer des apprenants fictifs, leurs résultats journaliers et leur progression.

Le projet met en pratique les notions de variables, conditions, boucles, fonctions, chaînes de caractères, tableaux, objets, recherche et tri, tout en proposant un tableau de bord permettant de suivre les résultats enregistrés.

```
