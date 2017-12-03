import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFollowersRequest } from "../../actions/repos";
import { getFollowers } from "../../reducers";
import Follower from "../Follower";
import Spinner from "react-svg-spinner";

class Followers extends Component {
  componentDidMount() {
    const {
      fetchFollowersRequest,
      login,
      followers: { isFetched, isFetching }
    } = this.props;
    if (!isFetched && !isFetching) {
      fetchFollowersRequest(login);
    }
  }

  render() {
    const { followers: { isFetched, isFetching, followers } } = this.props;

    if (!isFetched || isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    }

    return (
      <div className="followers">
        {followers.map(value => <Follower key={value.id} element={value} />)}
      </div>
    );
  }
}

const mapDispatchToProps = { fetchFollowersRequest };
const mapStateToProps = state => ({ followers: getFollowers(state) });

export default connect(mapStateToProps, mapDispatchToProps)(Followers);