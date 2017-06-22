import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import GreetingContainer from './greeting/greeting_container'
import SessionFormContainer from './session_form/session_form_container'
import DashboardContainer from './dashboard/dashboard_container'
import ExploreContainer from './explore/explore_container'
import UserDetailContainer from './user_detail/user_detail_container'
import PostShowContainer from './dashboard/post_show_container'
import Welcome from './welcome'
import Terms from './terms'
import Privacy from './privacy'
import Jobs from './jobs'
import Support from './support'
import Footer from './footer/footer'
import { AuthRoute, ProtectedRoute, DashRoute } from '../util/route_util'

const App = () => (
  <div className='app'>
    <Route path='/' component={GreetingContainer} />
    <section className='content-body'>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/welcome" component={Welcome} />
        <Route path="/user/:id" component={UserDetailContainer} />
        <Route path="/posts/:id" component={PostShowContainer} />
        <Route path="/explore" component={ExploreContainer} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/support" component={Support} />
        <ProtectedRoute path="/dashboard" render={DashboardContainer} />
        <DashRoute path="/" />
      </Switch>
    </section>
    <Route path='/' component={Footer} />
  </div>
)

export default App
