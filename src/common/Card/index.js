import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './styles/index.css';

const getCardContent = (className, children) => <div className={classnames('card', className)}>{children}</div>;

/**
 * A component that returns a Card Component.
 * @param {boolean} linkTo - link to navigate, onClick of Card.
 * @param {String} className - external css class to extend styling.
 * @param {object|array[]} children -  All nodes to be displayed as children of Card.
 * @returns {*}  a Card Component.
 */

const Card = ({ linkTo, className, children }) => {
  return <Link to={linkTo}> {getCardContent(className, children)}</Link>;
};

export default Card;
