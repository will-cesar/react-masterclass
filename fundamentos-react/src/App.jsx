import React from "react";

import './App.css';

import Card from './components/layout/Card';
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default props => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
      <Card titulo="#11 - Mega" color="#73503C">
          <Mega qtdeNumero={8}></Mega>
        </Card>

        <Card titulo="#10 - Contador" color="#293E6A">
          <Contador passo={10} valor={100}></Contador>
        </Card>

        <Card titulo="#09 - Input" color="#9C0F5F">
          <Input></Input>
        </Card>

        <Card titulo="#08 - Comunicação indireta" color="#000">
          <Super></Super>
        </Card>

        <Card titulo="#07 - Comunicação direta" color="#4298B5">
          <Pai sobrenome="Freitas"></Pai>
        </Card>

        <Card titulo="#06 - Componente com Condicional v2" color="#FA6900">
          <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Componente com Condicional v1" color="#E94C6F">
          <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Componente com Repetição" color="#008BBA">
          <Repeticao></Repeticao>
        </Card>
        
        <Card titulo="#03 - Componente com Filhos" color="#D96459">
          <ComFilhos>
            <ul>
              <li>Ana</li>
              <li>João</li>
              <li>Carlos</li>
            </ul>
          </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente com parâmetro" color="#FF85CB">
          <ComParametro
            titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#92B06A">
          <Primeiro /> 
        </Card>
      </div>
    </div>
  )
}