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
                <div className="page-header">
                    <div className="content-container">
                        <h1>Add expence</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenceForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpence: (expence) => dispatch(startAddExpence(expence))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);