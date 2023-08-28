import React from 'react';



const Banner = () => {



    return (
        <main>

            <section className='text-white bg-[url("https://i.postimg.cc/MpJBRSY8/stadium.jpg")] h-[90vh] bg-no-repeat bg-cover	bg-[#001232]'>
                <section>
                    <h1 className='pt-[250px] text-7xl font-bold text-center spacing-t-lg'>TICKETS BOOKING</h1>
                    <h1 className='text-7xl font-bold text-center my-6'> For: Movies</h1>
                    <h1 className='text-center text-3xl'>Buy Your Tickets Online And Enjoy Your Live Entertainment!</h1>
                </section>

                <main className=''>
                    <section className='mt-[200px] bg-[#031F53] max-w-[1280px] rounded-lg mx-auto '>
                        <div className='p-10'>
                            <h1 className='text-3xl mb-3'>SEARCH TICKETS</h1>
                            <div className='flex justify-between '>
                                <div>
                                    <h1 className='text-4xl font-bold'>FIND YOUR TICKETS NOW</h1>
                                </div>
                                <div className='flex text-4xl gap-10 font-bold'>
                                    <h1>Movie </h1>
                                    <h1>Event </h1>
                                    <h1>Sports</h1>
                                </div>
                            </div>

                            <div className='bg-[#021A45] rounded-lg p-5 mt-14 flex justify-between'>
                                <div>
                                    <input className='bg-[#021A45] border p-2 rounded-lg' type="search" name="" placeholder='Search for Movies' id="" />
                                </div>
                                <div className='flex items-center'>
                                    <h1>City</h1>
                                    <select className="bg-[#021A45] select select-bordered w-full max-w-xs">
                                        <option disabled selected>City</option>
                                        <option>California</option>
                                        <option>Texas</option>
                                        <option>Florida</option>
                                    </select>
                                </div>
                                <div className='flex items-center'>
                                    <h1>Date</h1>
                                    <select className="bg-[#021A45] select select-bordered w-full max-w-xs">
                                        <option disabled selected>Date</option>
                                        <option>10/10/2041</option>
                                        <option>12/10/2021</option>
                                        <option>14/10/2031</option>
                                    </select>
                                </div>
                                <div className='flex items-center'>
                                    <h1>Movie</h1>
                                    <select className="bg-[#021A45] select select-bordered w-full max-w-xs">
                                        <option disabled selected>Movie</option>
                                        <option>Inception</option>
                                        <option>Guardian</option>
                                        <option>Shurongo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </section>



        </main>
    );
};

export default Banner;