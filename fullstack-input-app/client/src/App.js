import React, { Component } from 'react';
import { url } from 'inspector';
import axios from 'axios';

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
  // get Data from api
  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  }

  // put and update data
  putDataDB = (message) => {
    // map through ids
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;

    while(currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('/api/putData', {
      id: idToBeAdded,
      message: message
    })
  }

  deleteFromDB = (idToDelete) => {
    let objIdToDelete = null;

    this.state.data.forEach(dat => {
      if( dat.id = idToDelete){
        objIdToDelete = dat._id;
      }
    });

    axios.delete('/api/deleteData', {
      data: {
        id: objIdToDelete,
      }
    })
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
