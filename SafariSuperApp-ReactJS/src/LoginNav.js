import React from "react";
import "./Header.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MovieIcon from "@material-ui/icons/Movie";
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import CloudIcon from '@material-ui/icons/Cloud';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TheatersIcon from '@material-ui/icons/Theaters';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from "@material-ui/core";
import { Link  } from "react-router-dom";

function LoginNav() {
  return (
      <div className="loginNav__icons">
        <ul>
        <li>
            <Link className="link" to="/reels" >
            <Button><TheatersIcon /></Button>  
            </Link>
          </li>
          <li>
            <Link className="link" to="/music" >
            <Button><MusicNoteIcon /></Button>  
            </Link>
          </li>
          <li>
            <Link className="link" to="/movie" >
            <Button><MovieIcon /></Button>  
            </Link>
          </li>
          <li>
            <Link className="link" to="/videocall" >
            <Button>  <FastfoodIcon /> </Button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/shopping" >
            <Button><ShoppingCartIcon /></Button>  
            </Link>
          </li>
          <li>
            <Link className="link" to="/chat" >
            <Button>  <HomeWorkOutlinedIcon /> </Button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/weather" >
            <Button>  <CloudIcon /> </Button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/location" >
            <Button>  <LocationOnIcon /> </Button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/twitter" >
            <Button className="Profile">  <TwitterIcon /> </Button>
            </Link>
          </li>
        </ul>
        {/* <Switch>
          <Route exact path="/music" component={Music}></Route>
          <Route exact path="/music" component={Music}></Route>
          <Route exact path="/music" component={Music}></Route>
          <Route exact path="/music" component={Music}></Route>
        </Switch> */}
      </div>
  );
}

export default LoginNav;
