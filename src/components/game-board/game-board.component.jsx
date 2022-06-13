/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import React,{useState} from 'react';

import Letter from '../letter/letter.component'

import "./game-board.css"

/**
 * abc - array que contém o abecedário usado na apresentação de letras no tabuleiro
 */
const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].sort(() => Math.random() - 0.5);

/**
 * words - array de palavras a serem utilizadas no tabuleiro (para serem descobertas pelo jogador/utilizador)
 */
let words = ["ABCDEFIK","REN","HU","OLAK","TY","UGAUGA","BOB","YUH","HAHAHA","HEHEHE"];



function PlaceInDiagonalWord(){

}

/**
 * GameBoard
 * 
 * @param {*} param0 número de letras do tabuleiro
 * @returns Cria um tabuleiro de letras aleatórias e palavras, apresentando o mesmo em jsx.
 */
function GameBoard({lnumb}){
    /**finalArray - Array a apresentar no tabuleiro */
    let finalArray=[];
    /**randomword - Palavra aleatória (utilizada para colocar palavras aleatórias no array finalArray) */
    let randomword;
    /**positionsOccupied - Array com posições já ocupadas por palavras*/
    let positionsOccupied = [];
    /**usedWords - Array com palavras já utilizadas no tabuleiro (definidas como strings)*/
    let usedWords= [];
    /**word2array - Palavra em forma de array (para colocar nas posições do finalArray)*/
    let word2array;
    /**inverse - Variável de controlo para verificar se palavra será colocada inversamente ou não*/
    let inverse;


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
        /**randomWord - Palavra a retornar */
        let randomword; 
        /**passLineCHeck - variável de controlo para saber se a palavra cabe numa linha/coluna*/
        let passLineCheck=false; 

        while(!passLineCheck){/*Enquanto não passar na condição de caber numa linha ou coluna...*/
            randomword=words[Math.floor(Math.random()*words.length)];/*...escolhe uma palavra aleatória do array indicado*/
            if(checkUsedWord(randomword, usedWords)){/*Se a mesma já está a ser usada...*/
                continue;/*...volta a procurar */
            }
            if(randomword.length<=Math.sqrt(lnumb)){/*Se couber numa linha/coluna...*/
                passLineCheck=true;/*...passa na condição*/
            }
        }

        return randomword;/*retorna a palavra encontrada*/
    }

    /**
     * PlaceInLineWord
     * 
     * Coloca palavras em linha no tabuleiro
     * 
     * @param {*} word2array palavra em formato Array
     * @param {*} lnumb numero de letras do tabuleiro
     * @param {*} finalArray array final a apresentar no tabuleiro
     * @param {*} usedWords array de palavras já utilizadas no tabuleiro (para ser atualizado)
     * @param {*} positionsOccupied posições já ocupadas por outras palavras
     * 
     */
    function PlaceInLineWord(word2array,lnumb,finalArray, usedWords,positionsOccupied){
    
        console.log(word2array); //debug
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
                        
                        console.log(randPos);//debug
                        
                        let j=0;/*posição inicial do array da palavra a colocar*/  
                        for (let i = randPos; i < randPos+word2array.length; i++) {/*i começa na posição encontrada até ao tamanho da palavra */
                        finalArray[i] = word2array[j]; /*coloca a letra atual da palavra a colocar na posição i do array */
                        positionsOccupied.push(i); /*Coloca i (posição do array final ocupada pela nova palavra/letra) no array de posições ocupadas */

                        console.log("final: "+i+finalArray[i]+" || palavra "+j+word2array[j] ); //debug

                        j++; /*Avança para a letra seguinte do array da palavra a colocar*/
                        }
                        usedWords.push(word2array.join('')); /*Coloca a palavra colocada como string no tabuleiro nas palavras usadas*/


                    }
                }
            }
        }

        console.log(positionsOccupied); //debug
    }

    /**
     * PlaceInColumnWord
     * 
     * Coloca palavras em linha no tabuleiro
     * 
     * @param {*} word2array palavra em formato Array
     * @param {*} lnumb numero de letras do tabuleiro
     * @param {*} finalArray array final a apresentar no tabuleiro
     * @param {*} usedWords array de palavras já utilizadas no tabuleiro (para ser atualizado)
     * @param {*} positionsOccupied posições já ocupadas por outras palavras
     * 
     */
    function PlaceInColumnWord(word2array,lnumb,finalArray, usedWords,positionsOccupied){

        console.log(word2array);//debug
        
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
            
            if(randPos+linha*(word2array.length) > lnumb){/*Se a posição encontrada + o número de linhas * o tamanho da palavra for maior que o número de letras do tabuleiro... */
                continue;/*..."salta" para a próxima iteração */
                
                /*Exemplo:

                Tabuleiro 3x3

                0 1 2 
                3 4 5
                6 7 8

                palavra = oi (2 letras)

                posição encontrada = 6 => 6(posição encontrada) + 3*2(linhas a ocupar) = 12 (ou seja maior que o numero de letras do tabuleiro)
                mas se a posição encontrada = 4 => 3(posição encontrada) + 3*2(linhas a ocupar)=9 (numero de peças do tabuleiro)  
                

                lembrando que apenas encontramos a posição na 1ª coluna
                */
            }

            for(let k = 0; k<positionsOccupied.length;k++){ /*procura todas as posições ocupadas no tabuleiro */
                for(let pos=randPos; pos<randPos+linha*(word2array.length);pos=pos+linha){/*verifica se cada letra do array não será colocada numa posição ocupada
                                                                                            percorrendo a coluna em específico */
                    if(positionsOccupied[k]===pos){/*Caso uma delas esteja numa posição ocupada... */
                        cantcontinue = true;/*...não poderá continuar com esta posição */
                        continue;/*"Salta" do for loop*/
                    }
                }
                
            }       

            if(!cantcontinue && Number.isInteger(randPos/linha)){/*Caso possa continuar e comece no início de uma linha... */
                found1 = true; /*...a primeira condição é verificada */
                foundPos = randPos; /*E obtemos a primeira posição encontrada */
                while (!found2) {/*...é verificada a segunda condição*/
                randPos = Math.floor(Math.random() * (linha - 1));/*...é gerado um número aleatório de 0 ao número de letras por linha (ou coluna no caso) */
                if (randPos + word2array.length <= linha) {/*Caso o número gerado + o tamanho da palavra caiba numa coluna...*/
                    found2 = true;/*A segunda condição é veriifcada */
                    foundPos = foundPos + randPos;/*E obtemos a posição de onde será começada a colocar a palavra no array final */

                    randPos = foundPos;/*Voltamos a colocar esta posição encontrada na posição aleatória (colocada novamente por lógica de código) */

                    console.log(randPos); //debug

                    let j = 0;/*posição inicial do array da palavra a colocar*/  
                    for (let i = randPos;i < randPos + linha * word2array.length;i = i + linha) {/*i começa na posição encontrada até ao tamanho da palavra*num de linhas 
                                                                                                    (lembrando que estamos a colocar uma palavra numa coluna) */
                    finalArray[i] = word2array[j];/*coloca a letra atual da palavra a colocar na posição i do array */
                    positionsOccupied.push(i);/*Coloca i (posição do array final ocupada pela nova palavra/letra) no array de posições ocupadas */

                    console.log("final: " +i +finalArray[i] +" || palavra " +j +word2array[j]); //debug

                    j++; /*Avança para a letra seguinte do array da palavra a colocar*/
                        
                    }
                        usedWords.push(word2array.join(''));/*Coloca a palavra colocada como string no tabuleiro nas palavras usadas*/
                }
                
                }
                console.log(positionsOccupied);//debug
            }
        }

        
    }

    /**
     * checkUsedWord
     * 
     * Verifica se uma palavra se encontra num array
     * 
     * @param {*} word palavra a verificar
     * @param {*} usedWords array de palavras utilizadas no tabuleiro
     * @returns true se word já foi utilizada e false caso contrário
     */
    function checkUsedWord(word, usedWords){
        for(let i=0;i<usedWords.length;i++){ /*Percorre o array de palavras utilizadas */
            if(word===usedWords[i]){/*Caso a palavra indicada se encontre no array de palavras usadas */
                return true;/*retorna true*/
            }
        }
        return false;/*Caso contrário retorna false*/

    }

    /**
     * MakeRandomBoard
     * 
     * Preenche array com  letras aleatórias do abcedário
     * 
     * @param {*} lnumb número de letras do array
     * @param {*} finalArray array final a ser apresentado no tabuleiro
     */
    function MakeRandomBoard(lnumb,finalArray){
        for(let i=0; i<lnumb ; i++){/*i vai de 0 ao número de letras do array final */
            finalArray.push(abc[Math.floor(Math.random()*(abc.length-1))]);/* e preenche-o com letras aleatórias do abecedário*/
        }
    }

    /**
     * fillBoard
     * 
     * Preenche array final com as letras e palavras geradas
     */
    function fillBoard(){
        MakeRandomBoard(lnumb,finalArray); /*preenche o array a apresentar no tabuleiro com palavras aleatórias do abecedário */

        for(let c=0; c<(Math.floor((Math.sqrt(lnumb))/2));c++){ /**coloca numero de linhas/2 de palavras no tabuleiro (para não ser completamente cheio de palavras) */
            
            randomword = getRandomWord(lnumb, usedWords);
            word2array = Array.from(randomword);
            inverse = Math.floor(Math.random()*99); /*Probabilidade de 50/50 de palavra ser invertida */
            if(inverse<50){ /*Caso inverse calhe em <50% */
                word2array.reverse(); /*palavra é invertida */
            }
            /*Caso contrário continua */

            inverse = Math.floor(Math.random()*99); /*Volta a gerar probabilidade 50/50, deta vez para saber se será colocada em linha, coluna ou diagonal */
            if(inverse<50){/*Caso inverse calhe em <50% */
                PlaceInLineWord(word2array,lnumb,finalArray, usedWords,positionsOccupied);/*Coloca em linha*/
            }else{
                PlaceInColumnWord(word2array,lnumb,finalArray, usedWords,positionsOccupied);/*Caso contrário coloca em coluna */
            }

            /*FALTA DESENVOLVER NA DIAGONAL */  
            
        }
    }

    fillBoard();
    
    for(let counter=0; counter<usedWords.length;counter++){//debug
        console.log(usedWords[counter]);//debug
    }//debug


    /*const [letter, setletter]=useState([]);


    function showSelectedWords(){

    }*/
    return (
      <div className="table">{/*Div que contém os divs tabuleiro (board) e palavras Usadas (usedWords)*/}
        <div
          className="board"
          style={{
            gridTemplateColumns: "repeat(" + Math.sqrt(lnumb) + ",1fr)",/* */
            gridTemplateRows: "repeat(" + Math.sqrt(lnumb) + ",1fr)",
          }/*Div que contém o tabuleiro. O style especifica quantas colunas terá e quantas linhas te´ra (sqrt de num total de letras (9=3linhas*3colunas))*/}
        >
            
          {finalArray.map((item,index) => (/*Coloca todos as letras do array a apresentar...*/
            <Letter /*setletter={setletter}*/ lett={item} index= {index} />
          ))/*...Em elementos do tipo letra */}
          <p></p>
        </div>
        <div className="usedWords" /*onClick={showSelectedWords}*/>{/*Div que contém as palavras usadas no tabuleiro*/}
            Used Words:
            {usedWords.map((item, index) => "\n"+"["+index+" -"+" "+item+"]")}{" "/*Coloca cada uma no texto a apresentar */}
        </div>
      </div>
    );
}

export default GameBoard;