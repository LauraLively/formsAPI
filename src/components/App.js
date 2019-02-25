import React, { Component } from 'react';

const apiURL = 'http://localhost:3000'

class App extends Component {
  state = {
    contacts : [],
    firstName : "",
    lastName : "",
    email : "",
    password : "",
  }

  fetchUsers = async () => {
    await fetch(`${apiURL}/users`) // Call the fetch function passing the url of the API as a parameter
      .then( response => response.json())
      .then( data => data.map(element => 
          <div className="response">
            <div>{element.firstName} {element.lastName}</div>
            <div>{element.email}</div>
          </div>
        ))
      .then(components => this.setState({ contacts : components}))
      .catch(function (error) {
        console.log(error)
      });
  }

  postUser = async (event) => {
    event.preventDefault()
    let data = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      email : this.state.email,
      password : this.state.password
    }
    await fetch(`${apiURL}/user`, {
        method: "POST",
        body: JSON.stringify(data)
    }).then( () => this.fetchUsers())
      .then( () => this.setState({ firstName : ""}))
      .then( () => this.setState({ lastName : ""}))
      .then( () => this.setState({ email : ""}))
      .then( () => this.setState({ password : ""}))
      .catch( error => console.log(error))
  }

  componentDidMount () {
    this.fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.postUser}>
            <input type='text' placeholder='First Name...' value={this.state.firstName} onChange={ event => this.setState({ firstName : event.target.value }) }/><br/>
            <input type='text' placeholder='Last Name...' value={this.state.lastName} onChange={ event => this.setState({ lastName : event.target.value }) }/><br/>
            <input type='email' placeholder='Email...' value={this.state.email} onChange={ event => this.setState({ email : event.target.value }) }/><br/>
            <input type='password' placeholder='Password...' value={this.state.password} onChange={ event => this.setState({ password : event.target.value }) }/><br/>
            <input type="submit"/>
          </form>
          {this.state.contacts}
        </header>
      </div>
    );
  }
}

export default App;