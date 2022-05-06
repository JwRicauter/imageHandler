import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';

const Layout = ({children}) =>{
    return(
        <>
            <Header />
            <div className='box-content'>
                <NavBar />
                <div className='page'>
                    { children }
                </div>
            </div>
        </>
    )
}

export default Layout;