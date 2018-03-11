import React from 'react';
import ExpenceForm from './expence-form';
import {connect} from 'react-redux';
import {editExpence, startEditExpence, startRemoveExpence} from "../actions/expences";

export class EditExpencePage extends React.Component {
    onSubmit = (expence) => {
        this.props.editExpence(this.props.expence.id, expence);
        this.props.history.push('/');
    };

    onRemove = (expence) => {
        this.props.removeExpence(this.props.expence.id);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1>Edit Expence</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenceForm
                        expence={this.props.expence}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove expense</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expence: state.expences.find((el) => el.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    editExpence: (id, expence) => dispatch(startEditExpence(id, expence)),
    removeExpence: (id) => dispatch(startRemoveExpence(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpencePage);