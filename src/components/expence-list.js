import React from 'react';
import {connect} from 'react-redux';
import ExpenceListItem from './expence-list-item';
import selectExpences from '../selectors/expences';


export const ExpenceList = (props) => (
    <div>
        {
            props.expences.length === 0 ? (
                <p>No expences</p>
            ) : (
                props.expences.map((item) => {
                    return (
                        <ExpenceListItem key={item.id} {...item} />
                    )
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expences: selectExpences(state.expences, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenceList);

