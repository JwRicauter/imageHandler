import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';

const Layout = ({children}) =>{
    return(
        <>
            <Header />
            <div className='row mt-5 pb-5'>
                <div className='col-1'></div>
                <div className='col-2'>
                    <NavBar />
                </div> 
                <div className='col-6'>
                { children }
                </div>
                <div className='col-3'></div>
           
            </div>
        </>
    )
}

export default Layout;