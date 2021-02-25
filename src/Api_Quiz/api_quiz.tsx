import { quiz, rendorquiz } from './../Types/quiz_types';



export const quizDetails = async (totalQuestions: number, level: string): Promise<rendorquiz[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=21&difficulty=${level}&type=multiple`);
    const { results } = await res.json();
    //return results;
    const filterResults:rendorquiz[] = results.map((quesobj: quiz) =>{
        return{

            question: quesobj.question,
            correct_answer: quesobj.correct_answer,
             option :  quesobj.incorrect_answers.concat(quesobj.correct_answer)

        }
 
    })
    return filterResults;


} 
