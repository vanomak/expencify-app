import React from 'react';
import {Link} from 'react-router-dom';
import moment from "moment/moment";

export const ExpenceListItem = ( {id, description, note, amount, createdAt} = {}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
        </Link>
        <p>{amount} <small>{moment(createdAt).format('DD/MM/YYYY')}</small></p>
    </div>
);

export default ExpenceListItem;