/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

function updateTopScore(newpoints) {
    // var element = document.getElementById("pointsTop");
    // element.textContent = parseInt(newpoints);
    // localStorage.setItem("pointsTop", parseInt(newpoints));

    var element = document.getElementById("pointsTop");
    element.textContent = String(newpoints);
    localStorage.setItem("TOPSCORE", JSON.stringify(newpoints));
}

export default updateTopScore;