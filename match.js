export  class Match {
    constructor(id, jeu, competition, equipeA, equipeB, probabiliteA, statut) {
        this.id = id;
        this.jeu = jeu;
        this.competition = competition;
        this.equipeA = equipeA;
        this.equipeB = equipeB;
        this.probabiliteA = probabiliteA;
        this.statut = statut;
    }

    getFavori(){
        if (this.probabiliteA > .5){
            return this.equipeA
        }else{
            return this.equipeB
        }
    }
}