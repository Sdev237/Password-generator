import { prompt } from "./prompt.js";

let nbrCaracteres = 0;
let caractereSpeciaux;
let incluChiffres;
let incluMajuscules;

function question() {
  while (nbrCaracteres < 8 || nbrCaracteres > 36 || isNaN(nbrCaracteres)) {
    nbrCaracteres = Number(prompt("Combien de caractères ? (8-36) "));
  }

  do {
    caractereSpeciaux = prompt("Caractères spéciaux ? (y/n) ");
    if (caractereSpeciaux !== "y" && caractereSpeciaux !== "n") {
      console.log("Veuillez répondre avec 'y' pour Oui ou 'n' pour Non.");
    }
  } while (caractereSpeciaux !== "y" && caractereSpeciaux !== "n");

  do {
    incluChiffres = prompt("Chiffres ? (y/n) ");
    if (incluChiffres !== "y" && incluChiffres !== "n") {
      console.log("Veuillez répondre avec 'y' pour Oui ou 'n' pour Non.");
    }
  } while (incluChiffres !== "y" && incluChiffres !== "n");

  do {
    incluMajuscules = prompt("Majuscules ? (y/n) ");
    if (incluMajuscules !== "y" && incluMajuscules !== "n") {
      console.log("Veuillez répondre avec 'y' pour Oui ou 'n' pour Non.");
    }
  } while (incluMajuscules !== "y" && incluMajuscules !== "n");
}

// Liste de caractères possibles
const caracteresPossibles = "!@#$%^&*()-_=+";

// Fonction pour générer un caractère aléatoire
const caractereAleatoire = () => {
  const indiceAleatoire = Math.floor(
    Math.random() * caracteresPossibles.length
  );
  return caracteresPossibles.charAt(indiceAleatoire);
};

const lettreAleatoire = () => {
  // Générer un indice aléatoire pour les lettres de 'a' à 'z'
  let indice = Math.floor(Math.random() * 26);
  // Convertir l'indice en caractère ASCII correspondant à une lettre de 'a' à 'z'
  let lettre = String.fromCharCode("a".charCodeAt(0) + indice);
  return lettre;
};

const chiffreAleatoire = () => {
  const chiffre = Math.floor(Math.random() * 1000) + 1;
  return chiffre;
};

function generateurMotPasse() {
  question();
  let password = "";
  let caractere;

  for (let i = 0; i < nbrCaracteres; i++) {
    // Générer une lettre aléatoire
    caractere = lettreAleatoire();

    // Ajouter une majuscule si la condition est remplie
    if (
      (incluMajuscules === "y" ||
        incluMajuscules === "Y" ||
        incluMajuscules === "yes") &&
      password.length < nbrCaracteres
    ) {
      password += lettreAleatoire().toUpperCase();
    }

    // Ajouter un caractère spécial si la condition est remplie
    if (
      (caractereSpeciaux === "y" ||
        caractereSpeciaux === "Y" ||
        caractereSpeciaux === "yes") &&
      password.length < nbrCaracteres
    ) {
      password += caractereAleatoire();
    }

    // Ajouter un chiffre si la condition est remplie
    if (
      (incluChiffres === "y" ||
        incluChiffres === "Y" ||
        incluChiffres === "yes") &&
      password.length < nbrCaracteres
    ) {
      password += chiffreAleatoire();
    }

    // Ajouter le caractère généré au mot de passe si la longueur n'a pas dépassé la limite
    if (password.length < nbrCaracteres) {
      password += caractere;
    }
  }

  // Tronquer le mot de passe à la longueur spécifiée
  password = password.slice(0, nbrCaracteres);

  return password;
}

console.log(generateurMotPasse());
