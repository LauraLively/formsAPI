import React from 'react';
import { Link,} from "react-router-dom"

const apiURL = 'http://localhost:3000'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(evt) {
      this.setState({[evt.target.name]: evt.target.value});
    }
  
    handleSubmit = async (event)=> {
      event.preventDefault();
      // console.log(this.state);
      let data = {
        email : this.state.email,
        password : this.state.password
      }
      await fetch(`${apiURL}/login`, {
        method: "POST",
        body: JSON.stringify(data)
    })
      .then( response => {
        if(!response.ok){
          alert("You failed");
        } else {
          this.props.history.push("./welcome")
        }
      })
      .catch( error => console.log(error))
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <h2>Please Login!</h2>
          <label>
            <input type="email" name="email" value={this.state.email} 
            onChange={this.handleChange} placeholder="* Email..." required/>
          </label>
          <br/>
          <label>
            <input type="password" name="password" value={this.state.password} 
            onChange={this.handleChange} placeholder="* Password..." required/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
          <br/>
          <Link to="/forgot">Forgot password?</Link>

        </form>
      );
    }
  }
  
  export default Login;