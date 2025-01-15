import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ViewProduct from '../pages/ViewProduct'

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home">
          <Redirect to="/"/>
          </Route>
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={ViewProduct} />
          <Route path="/cart"/>
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes