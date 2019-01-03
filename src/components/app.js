import { Component, h } from 'preact';

import Header from './header';
// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import { Router } from 'preact-router';
import SvgGraph from '../routes/svgGraph';

export default class App extends Component {

    /** Gets fired when the route changes.
     *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
     *	@param {string} event.url	The newly routed URL
     */
    handleRoute = e => {
        this.currentUrl = e.url;
    };

    render() {
        return ( <
            div id = "app" >
            <
            Header / >
            <
            Router onChange = { this.handleRoute } >
            <
            Home path = "/" / >
            <
            SvgGraph path = "/graph" / >
            <
            Profile path = "/profile/"
            user = "me" / >
            <
            Profile path = "/profile/:user" / >
            <
            /Router> < /
            div >
        );
    }
}