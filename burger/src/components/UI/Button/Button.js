import React from 'react';
import './Button.css';

const button =(props)=>(
    <button onClick={props.clicked} className={['Button',props.btnType].join(' ')}>
        {props.children}
    </button>
);
export default button;