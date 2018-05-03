import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

class Todo extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClick, text, completed } = this.props;
    return (
      <Text
        onPress={onClick}
        style={{
          textDecorationLine: completed ? "line-through" : "none"
        }}
      >
        {text}
      </Text>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
export default Todo;
