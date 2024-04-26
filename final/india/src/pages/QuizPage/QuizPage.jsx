import React, { useRef } from "react";
import { useId } from "react";
import { useState } from "react";
import Quiz from "./Quiz";

import "./QuizPage.css";

function QuizPage() {
  const modalRef = useRef(null);
  const [subscribed, setSubscribed] = useState(false);
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);

  const invalidEmail =
    emailBlur && (email.trim() === "" || !email.includes("@"));

  const disableButton = () => {
    if (!checked) {
      return true;
    }
    if (!emailBlur) {
      return true;
    }
    if (email.trim() === "" || !email.includes("@")) {
      return true;
    }
    return false;
  };
  const id = useId();
  return (
    <div className="quiz-page">
      <h1 className="quiz-page_title">India Trivia Delight: A Masala Mix of Facts and Fun!</h1>
      <p className="quiz-page_description">
      Welcome to "India Trivia Delight," where we serve up a flavorful blend of facts and fun! Join us on a journey through the vibrant tapestry of India's culture, history, and traditions. Get ready to spice up your knowledge with our masala mix of trivia questions!
      </p>
      {/* This forced modal subscription is kind of a dark-pattern professor talked about */}
      <dialog className="modal" ref={modalRef}>
        <h2 className="modal_title">Subscribe to our NewsLetter</h2>
        <form action="#/submit" className="modal_form form">
          <label htmlFor={`${id}-form_email`} className="form_label">
            Email:
            <span aria-label="required" className="form_label-required">
              *
            </span>
          </label>
          <input
            type="text"
            id={`${id}-form_email`}
            name="email"
            className={`form_input ${
              invalidEmail ? "form_input--invalid" : ""
            }`}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (!emailBlur) {
                setEmailBlur(true);
              }
            }}
          />
          {invalidEmail && (
            <span className="form_error-message form_error-email">
              Email Id is required and must include "@".
            </span>
          )}
          <label className="form_label">
            <input
              type="checkbox"
              className="form_checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />{" "}
            <span className="form_checkbox-text">
              I have read and accepted the Privacy Policy.
            </span>
          </label>
          <div className="form_button-container">
            <button
              className="form_button form_button--subscribe"
              onClick={(event) => {
                event.preventDefault();
                setSubscribed(true);
                modalRef.current.close();
              }}
              disabled={disableButton()}
            >
              Submit
            </button>
            <button
              className="form_button form_button--cancel"
              onClick={(event) => {
                event.preventDefault();
                modalRef.current.close();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
      {!subscribed && (
        <p className="quiz-page_description">
          But before you take this free quiz, please{" "}
          <button
            className="quiz-page_subscribe-button"
            onClick={() => modalRef.current.showModal()}
          >
            subscribe
          </button>{" "}
          to our weekly newsletter!
        </p>
      )}
      {subscribed && <Quiz />}
    </div>
  );
}

export default QuizPage;
