/**
 * code optimisé
 *
 **/

import { prompt } from "./prompt.js";

let nbrCaracteres = 0;
let caractereSpeciaux;
let incluChiffres;
let incluMajuscules;

function question() {
  while (nbrCaracteres < 8 || nbrCaracteres > 36 || isNaN(nbrCaracteres)) {
    nbrCaracteres = Number(prompt("Combien de caractères ? (8-36) "));
  }

  promptCaracteresSpeciaux();
  promptChiffres();
  promptMajuscules();
}

function promptCaracteresSpeciaux() {
  do {
    caractereSpeciaux = prompt("Caractères spéciaux ? (y/n) ");
    if (caractereSpeciaux !== "y" && caractereSpeciaux !== "n") {
      console.log("Veuillez répondre avec 'y' pour Oui ou 'n' pour Non.");
    }
  } while (caractereSpeciaux !== "y" && caractereSpeciaux !== "n");
}

function promptChiffres() {
  do {
    incluChiffres = prompt("Chiffres ? (y/n) ");
    if (incluChiffres !== "y" && incluChiffres !== "n") {
      console.log("Veuillez répondre avec 'y' pour Oui ou 'n' pour Non.");
    }
  } while (incluChiffres !== "y" && incluChiffres !== "n");
}

function promptMajuscules() {
  do {
    incluMajuscules = prompt("Majuscules ? (y/n) ");
    if (incluMajuscules !== "y" && incluMajuscules !== "n") {
      console.log("Veuillez répondre avec 'y' pour Oui ou 'n' pour Non.");
    }
  } while (incluMajuscules !== "y" && incluMajuscules !== "n");
}

const caracteresPossibles = "!@#$%^&*()-_=+";

const caractereAleatoire = () => {
  const indiceAleatoire = Math.floor(
    Math.random() * caracteresPossibles.length
  );
  return caracteresPossibles.charAt(indiceAleatoire);
};

const lettreAleatoire = () => {
  const indice = Math.floor(Math.random() * 26);
  return String.fromCharCode("a".charCodeAt(0) + indice);
};

const chiffreAleatoire = () => Math.floor(Math.random() * 1000) + 1;

function generateurMotPasse() {
  question();
  let password = "";

  for (let i = 0; i < nbrCaracteres; i++) {
    if (incluMajuscules === "y" && i < nbrCaracteres) {
      password += lettreAleatoire().toUpperCase();
    }

    if (caractereSpeciaux === "y" && i < nbrCaracteres) {
      password += caractereAleatoire();
    }

    if (incluChiffres === "y" && i < nbrCaracteres) {
      password += chiffreAleatoire();
    }

    if (password.length < nbrCaracteres) {
      password += lettreAleatoire();
    }
  }

  password = password.slice(0, nbrCaracteres);
  return password;
}

console.log(generateurMotPasse());
