import React from "react";
import { useGlobalContext } from "../Context";
const QuizForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form>
        <h2 style={{ marginBottom: "2rem" }}>Let's Start Quiz</h2>
        <div className="mb-3">
          <label for="noOfQuestions" className="form-label">
            Number of Questions
          </label>
          <input
            type="number"
            name="amount"
            className="form-control"
            value={quiz.amount}
            onChange={handleChange}
            min={10}
            max={10}
            style={{ width: "400px" }}
          />
        </div>

        <div className="mb-3">
          <label for="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="science">Science : Computer</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="difficulty" className="form-label">
            Difficulty
          </label>
          <select
            className="form-select"
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="medium">Medium</option>
          </select>
        </div>

        {error && <p className="error">Can't fetching questions</p>}

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary start-btn"
        >
          Start
        </button>
      </form>
    </section>
  );
};

export default QuizForm;
