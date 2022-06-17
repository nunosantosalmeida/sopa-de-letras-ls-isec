/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import React from 'react';
import Letter from '../letter/letter.component'
import WordFind from '../word-find/word-find.component'
import "./game-board.css"

/**
 * GameBoard
 *
 * @param {*} param0 número de letras do tabuleiro
 * @returns Cria um tabuleiro de letras aleatórias e palavras, apresentando o mesmo em jsx.
 */
function GameBoard({usedWords, letters, selectedLevel, levelSettings, selecting, setSelecting, setSelection, foundLetters}) {

    const gameClass =
    selectedLevel === "0"
      ? "inicial"
      : selectedLevel === "1"
      ? "facil"
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";

      
    return (
    <div className="table noselect">{/*Div que contém os divs tabuleiro (board) e palavras Usadas (usedWords)*/}
        <div className="board"
          style={{
              gridTemplateColumns: "repeat(" + Math.sqrt(levelSettings[2]) + ",1fr)",
              gridTemplateRows: "repeat(" + Math.sqrt(levelSettings[2]) + ",1fr)",
          }}
        >
          {letters.map((item, index) => 
            (<Letter /*setletter={setletter}*/ lett={item} index={index} 
                selecting={selecting}
                setSelecting={setSelecting}
                setSelection={setSelection}
                isFound={foundLetters.includes(index)}
              />
            )
           )
          }
        </div>

        <div className="usedWords" >
          {usedWords.map((item, index) => (<WordFind item={item}/>))}
        </div>
      </div>
    );
}

export default GameBoard;