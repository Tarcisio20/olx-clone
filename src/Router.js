import React from 'react'
import { Switch } from 'react-router-dom'

import RouteHandler from './Components/RouteHandler'

import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import AdPage from './Pages/AdPage'
import NotFound from './Pages/NotFound'

export default () => {
    return (
        <Switch>
            <RouteHandler exact path="/"><Home /></RouteHandler>
            <RouteHandler extac path="/about"><About /></RouteHandler>
            <RouteHandler exact path="/signin"><SignIn /></RouteHandler>
            <RouteHandler exact path="/signup"><SignUp /></RouteHandler>
            <RouteHandler exact path="/ad/:id"><AdPage /></RouteHandler>
            <RouteHandler private exact path="/post-an-ad"><About /></RouteHandler>
            <RouteHandler><NotFound /></RouteHandler>
        </Switch>
    )
}
