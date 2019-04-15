import React from 'react';
import Question from './Question';
import Answer from './Answer';
import './App.css';

const questions = [
  'Explain your experience with a) ReactJS, b) ReactNative and c) Redux.',
  'Share the link to a React project you have recently worked on or completed.',
  'What is your favorite feature in ES 2017?'
]

const answers = [
  "I have created e-commerce project using for frontend part ReactJS, Redux and React/Redux. Another project is enhanced version of tic-tac-toe created using Javascript, ReactJS, Redux",
  "https://github.com/Jainnaumova/veggie",
  "My favorite feature in ES 2017 is a method Object.values(obj)"
]

const createSummary = (arr1, arr2) => {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    let elObj = {};
    elObj[arr1[i]] = arr2[i];
    res.push(elObj);
  }
  return res;
}

const createArr = createSummary(questions, answers)

export default props => {

  return (
    <div>
      {createArr.map((pair, i) => {
      	return (
          <div className='container' key={i}>
          	<Question question={Object.keys(pair)}/>
            <Answer answer={Object.values(pair)}/>
          </div>
        )
      })}
    </div>
  )
}

/* jshint ignore:start */
/* jshint ignore:end */
