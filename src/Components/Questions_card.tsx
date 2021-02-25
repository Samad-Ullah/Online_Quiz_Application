import { type } from 'os';
import React, { useState } from 'react'
import { QuestionAsProps } from './../Types/quiz_types';
import './Question_card.css';

const Questions_card: React.FC<QuestionAsProps> = ({ option, question, callback }) => {
    let [submitans, setsubmitans] = useState("");

    const submithandle = (ev: any) => {
        setsubmitans(ev.target.value);

    }

    return (
        
        <div className="queationcard">
            
            <div className="question">
                <h4>{question}</h4>
            </div>
            <div className="option">
                <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, submitans)}>
                    {
                        option.map((opt: string, index: number) => {
                            return (
                                <div className= "options" key={index}>

                                    <input
                                        type="radio"
                                        value={opt}
                                        name="option"
                                        required
                                        checked={submitans === opt}
                                        onChange={submithandle}
                                    >

                                    </input>
                                    <label>
                                        {opt}
                                    </label>

                                </div>
                            )
                        })
                    }
                    <input className = "submit" type="submit" >

                    </input>
                </form>
            </div>

        </div>
    )
}

export default Questions_card
