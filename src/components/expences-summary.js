import React from 'react';
import {connect} from 'react-redux';
import selectExpences from "../selectors/expences";
import getExpencesTotal from "../selectors/expences-total"
import numeral from 'numeral';

export const ExpenceSummary = ({expenceCount, expenceTotal}) => {
    const num = expenceCount === 1 ? 'expence' : 'expences';
    return (
        <div>Viewing {expenceCount} {num} totalling {numeral(expenceTotal / 100).format('$0,0.00')}</div>
    )
};

const mapStateToProps = (state) => {
    const expences = selectExpences(state.expences, state.filters);
    return {
        expenceCount: expences.length,
        expenceTotal: getExpencesTotal(expences)
    }
};

export default connect(mapStateToProps)(ExpenceSummary);