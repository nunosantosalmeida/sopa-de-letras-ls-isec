/**
 * placeWordHorizontal
 * 
 * Coloca palavras em verticalmente no tabuleiro
 * 
 */
 function placeWordHorizontal(chosenWord, boardSize, finalArray, usedWords){
    let wordToPlace = "";
    let cantcontinue=false;  /** cantcontinue - variável de controlo para saber se a posição aleatória gerada já está ocupada (ou não) */
    let randPos;  /**randPos - posição aleatória gerada para colocação da palavra no array final*/
    let linha = Math.sqrt(boardSize);  /**linha - calcula o número de linhas/colunas (como o tabuleiro é quadrado então se lnumb=25, sabemos que linha será 5 [5 linhas * 5 colunas]) */
    let attempts =0; /**attempts - tentativas realizadas de gerar uma posição aleatória. Caso as tentativas sejam maiores que o número de letras no tabuleiro, a função retorna vazio, evitando deadlocks.  **/

    while(true){
        attempts++;
        if(attempts > boardSize * 100){
            return; 
        }
        
        cantcontinue=false;
        randPos = Math.floor(Math.random()*boardSize); /*calcula um num aleatório de 0 ao número de letras no tabuleiro*/
        randPos = Math.floor(Math.random() * boardSize);
        if(Math.floor(Math.random()*100)<50)
            wordToPlace = [...chosenWord].reverse();
        else
            wordToPlace = [...chosenWord];

        // Verifica se cada letra do array não será colocada numa posição ocupada (coluna em específico)
        let k = 0;
        for(let pos = randPos; pos < randPos+wordToPlace.length; pos++){
            if(finalArray[pos] !== "" && finalArray[pos] !== wordToPlace[k]){
                cantcontinue = true;
                break;
            }   
            k++;
        }       

        if (!cantcontinue && randPos%10 + wordToPlace.length <= linha) {
            let j = 0;
            for (let i = randPos;i < randPos + wordToPlace.length;i++) {/*i começa na posição encontrada até ao tamanho da palavra*num de linhas (lembrando que estamos a colocar uma palavra numa coluna) */
                finalArray[i] = wordToPlace[j];  /*coloca a letra atual da palavra a colocar na posição i do array */
                j++; /*Avança para a letra seguinte do array da palavra a colocar*/
            }
            usedWords.push([chosenWord.join(''), [randPos, randPos + chosenWord.length - 1, false]]); /*Coloca a palavra colocada como string no tabuleiro nas palavras usadas*/
            return
        }
        else{
            continue;
        }
    }    
}
export default placeWordHorizontal;