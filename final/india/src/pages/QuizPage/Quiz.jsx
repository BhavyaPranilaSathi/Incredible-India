import React from "react";
import { useState } from "react";
import QuizCard from "./QuizCard";

const quizQAList = [
  {
    questionNumber: 1,
    question: "What is the highest dam in India?",
    correctAnswer: "Tehri",
    options: [
      {
        optionNumber: 1,
        value: "Bhakra Nangal",
      },
      {
        optionNumber: 2,
        value: "Tehri",
      },
      {
        optionNumber: 3,
        value: "Nagarjuna Sagar",
      },
    ],
  },
  {
    questionNumber: 2,
    question: "What is the name of the largest district in India in terms of area?",
    correctAnswer: "Kutch",
    options: [
      {
        optionNumber: 1,
        value: "Gandhinagar",
      },
      {
        optionNumber: 2,
        value: "Bastar",
      },
      {
        optionNumber: 3,
        value: "Kutch",
      },
    ],
  },
  {
    questionNumber: 3,
    question: 'The name of which Indian river means "the son of the creator"?',
    correctAnswer: "Brahmaputra",
    options: [
      {
        optionNumber: 1,
        value: "Brahmaputra",
      },
      {
        optionNumber: 2,
        value: "Ganga",
      },
      {
        optionNumber: 3,
        value: "Krishna",
      },
    ],
  },

  {
    questionNumber: 4,
    question: " What is the capital of Lakshadweep?",
    correctAnswer: "Kavaratti",
    options: [
      {
        optionNumber: 1,
        value: "Port Blair",
      },
      {
        optionNumber: 2,
        value: "Bangalore",
      },
      {
        optionNumber: 3,
        value: "Kavaratti",
      },
    ],
  },

  {
    questionNumber: 5,
    question: "Where is the largest concentration of stupas in India?",
    correctAnswer: "Madhya Pradesh",
    options: [
      {
        optionNumber: 1,
        value: "Andhra Pradesh",
      },
      {
        optionNumber: 2,
        value: "Madhya Pradesh",
      },
      {
        optionNumber: 3,
        value: "Tamilnadu",
      },
      {
        optionNumber: 4,
        value: "Kerala",
      },
    ],
  },

  {
    questionNumber: 6,
    question: "India was named after the River Indus. What is Indus called in Hindi?",
    correctAnswer: "Sindhu",
    options: [
      {
        optionNumber: 1,
        value: "Sindhu",
      },
      {
        optionNumber: 2,
        value: "Bharat",
      },
      {
        optionNumber: 3,
        value: "Kaveri",
      },
    ],
  },

  {
    questionNumber: 7,
    question: "What is the capital of the god's own country Kerala?",
    correctAnswer: "Thiruvanantapuram",
    options: [
      {
        optionNumber: 1,
        value: "Kolkata",
      },
      {
        optionNumber: 2,
        value: "Thiruvanantapuram",
      },
      {
        optionNumber: 3,
        value: " Bhopal",
      },
    ],
  },
  {
    questionNumber: 8,
    question: `The National Emblem of India is adapted from the _______?`,
    correctAnswer: "Sarnath Lion",
    options: [
      {
        optionNumber: 1,
        value: "Sarnath Lion",
      },
      {
        optionNumber: 2,
        value: "4-Headed Chimera",
      },
      {
        optionNumber: 3,
        value: "Royal Tiger",
      },
    ],
  },

  {
    questionNumber: 9,
    question: "The Taj Mahal was built by how approximately many workers?",
    correctAnswer: "20,000",
    options: [
      {
        optionNumber: 1,
        value: "30,000",
      },
      {
        optionNumber: 2,
        value: "40,000",
      },
      {
        optionNumber: 3,
        value: "20,000",
      },
    ],
  },

  {
    questionNumber: 10,
    question: "What was the name of India's first biosphere reserve?",
    correctAnswer: "Nilgiris",
    options: [
      {
        optionNumber: 1,
        value: "Gulf of Mannar",
      },
      {
        optionNumber: 2,
        value: "Eastern Himalayas",
      },
      {
        optionNumber: 3,
        value: "Manas",
      },
      {
        optionNumber: 4,
        value: "Nilgiris",
      },
    ],
  },

  {
    questionNumber: 11,
    question: "What is the Indian state famous for boating activities on its backwaters?",
    correctAnswer: "Kerala",
    options: [
      {
        optionNumber: 1,
        value: "Jammu and Kashmir",
      },
      {
        optionNumber: 2,
        value: "Punjab",
      },
      {
        optionNumber: 3,
        value: "Kerala",
      },
      {
        optionNumber: 4,
        value: "Karnataka",
      },
    ],
  },

  {
    questionNumber: 12,
    question: "Which state or territory of India is known as the crown of India?",
    correctAnswer: "Jammu and Kashmir",
    options: [
      {
        optionNumber: 1,
        value: "Jammu and Kashmir",
      },
      {
        optionNumber: 2,
        value: "Uttar Pradesh",
      },
      {
        optionNumber: 3,
        value: "Delhi",
      },
    ],
  },
];

function Quiz() {
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const answerCorrect = () => {
    setCount({
      ...count,
      correct: count.correct + 1,
    });
  };

  const answerIncorrect = () => {
    setCount({
      ...count,
      incorrect: count.incorrect + 1,
    });
  };

  return (
    <section className="quiz">
      <h2 className="quiz__title">The Desi Explorer's Quiz: Unraveling India's Wonders</h2>
      <form className="quiz__form" action="#/submit" method="post">
        {quizQAList.map((quizQA) => {
          return (
            <QuizCard
              key={quizQA.questionNumber}
              question={quizQA.question}
              correctAnswer={quizQA.correctAnswer}
              options={quizQA.options}
              questionNumber={quizQA.questionNumber}
              answerCorrect={answerCorrect}
              answerIncorrect={answerIncorrect}
            />
          );
        })}
        <div className="quiz__result-container">
          <button
            type="submit"
            className="quiz__submit-button"
            disabled={count.correct + count.incorrect < quizQAList.length}
            onClick={(e) => {
              e.preventDefault();
              setQuizSubmitted(true);
            }}
          >
            Submit
          </button>
          <p
            className={`quiz__result ${
              quizSubmitted ? "quiz__result--visible" : ""
            }`}
          >
            {`Score: ${count.correct}/${count.correct + count.incorrect}`}
          </p>
          <p
            className={`quiz__result ${
              quizSubmitted ? "quiz__result--visible" : ""
            }`}
          >{`Correct: ${count.correct}`}</p>
          <p
            className={`quiz__result ${
              quizSubmitted ? "quiz__result--visible" : ""
            }`}
          >{`Incorrect: ${count.incorrect}`}</p>
        </div>
      </form>
    </section>
  );
}

export default Quiz;
