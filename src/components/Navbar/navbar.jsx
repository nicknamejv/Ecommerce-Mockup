import React from 'react';
import '../Navbar/navbar.css';
import { 
    BsThreeDots, 
    BsSearch, 
    BsPersonCircle} from 'react-icons/bs';

const NavBar = () => {
    return (
        <div id="navbar">
            <div className="nav-header">
                <div className="nav-left">
                    <ul className='nav-list-left'>
                        <li>
                            <BsThreeDots id='dot-icon' size={30} />
                        </li>
                        <li>Sale</li>
                        <li>Men</li>
                        <li>Women</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="nav-list-right">
                        <li>
                            <BsSearch />
                        </li>
                        <li>En|USD</li>
                        <li><BsPersonCircle size={20} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;