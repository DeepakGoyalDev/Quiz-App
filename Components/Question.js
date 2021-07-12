import './Question.css';

const Question = props => {
    const questionObj = props.questionAnswer.question;
    const selectedAnswerObj = props.questionAnswer.selected_answers;
    const filteredSelectedAnswer =  Object.entries(questionObj.answers).filter(answer => answer[1]);

    const changeHandler =event => {
        selectedAnswerObj[event.target.value] = event.target.checked;
        props.onChange();
    }

    return(
    <div>
        <p>{questionObj.question}</p>

        {questionObj.multiple_correct_answers==='true'? <p>Multiple Correct</p>:''}
        
        <ul className='options'>       
            { filteredSelectedAnswer.map(answer => 
                <li className='option'>
                    <input type="checkbox" value={answer[0]} onChange={changeHandler} checked={selectedAnswerObj[answer[0]]}/>
                    <label>{answer[1]}</label>
                </li>
                )
            }
        </ul>
    </div>
    )
}
export default Question;






