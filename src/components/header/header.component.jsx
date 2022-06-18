/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022
 */

import React from "react";
/**
 * Header - Contém o título da aplicação ("Sopa de Letras") e descrição da mesma.
 *
 */
function Header() {
  return (
    <header>
      <section id ="header">
        <div className="container-fluid text-center">
          <h1 className="tittle display-4">Sopa de Letras</h1>
          <h2 className="subtitle">Trabalho Prático de Linguagens Script - 2021/2022</h2>
        </div>
      </section>
    </header>
  );
}

export default Header;
