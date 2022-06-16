/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import React from 'react';
import Letter from '../letter/letter.component'
import "./game-board.css"

/**
 * GameBoard
 *
 * @param {*} param0 número de letras do tabuleiro
 * @returns Cria um tabuleiro de letras aleatórias e palavras, apresentando o mesmo em jsx.
 */
function GameBoard({usedWords, letters, selectedLevel, lnumb}) {

    const gameClass =
    selectedLevel === "0"
      ? "inicial"
      : selectedLevel === "1"
      ? "facil"
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";

    /*const [letter, setletter]=useState([]);


    function showSelectedWords(){

    }*/
    return (
    <div className="table noselect">{/*Div que contém os divs tabuleiro (board) e palavras Usadas (usedWords)*/}
        <div
        className="board"
        style={{
            gridTemplateColumns: "repeat(" + Math.sqrt(lnumb) + ",1fr)",/* */
            gridTemplateRows: "repeat(" + Math.sqrt(lnumb) + ",1fr)",
        }/*Div que contém o tabuleiro. O style especifica quantas colunas terá e quantas linhas te´ra (sqrt de num total de letras (9=3linhas*3colunas))*/}
        >

          {letters.map((item,index) => (/*Coloca todos as letras do array a apresentar...*/
            <Letter /*setletter={setletter}*/ lett={item} index= {index} />
          ))/*...Em elementos do tipo letra */}
        </div>
        <div className="usedWords" /*onClick={showSelectedWords}*/>{/*Div que contém as palavras usadas no tabuleiro*/}
            Used Words:
            {usedWords.map((item, index) => '\n[' + index + ' -  ' + item + ']')}{' '/*Coloca cada uma no texto a apresentar */}
          
        </div>
      </div>
    );
}

export default GameBoard;