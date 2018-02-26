import React from 'react';
import ExpenceList from './expence-list';
import ExpenceListFilters from './expence-list-filters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenceListFilters/>
        <ExpenceList/>
    </div>
);

export default ExpenseDashboardPage;