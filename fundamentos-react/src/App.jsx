import React from "react";

import './App.css';

import Card from './components/layout/Card';
import Primeiro from "./components/Primeiro";
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";

export default props => {
  return (
    <div className="App">
      <Card titulo="#06 - Componente com Condicional v2">
        <CondicionalComIf numero={11}></CondicionalComIf>
      </Card>

      <Card titulo="#05 - Componente com Condicional v1">
        <Condicional numero={10}></Condicional>
      </Card>

      <Card titulo="#04 - Componente com Repetição">
        <Repeticao></Repeticao>
      </Card>
      
      <Card titulo="#03 - Componente com Filhos">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>João</li>
            <li>Carlos</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente com parâmetro">
        <ComParametro
          titulo="Esse é o título"
          subtitulo="Esse é o subtítulo" />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro /> 
      </Card>


      

      

      {/* <ComParametro
        titulo="Opa"
        subtitulo="Epa" />  */}
    </div>
  )
}