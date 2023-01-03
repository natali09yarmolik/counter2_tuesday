import React from 'react';
import s from './buttons.module.css'

type buttonsPropsType={
    title:string
    changeValue:(visible?:boolean)=>void
    disable: boolean

}
export const Buttons = (props:buttonsPropsType) =>{
    const disableClass = props.disable ? s.btnIncDis : s.btnInc

    return(
        <div className={s.btnBlock}>
            <button onClick={()=>props.changeValue()}
                    className={disableClass}
                    disabled={props.disable}
                    >
                {props.title}
            </button>
        </div>
    )
}