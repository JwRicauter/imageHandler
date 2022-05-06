import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.scss';

const NavBar = () => {

    return (
        <div className='navbar'>
            <Link to='/' className=''>
                <div className='navbar-block'>
                    <p>
                        Inicio
                    </p>
                </div>
            </Link>

            <Link to='/new' className=''>
                <div className='navbar-block'>
                    <p>
                        New
                    </p>
                </div>
            </Link>

            <Link to='/about' className=''>
                <div className='navbar-block'>
                    <p>
                        About
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default NavBar;