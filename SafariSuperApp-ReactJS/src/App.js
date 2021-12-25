import React, { useState } from "react";
import Header from "./Header";
import Posts from "./Posts";
import ImageUpload from "./ImageUpload";
import "./App.css";
import "./elements.css";
import Helpcenter from "./Helpcenter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Music from './Music';
import Videocall from "./Videocall";
import Chat from "./Chat";
import Movie from "./Movie";
import AboutUs from "./AboutUs";
import Reels from "./Reels";
import Weather from "./Weather";
import Twitter from "./Twitter";
import Shopping from "./Shopping";
import SearchPage from "./SearchPage";
import GoogleMapComponent from "./GoogleMapComponent";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Router>
      <Header user={user} setUser={setUser} />
        <Switch>
        <Route path="/reels">
              <Reels />
          </Route>
          <Route path="/music">
              <Music />
          </Route>
          <Route path="/movie">
              <Movie />
          </Route>
          <Route path="/videocall">
              <Videocall />
          </Route>
          <Route path="/chat">
              <Chat />
          </Route>
          <Route path="/about">
              <AboutUs />
          </Route>
          <Route path="/weather">
              <Weather />
          </Route>
          <Route path="/location">
              <GoogleMapComponent />
          </Route>
          <Route path="/gethotel">
            <SearchPage />
          </Route>
          <Route path="/shopping">
            <Shopping />
          </Route>
          <Route path="/twitter">
            <Twitter />
          </Route>
          <Route path="/">
          <Posts user={user} />
      {user && user?.displayName && (
        <ImageUpload username={user?.displayName} />
        )}
      <Helpcenter />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
