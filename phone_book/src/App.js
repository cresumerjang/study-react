import React, { Component, Fragment } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfo from './components/PhoneInfo';
import information from './data';

class App extends Component {
  id = 2
  state = {
    information: information
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    const { information } = this.state;
    return (
      <Fragment>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfo/>
        {JSON.stringify(information)}
      </Fragment>
    );
  }
}

export default App;
