import React from 'react';
import classNames from 'classnames'

function But({className, outline, children}) {

    return (
        <button className={classNames('button', className,{
            'button--outline': outline,
        })}>{children}</button>
    );
}

export default But;
