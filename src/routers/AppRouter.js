import React from 'react';
import ExpenseDashboardPage from '../components/expense-dashboard-page';
import AddExpencePage from '../components/add-expense-page';
import HelpPage from '../components/help-page';
import EditPage from '../components/edit-expence-page';
import NotFoundPage from '../components/not-found-page';
import Header from '../components/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpencePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

