import React from 'react';
import ExpenceForm from './expence-form';
import {connect} from 'react-redux';
import {startAddExpence} from "../actions/expences";

export class AddExpensePage extends React.Component {
    onSubmit = (expence) => {
        this.props.startAddExpence(expence);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Expence Form</h1>
                <ExpenceForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpence: (expence) => dispatch(startAddExpence(expence))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);