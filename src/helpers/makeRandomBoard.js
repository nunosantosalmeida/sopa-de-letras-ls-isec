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