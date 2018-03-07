import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";

export class LoginPage extends React.Component {
    // onSubmit = (expence) => {
    //     this.props.startAddExpence(expence);
    //     this.props.history.push('/');
    // };
    //
    render() {
        return (
            <div>
                <h1>Please login</h1>
                <button onClick={this.props.startLogin}>Login</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);