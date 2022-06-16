/**
 * placeInLineWord
 * 
 * Coloca palavras em linha no tabuleiro
 * 
 * @param {*} word2array palavra em formato Array
 * @param {*} lnumb numero de letras do tabuleiro
 * @param {*} finalArray array final a apresentar no tabuleiro
 * @param {*} usedWords array de palavras já utilizadas no tabuleiro (para ser atualizado)
 * @param {*} positionsOccupied posições já ocupadas por outras palavras
 */

 function placeInLineWord(word2array, lnumb, finalArray, usedWords, positionsOccupied){
   
    // console.log("placeInLineWord");

    /** cantcontinue - variável de controlo para saber se a posição aleatória gerada já está ocupada (ou não) */
    let cantcontinue=false; 
    /**randPos - posição aleatória gerada para colocação da palavra no array final*/
    let randPos;
    /**found1 - variável de controlo para saber se a posição gerada aleatoriamente cumpre os requisitos de colocação */ 
    let found1=false;
    /**found2 - variável de controlo para saber se a posição gerada aleatoriamente cumpre os requisitos de colocação */ 
    let found2 = false;
    /**foundPos - posição encontrada que cumpre o requisito de não estar ocupada por uma palavra e a posição gerada ser o começo de uma linha */
    let foundPos;
    /**linha - calcula o número de linhas/colunas (como o tabuleiro é quadrado então se lnumb=25, sabemos que linha será 5 [5 linhas * 5 colunas]) */
    let linha = Math.sqrt(lnumb);
     /**attempts - tentativas realizadas de gerar uma posição aleatória. Caso as tentativas sejam maiores que o número de letras no tabuleiro, 
      * a função retorna vazio, evitando deadlocks.
      * */
    let attempts =0;

    while(!found1 || !found2){
        attempts=attempts+1; /*realizada mais uma tentativa*/
        if(attempts>lnumb){
            return; /*Caso as tentativas sejam maiores que o num de letras no tabuleiro, retorna vazio*/ 
        }
        cantcontinue=false;
        found1 =false;
        found2 = false;

        randPos = Math.floor(Math.random()*(lnumb-1)); /*calcula um num aleatório de 0 ao número de letras no tabuleiro*/
         /*coloca no inicio da uma linha qualquer*/
        for(let k = 0; k<positionsOccupied.length;k++){ /*procura todas as posições ocupadas no tabuleiro */
            for(let pos=randPos; pos<randPos+word2array.length;pos++){/*verifica se cada letra do array não será colocada numa posição ocupada */
                if(positionsOccupied[k]===pos){/*Caso uma delas esteja numa posição ocupada... */
                    cantcontinue = true;/*...não poderá continuar com esta posição */
                    continue; /*"Salta" do for loop*/
                }
            }
            
        }

        if(!cantcontinue && Number.isInteger(randPos/linha)){ /*Caso possa continuar e comece no início de uma linha... */
             found1 = true; /*...a primeira condição é verificada */
             foundPos = randPos; /*E obtemos a primeira posição encontrada */
             while (!found2){ /*Enquanto a segunda condição não se verificar ...*/
                 randPos = Math.floor(Math.random()*(linha-1)); /*...é gerado um número aleatório de 0 ao número de letras por linha */
                 if((randPos+word2array.length)<=linha){ /*Caso o número gerado + o tamanho da palavra caiba numa linha...*/
                     found2 = true;/*...é verificada a segunda condição*/
                     foundPos = foundPos + randPos;/*E obtemos a posição de onde será começada a colocar a palavra no array final */

                     randPos = foundPos; /*Voltamos a colocar esta posição encontrada na posição aleatória (colocada novamente por lógica de código) */
                    
                     //console.log(randPos);//debug
                     
                     let j=0;/*posição inicial do array da palavra a colocar*/  
                     for (let i = randPos; i < randPos+word2array.length; i++) {/*i começa na posição encontrada até ao tamanho da palavra */
                       finalArray[i] = word2array[j]; /*coloca a letra atual da palavra a colocar na posição i do array */
                       positionsOccupied.push(i); /*Coloca i (posição do array final ocupada pela nova palavra/letra) no array de posições ocupadas */

                       //console.log("final: "+i+finalArray[i]+" || palavra "+j+word2array[j] ); //debug

                       j++; /*Avança para a letra seguinte do array da palavra a colocar*/
                     }
                     usedWords.push([word2array.join(''), [randPos,randPos+word2array.length-1, false]]); /*Coloca a palavra colocada como string no tabuleiro nas palavras usadas*/


                 }
             }
         }
    }

    //console.log(positionsOccupied); //debug
}

export default placeInLineWord;