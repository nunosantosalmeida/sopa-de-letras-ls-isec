import {getRandomWord, placeInColumnWord, placeInLineWord} from '../helpers'
import { ABCD} from '../constants';

/**
 * MakeRandomBoard
 * 
 * Preenche array com  letras aleatórias do abcedário
 * 
 * @param {*} lnumb número de letras do array
 * @param {*} finalArray array final a ser apresentado no tabuleiro
 */
 function fillBoard({boardSize}){

    let finalArray=[];  // Array a apresentar no tabuleiro  
    let randomword;  // Palavra aleatória (utilizada para colocar palavras aleatórias no array finalArray) */
    let positionsOccupied = [];  // Array com posições já ocupadas por palavras*/
    let usedWords= [];  // Array com palavras já utilizadas no tabuleiro (definidas como strings)*/
    let word2array;  // Palavra em forma de array (para colocar nas posições do finalArray)*/
    let inverse;  // Variável de controlo para verificar se palavra será colocada inversamente ou não*/
    
    console.log("fillBoard");

    for(let i=0; i<boardSize ; i++){/*i vai de 0 ao número de letras do array final */
        finalArray.push(ABCD[Math.floor(Math.random()*(ABCD.length-1))]);/* e preenche-o com letras aleatórias do abecedário*/
    }

    for(let c=0; c<(Math.floor((Math.sqrt(boardSize))/2));c++){ /**coloca numero de linhas/2 de palavras no tabuleiro (para não ser completamente cheio de palavras) */
        
        randomword = getRandomWord(boardSize, usedWords);
        word2array = Array.from(randomword);
        inverse = Math.floor(Math.random()*99); /*Probabilidade de 50/50 de palavra ser invertida */
        if(inverse<50){ /*Caso inverse calhe em <50% */
            word2array.reverse(); /*palavra é invertida */
        }
        /*Caso contrário continua */

        inverse = Math.floor(Math.random()*99); /*Volta a gerar probabilidade 50/50, deta vez para saber se será colocada em linha, coluna ou diagonal */
        if(inverse<50){/*Caso inverse calhe em <50% */
            placeInLineWord(word2array,boardSize,finalArray, usedWords,positionsOccupied);/*Coloca em linha*/
        }else{
            placeInColumnWord(word2array,boardSize,finalArray, usedWords,positionsOccupied);/*Caso contrário coloca em coluna */
        }

        /*FALTA DESENVOLVER NA DIAGONAL */  
    }

    return [finalArray, usedWords]
}


export default fillBoard;