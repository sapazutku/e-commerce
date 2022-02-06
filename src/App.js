import React from "react";
import { Route,Link } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";

const TopicsList = (props) => {
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
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/blog/asdqw/topics" component={TopicsList} />
      <Route path="/blog/asdqw/topics/:topicId" component={TopicDetail} />
      <Route exact path="/blog/topics" component={TopicsList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
