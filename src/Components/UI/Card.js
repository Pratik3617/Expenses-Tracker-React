import React from 'react';
import "./Card.css"

export default function Card(props) {
    const classes="card "+props.className;

  return <div className={classes}>{props.children}</div>;       // children is reserved word it will conatin all the data that is betn opening and closing tag of Card 
}
