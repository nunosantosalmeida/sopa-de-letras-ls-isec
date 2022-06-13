import React from "react";

function PanelControl(props) {
  const { gameStarted, handleGameStart, selectedLevel, handleLevelChange, timer } = props;
  const gameStartedClass = gameStarted ? " gameStarted" : "";


  return (
    <section id="panel-control">
      <form className="container-fluid text-center">
        <fieldset className="form-group">
          <select 
            id="btLevel"
            defaultValue="0"
            onChange={handleLevelChange}
            disabled={handleGameStart}
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
         disabled={selectedLevel !== "0"}
         onClick={handleGameStart}
         className="button play"
        >
          {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
        </button>

        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">{timer}</dd>
        </dl>
        <dl className={`list-item right${gameStartedClass}`}>
          <dt>Pontuação TOP:</dt>
          <dd id="pointsTop">0</dd>
        </dl>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Pontuação:</dt>
          <dd id="points">0</dd>
        </dl>

      </form>

    </section>
  );
}

export default PanelControl;
