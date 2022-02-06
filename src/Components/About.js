import React from 'react';
import Style from './About.module.scss';
import classNames from 'classnames';
import {info, colors} from '../Info/Info';


export default function About() {
    const iconClass = "fa fa-circle";

    let hobbies = info.hobbies;

    function createList() {
        let results = [];
        for(let i = 0; i < hobbies.length; i ++) {
            let value = hobbies[i];
            results.push(
                <li><span aria-label="emoji" role="img" className={Style.emoji}>{value[0]}</span> {value[1]}</li>
            )
        }
        return results;
    }
    return (
        <div className={Style.about}>
            <div className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p> 작성중 입니다. </p>
                </div>
            </div>

        </div>
    )
}
