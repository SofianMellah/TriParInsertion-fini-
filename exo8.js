let tableau = [8, 3, 9, 4, 1]
console.log(tableau);

document.getElementById("debut").innerHTML = tableau

/* Début ordre croissant */
function triAInsertionCroissant(tableau) {

    let length = tableau.length

    for (let i = 1; i < length; i++) {
        let x = tableau[i] /* Donc x représente les valeurs du tableauau */
        console.log("x = à chaque valeur du tableau, donc : " , x)
        let j = i - 1 /* Donc j = à l'id des vlaeurs du tableau. Donc la j = à i ( qui est de 1) -1, donc 0 */
        console.log("j = à l'ID de chaque valeur du tableau, donc : " , j);
        while (j > -1 && tableau[j] > x) {
            tableau[j+1] = tableau[j] /* Donc nous stock la valeur de [j] dans [j+1] pour qu'elle prenne " la place " si les conditions sont respectées */
            j-- /* j-- peut remplacer j = j - 1 */
        }
        tableau [j+1] = x
    }
    console.log(tableau);
    document.getElementById("resultatcroissant").innerHTML = tableau
}
/* Fin ordre croissant */

// triAInsertion(tableau) /* On rappel la fonction pour qu'elle se fasse, si on veut qu'elle se fasse sans pour autant cliquer sur le bouton*/
console.log(tableau);

/* Début ordre decroissant */
function triAInsertionDecroissant(tableau) {

    let length = tableau.length

    for (let i = 1; i < length; i++) {
        let x = tableau[i] /* Donc x représente les valeurs du tableauau */
        console.log("x = à chaque valeur du tableau, donc : " , x)
        let j = i - 1 /* Donc j = à l'id des valeurs du tableau. Donc la j = à i ( qui est de 1) -1, donc 0 */
        console.log("j = à l'ID de chaque valeur du tableau, donc : " , j);
        while (j > -1 && tableau[j] < x) {
            tableau[j+1] = tableau[j] /* Donc nous stock la valeur de [j] dans [j+1] pour qu'elle prenne " la place " si les conditions sont respectées */
            j-- /* j-- peut remplacer j = j - 1 */
        }
        tableau [j+1] = x
    }
    console.log(tableau);
    document.getElementById("resultatdecroissant").innerHTML = tableau
}
/* Fin ordre decroissant */

// triAInsertion(tableau) /* On rappel la fonction pour qu'elle se fasse, si on veut qu'elle se fasse sans pour autant cliquer sur le bouton*/
console.log(tableau);