/* ----------------------- */
/* Définition de variables */
/* ----------------------- */

const wizzardName = "Gandalf le Gris";
const shopName = "L’Herboristerie de Fondcombe";
const currency = "€";
const stockOfHealingPotions = 57;
const priceOfHealingPotion = 3;
const isShopOpen = true;
const potionString = (numberOfPotions) => {
  return `potion${numberOfPotions > 1 ? "s" : ""}`;
};

/* ---------------------- */
/* Affichage conditionnel */
/* ---------------------- */

if (isShopOpen) {
  console.log(`Bienvenue dans la boutique \"${shopName}\" Aventurier ! 🎉`);
} else {
  console.log(`La boutique \"${shopName}\" est fermée, revenez plus tard Aventurier ! 😴`);
}

/* ---------------------------------- */
/* Affichage conditionnel avec switch */
/* ---------------------------------- */

console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔");
console.log("1. Le nom de la boutique");
console.log("2. Le nom du Sorcier");
console.log("3. Le prix d'une potion de soin");
console.log("4. La quantité des potions de soin");

/* TODO VOIR POUR REDEMANDER LE CHOIX SI LA VALEUR N'EST PAS BONNE */

const playerChoice = prompt("Dis moi ton choix ? (1, 2, 3 ou 4)");
const playerChoiceInt = parseInt(playerChoice);
switch (playerChoiceInt) {
  case 1:
    console.log(`La boutique s'appelle : \"${shopName}\"`);
    break;
  case 2:
    console.log(`Le sorcier s'appelle : ${wizzardName}`);
    break;
  case 3:
    console.log(`Le prix d'une potion de soin est de ${priceOfHealingPotion} ${currency}`);
    break;
  case 4:
    console.log(`Il y a en stock ${stockOfHealingPotions} ${potionString(stockOfHealingPotions)} de soin`);
    break;
  default:
    console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
    break;
}

/* --------------------------------------------- */
/* Calcul du prix total d'une commande de potion */
/* --------------------------------------------- */

const quantityOfPotions = prompt("Quelle quantité de potions veux-tu ?");
const quantityOfPotionsInt = parseInt(quantityOfPotions);
const totalPrice = quantityOfPotionsInt * priceOfHealingPotion;

console.log(`Prix de ${quantityOfPotionsInt} ${potionString(quantityOfPotionsInt)} de soins : ${totalPrice} ${currency} mon cher Aventurier. 💸`);

/* ------------------------- */
/* Bourse de l'Aventurier 💰 */
/* ------------------------- */

const userMoney = 10;

/* TODO FAIRE TERNAIRE POUR AFFICHER "les potions" ou "la potion" */
if (userMoney >= totalPrice) {
  console.log("Vous avez assez d'argent pour acheter les potions");
} else {
  console.log("Vous n'avez pas assez d'argent pour acheter les potions");
}

if (quantityOfPotionsInt <= stockOfHealingPotions) {
  console.log("Il y a assez de potions en stock ! :)");
} else {
  console.log("Il n'y a pas assez de potions en stock..");

}

/* ----------------- */
/* Liste des potions */
/* ----------------- */

const listOfPotions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

console.log("Les différentes potions : ", listOfPotions);

/* --------------------- */
/* Affichage des potions */
/* --------------------- */

console.log("La première potion est : ", listOfPotions[0]);
console.log("La dernière potion est : ", listOfPotions[listOfPotions.length - 1]);

for (let i = 0; i < listOfPotions.length; i++) {
  console.log(`Nous avons de la ${listOfPotions[i]} !`);

}

/* --------------------------- */
/* Ajout d'une nouvelle potion */
/* --------------------------- */

const newPotion = "Potion de visibilité";
listOfPotions.push(newPotion);
console.log("Les différentes potions : ", listOfPotions);

/* ------------- */
/* Finaly, nope. */
/* ------------- */
listOfPotions.pop();
console.log("Les différentes potions : ", listOfPotions);

/* ------------------------------------------------------------ */
/* Rangeons les informations de la potion de soin dans un objet */
/* ------------------------------------------------------------ */

const healingPotion = {
  name: "Potion de soin",
  price: priceOfHealingPotion,
  stock: stockOfHealingPotions
};

console.log(`Informations sur la ${healingPotion.name} : `, healingPotion);

/* --------------------------------------- */
/* Affichons les informations de la potion */
/* --------------------------------------- */

console.log(`Nom de la potion : ${healingPotion.name}`);
console.log(`Stock de la potion : ${healingPotion['price']}`);

/* -------------------------------------- */
/* C'est l'heure de faire l'inventaire... */
/* -------------------------------------- */

const manaPotion = {
  name: "Potion de mana",
  price: 5,
  stock: 12
};

const endurancePotion = {
  name: "Potion d'endurance",
  price: 7,
  stock: 2
};

const inventory = [
  healingPotion, manaPotion, endurancePotion
];

/* ------------------------------------------ */
/* Aventurier, regarde tout ce que je vends ! */
/* ------------------------------------------ */

for (let i = 0; i < inventory.length; i++) {
  const name = inventory[i].name;
  const price = inventory[i].price;
  const stock = inventory[i].stock;

  console.log(`Nom : ${name}`);
  console.log(`Prix : ${price}`);
  console.log(`Stock : ${stock}`);
  console.log("");
}

for (let i = 0; i < inventory.length; i++) {
  for (const [key, value] of Object.entries(inventory[i])) {
    let label;
    switch (key) {
      case "name":
        label = "Nom";
        break;
      case "price":
        label = "Prix";
        break;
      case "stock":
        label = "Stock";
        break;
      default:
        label = "Key";
        break;
    }
    console.log(`${label} : ${value}`);
  }
  console.log("");
}