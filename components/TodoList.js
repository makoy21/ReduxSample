import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import Todo from "./Todo";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, toggleTodo } = this.props;
    console.log(todos);
    return (
      <View style={{ padding: 10 }}>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
      </View>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
