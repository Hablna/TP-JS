import {Match} from "./match.js";

export class PlateForm{
    constructor(nom) {
        this.nom = nom;
        this.matchs = []
    }

    chargerMatchs(matchsACharger){
        matchsACharger.forEach((objet) => {
            const match = new Match(objet.id, objet.jeu, objet.competition, objet.equipeA, objet.equipeB, objet.probabiliteA, objet.statut)
            this.matchs.push(match)
        });
    }
    afficherCalendrier(){
        this.matchs.forEach((match) => {
            console.log(`[${match.competition}] ${match.equipeA} vs. ${match.equipeB} - Jeu: ${match.jeu}`);
        });
    }

    getMatchParJeu(jeu){
        //filtre à partir du début de la chaine de caractère du jeu
        return this.matchs.filter(match => match.jeu.toLocaleLowerCase().startsWith(jeu.toLocaleLowerCase()))
    }

}
