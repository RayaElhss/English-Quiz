import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Quiz.module.css';
import quizData from '../data/quizData'; 

const Quiz = () => {

    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [progress, setProgress] = useState(0);
    const [showError, setShowError] = useState(false);

    const currentQuestion = quizData[currentQuestionIndex];

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setShowError(false); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOption === currentQuestion.correctAnswer) {
            // Correct answer
            setProgress(((currentQuestionIndex + 1) / quizData.length) * 100);
            setShowError(false);

            if (currentQuestionIndex < quizData.length - 1) {
                // Move to the next question
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(''); // Reset the selected option for the next question
            } else {
                alert('Quiz completed!');
                navigate
                // Handle quiz completion (e.g., show results, reset quiz, etc.)
                navigate('/results');
            }
        } else {
            // Incorrect answer
            setShowError(true);
        }
    };

    return (
        <div className={styles.quizContainer}>
            <h2 className={styles.quizTitle}>Testing Medin's English Skills</h2>
            <form onSubmit={handleSubmit}>
                <p className={styles.question}>{currentQuestion.question}</p>
                {currentQuestion.options.map((option, index) => (
                    <label key={index} className={styles.option}>
                        <input
                            type="radio"
                            name="answer"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                        />
                        {option}
                    </label>
                ))}
                <button type="submit" className={styles.submitButton}>
                    NEXT
                </button>
                {showError && <p className={styles.errorMessage}>Incorrect! Please try again.</p>}
            </form>
            <div className={styles.progressContainer}>
                <span>{`${currentQuestionIndex + 1} / ${quizData.length}`}</span>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${progress}%` }}></div>
                </div>
                <span>{`${progress.toFixed(0)}%`}</span>
            </div>
        </div>
    );
};

export default Quiz;
