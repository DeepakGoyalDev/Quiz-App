import './QuizForm.css';

const QuizForm = props =>{
    const formSubmithandler = (event) =>{
        event.preventDefault();
        const token = "IOlwbK0KVbliggD0Jy20UHApSqg6xh2IJa2nkTyh";
        let url = `https://quizapi.io/api/v1/questions?apiKey=${token}`;
        const category = event.target.category.value;
        const difficulty = event.target.difficulty.value;
        const limit = event.target.limit.value;
        if(category !== 'any')
        url += ('&category='+category);
        if(difficulty !== 'any')
        url += ('&difficulty='+difficulty);
        url += ('&limit='+limit);
        props.formSubmit(url);
    }

    return(
        <div  className="home-page">
        <h1>Quiz App</h1>
        <div className="form-container">
            <form onSubmit={formSubmithandler}>
                <div className='input'>
                <label htmlFor="category">Select Category</label>
                <select id="category" name="category" defaultValue="any">
                    <option value="any">Any Category</option>
                    <option value="linux">Linux</option>
                    <option value="bash">Bash</option>
                    <option value="uncategorized">Uncategorized</option>
                    <option value="docker">Docker</option>
                    <option value="sql">SQL</option>
                    <option value="cms">CMS</option>
                    <option value="code">Code</option>
                    <option value="devops">DevOps</option>
                </select>
            </div>
            <div>
                <label htmlFors="difficulty">Select Difficulty</label>
                <select name="difficulty" id="difficulty" defaultValue="any">
                    <option value="any">Any Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div>
                <label htmlFor="limit">Select Number of questions</label>
                <select name="limit" id="limit" defaultValue="10">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div className='btn'>
                <input type="submit" value="Start"/>
            </div>
       </form>
       </div>
    </div>
    )
}
export default QuizForm;