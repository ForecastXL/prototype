import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../data/session'
import LoginForm from './LoginForm'

export class LoginFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
    this.changeUser = this.changeUser.bind(this)
    this.processForm = this.processForm.bind(this)
  }

  changeUser(event) {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  processForm(event) {
    event.preventDefault()
    this.props.createSession(this.state.user)
  }

  render() {
    return (
      <LoginForm
        errors={{}}
        onChange={this.changeUser}
        onSubmit={this.processForm}
        user={this.state.user}
      />
    )
  }
}

LoginFormContainer.propTypes = {
  createSession: PropTypes.func.isRequired
}

const mapActionsToProps = {
  createSession: actions.createSession
}

export default connect(null, mapActionsToProps)(LoginFormContainer)