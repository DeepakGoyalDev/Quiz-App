import { useState, useEffect } from 'react';
import './App.css';
import QuizForm from './Component/QuizForm';
import Quiz from './Component/Quiz';


const App = () => {
  const  [url, setUrl] = useState('');
  const [showForm, setShowForm] = useState(true);

  const formSubmitHandler = url=>{
    setUrl(url);
    setShowForm(false);
  }
  useEffect(() => {
    if(localStorage.getItem('data')!==null) setShowForm(false);
  }, [])
  
  return (
    <div>
      {showForm && <QuizForm formSubmit={formSubmitHandler}/>}
      {!showForm && <Quiz url={url}/>}
    </div>
  );
}

export default App;



  //             App.js
  //           /       \
  // QuizForm.js        Quiz.js
  //                   /       \
  //       QuestionPage.js     Result.js
  //               |
  //         Question.js