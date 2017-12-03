import React, { Component } from "react";
import { connect } from "react-redux";

import { authorize } from "../../actions/auth";
import { getIsAuthorized } from "../../reducers";
import { Redirect, withRouter } from "react-router-dom";

export class AuthPage extends Component {
  state = {
    localToken: ""
  };

  handleChange = e => {
    this.setState({ localToken: e.target.value });
  };

  handleCkick = e => {
    e.preventDefault();
    const { localToken } = this.state;
    const { authorize } = this.props;
    authorize(localToken);
  };

  render() {
    const { localToken } = this.state;
    const { isAuthorized } = this.props;

    return (
      <div className="auth">
        {isAuthorized ? <Redirect to="/user/me" /> : null}
        <form name="auth" className="auth__form">
          <div 
          className="auth__text"> Получить токен нужно на своей странице github, перейдите по 
            <a 
              href="https://github.com/settings/tokens"
            > адресу</a> и создайте себе токен. Запишите куда-нибудь токен как после создания доступ к нему будет только один раз.
                        
          </div>
          <div>
            <input
              type="text"
              className="auth__input"
              placeholder="auth__token"
              onChange={this.handleChange}
              value={localToken}
            />
            <button
              type="submit"
              className="auth__submit"
              onClick={this.handleCkick}
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    );
  }

  
}

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });
const mapDispatchToProps = { authorize };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthPage)
);