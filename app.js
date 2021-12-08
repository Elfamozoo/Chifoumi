const pierreBtn = document.querySelector("#pierre")
const feuilleBtn = document.querySelector("#feuille")
const ciseauxBtn = document.querySelector("#ciseaux")
const affichage = document.querySelector("#affichage")


let joueur = null;
let ordi = null;
let resultat = null;

const ordiChoix = ['pierre', 'feuille', 'ciseaux'];


function resultatMatch() {
    // Le math.floor permets d'arrondir les chiffres.
    chiffre = Math.floor(Math.random() * 3)
    ordi = ordiChoix[chiffre]
    match(joueur, ordi);
}


function match(j, o) {
    if (j === 'pierre' && o === 'ciseaux' || j === 'feuille' && o === 'pierre' || j === 'ciseaux' && o === 'feuille') {
        resultat = 'Gagné';
        affichage.innerHTML = `${joueur} VS ${ordi} : ${resultat}`
    } else if (j === 'pierre' && o === 'feuille' || j === 'feuille' && o === 'ciseaux' || j === 'ciseaux' && o === 'pierre') {
        resultat = 'Perdu';
        affichage.innerHTML = `${joueur} VS ${ordi} : ${resultat}`
    } else {
        resultat = 'Egalité';
        affichage.innerHTML = `${joueur} VS ${ordi} : ${resultat}`

    }
}


pierreBtn.addEventListener('click', function () {
    joueur = 'pierre';
    resultatMatch()
})

feuilleBtn.addEventListener('click', function () {
    joueur = 'feuille';
    resultatMatch()
})

ciseauxBtn.addEventListener('click', function () {
    joueur = 'ciseaux';
    resultatMatch()
})

