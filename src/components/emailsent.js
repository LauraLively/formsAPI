import React, {Component} from 'react';
import { Link,} from "react-router-dom"


class emailSent extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Email has been sent</h2>
                <br/>
                <Link to="/login"><input type="submit" name="Login" value="Login" /></Link>
            </React.Fragment>
        )
    }
}
export default emailSent;
