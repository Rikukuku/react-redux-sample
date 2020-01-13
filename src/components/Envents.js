import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import { Link } from 'react-router-dom'
import map from 'lodash/map'

// material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class Events extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableCell align="right">{event.id}</TableCell>
        <TableCell align="right">
          <Link to={`/event/${event.id}`}>
            {event.title}
          </Link>
        </TableCell>
        <TableCell align="right">{event.body}</TableCell>
      </TableRow>
    ))
  }
  render() {
    return (
    <React.Fragment>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.renderEvents()}
        </TableBody>
      </Table>
      <Fab color="primary" aria-label="add" href="/event/form">
        <AddIcon />
      </Fab>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events})
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(Events)