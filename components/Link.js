import React, { PureComponent } from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

class Link extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { active, children, onClick } = this.props;
    return (
      <TouchableOpacity
        onPress={onClick}
        disabled={active}
        style={{
          margin: 5,
          padding: 5,
          borderRadius: 5,
          borderColor: "#C3C3C3",
          borderWidth: 1,
          opacity: active ? 0.5 : 1
        }}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Link;
