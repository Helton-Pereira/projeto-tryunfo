import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validation = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const cardAttr1Number = parseInt(cardAttr1, 10);
    const cardAttr2Number = parseInt(cardAttr2, 10);
    const cardAttr3Number = parseInt(cardAttr3, 10);
    const cardAttrNumberLimit = 90;

    const cardAttrTotal = cardAttr1Number + cardAttr2Number + cardAttr3Number;
    const cardAttrLimit = 210;

    const cardAttrIsTrue = cardAttrTotal > cardAttrLimit;
    const buttonIsDisabled = cardName.length === 0 || cardDescription.length === 0
      || cardImage.length === 0 || cardRare.length === 0 || cardAttrIsTrue
      || cardAttr1.length === 0 || cardAttr2.length === 0 || cardAttr3.length === 0
      || cardAttr1Number < 0 || cardAttr1Number > cardAttrNumberLimit
      || cardAttr2Number < 0 || cardAttr2Number > cardAttrNumberLimit
      || cardAttr3Number < 0 || cardAttr3Number > cardAttrNumberLimit;
    this.setState({ isSaveButtonDisabled: buttonIsDisabled });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.validation();
    });
  };

  render() {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare,
      cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <form>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </form>
    );
  }
}

export default App;
