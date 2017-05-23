import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GreetingContainer from './greeting/greeting_container'
import SessionFormContainer from './session_form/session_form_container'
import DashboardContainer from './dashboard/dashboard_container'
import ExploreContainer from './explore/explore_container'
import { AuthRoute, DashRoute } from '../util/route_util'

const App = () => (
  <div className='app'>
    <Route path='/' component={GreetingContainer} />
    <section className='content-body'>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/explore" component={ExploreContainer} />
      <DashRoute path="/" />
      <Route path="/dashboard" component={DashboardContainer} />
    </section>
    <footer className='site-footer'>
      funthings will go here
    </footer>
  </div>
)

export default App
