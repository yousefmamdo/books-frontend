import React, {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Alert } from 'react-bootstrap';

class Profile extends Component {
    
    render(){
        const { user, isAuthenticated } = this.props.auth0;
        return(



            <div>
           <center> <Alert>{ isAuthenticated && <h2>Hello {user.name}</h2> }</Alert></center>
           <center><Alert>{isAuthenticated && <h3>your Email :  {user.email}</h3>}</Alert></center>
            {console.log(user)}
            <center>{isAuthenticated && <img src={user.picture}alt='img' width='200px' height='200'/>}</center>
            </div>
          ) 
    }
}
export default withAuth0(Profile);