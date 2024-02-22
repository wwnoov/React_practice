import React from "react";
import PropTypes from "prop-types";
const MyComponent = ({ name, children }) => {
  return (
    <div>
      {name}컴포넌트
      <br />
      children :{children}
    </div>
  );
};
MyComponent.defaultProps = {
  name: "기본이름",
};
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
