import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes