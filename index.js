import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogList: []
    };
  }

componentDidMount(){
  fetch('https://dog.ceo/api/breeds/image/random/20')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    this.setState({
      dogList: myJson.message
    })
  });
}
  render() {
    console.log(this.state.dogList);
    let dogs = this.state.dogList.map((item, i) => 
    <li key={i}>
    {<img src={item} />}
    </li>)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {dogs}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App title='Dog API Project'/>, document.getElementById('root'));
