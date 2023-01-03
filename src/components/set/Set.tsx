import React from 'react';
import s from '../counter.module.css'
import {DisplaySet} from "./DisplaySet";
import {Buttons} from "../Buttons";

export type SetType={
    startValueHandler:(status:string)=>void
    startValue: number
    maxValueHandler: (status:string)=>void
    maxValue:number
    changeSetHandler:()=>void
    disable:boolean
}

export const Set=(props:SetType)=>{
    let compere=false
    if(props.startValue===props.maxValue)
    {
        compere=true
    }
    return(
        <div className={s.counterBlock}>
            <div className={s.valueBlock}>
                <DisplaySet title={'start value:'}
                            onChange={props.startValueHandler}
                            value={props.startValue}
                            compere={compere}
                            />
                <DisplaySet title={'max value:'}
                            onChange={props.maxValueHandler}
                            value={props.maxValue}
                            compere={compere}
                            />
            </div>
            <div className={s.btnBlock}>
                <Buttons title={'set'}
                         changeValue={props.changeSetHandler}
                         disable={props.disable}
                />
            </div>
        </div>
    )
}