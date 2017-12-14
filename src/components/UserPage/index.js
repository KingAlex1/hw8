import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";
import Followers from "../Followers";
import { getUsers } from "../../reducers";
import { fetchUserRequest, fetchTokenOwnerRequest } from "../../actions/users";
import { getTokenFromLocalStorage } from "../../localStorage";

export class UserPage extends Component {
  componentDidMount() {
    const {
      fetchUserRequest,
      fetchTokenOwnerRequest,
      match: { params },
      users: { isFetching }
    } = this.props;
    if (params.name === undefined) {
      const token = getTokenFromLocalStorage();
      fetchTokenOwnerRequest(token);
    } else {
      if (!isFetching) {
        fetchUserRequest(params.name);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      fetchTokenOwnerRequest,
      fetchUserRequest,
      match: { params: { name } }
    } = this.props;
    const { match: { params: { name: newName } } } = nextProps;

    if (name !== newName) {
      switch (newName) {
        case undefined:
          const token = getTokenFromLocalStorage();
          fetchTokenOwnerRequest(token);
          break;
        default:
          fetchUserRequest(newName);
      }
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

    if (isFetching) {
      return <Spinner />;
    }
    if(error || !isFetched){
      return(
        <div className="user__error"> Ошибка...</div>
      )
    } else if (isFetched) {

    return (
      <div className="user">
        <div className="user__info">
          <div className='avatar'>
            <img
                src={avatar_url}
                alt=""
                className="user__pic"
              />
          </div>
          <div className="user__data">
            <h3 className="user__name">{login}</h3>
            <p className="user__followers">{followers}</p>
            <p className="user__repos">{public_repos}</p>
          </div>
          <Followers login={login} />
        </div>
      </div>
    );
  }}
}

const mapDispatchToProps = {
  fetchUserRequest,
  fetchTokenOwnerRequest
};
const mapStateToProps = state => ({
  users: getUsers(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UserPage
);
