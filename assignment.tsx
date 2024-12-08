import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How much time can you dedicate to plant care daily?",
    options: ["Less than 10 minutes", "10-30 minutes", "More than 30 minutes"]
  },
  {
    id: 2,
    text: "What's your primary goal for growing plants?",
    options: ["Fresh herbs for cooking", "Vegetables for eating", "Decorative plants"]
  },
  {
    id: 3,
    text: "What's your experience level with hydroponics?",
    options: ["Complete beginner", "Some experience", "Experienced"]
  },
  {
    id: 4,
    text: "What's your available space like?",
    options: ["Small (windowsill)", "Medium (shelf/counter)", "Large (dedicated area)"]
  }
];

const recommendations = {
  beginner: {
    plants: ["Lettuce", "Basil", "Mint"],
    description: "These plants are perfect for beginners as they're hardy and fast-growing."
  },
  intermediate: {
    plants: ["Cherry Tomatoes", "Spinach", "Strawberries"],
    description: "These plants require more attention but offer great rewards."
  },
  advanced: {
    plants: ["Bell Peppers", "Cucumbers", "Microgreens"],
    description: "These plants need careful monitoring but provide excellent yields."
  }
};

export default function PlantAssignment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    // Simple logic to determine experience level based on answers
    const dedicationLevel = answers[0];
    const experienceLevel = answers[2];

    if (experienceLevel === "Complete beginner" || dedicationLevel === "Less than 10 minutes") {
      return recommendations.beginner;
    } else if (experienceLevel === "Experienced") {
      return recommendations.advanced;
    }
    return recommendations.intermediate;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect Plant Match</h2>
        
        {!showResult ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-sm text-gray-600">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].text}</h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Your Personalized Recommendations</h3>
            <div className="mb-6">
              <p className="text-gray-600 text-center">{getRecommendation().description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getRecommendation().plants.map((plant, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4 text-center">
                  <span className="font-medium text-green-800">{plant}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}