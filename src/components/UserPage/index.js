import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";
import Followers from "../Followers";
import { getUsers } from "../../reducers";
import { fetchUserRequest } from "../../actions/users";

class UserPage extends Component {
  componentDidMount() {
    const {
      fetchUserRequest,
      match: { params: { name } },
      users: { isFetching }
    } = this.props;
    if (!isFetching) {
      fetchUserRequest(name);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      fetchUserRequest,
      match: { params: { name } }
    } = this.props;
    const {
      match: { params: { name: newName } }
    } = nextProps;
    if (name !== newName) {
      fetchUserRequest(newName);
    }
  }

  render() {
    const {
      users: {
        isFetched,
        isFetching,
        error,
        user: { avatar_url, login, followers, public_repos }
      }
    } = this.props;

    if (!isFetched || isFetching) {
      return <Spinner />;
    }
    if(error){
      return(
        <div className="user__error"> Ошибка...</div>
      )
    }

    return (
      <div className="user">
        <div className="user__info">
          <img
            src={avatar_url}
            alt=""
            className="user__pic"
          />
          <div className="user__data">
            <h3 className="user_name">{login}</h3>
            <p className="user__follovers">{followers}</p>
            <p className="user__repos">{public_repos}</p>
          </div>
          <Followers login={login} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchUserRequest };
const mapStateToProps = state => ({
  users: getUsers(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UserPage
);
