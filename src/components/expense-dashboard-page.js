import React from 'react';
import ExpenceList from './expence-list';
import ExpenceListFilters from './expence-list-filters';
import ExpencesSummary from "./expences-summary";

const ExpenseDashboardPage = () => (
    <div>
        <ExpencesSummary/>
        <ExpenceListFilters/>
        <ExpenceList/>
    </div>
);

export default ExpenseDashboardPage;