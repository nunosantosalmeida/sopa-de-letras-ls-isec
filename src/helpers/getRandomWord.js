/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import { WORDS} from '../constants';
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
    let randomword; /**randomWord - Palavra a retornar */
    let passLineCheck=false; /**passLineCHeck - variável de controlo para saber se a palavra cabe numa linha/coluna*/

    /*Enquanto não passar na condição de caber numa linha ou coluna...*/
    while(!passLineCheck) { 
        randomword=WORDS[Math.floor(Math.random()*WORDS.length)]; // escolhe uma palavra aleatória do array indicado
        if(checkUsedWord(randomword, usedWords)) {
            continue; 
        }
        if(randomword.length<=Math.sqrt(lnumb)){
            passLineCheck=true; 
        }
    }

    return randomword;/*retorna a palavra encontrada*/
}

export default getRandomWord;