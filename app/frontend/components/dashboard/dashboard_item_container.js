import { connect } from 'react-redux'
import DashboardItem from './dashboard_item'
import { requestCreateLike, requestDeleteLike } from '../../actions/likes_actions'
import { requestCreateFollow, requestDeleteFollow } from '../../actions/follows_actions'

const mapStateToProps = ({ session }, { post }) => ({
  currentUser: session.currentUser,
  post
})

const mapDispatchToProps = dispatch => ({
  requestCreateLike: (like) => dispatch(requestCreateLike(like)),
  requestDeleteLike: (id) => dispatch(requestDeleteLike(id)),
  requestCreateFollow: (follow) => dispatch(requestCreateFollow(follow)),
  requestDeleteFollow: (id) => dispatch(requestDeleteFollow(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardItem)
