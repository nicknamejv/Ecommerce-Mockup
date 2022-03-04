import React from 'react';
import '../Navbar/navbar.css';
import {
    BsThreeDots,
    BsSearch,
    BsPersonCircle
} from 'react-icons/bs';

const NavBar = () => {
    return (
        <div id="navbar">
            <div className="nav-header">
                <div className="nav-left">
                    <ul className='nav-list-left'>
                        <li>
                            <a href="#">
                                <BsThreeDots id='dot-icon' size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Sale
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Men
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Women
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="nav-list-right">
                        <li>
                            <a href="#">
                                <BsSearch />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                En | USD
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsPersonCircle size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;