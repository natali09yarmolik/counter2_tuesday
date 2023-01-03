import React, {useEffect, useState} from 'react';
import {Display} from "./Display";
import {Buttons} from "./Buttons";
import s from './counter.module.css'

type CounterType={
    message:string
    startLocal: number
    maxLocal: number
    disableReset: boolean
    disableInc:boolean
    changeForm:(vis:boolean)=>void

}

export const Counter=(props:CounterType)=>{
    const [num, setNum] = useState(props.startLocal)
    useEffect(() => setNum(props.startLocal), [props.startLocal])

    const MAX_VALUE = props.maxLocal
    const lastStep = MAX_VALUE - 1
    const changeCount = () => {
        if (num < lastStep) {
            setNum(num + 1)
            return;
        }
        if (num === lastStep) {
            setNum(num + 1)
        }
    }
    const cleanDisplay = () => {
        setNum(props.startLocal)
    }

    return (
        <div className={s.counterBlock}>
            <div className={s.valueBlock}>
                <Display
                    count={props.message !== '' ? props.message : num}
                    maxValue={props.maxLocal}/>
            </div>
            <div className={s.btnBlock}>
                <Buttons title={'inc'}
                         changeValue={changeCount}
                         disable={props.disableInc}/>
                <Buttons title={'reset'}
                         changeValue={cleanDisplay}
                         disable={props.disableReset}/>
                <Buttons title={'set'}
                         changeValue={()=>props.changeForm(true)}
                         disable={props.disableReset}
                          />
            </div>
        </div>
    )
}