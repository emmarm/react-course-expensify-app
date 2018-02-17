import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404! <Link to='/dashboard'>Return to Home</Link>
  </div>
);

export default NotFoundPage;