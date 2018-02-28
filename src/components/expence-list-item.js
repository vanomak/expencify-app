import React from 'react';
import {Link} from 'react-router-dom';
import moment from "moment/moment";
import numeral from 'numeral';

export const ExpenceListItem = ( {id, description, note, amount, createdAt} = {}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
        </Link>
        <p>{numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('DD/MM/YYYY')}</p>
    </div>
);

export default ExpenceListItem;