import { Question, User } from "../types";

export const MOCK_QUESTIONS: Question[] = [
  {
    id: "q1",
    imageUrl: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000&auto=format&fit=crop", // sports car steering wheel
    options: ["Porsche 911", "Ferrari 488", "Lamborghini Huracan", "McLaren 720S"],
    correctAnswer: "Porsche 911"
  },
  {
    id: "q2",
    imageUrl: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2000&auto=format&fit=crop", // aggressive headlight
    options: ["BMW M4", "Audi RS5", "Mercedes AMG C63", "Lexus RC F"],
    correctAnswer: "BMW M4"
  },
  {
    id: "q3",
    imageUrl: "https://images.unsplash.com/photo-1503376760367-13eea7d24773?q=80&w=2000&auto=format&fit=crop", // iconic shape
    options: ["Ford Mustang", "Chevrolet Camaro", "Dodge Challenger", "Nissan GT-R"],
    correctAnswer: "Ford Mustang"
  },
  {
    id: "q4",
    imageUrl: "https://images.unsplash.com/photo-1611821064430-0d402241afe4?q=80&w=2000&auto=format&fit=crop", // sleek
    options: ["Tesla Model S", "Porsche Taycan", "Lucid Air", "Audi e-tron GT"],
    correctAnswer: "Porsche Taycan"
  }
];

export const MOCK_USERS: Record<string, User> = {
  "u1": {
    id: "u1",
    username: "SpeedDemon",
    stats: {
      totalGames: 42,
      accuracy: 85,
      bestScore: 2400
    }
  }
};
