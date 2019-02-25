import React from 'react';
import { withRouter } from 'react-router-dom'

const apiURL = 'http://localhost:3000'

class forgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(this.state);
        let data = {
          email : this.state.email,
        }
        await fetch(`${apiURL}/forgotpassword`, {
          method: "POST",
          body: JSON.stringify(data)
      })
        .then( response => {
          if(!response.ok){
            alert("You failed");
          } else {
            this.props.history.push("./emailsent")
          }
        })
        .catch( error => console.log(error))
      }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h3>Enter your email and you will receive a link to reset your password</h3>
                    <input type="email" name="email" value={this.state.email}
                        onChange={this.handleChange} placeholder="Email" />
                </label>
                <br />
                <input type="submit" name="submit" value="Submit" />
                <br />
            </form>
        );
    }
}

export default withRouter(forgot);