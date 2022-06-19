/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */



 function addNewWord() {
    let words=[];
    if(JSON.parse(localStorage.getItem("USERWORDS"))!=null)
        words =  JSON.parse(localStorage.getItem("USERWORDS"));

    console.log("Adicionar nova palavra");

    let infoText;
    let userInput = prompt("Por favor introduza a palavra nova:", "EXEMPLO");
    if (userInput == null || userInput == "") {
      infoText = "Introdução de palavra nova cancelada pelo utilizador";
      alert(infoText);
    } else {
        const txtNormalized = userInput.normalize('NFD').replace(/[\u0300-\u036f]|[^a-zA-Z]/g, '').replace(/[^\w\-]+/g, '');
        words.push(txtNormalized.toUpperCase());
        infoText = "Adicionada a palavra " + txtNormalized.toUpperCase() + " à lista de possíveis palavras.";
        alert(infoText);
    }
    //console.log(words);
    localStorage.setItem("USERWORDS", JSON.stringify(words));
}

export default addNewWord;