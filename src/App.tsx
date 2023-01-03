import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Set} from "./components/set/Set";

function App() {
    const getLocalStart = () => {
        let start = localStorage.getItem('startValue')
        if (start) {
            setMessage('')
            setStartValue(JSON.parse(start))

        }
    }
    const getLocalMax = () => {
        let max = localStorage.getItem('maxValue')
        if (max) {
            setMessage('')
            setMaxValue(JSON.parse(max))

        }
    }
    const disableButton = () => {
        if (maxValue === startValue || maxValue === startValue ||
            startValue < 0 || maxValue === startValue || maxValue < 0
            || maxValue === startValue) {

            setMessage('Incorrect value!!!')
            setDisable(true)
            setDisableInc(true)
            setDisableReset(true)
        }
    }
    const [startValue, setStartValue] = useState(0)
    useEffect(() => {getLocalStart()}, [])
    const [maxValue, setMaxValue] = useState(1)
    useEffect(() => {getLocalMax()}, [])
    const [message, setMessage] = useState<string>('Please, enter values and press set')
    const [disable, setDisable] = useState(false)
    const [disableInc, setDisableInc] = useState<boolean>(false)
    const [disableReset, setDisableReset] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])
    useEffect(()=>disableButton(), [maxValue, startValue])
    const startValueHandler = (status: string) => {
        setDisable(false)
        /*if (startValue < 0) {
            disableButton()
        }*/
        if (status === 'up') {
            setStartValue(startValue + 1)
            setMessage('Please, enter values and press set')
        }

            if (status === 'down') {
            setStartValue(startValue - 1)
            setMessage('Please, enter values and press set')
            }
    }
    const maxValueHandler = (status: string) => {
        setDisable(false)
        if (status === 'up') {
            setMaxValue(maxValue + 1)
            setMessage('Please, enter values and press set')

        } else if (status === 'down') {
            setMaxValue(maxValue - 1)
            setMessage('Please, enter values and press set')
           }
    }
    const changeSetHandler = () => {
            setDisable(false)
            setVisible(false)
            getLocalStart()
            getLocalMax()
            setDisableInc(false)
            setDisableReset(false)

    }

const changeForm=(vis:boolean)=>{
        setVisible(vis)
}

   return (
        <div className="App">
            {visible &&
    <Set startValueHandler={startValueHandler}
         startValue={startValue}
         maxValueHandler={maxValueHandler}
         maxValue={maxValue}
         changeSetHandler={changeSetHandler}
         disable={disable}/>}

            {!visible &&
        <Counter message={message}
                 startLocal={startValue}
                 maxLocal={maxValue}
                 disableInc={disableInc}
                 disableReset={disableReset}
                 changeForm={changeForm}

        />}


        </div>
    );
}

export default App;
