import React from 'react';
import './styles/Header.scss';

const Header = () => {

    return (
        <header>
            <div className="content">
                <hgroup>
                    <h1>Image Handler</h1>
                    <br></br>
                    <i>by Will Ricauter</i>
                </hgroup>
            </div>
            <div className="overlay"></div>
        </header>

    )
}

export default Header;