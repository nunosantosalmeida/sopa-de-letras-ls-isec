/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

function markWordFound(wordIndexes, usedWords) {
    for(let i=0; i < usedWords.length; i++){ 
        if(((wordIndexes[0] === usedWords[i][1][0]) && (wordIndexes[1] === usedWords[i][1][1])) 
        || ((wordIndexes[1] === usedWords[i][1][0]) && (wordIndexes[0] === usedWords[i][1][1]))) {
            usedWords[i][3] = true;   // marcar palavra como encontrada         
        }
    }
}

export default markWordFound;