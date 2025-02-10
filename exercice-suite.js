/* ------------------------------------------------------------------- */
/* Alors Archibald 🧙‍♂️, voici le programme qui va te rendre riche 👍 : */
/* ------------------------------------------------------------------- */

/* ---------- */
/* ADVENTURER */
/* ---------- */

let adventurerMoney = 100;
let adventurerInventory = [];

/* ------ */
/* WIZARD */
/* ------ */

let wizardMoney = 0;

let healingPotion = {
  name: "potion de soin",
  price: 40,
  stock: 1
};

let endurancePotion = {
  name: "potion d'endurance",
  price: 20,
  stock: 0 // 1
};

let manaPotion = {
  name: "potion de mana",
  price: 10,
  stock: 2
};

let wizardInventory = [
  healingPotion, endurancePotion, manaPotion
];

const showPotionInventoryInStock = (listOfPotions) => {
  for (let i = 0; i < listOfPotions.length; i++) {
    if (listOfPotions[i].stock > 0) {
      const name = listOfPotions[i].name;
      const price = listOfPotions[i].price;
      const stock = listOfPotions[i].stock;

      console.log(`Nom : ${name} - `, `Prix : ${price} - `, `Stock : ${stock}`);
      console.log("");
    }
  }
};

const getPotionStock = (potionName, listOfPotions) => {
  for (let i = 0; i < listOfPotions.length; i++) {
    if (listOfPotions[i].name === potionName.toLowerCase()) {
      return listOfPotions[i].stock;
    }
  }
};

const potionExist = (potionName, listOfPotions) => {
  return listOfPotions.some(item => item.name === potionName);
};

console.log("Bonjour monsieur l'aventurier 😀");
console.log("1. Acheter une potion");
console.log("2. Vendre une potion");
console.log("3. Quitter");

const playerChoice = parseInt(prompt("Que veux tu faire ? (1, 2 ou 3)"));

switch (playerChoice) {
  case 1:
    /* BUY A POTION */
    console.log("Inventaire avant achat : ");
    showPotionInventoryInStock(wizardInventory.sort((a, b) => b.stock - a.stock));
    const potionNameToBuy = prompt("Quelle potion veux tu acheter ?").toLowerCase().trim();

    /* ON VERIFIE QUE LA POTION EXISTE ET QUE LA QUANTITE EN STOCK EST SUFFISANTE */
    if (!potionExist(potionNameToBuy, wizardInventory) || getPotionStock(potionNameToBuy, wizardInventory) <= 0) {
      console.log("Potion non disponible");
    } else {
      const numberToBuy = parseInt(prompt("Quelle quantité souhaites-tu ?"));

      /* ON VERIFIE QUE LA QUANTITE DEMANDEE N'EST PAS SUPERIEURE A NOTRE STOCK */
      if (numberToBuy > getPotionStock(potionNameToBuy, wizardInventory)) {
        console.log("Désolé monsieur l'aventurier, je n'ai pas assez de stock pour cette potion... 😥");
      } else {
        /* ON VERIFIE QUE L'AVENTURIER A ASSEZ D'ARGENT */
        const potionPrice = wizardInventory.find((potion => potion.name === potionNameToBuy).price);
        const totalPrice = potionPrice * numberToBuy;

        if (adventurerMoney > totalPrice) {
          /* TODO JE SUIS LA */
          /* ajout de la potion dans le stock de l'aventurier */

          /* retrait de la potion dans le stock du magicien */
          console.log("Inventaire APRES achat : ");
          showPotionInventoryInStock(wizardInventory.sort((a, b) => b.stock - a.stock));
        } else {
          console.log("Vous n'avez plus d'argent !");
        }
      }
    }





    break;
  case 2:
    /* SELL A POTION */

    break;
  case 3:
    /* QUIT */

    break;

  /* TODO MODIFIER LE DEFAUT */
  default:
    console.log("Defaut du switch");
    break;
}

