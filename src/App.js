// TODO: update firebase sign in and sign up module to get functionalty
import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";
//import SignInPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Log from "./components/login/login.component";
import {useAuth} from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: useAuth,
    };
  }
  render() {
    return (
      <div>
        {/* 
          Header is outside of Switch -render all the time
          Current user for rendering sign in/out
        */}
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route path="/signin" component={SignInPage} /> */}
          <Route path="/signin" component={Log} />
        </Switch>
      </div>
    );
  }
}

export default App;
