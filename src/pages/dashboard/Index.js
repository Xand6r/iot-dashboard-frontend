import React from 'react';
import Table from '../../components/table/Table';
import Statistic from '../../components/table/statistic/Statistics';
// import './Dashboard.scss';

export default function Index() {
    return (
        <div>
            <Statistic />
            <Table />
        </div>
    )
}
