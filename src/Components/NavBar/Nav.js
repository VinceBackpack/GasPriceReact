import { Link as LinkR } from 'react-router-dom';

import React from 'react';
    
export const NavBar = () => {
    return(
        
        <div>
            <ul>
                    <li>
                        <LinkR to="/">Home</LinkR>
                    </li>
                    <li>
                        <LinkR to ="/onecard">OneCard</LinkR>
                    </li>
            </ul>
        </div>
    );
}