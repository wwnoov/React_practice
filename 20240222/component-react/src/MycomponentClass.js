import React, { Component } from "react";

class MycomponentClass extends Component {
  render() {
    const { name } = this.props;
    return <div>{name} 클래스 컴포넌트</div>;
  }
}

export default MycomponentClass;
