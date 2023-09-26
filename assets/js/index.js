


function memory() {
                                                // fonction du nombre de carte proposé
    compteur_click = 0;
    nombres_carte = NIVEAUX[difficulte][lvl_debut].nombre_cases;
    console.log(nombres_carte + ' nombre de carte');



                                                // creation de l'info du nombre de carte
    if (nombres_carte = NIVEAUX[difficulte][lvl_debut].nombre_cases) {
        lvl.innerHTML = "";                                                                                        //ecrasement de l'ancienne donner
        lvl_vue = document.createElement('h3');                                                                    //creation de la balise
        lvl_vue.className = ('border border-danger p-2');                                                          //ajout de class a la balise
        lvl.appendChild(lvl_vue);                                                                                  //mettre la balise en tant qu'enfant
        lvl_vue.innerText = nombres_carte + "  Cartes";                                                            //inserer un texte a la balise
    }
                                                                // preparation du terrain
    for (let iterateur = 0; iterateur < nombres_carte; iterateur++) {
        let div_card, img_card, melange;
        div_card = document.createElement('div');                                                                  // creation de la div parent
        div_card.id = "card";
        div_card.className = ("col-4 p-2 align-self-center ");
        img_card = document.createElement("img");                                                                  // creation de l'img enfant
        img_card.className = "img-fluid w-25";
        img_card.id = "dos";
        img_card.src = NIVEAUX[difficulte][lvl_debut].chemin_image + "dos/images.jpg";                             // recto de la carte
        melange = NIVEAUX[difficulte][lvl_debut].images_cartes.sort(() => (Math.random() - 0.5));                  // melange aleatoire
        img_card.alt = NIVEAUX[difficulte][lvl_debut].chemin_image + melange[0];                                   // verso de la carte

        melange.shift();
        img_card.className = ("img-fluid btn p-1");                                                                 

        div_card.appendChild(img_card);
        div_row.appendChild(div_card);
        if(nombres_carte>= 12){                                                                                    // si il y a plus de 12 cartes
            div_card.className = ("col-3 p-2 align-self-center ");                                                 // redimention du plateau
        }
    }

                                                    // gestion des actions de l'utilisateur

    var selections, paires;
    selections = [];
    paires = 0;
                                                                 //debut de la partie


    document.querySelectorAll('#card img').forEach(function (carte) {                                              // fonction de selection de toutes les cartes
        carte.onclick = function () {                                                                              // foction de rendre les cartes cliquable
            carte.src = carte.alt;                                                                                 // face verso devient recto
            selections.push(carte);                                                                                // enregistre la carte precedente

            if (selections.length === 2) {                                                                         // compare les 2carte
                compteur_click++;                                                                                  // nombre de coup+1
                document.querySelector('#nombre_de_coup').innerText = compteur_click;                              // coup+1 ecrit
                if (selections[0].src !== selections[1].src) {                                                     // si les 2 carte sont differente
                    setTimeout(function () {                                                                       // alors recto redevient recto
                        selections[0].src = NIVEAUX[difficulte][lvl_debut].chemin_image + "dos/images.jpg";
                        selections[1].src = NIVEAUX[difficulte][lvl_debut].chemin_image + "dos/images.jpg";
                        selections = [];                                                                           // deenregistre les 2 cartes
                    }, 800)                                                                                       // elle reste retourner juste 1seconde
                } else {
                    paires += 2;                                                                                   // si identique paire +2carte
                    selections = [];                                                                               // deenregistre les 2 cartes precedent

                    if (paires == nombres_carte) {                                                                 // si toute les paires retourné
                        clearTimeout(t);                                                                           // pause du chrono
                        toto_coups.push(compteur_click);                                                           // enregistre le nombre de coup par partie
                        h.push(hrs);                                                                               // enregistre le chrono hrs
                        m.push(min);                                                                               // enregistre le chrono min
                        s.push(sec);                                                                               // enregistre le chrono sec
                        console.log(h + "h " + m + "m " + s + "s");
                        console.log(toto_coups + " coups");
                        console.log(lvl_debut + "jeu en cours");
                        console.log(NIVEAUX[difficulte].length + "jeux toto");

                        if (lvl_debut < NIVEAUX[difficulte].length-1) {                                            // si il reste encore d'autre level
                            next_lvl.style = "display: block; font-size: 2.5em;";                                  // fait apparaitre le message lvl suivant
                        } else {                                                                                   // sinon fait apparaitre le message de fin
                            fin.className = ('d-line row');
                            scd =s[0] + s[1] + s[2] + s[3] + s[4];                                                  
                            mnt =m[0]+m[1]+m[2]+m[3]+m[4];                                                         // abreviation du total chrono
                            hs =h[0]+h[1]+h[2]+h[3]+h[4];
                            while(scd > 60){                                                                       // pour que total chrono reste en horaire
                                scd -= 60;
                                mnt++ ;
                            }
                            while (mnt > 60) {                                                   
                                    mnt -= 60;
                                    hs++;
                            }
                            
                            div_row.style = "display: none;";
                            next_lvl.style = "display: none;";

                            document.querySelector('#nombre_de_coup1').innerText = toto_coups[0];                  // coup du lvl 1
                            document.querySelector('#nombre_de_coup2').innerText = toto_coups[1];                  // coup du lvl 2
                            document.querySelector('#nombre_de_coup3').innerText = toto_coups[2];                  // coup du lvl 3
                            document.querySelector('#nombre_de_coup4').innerText = toto_coups[3];                  // coup du lvl 4
                            document.querySelector('#nombre_de_coup5').innerText = toto_coups[4];                  // coup du lvl 5
                            document.querySelector('#nombre_de_coup_toto').innerText = toto_coups[0] +
                                toto_coups[1] + toto_coups[2] + toto_coups[3] + toto_coups[4];                     // coup total

                            document.querySelector('#time1').innerText = h[0] + "h" + m[0] + "m" + s[0] + "s";     // tps du lvl 1
                            document.querySelector('#time2').innerText = h[1] + "h" + m[1] + "m" + s[1] + "s";     // tps du lvl 2
                            document.querySelector('#time3').innerText = h[2] + "h" + m[2] + "m" + s[2] + "s";     // tps du lvl 3
                            document.querySelector('#time4').innerText = h[3] + "h" + m[3] + "m" + s[3] + "s";     // tps du lvl 4
                            document.querySelector('#time5').innerText = h[4] + "h" + m[4] + "m" + s[4] + "s";     // tps du lvl 5
                            document.querySelector('#time_toto').innerText = hs+ " h "+mnt+" m"+ scd +"s";         // tps total

                        }
                    }
                }
            }
        }
    })
}

memory();                                                                                                           // lance la fontion

                                                        // changement du niveau


                    next_lvl.onclick = function () {
                        lvl_debut++;                                                                                // augmente le lvl au lvl suivant
                        next_lvl.style = "display: none;";                                                          // masque le niveau suivant
                        div_row.innerHTML = "";                                                                     // supression du lvl precedent  
                        min = 0;
                        sec = 0;                                                                                    // remise a zero du chrono
                        hrs = 0;                                                                                    
                        memory();                                                                                   // relance toute la fonction
                        letsgo()                                                                                    // lance le chrono
                    }

