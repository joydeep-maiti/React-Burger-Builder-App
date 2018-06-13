import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = () => (
    <img src={burgerLogo} className={classes.Logo} alt='BurgerLogo'></img>
);

export default logo;