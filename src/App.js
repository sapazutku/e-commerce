import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";

/* const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
}; */

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
