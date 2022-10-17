/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

/*Function play: funzione principale dove viene strutturata la griglia di grancìdezza 7*7, 9*9, e 10*10 */
const playButton =  document.getElementById('play');
function play(){
    console.log('Start game');
    let numSquare = 0;
    let bombsInField = 0;
    const bombsPosition = [];

    const playGround = document.getElementById('playGround');
    playGround.ineerHTML = '';

    const levelHtml = document.getElementById('level');
    const level = levelHtml.value;
    
    /*switch case choose level to play 1 2 or 3 */
    /*switch case bomb quantity level 1 2 or 3 */
    switch(level){
        case '1':
            default:
                numSquare = 49;
                bombsInField = 10; 
            break;
        case '2':
            numSquare = 81;
            bombsInField = 20; 
        break;
        case '3':
            numSquare = 100;
            bombsInField = 30; 
        break;
    }

    /*ciclo while per mettere in griglia le bombe in posizione randomica */
    /*ciclo for per creazione bombe: richiamo dalla libreria.js la function randomNumber*/ 
    while(bombsPosition.length < bombsInField){
        const bomb = randomNumber(1, numSquare);
        if(!bombsPosition.includes(bomb)){
            bombsPosition.push(bomb);
        }
    }

    /*function drawSquare: funzione interna alla function play che genera le celle */
    
   

    /*function drawGrid: funzione interna alla function play che genera il terreno di gioco */

    /*Richiamo la funzione drawgrid */

}

playButton.addEventListener('click', play);


