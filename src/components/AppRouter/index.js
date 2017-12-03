import React, { Component } from "react";
import { Switch, Route, Redirect,withRouter } from "react-router-dom";
import AuthPage from "../AuthPage";
import PrivateRoute from "../PrivateRoute";
import UserPage from "../UserPage";
import { logout } from '../../actions/auth'
import { getIsAuthorized} from '../../reducers';
import {getIsNetworkErrorPresent, getNetworkError} from '../../reducers/network'
import {getUsers} from '../../reducers';
import { connect } from 'react-redux';




class AppRouter extends Component {

handleClickLogout =()=> {
  const {logout} = this.props;
  logout();
}

render() {
    const {
      isAuthorized,
      IsNetworkErrorPresent,
      NetworkError,
      users: {isFetched}

    } = this.props ;
    return (
      <div className="App">
        {isAuthorized && isFetched ? (
          <button 
            className='logout'
            onClick={this.handleClickLogout}          
          >
            logout
          </button>
        ):null}
        {IsNetworkErrorPresent && isFetched ? (
          <div className="network-error">{NetworkError}</div>
        ):null}
        <Switch>
          <Route path="/login" exact component={AuthPage} />
          <PrivateRoute
            path="/user/:name"
            component={UserPage}
          />
          <PrivateRoute path= '/user/:name' component= {UserPage}/> 
          <Redirect to="/login/" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps =  {
  logout 
};

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  IsNetworkErrorPresent: getIsNetworkErrorPresent(state),
  NetworkError: getNetworkError(state),
  users : getUsers(state)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppRouter)
)





