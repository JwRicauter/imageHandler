import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.scss';

const NavBar = () => {

    return (
        <div className='navbar'>
            <div className='row'>
                <div className='col-12'>
                    <Link to='/' className=''>
                        <div className='navbar-block'>
                            <p>Inicio</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <Link to='/new' className=''>
                        <div className='navbar-block'>
                            <p>New</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <Link to='/about' className=''>
                        <div className='navbar-block'>
                            <p>About</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;