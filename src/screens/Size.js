import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Size = ({ match }) => (
    <h3>{match.params.sizeId}</h3>
);

export default Size;