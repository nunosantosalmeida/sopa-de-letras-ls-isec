import {WORDS} from '../../constants';
import checkUsedWord from './checkUsedWord';
/**
 * getRandomWord
 * 
 * Retorna uma palavra aleatória de um array de palavras indicado
 * 
 * @param {*} lnumb número de letras do tabuleiro
 * @param {*} usedWords array de palavras já utilizadas
 * @returns palavra aleatória
 */
 function getRandomWord(lnumb, usedWords){
    
    let randomWordIndex
    let passLineCheck = false; /**passLineCHeck - variável de controlo para saber se a palavra cabe numa linha/coluna*/

    while(!passLineCheck) { 
        
        randomWordIndex = Math.floor(Math.random()*WORDS.length)
        
        if(checkUsedWord(WORDS[randomWordIndex], usedWords))
            continue; 
        
        if(WORDS[randomWordIndex].length<=Math.sqrt(lnumb))
            passLineCheck=true; 
    }

    return WORDS[randomWordIndex];
}

export default getRandomWord;