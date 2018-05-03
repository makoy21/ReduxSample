import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddToDo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onPressAddTodo = () => {
    const { text } = this.state;
    const { dispatch } = this.props;
    dispatch(addTodo(text));
    this.setState({ text: "" });
  };
  handleTextChange = text => {
    this.setState({ text });
  };
  render() {
    const { container, textInput } = styles;
    const { text } = this.state;
    return (
      <View style={container}>
        <TextInput
          style={textInput}
          onChangeText={this.handleTextChange}
          value={text}
        />
        <TouchableOpacity onPress={this.onPressAddTodo}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    borderColor: "#C3C3C3",
    borderWidth: 1,
    marginRight: 10,
    height: 30
  }
});
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect()(AddToDo);
