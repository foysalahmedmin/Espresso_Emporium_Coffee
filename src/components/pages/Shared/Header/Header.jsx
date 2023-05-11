import React from 'react';
import logo from '../../../../assets/images/more/logo1.png'

const Header = () => {
    return (
        <header className='bg-primary_color py-3 text-center'>
            <div className="container">
                <nav className='flex justify-center items-center gap-5'>
                    <img className='h-20' src= {logo} alt="" />
                    <h1 className='text-white text-4xl'>Espresso Emporium</h1>
                </nav>
            </div>
        </header>
    );
};

export default Header;