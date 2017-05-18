import { connect } from 'react-redux'

import { login, signup, receiveErrors } from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  errors: session.errors,
})

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1)
  const processForm = (formType === 'login') ? login: signup
  return ({
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveErrors([])),
    loginAsGuest: () => dispatch(login({'username': 'guest', 'password': 'password'})),
    formType
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
