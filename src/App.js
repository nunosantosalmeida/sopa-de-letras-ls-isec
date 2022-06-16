/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbito da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022
 */

import "./App.css";
import "./assets/styles/body.css";
import "./assets/styles/container.css";
import "./assets/styles/header.css";
import "./assets/styles/section.css";
import Header from "./components/header/header.component";
import PanelControl from "./components/painel-control/painel-control.component";
import Footer from "./components/footer/footer.component";
import GameBoard from "./components/game-board/game-board.component";
import { React, useEffect, useState } from "react";
import { TIMEOUTGAME, INITIAL_BOARD_SIDE_SIZE} from "./constants";
import {fillBoard} from "./helpers";


let timerId = undefined;
let boardSize = INITIAL_BOARD_SIDE_SIZE * INITIAL_BOARD_SIDE_SIZE;
let boardInfo = fillBoard({boardSize});
let finalArray = boardInfo[0];
let usedWords = boardInfo[1];

function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [boardSide, setBoardSide] = useState(10);
  const [timer, setTimer] = useState(TIMEOUTGAME);

  // Temporizador
  useEffect(() => {
    if (gameStarted) {
      let nextTimer;
      timerId = setInterval(() => {
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          return nextTimer;
        });
      }, 1000);
    } else if (timer !== TIMEOUTGAME) {
      setTimer(TIMEOUTGAME);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted]);


  // Se o tempo se esgotar, parar o jogo e fazer clearInterval do timerId
  useEffect(() => {
    if (timer <= 0) {
      console.log("condição timer <= 0");
      setGameStarted(false);
      clearInterval(timerId);
    }
  }, [timer]);

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);

    switch (value) {
      case '1':
        boardSize = 10 * 10;
        break;
      case '2':
        boardSize = 20 * 20;
        break;
      case '3':
        boardSize = 25 * 25;
        break;
      default:
        boardSize = INITIAL_BOARD_SIDE_SIZE * INITIAL_BOARD_SIDE_SIZE;
        break;
    }

    console.log("A mudar boardSize para " + boardSize);
  };

  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    } else {
      console.log("Inicia Jogo");

      boardInfo = fillBoard({boardSize});
      finalArray = boardInfo[0];
      usedWords  = boardInfo[1];

      setGameStarted(true);
    }
  };

  return (
    <div id="container">
      <Header />
        <PanelControl
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          timer={timer}
        />
        <GameBoard
          selectedLevel={selectedLevel}
          usedWords={usedWords} // POPULAR ISTO
          letters={finalArray} // POPULAR ISTO
          lnumb={boardSize}
        />
      <Footer/>
    </div>
  );
}

export default App;
