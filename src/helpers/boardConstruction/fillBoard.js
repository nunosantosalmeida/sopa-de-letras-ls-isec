import {getRandomWord, placeWordVertical, placeWordHorizontal, placeWordDiagonal} from '..'
import {ABCD} from '../../constants';

/**
 * Preenche array com  letras aleatórias do abcedário
 */
 function fillBoard(boardSize){
    let finalArray=[];  // Array a apresentar no tabuleiro  
    let usedWords= [];  // Array com palavras já utilizadas no tabuleiro (definidas como strings)*/
    let chosenWord;  // Palavra em forma de array (para colocar nas posições do finalArray)*/
    let orientation;  // Variável de controlo para verificar se palavra será colocada inversamente ou não*/
    
    // Preenche array com PLACEHOLDERS;
    for(let i = 0; i < boardSize ; i++){
        finalArray.push("");
    }

    for(let c = 0; c < (Math.floor((Math.sqrt(boardSize)))/2); c++){ /**coloca numero de linhas/2 de palavras no tabuleiro (para não ser completamente cheio de palavras) */

    chosenWord = Array.from(getRandomWord(boardSize, usedWords)); // constroi array a partir de palavra random
       
        // Coloca a palavra no board, numa orientação aleatoria
        orientation = Math.floor(Math.random()*100); 
        if(orientation < 33){
            placeWordHorizontal(chosenWord, boardSize, finalArray, usedWords);  // Horizontal
        }
        else if (orientation >= 33 && orientation <= 66) {
            placeWordVertical(chosenWord, boardSize, finalArray, usedWords);  // Vertical
        }
        else {
            placeWordDiagonal(chosenWord, boardSize, finalArray, usedWords);  // Diagonal
        }
    }

    // // Preenche array com letra aleatórias;
    // for(let i = 0; i < boardSize ; i++){
    //     if(finalArray[i] === "")    
    //         finalArray[i] = ABCD[Math.floor(Math.random()*(ABCD.length-1))];
    // }
    
    return [finalArray, usedWords]
}


export default fillBoard;