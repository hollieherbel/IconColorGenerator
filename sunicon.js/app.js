import React, { Component } from 'react';
import "./main.scss"

export default class ColorChange extends Component {
    constructor(props) {
        super(props);
        this.state = {color: "seagreen"};
    }
}

render(); {
    return (
        <div>
            <i class="fas fa-sun" onclick="clickMe()"></i>
        </div>
    )
}