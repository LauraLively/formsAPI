import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


const apiURL = 'http://localhost:3000'

class Register extends Component {
  state = {
    contacts : [],
    firstName : "",
    lastName : "",
    phone : "",
    email : "",
    password : "",
  }

  fetchUsers = async () => {
    await fetch(`${apiURL}/users`) // Call the fetch function passing the url of the API as a parameter
      .then( response => response.json())
      .then(components => this.setState({ contacts : components}))
      .catch(function (error) {
        console.log(error)
      });
  }


  postUser = async (event) => {
    event.preventDefault()
    this.props.history.push("/welcome");
    let data = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      phone : this.state.phone,
      email : this.state.email,
      password : this.state.password
    }
    await fetch(`${apiURL}/user`, {
        method: "POST",
        body: JSON.stringify(data)
    }).then( () => this.fetchUsers())
      .then( () => this.setState({ firstName : "", lastName : "", phone : "", email : "", password : ""}))
      .catch( error => console.log(error))
  }

  componentDidMount () {
    this.fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <React.Fragment>
          <form onSubmit={this.postUser}>
            <input type='text' placeholder='First Name...' value={this.state.firstName} onChange={ event => this.setState({ firstName : event.target.value }) }/><br/>
            <input type='text' placeholder='Last Name...' value={this.state.lastName} onChange={ event => this.setState({ lastName : event.target.value }) }/><br/>
            <input type='tel' placeholder='Phone...' value={this.state.phone} onChange={ event => this.setState({ phone : event.target.value})} /> <br/>
            <input type='email' placeholder='* Email...' value={this.state.email} onChange={ event => this.setState({ email : event.target.value }) }required/><br/>
            <input type='password' placeholder='* Password...' value={this.state.password} onChange={ event => this.setState({ password : event.target.value }) }required/><br/>
            <input type="submit"/>
          </form>
        </React.Fragment>
        </header>
      </div>
    );
  }
}

export default withRouter(Register);