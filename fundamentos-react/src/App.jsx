import React from "react";

import './App.css';

import Card from './components/layout/Card';
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

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
    </div>
  )
}