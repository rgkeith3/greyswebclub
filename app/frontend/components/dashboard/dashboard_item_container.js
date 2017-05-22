import { connect } from 'react-redux'
import DashboardItem from './dashboard_item'
import { requestPosts } from '../../actions/likes_actions'

const mapStateToProps = ({ session }, { post }) => ({
  currentUserId: session.currentUser.id,
  post
})

const mapDispatchToProps = dispatch => ({
  requestCreateLike: (like) => dispatch(requestCreateLike(like)),
  requestDeleteLike: (id) => dispatch(requestDeleteLike(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardItem)
