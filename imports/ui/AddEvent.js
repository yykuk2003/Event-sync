import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { Events } from "../api/events";
import '../i18n/i18n';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: ""
    }
  }

  handleChange = (event) => {
    const field = event.target.name;
    
    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description, date } = this.state;
    Events.insert({
      title,
      description,
      date
    });

    this.setState({
      title: "",
      description: "",
      date: ""
    })
  }

  render() {
    return (
      <div>
        <div className="text-center">
        <h1><Trans>Welcome to React</Trans></h1>
          <h1>Event Sync</h1>
        </div>
        <hr />

        <div className="jumbotron" style={{ margin: "0 500px" }}>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Event Date:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter date in the format mm.dd.yyyy"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Add Event</button>
            <button type="delete" className="btn btn-dark">delete</button>
            <button type="delete" className="btn btn-dark">edit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEvent;
