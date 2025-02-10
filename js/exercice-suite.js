/* ------------------------------------------------------------------- */
/* Alors Archibald 🧙‍♂️, voici le programme qui va te rendre riche 👍 : */
/* ------------------------------------------------------------------- */

/* ---------- */
/* ADVENTURER */
/* ---------- */

let adventurerMoney = 100;
let adventurerInventory = [{
  name: "potion d'endurance",
  price: 20,
  stock: 3
}];

/* ------ */
/* WIZARD */
/* ------ */

let wizardMoney = 0;
let wizardInventory = [
  {
    name: "potion de soin",
    price: 40,
    stock: 15
  }, {
    name: "potion d'endurance",
    price: 20,
    stock: 12
  }, {
    name: "potion de mana",
    price: 10,
    stock: 25
  }
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

const showInfos = () => {
  console.log("");
  console.log("Argent de l'aventurier : ", adventurerMoney);
  console.log("Potions de l'aventurier : ");
  showPotionInventoryInStock(adventurerInventory.sort((a, b) => b.stock - a.stock));

  console.log("Argent du magicien : ", wizardMoney);
  console.log("Potions du magicien : ");
  showPotionInventoryInStock(wizardInventory.sort((a, b) => b.stock - a.stock));
};

console.log("Bonjour monsieur l'aventurier 😀");

const playTheGame = () => {

  console.log("1. Acheter une potion");
  console.log("2. Vendre une potion");
  console.log("3. Quitter");


  let playerChoice = parseInt(prompt("Que veux tu faire ? (1, 2 ou 3)"));

  while (isNaN(playerChoice || (playerChoice !== 1 && playerChoice !== 2 && playerChoice !== 3))) {
    playerChoice = parseInt(prompt("Que veux tu faire ? (1, 2 ou 3)"));
  }

  switch (playerChoice) {
    case 1:
      showInfos();

      /* BUY A POTION */
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
          /* ON VERIFIE QUE L'AVENTURIER A ASSEZ D'ARGENT POUR TOUT ACHETER */
          const potionPrice = wizardInventory.find(potion => potion.name === potionNameToBuy).price;
          const totalPrice = potionPrice * numberToBuy;

          if (adventurerMoney >= totalPrice) {
            /* ON DIMINUE LE STOCK DU MAGICIEN */
            const potionIndex = wizardInventory.findIndex(potion => potion.name === potionNameToBuy);
            wizardInventory[potionIndex].stock -= numberToBuy;

            /* AJOUT DE LA POTION DANS L'INVENTAIRE DE L'AVENTURIER */
            const adventurerPotionIndex = adventurerInventory.findIndex(potion => potion.name === potionNameToBuy);
            if (adventurerPotionIndex !== -1) {
              /* LA POTION EXISTE DEJA DANS L'INVENTAIRE DE L'AVENTURIER */
              adventurerInventory[adventurerPotionIndex].stock += numberToBuy;
            } else {
              /* AJOUT DE LA POTION DANS L'INVENTAIRE DE L'AVENTURIER */
              adventurerInventory.push({ ...wizardInventory[potionIndex], stock: numberToBuy });
            }

            /* PAIEMENT */
            adventurerMoney -= totalPrice;
            wizardMoney += totalPrice;

            console.log(`Merci pour ton achat !`);
            console.log(`Il te reste : ${adventurerMoney} €`);
          } else {
            console.log("Tu n'as pas assez d'argent !");
          }
        }
      }
      break;
    case 2:
      /* SELL A POTION */
      /* ON VERIFIE QUE L'AVENTURIER A DES POTIONS DANS SON INVENTAIRE */
      if (adventurerInventory.length > 0) {
        showInfos();
        const potionNameToSell = prompt("Quelle potion veux tu vendre ?").toLowerCase().trim();

        /* ON VERIFIE QUE LA POTION EXISTE ET QUE LA QUANTITE EN STOCK EST SUFFISANTE */
        if (!potionExist(potionNameToSell, adventurerInventory) || getPotionStock(potionNameToSell, adventurerInventory) <= 0) {
          console.log("Potion non disponible");
        } else {
          /* ON DEMANDE A L'AVENTURIER UN CHIFFRE ENTRE 1 ET 5 */

          const adventurerNumber = parseInt(prompt("Si tu veux vendre une potion, choisi un chiffre entre 1 et 5 !"));
          const randomNumber = Math.floor(Math.random() * 5) + 1;

          if (adventurerNumber === randomNumber) {
            const potionIndex = adventurerInventory.findIndex(potion => potion.name === potionNameToSell);
            const potionToSell = adventurerInventory[potionIndex];
            const potionPrice = potionToSell.price;
            const potionStock = potionToSell.stock;
            const totalPrice = potionStock * potionPrice;

            /* ON VERIFIE QUE LE MAGICIEN A ASSEZ D'ARGENT POUR ACHETER */
            if (totalPrice > wizardMoney) {
              console.log("Désolé monsieur l'aventurier mais je n'ai pas assez d'argent pour acheter vos potions");
            } else {
              /* ON DIMINUE LE STOCK DE L'AVENTURIER */
              adventurerInventory[potionIndex].stock = 0;

              /* AJOUT DE LA POTION DANS L'INVENTAIRE DU MAGICIEN */
              const wizardPotionIndex = wizardInventory.findIndex(potion => potion.name === potionNameToSell);
              if (wizardPotionIndex !== -1) {
                wizardInventory[wizardPotionIndex].stock += potionStock;
              } else {
                wizardInventory.push({ name: potionToSell.name, price: potionToSell.price, stock: potionStock });
              }

              /* PAIEMENT */
              adventurerMoney += totalPrice;
              wizardMoney -= totalPrice;
            }
          } else {
            console.log("Pas de chance pour vous monsieur l'aventurier ... ");
          }

        }
      } else {
        console.log("Vous n'avez pas de potions à vendre monsieur l'aventurier 🤡");
      }

      break;
    case 3:
    default:
      /* QUIT */
      console.log("Oupsi, je crois que cette étape n'existe plus 😬");
      break;
  }
};


do {
  playTheGame();
} while (adventurerMoney > 0);

console.log("");
console.log("Tu es ruiné monsieur l'aventurier 💸");
console.log("THE END !");