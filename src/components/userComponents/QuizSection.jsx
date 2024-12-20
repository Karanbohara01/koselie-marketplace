import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// Sample SAT-related quiz questions
const quizQuestions = [
  {
    question: "What is the value of x if 2x + 3 = 7?",
    options: ["2", "3", "4", "5"],
    answer: "2",
  },
  {
    question: "Which of the following is a synonym of 'abundant'?",
    options: ["Scarce", "Plentiful", "Small", "Weak"],
    answer: "Plentiful",
  },
  {
    question: "Which of the following sentences is grammatically correct?",
    options: [
      "She can sings well.",
      "She sings well.",
      "She sing well.",
      "She singed well.",
    ],
    answer: "She sings well.",
  },
  {
    question:
      "What is the area of a triangle with a base of 10 units and height of 5 units?",
    options: ["25", "50", "30", "20"],
    answer: "25",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "8", "10", "4"],
    answer: "8",
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the result of 7 * 8?",
    options: ["54", "56", "60", "62"],
    answer: "56",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "H2"],
    answer: "H2O",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    answer: "100°C",
  },
  {
    question: "Who was the first president of the United States?",
    options: [
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
    ],
    answer: "George Washington",
  },
  {
    question: "Which element is represented by the symbol 'O'?",
    options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
    answer: "Oxygen",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "K2"],
    answer: "Mount Everest",
  },
  {
    question: "What is the primary language spoken in Brazil?",
    options: ["Spanish", "English", "Portuguese", "French"],
    answer: "Portuguese",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Which gas do plants absorb from the air for photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon dioxide",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Elephant", "Tiger", "Bear"],
    answer: "Lion",
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["4", "5", "6", "7"],
    answer: "6",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "India"],
    answer: "Japan",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Isaac Newton",
      "Albert Einstein",
    ],
    answer: "Alexander Fleming",
  },
  {
    question: "How many bones are there in the adult human body?",
    options: ["206", "205", "208", "210"],
    answer: "206",
  },
  {
    question: "What is the largest planet in the solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Altimeter", "Hygrometer"],
    answer: "Thermometer",
  },
  {
    question: "Which country has the largest population in the world?",
    options: ["India", "China", "USA", "Russia"],
    answer: "China",
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "299,792 km/s", "150,000 km/s", "500,000 km/s"],
    answer: "299,792 km/s",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Chili"],
    answer: "Avocado",
  },
  {
    question: "Which country is the Eiffel Tower located in?",
    options: ["Italy", "Germany", "France", "Spain"],
    answer: "France",
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Arctic", "Kalahari"],
    answer: "Sahara",
  },
  {
    question: "Which country invented pizza?",
    options: ["France", "Germany", "Italy", "USA"],
    answer: "Italy",
  },
  {
    question: "Which of these elements is a noble gas?",
    options: ["Oxygen", "Argon", "Nitrogen", "Hydrogen"],
    answer: "Argon",
  },
  {
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Earth", "Venus", "Mercury", "Mars"],
    answer: "Mercury",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which country is known for the Great Wall?",
    options: ["India", "China", "Mexico", "Egypt"],
    answer: "China",
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    options: ["32°F", "0°F", "100°F", "-32°F"],
    answer: "32°F",
  },
  {
    question: "What is the main ingredient in sushi?",
    options: ["Rice", "Fish", "Seaweed", "Rice and fish"],
    answer: "Rice and fish",
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Tibia", "Radius"],
    answer: "Stapes",
  },
  {
    question: "Who is the author of '1984'?",
    options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Harper Lee"],
    answer: "George Orwell",
  },
  {
    question: "Which country is known for its pyramids?",
    options: ["Greece", "Egypt", "Mexico", "China"],
    answer: "Egypt",
  },
  {
    question: "What is the most common gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Samuel Morse",
    ],
    answer: "Alexander Graham Bell",
  },
  {
    question: "What is the chemical formula for methane?",
    options: ["CH4", "CO2", "H2O", "C2H6"],
    answer: "CH4",
  },
  {
    question: "What is the capital of the USA?",
    options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"],
    answer: "Washington, D.C.",
  },
  {
    question: "What is the largest island in the world?",
    options: ["Greenland", "Australia", "New Guinea", "Borneo"],
    answer: "Greenland",
  },
  {
    question: "Which element is represented by the symbol 'Na'?",
    options: ["Neon", "Sodium", "Nitrogen", "Nickel"],
    answer: "Sodium",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    answer: "Rome",
  },
  {
    question: "Who is known as the first human in space?",
    options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
    answer: "Yuri Gagarin",
  },
  {
    question: "Which sea is the lowest point on Earth's surface?",
    options: ["Dead Sea", "Red Sea", "Mediterranean Sea", "Caspian Sea"],
    answer: "Dead Sea",
  },
  {
    question: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Amazon River",
  },
  {
    question: "Who is the author of 'The Great Gatsby'?",
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "Mark Twain",
      "John Steinbeck",
    ],
    answer: "F. Scott Fitzgerald",
  },
  {
    question: "How many planets are in our solar system?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    answer: "Berlin",
  },
  {
    question: "What is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Penguin", "Peacock"],
    answer: "Ostrich",
  },
  {
    question: "What is the currency used in the UK?",
    options: ["Dollar", "Euro", "Pound", "Yen"],
    answer: "Pound",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
    answer: "Hydrogen",
  },
  {
    question: "What is the symbol for potassium?",
    options: ["K", "P", "Po", "Ka"],
    answer: "K",
  },
  {
    question: "Which animal is known for its ability to change colors?",
    options: ["Chameleon", "Octopus", "Cuttlefish", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which of the following is a type of cloud?",
    options: ["Stratus", "Ozone", "Neutron", "Echo"],
    answer: "Stratus",
  },
  {
    question: "What is the atomic number of carbon?",
    options: ["6", "12", "8", "4"],
    answer: "6",
  },
  {
    question: "Which country is the birthplace of the Olympic Games?",
    options: ["Greece", "Italy", "USA", "France"],
    answer: "Greece",
  },
  {
    question: "What is the tallest building in the world?",
    options: [
      "Eiffel Tower",
      "Burj Khalifa",
      "Empire State Building",
      "CN Tower",
    ],
    answer: "Burj Khalifa",
  },
];

