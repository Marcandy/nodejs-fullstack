import React, { Component } from 'react';

class App extends Component {

  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  componentDidMount() {
    this.getDataFromDb();
    if(!this.state.intervalIsSet) {

      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval})
    }
  }

  componentWillUnmount() {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>I'm Ready to use tehe backend API.</p>
        </header>
      </div>
    );
  }
}

export default App;
