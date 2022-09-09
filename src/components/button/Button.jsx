import React from 'react';
import classNames from "classnames";
import './button.css'
import {Loader} from "../loader/Loader";
export const Button = ({
    onClick,
    type,
    children,
    size = 's',
    isDisabled
                       }) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': type === 'small',
        'btn--medium': type === 'medium',
        'btn-disabled': isDisabled
    })
    return (
        <button disabled={isDisabled}  className={btnClass} onClick={onClick}>
            { children }
        </button>
    );
};
