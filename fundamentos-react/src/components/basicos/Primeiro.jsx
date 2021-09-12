import React from 'react';

export default () => {
  return (
    <div>
      <h1>Primeiro Componente (Arrow)</h1>
      <h2>Exemplo de um componente React</h2>
    </div>
  )
}

/*
  Exemplo de um componente sendo feito do formato padrão de uma função

  function Primeiro() {
    return (
      <div>
        <h1>Primeiro</h1>
        <h2>Exemplo de um componente React</h2>
      </div>
    )
  }

  export default Primeiro
*/


/*
  Para retornar mais de um elemento dentro da função
  é necessário os mesmos serem filhos de um elemento, dos quais são:
  - <div>
  - <>
  - <React.Fragment>
*/