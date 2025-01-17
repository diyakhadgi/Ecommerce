import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ViewProduct from '../pages/ViewProduct'
import Category from '../pages/Category'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import NotFound from '../NotFound/NotFound'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'

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
          <Route path="/products/:id" component={ViewProduct} exact/>
          <Route path="/cart" component={ Cart} exact/> 
          <Route path="/category" component={ Category} exact/>
          <Route path="/about" component={ About} exact/> 
          <Route path="/contact" component={ Contact} exact/> 
          <Route path="/login" component={ Login} exact/> 
          <Route path="/profile" component={ Profile} exact/> 
          <Route path="/*" component={ NotFound} exact/> 
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes