import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

// action
import { readEvent, deleteEvent, putEvent } from '../actions'

class Event extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.readEvent(id)
  }

  renderField(field){
    const { input, label, type, meta: { touched, error }} = field
    return (
    <div>
      <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
    </div>
    )
  }
  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }
  async onSubmit(values) {
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submiting, invalid } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <div ><Field label="Title" name="title" type="text" component={this.renderField} /></div>
          <div> <Field label="Body" name="body" type="text" component={this.renderField} /></div>
          <div>
            <input type="submit" value="Submit" disabled={pristine || submiting || invalid} />
            <Link to='/'>Cancel</Link>
            <Link to='/' onClick={this.onDeleteClick}>Delete</Link>
            <Link to='/' onClick={this.onUpdate}></Link>
          </div>
        </div>
      </form>
    )
  }
}
const validate = values => {
  const errors = {}
  if (!values.title) errors.title="Enter a title please"
  if (!values.body) errors.body="Enter a title please"

  return errors;
}
const mapStateToProps = (state, ownProps) => {
  const event  = state.events[ownProps.match.params.id]
  return { initialValues: event, state}
} 
const mapDispatchToProps = ({ deleteEvent, readEvent, putEvent})

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ 
    validate, 
    form: 'eventForm',
    enableReinitialize: true
  })(Event)
)