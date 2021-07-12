import './Quiz.css';
import { useState} from 'react';
import QuestionPage from './QuestionPage';
import Result from './Result';



const Quiz = props => {
    const [showResult, setShowResult] = useState(false);
    const [questionAnswerArray, setQuestionAnswerArray] = useState([]); 
   
    const submitQuizHandler = (questionAnswerArray) =>{
        localStorage.clear();
        setQuestionAnswerArray(questionAnswerArray);
        setShowResult(true);
    }
    
    return(
        <div className='container'>
            {!showResult && <QuestionPage submitQuiz={submitQuizHandler} url={props.url}/>}
            {showResult && <Result questionAnswerArray={questionAnswerArray} />}
        </div>    
    )
}
export default Quiz;
