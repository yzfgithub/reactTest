import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/Main'
import Index from './components/Index'
import Plan from './components/Plan'
import Shop from './components/Shop'
import Detail from './components/Detail'
import Destination from './components/Destination'

export default (
  <Route component={App}>
    <Route path="/" component={Index}></Route>
    <Route path="/Plan" component={Plan}></Route>
    <Route path="/detail" component={Detail}></Route>
  </Route>
)
