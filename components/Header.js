import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
class Header extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
        <Text>Show: </Text>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </View>
    );
  }
}

export default Header;
