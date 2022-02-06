import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import classNames from 'classnames';
import Navbar from "./Navbar";
import {Switch, Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(true); //다크 모드

    function handleClick() {
        darkMode ? setDarkMode(false) : setDarkMode(true);
        console.log(darkMode);
    }
    return (
        <div className={classNames(Style.container, darkMode ? Style.dark : Style.light)}>
            <Navbar darkMode={darkMode} handleClick={handleClick}/>
            <Main />
            <footer>
                <p> <a target="_blank" rel="noopener noreferrer" href="https://paytonjewell.dev">Template made with &hearts; by Payton Jewell</a></p>
                <p>&copy; 2021</p>
            </footer>
        </div>
    )
}

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/portfolio' component={Portfolio}/>
    </Switch>
);
