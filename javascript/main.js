// creation variable global
const PLAYERX = "x" ;
const PLAYERO = "o" ;
var player_one = 1;
var cell = "";

var plateau = new Array(3);
for (i=0; i < 3; i++){
    plateau[i] = new Array(3)
}
console.log(plateau);
// initialisation du jeu ( creation 2 plateau / 1 porte avion = 5 case 2 sous marin = 3 case 1 croiseur = 4 case 1 torpilleur = 2 case)
// placement des piece pour joueur 1
// placement des piece pour joueur 2
// verification que mes 2 plateau sont bien enregistré
// tour Player 1
// desaction de case selectionner après choix player 
// creation d'un switch entre les plateau 
// tour Player 2

// verification si pas touché 
// verification si touché ou pas du bateau
//verification si touché coulé du bateau 



// Jeu du Morpion

// tableau 2 dimension 

function restartGame() {
    // Reset the cell contents to an empty state
    for (let i = 1; i <= 9; i++) {
        cell = document.getElementById(`cell${i}`);
        const texte = cell.querySelector("p");
        texte.textContent = ""; // Clear the text in the cell
        cell.setAttribute("onclick", "updateWord(this)"); // Re-enable clicking
    }
    end.textContent = "";

    // Reset the global state for case values
    recuperateCell(); // Reset the case variables

}

function updateWord(tag){
        tag.removeAttribute("onclick");
        let texte = tag.querySelector("p");

        if (player_one === 1) {
            texte.textContent = PLAYERX;
        }
        else{
            texte.textContent = PLAYERO;

        }
        texte.classList.remove("none");
    if (winCondition()) {
        const winner = player_one === 1 ? 'X' : 'O';
        var end = document.getElementById('end');
        end.textContent = `Bravo, joueur ${winner} à gagner !`;
    
        for (let i = 1; i <= 9; i++) {
        cell = document.getElementById(`cell${i}`);        
        cell.removeAttribute("onclick"); 
    }} else {
        playerSwitch();
    }
}

function playerSwitch() {
    player_one = 1 - player_one;
}




function winCondition(){
    recuperateCell();

    if (patternvictory()){
        return true;
    }
}

function recuperateCell(){

    case1 = document.getElementById('cell1').innerText;
    case2 = document.getElementById('cell2').innerText;
    case3 = document.getElementById('cell3').innerText;
    case4 = document.getElementById('cell4').innerText;
    case5 = document.getElementById('cell5').innerText;
    case6 = document.getElementById('cell6').innerText;
    case7 = document.getElementById('cell7').innerText;
    case8 = document.getElementById('cell8').innerText;
    case9 = document.getElementById('cell9').innerText;

}

function patternvictory() {

    const winningPatterns = [

        [case1, case2, case3], 
        [case4, case5, case6], 
        [case7, case8, case9], 

        
        [case1, case4, case7], 
        [case2, case5, case8], 
        [case3, case6, case9], 

        
        [case1, case5, case9], 
        [case3, case5, case7], 
    ];

    for (const pattern of winningPatterns) {
        const [a, b, c] = pattern;
        
        if (a === b && b === c && (a === PLAYERX || a === PLAYERO)) {
            console.log("bravo ta win bg");
            return true ;
        }
    }

    return false; 
}

function darkMode(){

    bDark = document.getElementById("DarkMode");

    if (bDark.textContent == "Dark Mode"){
        BackgroundToWhite();
    }
    else(
        BackgroundToBlack()
    )
}

function BackgroundToBlack(){
    bDark.innerText="Dark Mode";
    bDark.classList.remove('white_bg');
    end.classList.remove("darkM");
    document.body.classList.remove("dark");


        for (let i = 1; i <= 9; i++) {
        cell = document.getElementById(`cell${i}`);        
        cell.classList.remove("darkM");        
    }


    DarkMode = document.querySelectorAll('button');
    DarkMode.forEach(DarkMode => {
        DarkMode.classList.remove('white_button');
    })
}

function BackgroundToWhite(){
    bDark.innerText="Light Mode";
    bDark.classList.remove('white_bg');

    for (let i = 1; i <= 9; i++) {
        cell = document.getElementById(`cell${i}`);        
        cell.classList.add("darkM");        
    }

     DarkMode = document.querySelectorAll('button');
        DarkMode.forEach(DarkMode => {
            DarkMode.className += (" " + 'white_button');
        }); 
         
    end.classList.add("darkM");
    document.body.classList.add("dark");
}