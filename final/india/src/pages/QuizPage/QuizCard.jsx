import { React, useState } from "react";

function QuizCard({
  question,
  correctAnswer,
  options,
  questionNumber,
  answerCorrect,
  answerIncorrect,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [flip, setFlip] = useState(false);

  const revealClassName =
    selectedOption === ""
      ? "quiz_reveal--unanswered"
      : selectedOption === correctAnswer
      ? "quiz_reveal--correct"
      : "quiz_reveal--wrong";

  return (
    <div className="quiz_card">
      <fieldset className="quiz_question">
        <legend className="quiz_question-text">{`${questionNumber}.  ${question}`}</legend>
        {options.map((option) => {
          return (
            <label className="quiz_radio" key={option.optionNumber}>
              <input
                type="radio"
                className="quiz_option"
                name={questionNumber}
                value={option.value}
                checked={selectedOption === option.value}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />{" "}
              <span className="quiz_option-text">{option.value}</span>
            </label>
          );
        })}
        <button
          type="button"
          className="quiz_reveal-button"
          onClick={() => {
            setFlip(!flip);
            if (correctAnswer === selectedOption) {
              answerCorrect();
            } else {
              answerIncorrect();
            }
          }}
          disabled={selectedOption === ""}
        >
          Check Answer
        </button>
      </fieldset>
      <div
        className={`quiz_reveal ${revealClassName} ${
          flip ? "quiz_reveal--visible" : ""
        }`}
      >
        <p className="quiz_reveal-question">{question}</p>
        <i
          className={`quiz_reveal-icon ${
            selectedOption === correctAnswer ? "gg-check" : "gg-close"
          }`}
        ></i>
        <p className="quiz_reveal-answer">
          The correct answer is <strong>{correctAnswer}</strong>
        </p>
      </div>
    </div>
  );
}

export default QuizCard;
