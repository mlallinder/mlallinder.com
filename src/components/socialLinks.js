import React, { Component } from 'react'
import './socialLinks.css';
import './fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SocialLinks extends Component{
    render(){
        return (
        <ul>
            <li>
                <a href="https://twitter.com/mlallinder">
                    <FontAwesomeIcon icon={['fab','twitter']} />
                </a>
            </li>
            <li>            
                <a href="https://www.facebook.com/mlallinder"> 
                    <FontAwesomeIcon icon={['fab','facebook-f']} /> 
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/mattallinder/">
                    <FontAwesomeIcon icon={['fab','linkedin']} />
                </a>
            </li>
            <li>
                <a href="https://github.com/mlallinder">
                    <FontAwesomeIcon icon={['fab','github']} />
                </a>
            </li>
      </ul>
        );
    }
}