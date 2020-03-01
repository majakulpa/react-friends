import React, { PureComponent } from "react";

class Header extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return false;
  //   }

  render() {
    console.log("header");
    return <h1>My Friends</h1>;
  }
}

export default Header;
