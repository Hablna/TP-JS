import {Match} from "./match.js";

export class PlateForm{
    constructor(nom) {
        if (!nom || typeof nom !== 'string'){
            throw new Error("Le nom de la plateforme doit être une chaîne de caractères valide.");
        }
        this.nom = nom;
        this.matchs = []
    }

    chargerMatchs(matchsACharger){
        if (!Array.isArray(matchsACharger)){
            throw new Error("Le paramètre doit être un tableau de matchs.");
        }

        matchsACharger.forEach((objet) => {
            const match = new Match(objet.id, objet.jeu, objet.competition, objet.equipeA, objet.equipeB, objet.probabiliteA, objet.statut)
            this.matchs.push(match)
        });
    }
    afficherCalendrier(){
        if (this.matchs.length === 0) {
            console.warn("Aucun match à afficher.");
            return;
        }

        this.matchs.forEach((match) => {
            console.log(`[${match.competition}] ${match.equipeA} vs. ${match.equipeB} - Jeu: ${match.jeu}`);
        });
    }

    getMatchParJeu(jeu){
        //filtre à partir du début de la chaine de caractère du jeu
        return this.matchs.filter(match => match.jeu.toLocaleLowerCase().startsWith(jeu.toLocaleLowerCase()))
    }

    getMatchRisques() { //les matchs où probabiliteA est comprise entre 0.45 et 0.55
        return this.matchs.filter(match => match.probabiliteA >= 0.45 && match.probabiliteA <= 0.55);
    }
    getMatchById(id){
        return this.matchs.find(match => match.id ===id);
    }
}
