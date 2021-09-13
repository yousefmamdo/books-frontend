import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './Profile'
import BestBooks from './BestBooks'
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react'

class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">

                {isAuthenticated ? <BestBooks /> : <Login />}
              </Route>
              <Route exact path="/Profile">
                <Profile />
              </Route>

            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App)