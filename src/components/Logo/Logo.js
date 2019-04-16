import React from 'react';

import classes from './Logo.module.css';

import bugrerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={bugrerLogo} alt='MyBurger' />
    </div>
);

export default logo;