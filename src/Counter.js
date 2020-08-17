import React, { Component } from 'react';
import './Counter.css';
export function Counter(props) {
    return (
        <div >
            <button className="btn" onClick={props.dec}>-</button>
            <h2>{props.counter}</h2>
            <button className="btn" onClick={props.inc}>+</button>
        </div>
    )
}