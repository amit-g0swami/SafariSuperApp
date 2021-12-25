import React from 'react'
import ChatIcon from "@material-ui/icons/Chat";
import "./Helpcenter.css";
import {Button} from "@material-ui/core";
import { Link } from "react-router-dom";

function Helpcenter() {
    return (
        <div className="helpcenter">
            <Link className="helpcenter__icon" to="/about">
        <Button><ChatIcon /> </Button>
            </Link>
        </div>
    )
}

export default Helpcenter
