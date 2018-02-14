import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';


export default ({ id, description, amount, createdAt, note }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>${(amount / 100).toFixed(2)}</p>
    <p>{moment(createdAt).format('MMM Do, YYYY')}</p>
    <p>{note}</p>
  </div>
);