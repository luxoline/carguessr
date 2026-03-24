import { Question, User } from "../types";

const IMAGE_URL = "https://pub-0cf35cbdfe76406f89de7948c6fcee26.r2.dev/Gemini_Generated_Image_ryoymhryoymhryoy.png";

export const MOCK_QUESTIONS: Question[] = [
  {
    id: "q1",
    imageUrl: IMAGE_URL,
    options: ["BMW 3 Series", "Toyota Corolla", "Ford Focus", "Honda Civic"],
    correctAnswer: "BMW 3 Series"
  },
  {
    id: "q2",
    imageUrl: IMAGE_URL,
    options: ["Porsche 911", "Ferrari 488", "Lamborghini Huracan", "McLaren 720S"],
    correctAnswer: "Porsche 911"
  },
  {
    id: "q3",
    imageUrl: IMAGE_URL,
    options: ["BMW M4", "Audi RS5", "Mercedes AMG C63", "Lexus RC F"],
    correctAnswer: "BMW M4"
  },
  {
    id: "q4",
    imageUrl: IMAGE_URL,
    options: ["Ford Mustang", "Chevrolet Camaro", "Dodge Challenger", "Nissan GT-R"],
    correctAnswer: "Ford Mustang"
  },
  {
    id: "q5",
    imageUrl: IMAGE_URL,
    options: ["Tesla Model S", "Porsche Taycan", "Lucid Air", "Audi e-tron GT"],
    correctAnswer: "Porsche Taycan"
  },
  {
    id: "q6",
    imageUrl: IMAGE_URL,
    options: ["Honda NSX", "Acura Integra", "Toyota Supra", "Mazda RX-7"],
    correctAnswer: "Toyota Supra"
  },
  {
    id: "q7",
    imageUrl: IMAGE_URL,
    options: ["Volkswagen Golf GTI", "Renault Megane RS", "Honda Civic Type R", "Hyundai i30 N"],
    correctAnswer: "Volkswagen Golf GTI"
  },
  {
    id: "q8",
    imageUrl: IMAGE_URL,
    options: ["Subaru WRX STI", "Mitsubishi Lancer Evo", "Ford Focus RS", "Audi S3"],
    correctAnswer: "Subaru WRX STI"
  },
  {
    id: "q9",
    imageUrl: IMAGE_URL,
    options: ["Aston Martin Vantage", "Jaguar F-Type", "Bentley Continental GT", "Maserati GranTurismo"],
    correctAnswer: "Jaguar F-Type"
  },
  {
    id: "q10",
    imageUrl: IMAGE_URL,
    options: ["Chevrolet Corvette", "Dodge Viper", "Ford GT", "Saleen S7"],
    correctAnswer: "Chevrolet Corvette"
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
