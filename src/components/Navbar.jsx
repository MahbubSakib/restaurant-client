import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged out successsfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error.message));
    }
    return (
        <div>
            <div className="navbar max-w-screen-lg fixed z-[1000] bg-opacity-50 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/menu'}>Menu</Link></li>
                            <li><Link to={'/order/salad'}>Order Food</Link></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">DINE-FINE</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/menu'}>Menu</Link></li>
                        <li><Link to={'/order/salad'}>Order Food</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogout} className='btn btn-neutral'>Logout</button>
                        </> :
                            <>
                                <button className='btn btn-primary'><Link to={'/login'}>Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;