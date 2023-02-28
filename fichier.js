
// VARIABLES 

/* REGLES :

- nom descriptif (quantiteEnStock)
- eviter des raccourcir des mots ou d'utiliser des abréviations
- utiliser une convation de nomage constante (camel case) (reponseFinal)

*/

// DECLARATION DE VARIABLE (MOT CLÉ VAR ANCIENNE VERSION DE LET)

let nombreDeChiens; 

// INITIALISER UNE VARIABLE (donner une valeur)

let nombreDeChats = 2;

// MODIFIER UNE VARIABLE 

// - réaffectation 

nombreDeChats = 3;

// OPERATEURS ARITHÉTIQUE (addition, division, soustraction et divison)

let nombre1 = 1;
let nombre2 = 2;
let sommeTotal1 = nombre1 + nombre2;

let nombre3 = 1;
let nombre4 = 2;
let sommeTotal2 = nombre3 - nombre4;

let nombre5 = 1;
let nombre6 = 2;
nombre5 += 2;
nombre6 -= 2;

// - incrémenter ou décrémenter de 1 

nombre5++;
nombre6--;

// - multiplication et division 

let sommeTotal3 = nombre5 / nombre6;
let sommeTotal4 = nombre5 * nombre6;

nombre5 *=6;
nombre6/=4;

// CONSTANTES (données non modifiées pendant l'éxécution du prpogramme)

// la valeur de départ ne pourra pas être modifiées, si l'on a malgré tout voulu la mettre à jour javascript retournera 
// une erreur dans la conosle. 

const variableConstante  = 12; 

// TYPES (le genre de données qu'elle enregistre)

// - types primitifs (données de base que l'on retrouve en permanence dans une app js) (number, string , boolean)

// - number (positive, négative, entier et décimaux)

let sommeTotal5 = 5;
let sommeTotal6 = 0.1 + 0.3; // Attention avec les flottantes elle peuvent renvoyer des erreurs dans tous les langages de prog 

let utilisateurConnecte = true; 

let nom = "Arthur";
let prenom = "Jean-jaque";

// - concaténation
let nomEntier = nom + " " + prenom;
// - string interpolation 
nom = "Joe";
messageDeBienvenue = 'Bienvenue ${nom}';
console.log(messageDeBienvenue);

// CLASSES (modéles d'objets)

// Les objets sont écrit en JSON? Ce sont des séries de pairs clés-valeurs (attributs)

let yaacovIllouz = {
    nom : 'Illouz',
    prenom : 'Yaacov',
    age : 23
};

// - accéder aux données d'un objets : 
// - on utilise la not dotation (notation pointé)
let nomYI = yaacovIllouz.nom; 

// - on utilise la notation bracket 
nomYI = yaacovIllouz["nom"];

// - on peut aussi y accéder de la sorte : 
proprieteNom = "nom";
nomYI = yaacovIllouz[proprieteNom]; 

// - construire une class (modéle) : 

class Utilisateur{
    // déclarer un consttructeur
    constructor(nom,prenom,age){
        // attribuer les valeurs 
        this.nom = nom;
        this.prenom = prenom; 
        this.age = age;
    }
}


// créer une instance de cette class (en leurs passant des arguments) : 

let Utilisateur1 = new Utilisateur("Illouz", "Yaacov", 45);  

// TABLEAUX 

let invitesVIP = ['Soe Bou', 'Pomme Noi', 'Vert Gentil']; 

// - accéder aux éléments du tableau 

let invite1 = invitesVIP[0]; 
let invite2 = invitesVIP[1]; 

// - afficher le nombre d'éléments que contient le tableau (attibut)

invitesVIP.length; 

// - ajouter un éléments à la fin du tableau (méthode)

invitesVIP.push("Yaacov Illouz"); 

// - ajouter un éléments au début du tableau (méthode)

invitesVIP.unshift("Yaacov Illouz"); 

// - supprimer le dernier élément du tableau 

invitesVIP.pop(); 

// DEROULEMENT DU PROGRAMME (certaines lignes ne seront lues qu'une seule fois d'autres plusieurs et d'autres seront totalement 
// ignorées selon la situation)

