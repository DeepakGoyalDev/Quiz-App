import { useState, useEffect } from "react";
import "./QuestionPage.css";
import Question from "./Question";
import fetchQuestions from "./fetchQuestions";

const QuestionPage = (props) => {
    const [data, setData] = useState(null);

    useEffect( () => {
        let data = localStorage.getItem("data");
        if (data) {
            setData(JSON.parse(data));
        }
        else {
            console.log(props.url);
            data = {
                'currentQuestion': 0,
                'questionAnswerArray': []
            }
            fetch(props.url)
            .then(res => res.json())
            .then(
                (result) => {
                console.log('call to me');
                let questionArray = result;

                if(result.error) {window.location.reload(false); return}

                for(let index=0; index<questionArray.length; index++){
                    data.questionAnswerArray.push(
                        {
                            "question": questionArray[index],
                            'selected_answers': {
                                'answer_a': false,
                                'answer_b': false,
                                'answer_c': false,
                                'answer_d': false,
                                'answer_e': false,
                                'answer_f': false
                            }
                        }
                    )
                }
                localStorage.setItem('data', JSON.stringify(data));
                setData(data);
              },
              (error) => {
                  return <h1>OOPs! some error occuqured</h1>
              })
        }
    }, [props.url]);

    useEffect(() => {
         if(data) localStorage.setItem('data', JSON.stringify(data));
    }, [data])
    
    const submitQuizHandler = () => {
        props.submitQuiz(data.questionAnswerArray);
    }

    const prevClickHandler = () => {
        setData((prevData) => (
            {'currentQuestion':  (data.currentQuestion !== 0 ? data.currentQuestion-- : data.currentQuestion),
            ...prevData,}
        ))
    }

    const nextClickHandler = () => {
        setData((prevData) =>  (
            {'currentQuestion':  (data.currentQuestion !== data.questionAnswerArray.length-1 ? data.currentQuestion++ : data.currentQuestion),
            ...prevData,}
            ) )
    }
    
    const changeHandler = (selectedAnswerObj) =>{
        setData((prevData) =>  ( {...prevData}))
    }
    

    if(!data) return(<div className='loader-container'><div className="loader"></div></div>);

    return (
    <div>
        <header>
            <p>Quiz</p>
        </header>
        <div className="question">
            <p className="ques-number">{data.currentQuestion+1}</p> 
            <Question questionAnswer={data.questionAnswerArray[data.currentQuestion]} onChange={changeHandler}/>
        </div>

       
        <button onClick={prevClickHandler}>Prev</button>

        {data.currentQuestion !== data.questionAnswerArray.length-1 ? 
        <button onClick={nextClickHandler}>Next</button> : 
        <button onClick={submitQuizHandler} id='submit-button'>Submit</button>}
 
        
        <button onClick={() => {localStorage.clear(); window.location.reload(false)}} id='restart'>Restart</button>

    </div>
  )
}
export default QuestionPage;
