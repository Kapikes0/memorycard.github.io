
                                        // constante du tableau
const NIVEAUX = {

    'facile': [                                                                 // difficulté
        {
            'nombre_cases': 6,                                                  // nombre d'image (level)
            'chemin_image': "./assets/img/dif_facile/",                         // chemin pour reduire la taille du tableau
            'images_cartes': ['images0.jpg', 'images0.jpg', 'images5.jpg', 'images5.jpg', 'images5.png', 'images5.png']
        }, {                                                                    // noms des images        
            'nombre_cases': 8,
            'chemin_image': "./assets/img/dif_facile/",
            'images_cartes': ['images17.jpg', 'images17.jpg', 'images1.jpg', 'images1.jpg', 'images2.jpg', 'images2.jpg', 'images3.jpg', 'images3.jpg']
        }, {
            'nombre_cases': 10,
            'chemin_image': "./assets/img/dif_facile/",
            'images_cartes': ['images18.jpg', 'images18.jpg', 'images6.jpg', 'images6.jpg', 'images7.jpg', 'images7.jpg', 'images3.jpg', 'images3.jpg', 'images4.jpg', 'images4.jpg']
        }, {
            'nombre_cases': 12,
            'chemin_image': "./assets/img/dif_facile/",
            'images_cartes': ['images10.jpg', 'images10.jpg', 'images16.jpg', 'images16.jpg', 'images12.jpg', 'images12.jpg', 'images15.jpg', 'images15.jpg', 'images17.jpg', 'images17.jpg', 'images6.jpg', 'images6.jpg']
        }, {
            'nombre_cases': 20,
            'chemin_image': "./assets/img/dif_facile/",
            'images_cartes': ['images10.jpg', 'images10.jpg', 'images15.jpg', 'images15.jpg', 'images12.jpg', 'images12.jpg', 'images16.jpg', 'images16.jpg', 'images13.jpg', 'images13.jpg', 'images6.jpg', 'images6.jpg', 'images14.jpg', 'images14.jpg', 'images19.jpg', 'images19.jpg', 'images7.jpg', 'images7.jpg', 'images18.jpg', 'images18.jpg']
        }
    ],
    'moyen': [
        {
            'nombre_cases': 6,
            'chemin_image': "./assets/img/dif_moyen/",
            'images_cartes': ['images0.jpg', 'images0.jpg', 'images1.jpg', 'images1.jpg', 'images2.jpg', 'images2.jpg']
        }, {
            'nombre_cases': 8,
            'chemin_image': "./assets/img/dif_moyen/",
            'images_cartes': ['images0.jpg', 'images0.jpg', 'images1.jpg', 'images1.jpg', 'images2.jpg', 'images2.jpg', 'images3.jpg', 'images3.jpg']
        }, {
            'nombre_cases': 10,
            'chemin_image': "./assets/img/dif_moyen/",
            'images_cartes': ['images0.jpg', 'images0.jpg', 'images1.jpg', 'images1.jpg', 'images2.jpg', 'images2.jpg', 'images3.jpg', 'images3.jpg', 'images4.jpg', 'images4.jpg']
        }, {
            'nombre_cases': 12,
            'chemin_image': "./assets/img/dif_moyen/",
            'images_cartes': ['images0.jpg', 'images0.jpg', 'images1.jpg', 'images1.jpg', 'images2.jpg', 'images2.jpg', 'images3.jpg', 'images3.jpg', 'images4.jpg', 'images4.jpg', 'images6.jpg', 'images6.jpg']
        }
    ],
    'dur': []
}
/*
NIVEAUX.'facile'=document.querySelector("#facile");
NIVEAUX.'moyen'=document.querySelector("#moyen");
NIVEAUX.'dur'=document.querySelector("#dur");
*/


                                    // variable pour le jeu
var difficulte, lvl_debut, nombres_carte, compteur_click, lvl_vue;

difficulte = 'facile';
lvl_debut = 0;


                // variable indiquant un ID
var lvl = document.querySelector('#lvl');
var div_row = document.querySelector('#cards');
var next_lvl = document.querySelector('#niveau_suivant');
var fin = document.querySelector('#fin');



                                    // variable pour les coups
compteur_click = 0;
var toto_coups = [];


                                    // variable pour le chrono
var temps = document.querySelector('#time');
var s = [];
var m = [];
var h = [];
var t,scd,mnt,hs;
var min = 0;
var sec = 0;
var hrs = 0;







/*                                                                              changement pour moin de repetition


                rajout de plusieur niveau de difficulté

        moyen:
        avec des imgs differentes mais qui se ressemble
        dur:
        avec des imgs d'acteurs dans different role a reunir
        expert:
        avec un melange des carte restante toute les 3/4coup
        

                optimisation du tableau et du "for"

        mettre toutes les imgs dans un tableau, et tirer le nombre d'img voulu au hazard puis les multipliees par 2 et les remelanger 
        pour eviter d'avoir toujours les memes imgs sur les partis
        rendre le score dinanique


                optimisation du plateau de jeu
        
        rajout d'une playlist de musique
        rajout d'effet quand on retourne les cartes, d'un "hover" quand on passe la souris dessus
        rajout de terre plein au millieu pour eviter d'avoir des diformité sur le plateau
        disparition des cartes trouver avec un effet et recalibration des colones,ligne et terreplein du plateau

*/



















