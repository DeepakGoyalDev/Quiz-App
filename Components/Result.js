import './Result.css';
let score = 0;

const QuestionBox = (questionObj, selectedAnswersObj, questionNumber) => {

    let correct = true;
  
    Object.entries(selectedAnswersObj).forEach(selectedAnswer => { 
        if(selectedAnswer[1].toString() !== questionObj.correct_answers[selectedAnswer[0]+'_correct']) correct=false;  
    });

    if(correct) score++;

    return (
        <div className='question-container' key={questionNumber}>
            { 
            correct?
            <div className='strip correct'>
                <p>{questionNumber}</p>
            </div> :
            <div className='strip incorrect'>
                <p>{questionNumber}</p>
            </div> 
            }


            <div className='explanation'>
                <p>{questionObj.question}</p>

                <p><b>Your Answer:</b></p>
                <ul>
                {Object.entries(selectedAnswersObj).map(selectedAnswer =>    selectedAnswer[1] && <li>{questionObj.answers[selectedAnswer[0]]}</li> )}
                </ul>
        
                <p><b>Correct Answer:</b></p>
                <ul>
               { Object.entries(questionObj.correct_answers).map(correctAnswer => (correctAnswer[1]==='true')  &&  <li>{questionObj.answers[correctAnswer[0].substring(0, 8)]}</li>)}
                </ul>


                <p><b>Explanation:</b></p>
                {!questionObj.explanation?<p>No Explanation</p> : <p>{questionObj.explanation}</p>}

                <p><b>Tip:</b></p>
                {!questionObj.tip?<p>No Tip</p> : <p>{questionObj.tip}</p>}
            </div>
        </div>
    )
}

const Result = props =>{
    const questionAnswerArray = props.questionAnswerArray;
    const arr = [];
    for(let index=0; index<questionAnswerArray.length; index++)
    arr.push(QuestionBox(questionAnswerArray[index].question, questionAnswerArray[index].selected_answers, index+1));
    
    return (
        <div className='container'>
            <header>
                <p>Result</p>
                
            </header>
            {arr}
            <div className='result'>
                <h2>Total Question: {questionAnswerArray.length}</h2 >
                <h2>Total Score: {score}</h2>
            </div>
            <button onClick={() => window.location.reload(false)}>Restart</button>
        </div>
    )
}
export default Result;