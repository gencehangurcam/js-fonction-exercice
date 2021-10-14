// ## EXO1
// ## Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

// let reverse = a => a.toString().split('').reverse().join('');
// console.log(reverse());

// #### EXO2
// ## Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// ## Qui répond "Le num x est divisible par 2 x:2 = z"
// ## Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"


// let divPar2 = num => {
//     switch (true) {
//       case (num%2 == 0):
//         return `${num} est divisible par 2.`;
//       default:
//         return `${num} n est pas divisible par 2.`;
//     }
//   }
//   console.log(divPar2(13));


// #### EXO3
// ## Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// let finished = false;

// while (!finished) {
//   let mdp = prompt('ecris mdp');

//   switch (mdp) {
//     case null:
//     case '':
//         alert('merci');
//         finished = true;
//         break;
//     case 'mdp':
//         alert('merci');
//         break;
//     default:
//         mdp = prompt('ecris mdp');
//         break;
//   }
// }



// let logIn = mdp => {
//     while (i) {
//         switch (mdp) {
//             case(true):
//                 alert('its ok')
//                 break;
//             default:
//                 alert("recommence")

// }

// let chiffre = parseInt(prompt("Entrez un chiffre plus grand que 10: "));

// while (chiffre < 10) {
//     chiffre = parseInt(prompt(`${chiffre} est plus petit que 10. Entrez un autre chiffre: `));
// };
// console.log(chiffre);

// #### EXO4
// ## Créer une function qui permet d'ajouter et de faire sortir des stagiaires d'une classe en animant la function. C-a-d demander s'il veut a chaque fois rajouter une personne si oui qui si non lui dire ouki et afficher le tableau.
// ## Avec la capture d'écran reproduisez les entrées / sorties de la classe

