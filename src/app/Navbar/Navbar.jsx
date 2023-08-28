import Link from "next/link";

const Navbar = () => {

    return (
        <main className="mb-">
            <nav className='bg-[#050D24] z-10	fixed top-0 left-0 right-0 '>
                <div className="navbar text-white  max-w-[1280px]  mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className=" cursor-pointer text-5xl font-bold">Tickets</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-2xl font-semibold">
                            <li><Link href="/">Home</Link></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Movies</summary>
                                    <ul className="p-2 bg-black">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link href='/aboutUs'>About Us</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="border cursor-pointer	 bg-[#31D7A9] px-10 p-3 rounded-full text-white font-bold">Join Us</a>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default Navbar;