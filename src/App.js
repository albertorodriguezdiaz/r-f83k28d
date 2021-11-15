import React, { Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      show: true
    };
  }

  IncrementarNumero = () => {
    this.setState({ numero: this.state.numero + 1 });
  }

   render() {
    return (
      <div>
        <span className="value">{this.state.numero}</span>
        <button 
          onClick={this.IncrementarNumero}
          id="inc"
        >Incrementa</button>
      </div>
    );
  }
}

export default App;
