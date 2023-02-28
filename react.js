// Un composant regroupe à la fois le HTML, le JS et le CSS, créés sur mesure pour vos besoins, 
// et que vous pouvez réutiliser pour construire des interfaces utilisateurs.

/*Pour faire simple, vous pouvez vous dire qu'un framework est un ensemble d'outils ultra complets 
permettant de créer une application de A à Z et fournissant tous les outils nécessaires au développement 
d'une application. Alors qu'une bibliothèque s'ajoute à une partie de votre application. */

// Ajouté dans une balise script  , le lien CDN (content delivery network) permet notamment d'importer une bibliothèque 
// directement dans le code HTML.

/* Le DOM (Document Object Model), est généré par votre navigateur depuis le HTML pour afficher une page. Il correspond à une 
sorte d'arbre de nœuds. Vous pouvez d'ailleurs manipuler votre DOM dans l'outil "Elements" des Developpers Tools de votre navigateur. 
React lui-même ne manipule pas directement le DOM du navigateur. À la place, React génère un DOM virtuel, distinct du DOM des navigateurs. 
Au moment venu, il réconcilie ce DOM virtuel avec le DOM du navigateur, en prenant soin de minimiser le nombre d'opérations nécessaires. */

/* Avec React, chacune de ces parties qu’on va pouvoir réutiliser correspond à un composant. Ils contiennent tout ce qui est nécessaire à leur
 bon fonctionnement : la structure, les styles et le comportement (par exemple, les actions qui sont déclenchées quand on clique dessus). */

/* Pour faire simple : en utilisant React.createElement  , React crée d’abord ses éléments dans le DOM virtuel, puis il vient prévenir le DOM 
au moment de sa création, “Hé, rajoute-moi une balise h1 avec le texte La maison jungle   dedans”. */

// JSX : Il s’agit de l'extension JavaScript créée par React, qui permet d’utiliser notre syntaxe sous forme de tags directement dans le code JavaScript.
// On a bien créé un composant Header et pas header. Il est essentiel de mettre une majuscule à nos composants JSX, sinon React ne saura pas qu'il s'agit 
// d'un composant, et pensera qu'il s'agit juste d'une balise HTML.

/* Pas de panique, c’est normal : deux composants doivent toujours être wrappés dans un seul composant parent. */

// Si l'on ne veut pas que le composant parent <div> apparaisse : 

ReactDOM.render(<React.Fragment><Header /><Description /></React.Fragment>, document.getElementById("root"))

// n React, les accolades {   et }   sont également particulièrement utiles. Dès qu'il s'agit d'expressions JavaScript, 
// elles sont écrites entre accolades. Ça nous permet d'appliquer des expressions JavaScript directement dans notre JSX pour : 

<div> Bonjour {6*7} Paul </div>

<div> {alexia.toUpperCase()} </div>

<div></div>

// - utiliser des ternaires 

<div> { 2 > 0 ? 'Deux est plus grand que zéro' : 'Ceci n\'apparaîtra jamais } </div>

