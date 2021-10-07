import React from 'react';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import './Navbar.scss'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className='left_navbar'>
                <div className='menu'>
                <Link to="/">
                    <p>IOT DASHBOARD</p>
                </Link>
                </div>
                </div>
                <div className="right_icons">
                    <UserOutlined  />
                </div>
            </nav>
        </div>
    )
}
