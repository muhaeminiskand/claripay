import React from 'react';
import { clsx } from 'clsx';

export const Button = ({ className, children, ...props }) => {
    return (
        <button className={clsx('your-button-styles', className)} {...props}>
            {children}
        </button>
    );
};
