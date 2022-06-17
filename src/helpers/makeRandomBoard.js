/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import { ABCD} from '../constants';

/**
 * MakeRandomBoard
 * 
 * Preenche array com  letras aleatórias do abcedário
 * 
 * @param {*} lnumb número de letras do array
 * @param {*} finalArray array final a ser apresentado no tabuleiro
 */
 function makeRandomBoard(lnumb,finalArray){

    // console.log("A preencher board");

    for(let i=0; i<lnumb ; i++){/*i vai de 0 ao número de letras do array final */
        finalArray.push(ABCD[Math.floor(Math.random()*(ABCD.length-1))]);/* e preenche-o com letras aleatórias do abecedário*/
    }

    console.log("Board preenchido");

}


export default makeRandomBoard;