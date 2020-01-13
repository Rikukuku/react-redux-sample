import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import { Link } from 'react-router-dom'
import map from 'lodash/map'

class Events extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/event/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
      <Link to='/event/form'>New Event</Link>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events})
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(Events)