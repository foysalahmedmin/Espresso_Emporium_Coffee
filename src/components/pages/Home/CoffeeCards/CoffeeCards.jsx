import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCards = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='text-center'>
                    <p>--- Sip & Savor ---</p>
                    <h1 className='text-primary_color'>Our Popular Products</h1>
                </div>
                <div className='text-center'>
                    <Link to="/add">
                        <button className='py-1 px-10 bg-primary_color bg-opacity-50 border-primary_color font-rancho text-white'>Add Coffee</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoffeeCards;