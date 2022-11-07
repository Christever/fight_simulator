import { Personnage } from "./Personage.js";
export class Guerier extends Personnage {
    constructor(pseudo) {
        super(pseudo, "Guerrier", 350, 50);
    }
    attaquer(ennemi) {
        ennemi.sante -= this.attaque;
        console.log(
            `${this.pseudo} attaque ${ennemi.pseudo} avec son épée ${this.attaque} dégats.`
        );
        this.verifierSante(ennemi);
        this.evoluer();
    }

    coupSpecial(ennemi) {
        ennemi.sante -= this.attaque * 5;
        this.evoluer();
        console.log(
            `${this.pseudo} attaque avec son coup spécial Double Hache${
                ennemi.pseudo
            }  ${this.attaque * 5} dégats.`
        );
    }
}
