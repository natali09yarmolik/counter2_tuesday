import React from 'react';
import s from './display.module.css'

type displayPropsType={
    count: number | string
    maxValue:number
}

export const Display = (props: displayPropsType) => {

    const classMax = `${s.displayBlock} 
     ${props.count === 'Incorrect value!!!' ? s.displayBlockError :
       props.count === props.maxValue ? s.displayBlockMax : s.displayBlockText}`

    return (<div className={classMax}>
            <div>{props.count}</div>
        </div>
    )
}