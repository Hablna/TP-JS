//sur mon package.json j'ai mis "type": "module" pour pouvoir utiliser les imports et exports

import {PlateForm} from './plateForm.js';
const calendrierMatchs = [
    {
        id: 'LFL_KC_SLY',
        jeu: 'League of Legends',
        competition: 'LFL',
        equipeA: 'Karmine Corp',
        equipeB: 'Solary',
        probabiliteA: 0.65, // 65% de chance pour KC
        statut: 'À venir'
    },
    {
        id: 'VCT_VIT_M8',
        jeu: 'Valorant',
        competition: 'VCT EMEA',
        equipeA: 'Team Vitality',
        equipeB: 'Mandatory',
        probabiliteA: 0.55, // 55% de chance pour Vitality
        statut: 'À venir'
    },
    {
        id: 'LFL_GO_BDS',
        jeu: 'League of Legends',
        competition: 'LFL',
        equipeA: 'Gentle Mates',
        equipeB: 'BDS Academy',
        probabiliteA: 0.48, // 48% de chance pour M8, donc BDS est favori
        statut: 'À venir'
    },
    {
        id: 'LFL_KC_M8',
        jeu: 'Valorant',
        competition: 'VCT EMEA',
        equipeA: 'Karmine Corp',
        equipeB: 'Mandatory',
        probabiliteA: 0.52,
        statut: 'À venir'
    }
];

let pf = new PlateForm("Esports Hub");
//chargement des matchs dans la variable match de la classe PlateForm
pf.chargerMatchs(calendrierMatchs);
console.log(`---------Affichage du calendrier des matchs sur la plateforme ${pf.nom}---------`);
pf.afficherCalendrier();
console.log("---------Recherche des matchs par jeu Valorant ou valo ou val---------");
console.log(pf.getMatchParJeu("Valora"));
console.log("---------Recherche des matchs à risque---------");
console.log(pf.getMatchRisques());
console.log("---------Recherche du match par son ID LFL_KC_SLY---------");
console.log(pf.getMatchById("LFL_KC_SLY"));