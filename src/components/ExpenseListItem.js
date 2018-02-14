import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export default ({ id, description, amount, createdAt, note }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{numeral(amount / 100).format('$0,0.00')}</p>
    <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
    <p>{note}</p>
  </div>
);