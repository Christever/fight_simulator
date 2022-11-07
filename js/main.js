import { Guerier } from "./classes/Guerrier.js";
import { Magicien } from "./classes/Magicien.js";
const perso1 = new Magicien("Merlin");
const perso2 = new Guerier("Conan");

console.log(perso1.info);
console.log(perso2.info);

perso1.attaquer(perso2);
console.log(perso2.info);

perso2.attaquer(perso1);
console.log(perso1.info);

perso1.coupSpecial(perso2);
