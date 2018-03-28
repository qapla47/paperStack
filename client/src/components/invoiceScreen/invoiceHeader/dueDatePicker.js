import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class DueDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        highlightDates={[
          moment().add(7, "days"),
          moment().add(14, "days"),
          moment().add(30, "days"),
          moment().add(60, "days")
        ]}
        placeholderText="Due Date"
      />
    );
  }
}