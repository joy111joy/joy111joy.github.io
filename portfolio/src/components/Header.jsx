import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <h1>Mitchel Joy</h1>
            <div
                onClick={toggleDropdown}
                className={`dropdown ${isOpen ? 'show' : ''}`}
                ref={dropdownRef}
            >
                <span id="menuText">
                    Menu
                </span>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" id="Link1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="dropdown-item" id="Link2">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="dropdown-item" id="Link3">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
