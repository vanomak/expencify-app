import React from 'react';
import {connect} from 'react-redux';
import ExpenceListItem from './expence-list-item';
import selectExpences from '../selectors/expences';


export const ExpenceList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expences.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expences</span>
                </div>
            ) : (
                props.expences.map((item) => {
                    return (
                        <ExpenceListItem key={item.id} {...item} />
                    )
                })
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expences: selectExpences(state.expences, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenceList);

