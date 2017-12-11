import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFollowersRequest } from "../../actions/users";
import { getFollowers } from "../../reducers";
import Follower from "../Follower";
import Spinner from "react-svg-spinner";

export class Followers extends Component {
  componentDidMount() {
    const {
      fetchFollowersRequest,
      login,
      followers: { isFetching  }
    } = this.props;
    if (!isFetching) {
      fetchFollowersRequest(login);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.login !== nextProps.login) {
      const {
        fetchFollowersRequest,
        login,
        followers: { isFetching }
      } = nextProps;
      if (!isFetching) {
        fetchFollowersRequest(login);
      }
    }
  }

  render() {
    const { followers: {  isFetching, followers   } } = this.props;

    if (isFetching) {
      return <Spinner size="64px" color="red" gap={5} />;
    }

    return (
      <div className="followers">
        {followers.map(value => <Follower   key={value.id} element={value} />)}
      </div>
    );
  }
}

const mapDispatchToProps = { fetchFollowersRequest };
const mapStateToProps = state => ({ followers: getFollowers(state) });

export default connect(mapStateToProps, mapDispatchToProps)(Followers);