/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import React from "react";
import "../../assets/styles/painel-control.css";
import { LEVEL_SETTINGS_MAP } from "../../constants";


/**
 * PanelControl - Componente que contém o botão de início/paragem, contagem de tempo, seleção de nível e pontuação do jogo 
 * 
 * @param {*} props (gameStarted, onGameStart, selectedLevel, onLevelChange, timer)
 * @returns objeto jsx
 */
function PanelControl(props) {
  const { gameStarted, onGameStart, selectedLevel, onLevelChange, timer } =
    props;
  const gameStartedClass = gameStarted ? " gameStarted" : "";

  return (
    <div id="panel-control">
      <div className="gameButtons">
        <fieldset className="form-group">
          <select
            id="btLevel"
            defaultValue="0"
            onChange={onLevelChange}
            disabled={gameStarted}
          >
            <option value="0" disabled>Seleccione...</option>
            <option value="1">Básico ({LEVEL_SETTINGS_MAP[1]["tam_board"] + "x" + LEVEL_SETTINGS_MAP[1]["tam_board"]})</option>
            <option value="2">Intermédio ({LEVEL_SETTINGS_MAP[2]["tam_board"] + "x" + LEVEL_SETTINGS_MAP[2]["tam_board"]})</option>
            <option value="3">Avançado ({LEVEL_SETTINGS_MAP[3]["tam_board"] + "x" + LEVEL_SETTINGS_MAP[3]["tam_board"]})</option>
          </select>
        </fieldset>
        <button 
          type="buttonWord2" 
          id="btNewWord2" 
          className="button newWord2"
          disabled={selectedLevel === "1" || selectedLevel === "2" || selectedLevel === "3" }
          >
            Nova Palavra
          </button>
        <button
          type="buttonPlay"
          id="btPlay"
          disabled={selectedLevel === "0"}
          onClick={onGameStart}
          className="button play"
        >
          {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
        </button>
        </div>
        <div className="gameinfo">
          <div className="timer">
              <dt id="tmpJ">Tempo de Jogo:</dt>
              <div id="gameTime">{timer}</div>
            </div>
            <div className="point">
              <dt id="pnt">Pontuação:</dt>
              <div id="points">0</div>
            </div>
            <div className="points-top">
              <dt id="pntT">Pontuação TOP:</dt>
              <div id="pointsTop">0</div>
            </div>   
        </div>
    </div>
  );
}

export default PanelControl;