// INSTRUCTIONS CONDITIONNLLES 

// IF / ELSE 

let condition1 = true; 
let condition2 = false; 

if (condition1){ // Si la condition1 = true 
    console.log("connecté");
}else{
    console.log("connexion");
}

// Expression de comparaison (> < >= <= == != (différent de))
// Chainer les instructions 

if(condition1){
    console.log("connecté");
}else if(condition2){
    console.log("connexion");
}else{
    console.log("connais pas");
}

// Égalité simple (== la valeur mais pas le type) / égalité stricte (=== la valeur et le type)
// Opérateur d'inégalité (!= / !==)

// CONDITIONS MULTIPLES, OPÉRATEUR LOGIQUES 

// - && ET (les deux doivent êtres vraies)
// - || OU (une des deux doit êtres vraie)

// - ! (la condition est fausse)

if(!condition1){ // Si la condition1 est fausse
    console.log("bonjour");
}

/* En JavaScript, les variables créées par   let  ou   const  ne peuvent être vues ou utilisées qu'à l'intérieur 
du bloc de code dans lequel elles sont déclarées. Un bloc de code, aussi souvent appelé bloc tout court, est 
une section de code incluse entre accolades  {}. Ce phénomène est appelé porté des variables. */
// Pour résoudre ce problème déclare tes varaibles dans la porté extérieur du bloc et modifie les à l'intérieur de tes blocs. 

// SWITCH 

let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

switch(firstUser.accountLevel){

    case 'normal' : 
        console.log("Bonjour");
    break; // Ne l'oublie pas à sinon js continuera à éxécuter le code jusqu'au prochain break. 

    case 'premium' : 
        console.log("Bonsoir");
    break; 

    case 'mega-premium' : 
        console.log("Au revoir");
    break; 

    default : 
        console.log("Salut");
}

// BOUCLES 
// (for) Je connais le nombre de répétition et pas d'importance sur l'ordre d'éxécurtion

const nb = 10; 

for(let i=0; i < nb; i++){ // Variable d'indice i qui débutera à 0
    console.log("Passager embarqué");
}

// Parcourir un tableau (dans cet exemple je dois manipuler les éléments de mon tableau)
let tabPassagers = ["Pass1", "Pass2", "Pass3"]; 

// for 
for(let i =0; i < tabPassagers.length; i++){
    console.log(tabPassagers[i]);
}

// for in 

for(let i in tabPassagers){
    console.log(tabPassagers[i]);
}

// for of (si l'indice de chaque passager n'est pas nécessaire)

for(let passagers of tabPassagers){
    console.log(passagers);
}

// WHILE : A present je ne sais combien de fois la boucle aura besoin d'être éxécutée. (tant que la condition est vrai)

let cond1 = 10;

while(cond1 > 0){
    console.log("Passager embarqué");
    cond1--;
}

// ERREURS 

// - de syntaxe : faute d'écriture dans votre code. 
// - de logique : erreurs dans la logique de notre programme. 

// - d'éxécution : Il s'agit souvent de quelque chose associé aux ressources 
// extérieures (connexions réseau, appareils physiques, etc.) ou à une saisie/erreur humaine.
// Dans ce cas deux façon de traiter les erreurs : 

if (dataExists && dataIsValid) {
    // utiliser les données ici
} else {
    // gérer l'erreur ici
}

try {
    // code susceptible à l'erreur ici
} catch (error) {
    // réaction aux erreurs ici
}

// FUNCTION 

/* Quand vous créez ou déclarez une fonction, vous indiquez la liste des variables dont elle a besoin pour effectuer son travail : 
vous définissez les paramètres de la fonction. Ensuite, à l'appel de la fonction, vous lui attribuez des valeurs pour ses paramètres.
Les valeurs sont les arguments d'appel. Enfin, votre fonction peut vous donner un résultat : une valeur de retour. */

function afficheValeurs(valeur1, valeur2) {
    console.log(valeur1 + " " + valeur2);
}

afficheValeurs("Bonjour", "Bonsoir");


















