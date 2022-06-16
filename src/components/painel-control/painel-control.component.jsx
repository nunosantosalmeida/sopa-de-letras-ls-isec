import React from "react";
import "../../assets/styles/painel-control.css";

function PanelControl(props) {
  const { gameStarted, onGameStart, selectedLevel, onLevelChange, timer } =
    props;
  const gameStartedClass = gameStarted ? " gameStarted" : "";

  return (
    <div id="panel-control">
      <form className="container-fluid text-center">
        <fieldset className="form-group">
          <select
            id="btLevel"
            defaultValue="0"
            onChange={onLevelChange}
            disabled={gameStarted}
          >
            <option value="0">Seleccione...</option>
            <option value="1">Básico (10x10)</option>
            <option value="2">Intermédio (20x20)</option>
            <option value="3">Avançado (25x25)</option>
          </select>
        </fieldset>
        <button
          type="button"
          id="btPlay"
          disabled={selectedLevel === "0"}
          onClick={onGameStart}
          className="button play"
        >
          {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
        </button>

          <dl className={`list-item left${gameStartedClass}`}>
            <dt id="tmpJ">Tempo de Jogo:</dt>
            <dd id="gameTime">{timer}</dd>
          </dl>
          <dl className={`list-item right${gameStartedClass}`}>
            <dt id="pntT">Pontuação TOP:</dt>
            <dd id="pointsTop">0</dd>
          </dl>
          <dl className={`list-item left${gameStartedClass}`}>
            <dt id="pnt">Pontuação:</dt>
            <dd id="points">0</dd>
          </dl>
      </form>
    </div>
  );
}

export default PanelControl;
