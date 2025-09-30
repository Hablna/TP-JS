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

    getMatchRisques() { //moins de 60% de chance pour le favori
        return this.matchs.filter(match => {
            const probaFavori = Math.max(match.probabiliteA, 1 - match.probabiliteA);
            return probaFavori < 0.6;
        });
    }
    getMatchById(id){
        return this.matchs.find(match => match.id ===id);
    }
}
