/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import React from 'react';
/**
 * Letter
 * 
 * Representa uma letra (em jsx) a ser apresentada num tabuleiro
 * 
 * @param {*} param0 Letra a ser apresentada
 * @param {*} param1 key
 * @returns letra em jsx
 */
function WordFind(props){

    const {item} = props;
    const found = item[3] ? "foundWord" : "";

    return (
        <div className={found}>
            {/* {item[0] + " - " + item[1]} */}
            {item[0]}
        </div>
    )
}

export default WordFind