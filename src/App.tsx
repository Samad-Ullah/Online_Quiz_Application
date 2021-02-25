import React, { useEffect, useState } from 'react';
import { quizDetails } from './Api_Quiz/api_quiz';
import { rendorquiz } from './Types/quiz_types';
import Questions_card from './Components/Questions_card'
import './App.css';

function App() {
  const [Quiz, setQuiz] = useState<rendorquiz[]>([])
  let [CurrentStep, setCurrentStep] = useState(0)
  let [Score, setScore] = useState(0)
  let [showResults  , setshowResults] = useState(false)

  useEffect(() => {
    async function fetchdata() {
      const question: rendorquiz[] = await quizDetails(20, 'medium');

      setQuiz(question)

    }
    fetchdata();
  }, [])


  const handleSubmit = (e: React.FormEvent<EventTarget>, ans: string) => {
    e.preventDefault();
    const currentQuestion: rendorquiz = Quiz[CurrentStep];

    console.log("correct anser is this" + currentQuestion.correct_answer + "and you selected this " + ans)
    if (ans === currentQuestion.correct_answer) {
      setScore(++Score);
    }
    //console.log(ans)
    if (CurrentStep !== Quiz.length - 1)
      setCurrentStep(++CurrentStep)
    else
      //alert(" your Score is " + Score + " out of " + Quiz.length);
    //setCurrentStep(0)
     //setScore(0);
     setshowResults(true);
  }


  if (!Quiz.length) {
    return <h3 className="loading">Loading .. </h3>
  }
  if(showResults){
    return(
      <div className="resultcard"> 
        <h3>Your Results</h3>
        <p>your Score is {Score} out of {Quiz.length}</p>
      </div>
    )
  }

  return (
    <div className="App">
      <h3>Quiz App</h3>
      <Questions_card
        question={Quiz[CurrentStep].question}
        option={Quiz[CurrentStep].option}
        callback={handleSubmit} />
    </div>
  );
}

export default App;
