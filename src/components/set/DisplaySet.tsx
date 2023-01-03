import React from 'react';
import s from './displaySet.module.css'
import arrowUp from './arrow/arrowUp.png'
import arrowDown from './arrow/arrowDown.png'

type displayPropsType={
    title:string
    onChange:(status:string)=>void
    value: number
    compere: boolean
}

export const DisplaySet=(props:displayPropsType)=>{

    const classInput = `${s.inputBlock}
     ${props.compere || props.value < 0 ? s.displayError : s.inputBlock}`

    return (<div className={s.displayBlock}>
            <label>{props.title}</label>
                <div className={classInput}>
                   {props.value}
                    <div className={s.arrow}>
                        <img src={arrowUp}
                             alt={'arrowUp'}
                             className={s.arrowUp}
                             onClick={()=>props.onChange('up')}/>
                        <img src={arrowDown}
                             alt={'arrowDown'}
                             className={s.arrowDown}
                             onClick={()=>props.onChange('down')}/>
                    </div>
               </div>
            </div>
    )
}