/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import React from 'react';
import "./letter.css"
/**
 * Letter
 * 
 * Representa uma letra (em jsx) a ser apresentada num tabuleiro
 * 
 * @param {*} param0 Letra a ser apresentada
 * @param {*} param1 key
 * @returns letra em jsx
 */
function Letter(props){

    const {lett, index, selecting, setSelecting, setSelection, isFound} = props;

    let ind=index;
    function click(){
        console.log("KEY: "+ind+" | LETER: "+lett);
        //setletter(lett);
    }

    function down(){
        console.log("A SIRUGAR: KEY: " + ind + " | LETER: " + lett);
        setSelection([ind, lett]);
        setSelecting(true);
    }

    function up(){
        console.log("LARGOU: KEY: " + ind + " | LETER: " + lett);
        setSelection([ind, lett]);
        setSelecting(false);
    }

    const found = isFound ? "found" : "";

    return (
        // <div className={`letter ${found}`} id={"letter"+index} onMouseDown={down} onMouseUp={up}></div>
    <div className={"letter "+found} id={"letter"+index} onMouseDown={down} onMouseUp={up}>
        {lett}
    </div>
    )
}

export default Letter