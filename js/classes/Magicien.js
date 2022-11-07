import { Personnage } from "./Personage.js";
export class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, "Magicien", 170, 90);
    }
    attaquer(ennemi) {
        ennemi.sante -= this.attaque;
        console.log(
            `${this.pseudo} attaque ${ennemi.pseudo} en lançant un sort de ${this.attaque} dégats.`
        );
        this.verifierSante(ennemi);
        this.evoluer();
    }

    coupSpecial(ennemi) {
        ennemi.sante -= this.attaque * 5;
        this.evoluer();
        console.log(
            `${
                this.pseudo
            } attaque avec son coup spécial Puissance des Arcannes ${
                ennemi.pseudo
            }  ${this.attaque * 5} dégats.`
        );

        this.verifierSante(ennemi);
    }
}
