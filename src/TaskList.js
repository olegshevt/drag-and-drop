import React from "react";

export default class TaskList extends React.Component {
  render() {
    return this.props.task.content;
  }
}
