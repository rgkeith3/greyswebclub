import { connect } from 'react-redux'

import { logout } from '../../actions/session_actions'
import Greeting from './greeting'

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = ( dispatch, { location }) => ({
  logout: () => dispatch(logout()),
  pathname: location.pathname
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)