const QuizSection = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Timer starts at 60 seconds

  // Handle when an answer is selected
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle when the next or skip button is clicked
  const handleNextQuestion = () => {
    // Check if the selected answer is correct
    if (selectedAnswer === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(""); // Clear selected answer
      setTimeLeft(60); // Reset the timer for the next question
    } else {
      setIsQuizFinished(true); // End the quiz if it's the last question
    }
  };

  // Timer functionality
  useEffect(() => {
    if (timeLeft > 0 && !isQuizFinished) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId); // Cleanup on component unmount or when timer finishes
    } else if (timeLeft === 0) {
      handleNextQuestion(); // Automatically move to next question when time runs out
    }
  }, [timeLeft, isQuizFinished, currentQuestionIndex]);

  // Render the final result if quiz is finished
  const renderResult = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-xl shadow-lg"
    >
      <h3 className="text-4xl font-extrabold text-white mb-6">
        {score >= quizQuestions.length / 2 ? "Pass" : "Failed"}
      </h3>

      <div className="flex justify-center mb-6">
        <img
          src="https://img.icons8.com/ios/452/trophy.png"
          alt="Trophy"
          className="w-24 h-24"
        />
      </div>
      <p className="text-2xl text-white mb-4">
        Your score: {score} / {quizQuestions.length}
      </p>
      <motion.button
        onClick={() => window.location.reload()} // Reset the quiz
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full text-xl"
        whileTap={{ scale: 0.95 }}
      >
        Restart Quiz
      </motion.button>
    </motion.div>
  );
  // Render the quiz question and options with animation
  const renderQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6   shadow-lg bg-gray-800 text-white"
      >
        <h2 className="text-3xl font-semibold mb-6">
          {currentQuestion.question}
        </h2>
        <div className="options space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-4 "
            >
              <input
                type="radio"
                id={option}
                name="quizOption"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerSelection(option)}
                className="h-6 w-6 cursor-pointer"
              />
              <label htmlFor={option} className="text-xl">
                {option}
              </label>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <motion.button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className={`py-2 px-6 rounded-full text-lg text-white ${
              selectedAnswer
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {currentQuestionIndex === quizQuestions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </motion.button>

          <motion.button
            onClick={handleNextQuestion} // Skip button triggers the same next function
            className="py-2 px-6 rounded-full text-lg text-white bg-gray-400 hover:bg-gray-500"
            whileTap={{ scale: 0.95 }}
          >
            Skip
          </motion.button>
        </div>
        <div className="text-xl text-white mt-4">
          <p>Time left: {timeLeft}s</p>
        </div>
        <motion.div
          className="w-full bg-green-300 h-2 rounded-full mt-4"
          initial={{ width: "0%" }}
          animate={{
            width: `${
              ((currentQuestionIndex + 1) / quizQuestions.length) * 100
            }%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    );
  };

  return <div>{isQuizFinished ? renderResult() : renderQuestion()}</div>;
};

export default QuizSection;
