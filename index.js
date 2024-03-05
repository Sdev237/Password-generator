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

const caracteresPossibles = "!@#$%^&*()-_=+";

const caractereAleatoire = () => {
  const indiceAleatoire = Math.floor(
    Math.random() * caracteresPossibles.length
  );
  return caracteresPossibles.charAt(indiceAleatoire);
};

const lettreAleatoire = () => {
  let indice = Math.floor(Math.random() * 26);

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
    caractere = lettreAleatoire();

    if (
      (incluMajuscules === "y" ||
        incluMajuscules === "Y" ||
        incluMajuscules === "yes") &&
      password.length < nbrCaracteres
    ) {
      password += lettreAleatoire().toUpperCase();
    }

    if (
      (caractereSpeciaux === "y" ||
        caractereSpeciaux === "Y" ||
        caractereSpeciaux === "yes") &&
      password.length < nbrCaracteres
    ) {
      password += caractereAleatoire();
    }

    if (
      (incluChiffres === "y" ||
        incluChiffres === "Y" ||
        incluChiffres === "yes") &&
      password.length < nbrCaracteres
    ) {
      password += chiffreAleatoire();
    }

    if (password.length < nbrCaracteres) {
      password += caractere;
    }
  }

  password = password.slice(0, nbrCaracteres);

  return password;
}

console.log(generateurMotPasse());
