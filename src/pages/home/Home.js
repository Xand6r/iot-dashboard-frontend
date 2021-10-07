import React from 'react';
import List from '../../components/list/List';
import './Home.scss';

export default function Home() {
    return (
        <div className="home">
            <p className="home_heading">Welcome to your dashboard!</p>
            <p className="home_texts">
                Here are the different labs.
            </p>
            <List />
        </div>
    )
}
