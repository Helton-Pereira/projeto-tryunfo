import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name-input">
          Nome da carta:
          <input type="text" id="name-input" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Descrição da carta:
          <textarea id="description-input" data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1:
          <input type="number" id="attr1-input" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2:
          <input type="number" id="attr2-input" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3:
          <input type="number" id="attr3-input" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input type="text" id="image-input" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select id="rare-input" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          É super trunfo?
          <input type="checkbox" id="trunfo-input" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
