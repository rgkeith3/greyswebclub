import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GreetingContainer from './greeting/greeting_container'
import SessionFormContainer from './session_form/session_form_container'
import DashboardContainer from './dashboard/dashboard_container'
import { AuthRoute, DashRoute } from '../util/route_util'

const App = () => (
  <div className='app'>
    <Switch>
      <Route path='/login' component={GreetingContainer} />
      <Route path='/signup' component={GreetingContainer} />
      <Route path='/' component={GreetingContainer} />
    </Switch>
    <section className='content-body'>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <DashRoute path="/" component={DashboardContainer} />
    </section>
    <footer className='site-footer'>
      funthings will go here
    </footer>
  </div>
)

export default App
