import { connect } from 'react-redux'

import { logout } from '../../actions/session_actions'
import { requestSearch, clearSearch } from '../../actions/search_actions'
import Greeting from './greeting'

const mapStateToProps = ({ session, search }) => ({
  currentUser: session.currentUser,
  results: search
})

const mapDispatchToProps = ( dispatch, { location }) => ({
  logout: () => dispatch(logout()),
  requestSearch: (query) => dispatch(requestSearch(query)),
  clearSearch: () => dispatch(clearSearch()),
  pathname: location.pathname
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)
