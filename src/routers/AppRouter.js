import React from 'react';
import ExpenseDashboardPage from '../components/expense-dashboard-page';
import AddExpencePage from '../components/add-expense-page';
import HelpPage from '../components/help-page';
import EditPage from '../components/edit-expence-page';
import LoginPage from '../components/login-page';
import NotFoundPage from '../components/not-found-page';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from '../routers/PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpencePage} />
                <PrivateRoute path="/edit/:id" component={EditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

