import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'


const Auth = ({component: Component, path, loggedIn}) => (
    <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/dashboard' />
      )
    )} />
)

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)}
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))

//if you ARE logged in, render the component, else redirect to

const Condition = ({ render: Component, path, loggedIn }) => {
  return (<Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/welcome' />
      )
    )} />
  )
}


export const ConditionalRoute = withRouter(connect(mapStateToProps, null)(Condition))

const Dash = ({ path, loggedIn }) => {
  return (<Route path={path} render={(props) => (
      loggedIn ? (
        <Redirect to='/dashboard' />
      ) : (
        <Redirect to='/welcome' />
      )
    )} />
  )
}


export const DashRoute = withRouter(connect(mapStateToProps, null)(Dash))
