import React from 'react';
import { Link } from 'react-router-dom';

const AddCard = () => {
    const postHandler = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier =  form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const user = { name, chef, supplier, taste, category, details, photo }
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <section className='py-10'>
            <div className="container">
                <div className='mb-5'>
                    <Link to="/"><button className='text-primary_color'>Back To Home</button></Link>
                </div>
                <div className='bg-light_bg p-10'>
                    <div className='mb-10 text-center max-w-2xl mx-auto'>
                        <h1 className='text-primary_color mb-5'>Add New Coffee</h1>
                        <p>
                            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={postHandler}>
                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                    <label className='font-bold text-primary_color' htmlFor="name">Name</label>
                                    <input className='p-2 my-3 bg-white block w-full' type="text" name="name" id='name' placeholder='Enter Coffee Name' />
                                </div>
                                <div>
                                    <label className='font-bold text-primary_color' htmlFor="chef">Chef</label>
                                    <input className='p-2 my-3 bg-white block w-full' type="text" name="chef" id='chef' placeholder='Enter Coffee Chef' />
                                </div><div>
                                    <label className='font-bold text-primary_color' htmlFor="supplier">Supplier</label>
                                    <input className='p-2 my-3 bg-white block w-full' type="text" name="supplier" id='supplier' placeholder='Enter Coffee Name' />
                                </div><div>
                                    <label className='font-bold text-primary_color' htmlFor="taste">Taste</label>
                                    <input className='p-2 my-3 bg-white block w-full' type="text" name="taste" id='taste' placeholder='Enter Coffee Taste' />
                                </div><div>
                                    <label className='font-bold text-primary_color' htmlFor="category">Category</label>
                                    <input className='p-2 my-3 bg-white block w-full' type="text" name="category" id='category' placeholder='Enter Coffee Category' />
                                </div><div>
                                    <label className='font-bold text-primary_color' htmlFor="details">Details</label>
                                    <input className='p-2 my-3 bg-white block w-full' type="text" name="details" id='details' placeholder='Enter Coffee Details' />
                                </div>
                            </div>
                            <div>
                                <label className='font-bold text-primary_color' htmlFor="photo">Photo</label>
                                <input className='p-2 my-3 bg-white block w-full' type="text" name="photo" id='photo' placeholder='Enter Coffee Photo URL' />
                            </div>
                            <div>
                                <input className='mt-5 w-full py-3 text-xl px-10 bg-primary_color bg-opacity-50 border-primary_color font-rancho text-white' type="submit" value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AddCard;