import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpences from "../selectors/expences";
import getExpencesTotal from "../selectors/expences-total"
import numeral from 'numeral';

export const ExpenceSummary = ({expenceCount, expenceTotal}) => {
    const num = expenceCount === 1 ? 'expence' : 'expences';
    return (
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">
                Viewing <span>{expenceCount}</span> {num} totalling <span>{numeral(expenceTotal / 100).format('$0,0.00')}</span>
            </h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add expence</Link>
            </div>
            </div>
        </div>
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