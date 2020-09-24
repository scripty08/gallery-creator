import React from 'react';
import './Button.scss';

export const Button = (props) => {

    const { onClick, children } = props;

    return (
        <button className={'button primary'} onClick={onClick}>
            {children}
        </button>
    )
}
