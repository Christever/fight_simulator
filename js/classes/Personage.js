export class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }
    evoluer() {
        this.niveau++;
        console.log(`${this.pseudo} passe au niveau ${this.niveau}`);
    }
    verifierSante(perso) {
        if (perso.sante <= 0) {
            perso.sante = 0;
            console.log(`${perso.pseudo} a perdu !`);
        }
    }

    get info() {
        return `${this.pseudo}[${this.classe}] a ${this.sante} points de vie`;
    }
}
