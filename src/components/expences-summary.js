import React from 'react';
import {connect} from 'react-redux';
import selectExpences from "../selectors/expences";
import getExpencesTotal from "../selectors/expences-total"
import numeral from 'numeral';

export const ExpenceSummary = (props) => {
    const num = props.expences.length === 1 ? 'expence' : 'expences';
    return (
        <div>Viewing {props.expences.length} {num} totalling {numeral(props.total / 100).format('$0,0.00')}</div>
    )
};

const mapStateToProps = (state) => {
    const expences = selectExpences(state.expences, state.filters);
    return {
        expences: expences,
        total: getExpencesTotal(expences)
    }
};

export default connect(mapStateToProps)(ExpenceSummary);