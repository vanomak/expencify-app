import React from 'react';
import ExpenceForm from './expence-form';
import {connect} from 'react-redux';
import {editExpence, removeExpence} from "../actions/expences";

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
                <ExpenceForm
                    expence={this.props.expence}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
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
    editExpence: (id, expence) => dispatch(editExpence(id, expence)),
    removeExpence: (id) => dispatch(removeExpence(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpencePage);