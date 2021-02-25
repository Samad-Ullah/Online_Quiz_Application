import React from 'react';
export type quiz = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type rendorquiz = {

    question :string,
    correct_answer: string,
    option : string[]


}
export type QuestionAsProps ={
    
    option: string[],
    question: string,
    callback:(e:React.FormEvent<EventTarget> , ans:string)=> void
    
}