/*
const DIFICULT = [
    {
        'difficulte_facile': {
            LEVEL=[
            "6"  ['./../img/dif_facile/images0.jpg', './../img/dif_facile/images0.jpg', './../img/dif_facile/images1.png', './../img/dif_facile/images1.png', './../img/dif_facile/images3.jpg', './../img/dif_facile/images3.jpg'],
           " 8"  ['./../img/dif_facile/images0.jpg', './../img/dif_facile/images0.jpg', './../img/dif_facile/images1.png', './../img/dif_facile/images1.png', './../img/dif_facile/images3.jpg', './../img/dif_facile/images3.jpg', './../img/dif_facile/images2.jpg', './../img/dif_facile/images2.jpg'],
            "10"  ['./../img/dif_facile/images0.jpg', './../img/dif_facile/images0.jpg', './../img/dif_facile/images1.png', './../img/dif_facile/images1.png', './../img/dif_facile/images3.jpg', './../img/dif_facile/images3.jpg', './../img/dif_facile/images4.jpg', './../img/dif_facile/images4.jpg', './../img/dif_facile/images2.jpg', './../img/dif_facile/images2.jpg'],
            "12"  ['./../img/dif_facile/images0.jpg', './../img/dif_facile/images0.jpg', './../img/dif_facile/images1.png', './../img/dif_facile/images1.png', './../img/dif_facile/images3.jpg', './../img/dif_facile/images3.jpg', './../img/dif_facile/images6.jpg', './../img/dif_facile/images6.jpg', './../img/dif_facile/images4.jpg', './../img/dif_facile/images4.jpg', './../img/dif_facile/images2.jpg', './../img/dif_facile/images2.jpg']
            ]
        }
    },
    {
        'difficulte_moyen': [
            LEVEL=[
            "6"  ['./../img/dif_moyen/images0.jpg', './../img/dif_moyen/images0.jpg', './../img/dif_moyen/images1.jpg', './../img/dif_moyen/images1.jpg', './../img/dif_moyen/images3.jpg', './../img/dif_moyen/images3.jpg'],
            "8"  ['./../img/dif_moyen/images0.jpg', './../img/dif_moyen/images0.jpg', './../img/dif_moyen/images1.jpg', './../img/dif_moyen/images1.jpg', './../img/dif_moyen/images3.jpg', './../img/dif_moyen/images3.jpg', './../img/dif_moyen/images2.jpg', './../img/dif_moyen/images2.jpg'],
            "10"  ['./../img/dif_moyen/images0.jpg', './../img/dif_moyen/images0.jpg', './../img/dif_moyen/images1.jpg', './../img/dif_moyen/images1.jpg', './../img/dif_moyen/images3.jpg', './../img/dif_moyen/images3.jpg', './../img/dif_moyen/images4.jpg', './../img/dif_moyen/images4.jpg', './../img/dif_moyen/images2.jpg', './../img/dif_moyen/images2.jpg'],
            "12"  ['./../img/dif_moyen/images0.jpg', './../img/dif_moyen/images0.jpg', './../img/dif_moyen/images1.jpg', './../img/dif_moyen/images1.jpg', './../img/dif_moyen/images3.jpg', './../img/dif_moyen/images3.jpg', './../img/dif_moyen/images6.jpg', './../img/dif_moyen/images6.jpg', './../img/dif_moyen/images4.jpg', './../img/dif_moyen/images4.jpg', './../img/dif_moyen/images2.jpg', './../img/dif_moyen/images2.jpg']
            ]
        ]
    },
    {
        'difficulte_dur': [
            LEVEL=[
            "6"  ['./../img/dif_dur/images0.jpg', './../img/dif_dur/images0.jpg', './../img/dif_dur/images1.jpg', './../img/dif_dur/images1.jpg', './../img/dif_dur/images3.jpg', './../img/dif_dur/images3.jpg'],
            "8"  ['./../img/dif_dur/images0.jpg', './../img/dif_dur/images0.jpg', './../img/dif_dur/images1.jpg', './../img/dif_dur/images1.jpg', './../img/dif_dur/images3.jpg', './../img/dif_dur/images3.jpg', './../img/dif_dur/images2.jpg', './../img/dif_dur/images2.jpg'],
            "10"  ['./../img/dif_dur/images0.jpg', './../img/dif_dur/images0.jpg', './../img/dif_dur/images1.jpg', './../img/dif_dur/images1.jpg', './../img/dif_dur/images3.jpg', './../img/dif_dur/images3.jpg', './../img/dif_dur/images4.jpg', './../img/dif_dur/images4.jpg', './../img/dif_dur/images2.jpg', './../img/dif_dur/images2.jpg'],
            "12"  ['./../img/dif_dur/images0.jpg', './../img/dif_dur/images0.jpg', './../img/dif_dur/images1.jpg', './../img/dif_dur/images1.jpg', './../img/dif_dur/images3.jpg', './../img/dif_dur/images3.jpg', './../img/dif_dur/images6.jpg', './../img/dif_dur/images6.jpg', './../img/dif_dur/images4.jpg', './../img/dif_dur/images4.jpg', './../img/dif_dur/images2.jpg', './../img/dif_dur/images2.jpg']
            ]
        ]
    }
];
*/