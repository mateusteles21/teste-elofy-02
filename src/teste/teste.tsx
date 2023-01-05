import React from 'react';
import './teste.css';

function Teste() {
  return (
    <div className="teste">
      <div className='navbar'>
        <div className='item'>
          <a href='/conteudo'>home</a>
        </div>
        <div className='item'>sobre</div>
        <div className='item'>contato</div>
        <div>
        
          <input type="text" placeholder='Pesquisar'/>
        </div>
      </div>
    </div>
  );
}

export default Teste;