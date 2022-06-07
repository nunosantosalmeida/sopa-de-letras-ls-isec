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
 * @returns letra em jsx
 */
function Letter({item}){
    return (
    <div className="letter">
        {item}
    </div>
    )
}

export default Letter