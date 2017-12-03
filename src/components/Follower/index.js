import React, { Component } from "react";
import { Link } from "react-router-dom";

class Follower extends Component {
  render() {
    const { element: { avatar_url, login } } = this.props;
    return (
      <div className="follower">
        <img
          src={avatar_url}
          alt=""
          className="follower__avatar"
        />
        <Link to={`/user/${login}`}>{login}</Link>
      </div>
    );
  }
}

export default Follower;
