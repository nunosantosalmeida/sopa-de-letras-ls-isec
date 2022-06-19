/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022
 */

import React from "react";
import Letter from "../letter/letter.component";
import WordFind from "../word-find/word-find.component";
import "./game-board.css";

/**
 * GameBoard
 *
 * @param {*} params ({usedWords, letters, selectedLevel, levelSettings, selecting, setSelecting, setSelection, foundLetters})
 *
 * @returns Cria um tabuleiro de letras aleatórias e palavras, apresentando o mesmo em jsx.
 */

function GameBoard({
  usedWords,
  letters,
  selectedLevel,
  levelSettings,
  selecting,
  setSelecting,
  setSelection,
  foundLetters,
}) {
  const gameClass =
    selectedLevel === "0"
      ? "inicial"
      : selectedLevel === "1"
      ? "facil"
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";

  return (
    <div id="table">
      {/*Div que contém os divs tabuleiro (board) e palavras Usadas (usedWords)*/}
      <div
        className="board noselect"
        id="board"
        style={{
          gridTemplateColumns:
            "repeat(" + Math.sqrt(levelSettings["area_board"]) + ",1fr)",
          gridTemplateRows:
            "repeat(" + Math.sqrt(levelSettings["area_board"]) + ",1fr)",
        }}
      >
        {letters.map((item, index) => (
          <Letter
            /*setletter={setletter}*/ lett={item}
            index={index}
            selecting={selecting}
            setSelecting={setSelecting}
            setSelection={setSelection}
            isFound={foundLetters.includes(index)}
          />
        ))}
      </div>
      <div className="boxUsedWords">
        <div className="usedWords">
          {usedWords.map((item) => (
            <WordFind item={item} />
          ))}
        </div>
        <div className="new-wordBox">
          <button type="buttonWord" id="btNewWord" className="btnNW">
            Nova Palavra
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
