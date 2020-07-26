import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import AdPage from './Pages/AdPage'
import NotFound from './Pages/NotFound'

export default () => {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route extac path="/about"><About /></Route>
            <Route exact path="/signin"><SignIn /></Route>
            <Route exact path="/signup"><SignUp /></Route>
            <Route exact path="/ad/:id"><AdPage /></Route>
            <Route><NotFound /></Route>
        </Switch>
    )
}
