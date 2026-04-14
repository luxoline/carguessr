import { Question, User } from "../types";

const IMAGE_URL = "https://pub-0cf35cbdfe76406f89de7948c6fcee26.r2.dev/Gemini_Generated_Image_ryoymhryoymhryoy.png";

export const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 1,
    carPart: 1,
    options: [
      { id: 1, content: "BMW 3 Series" },
      { id: 2, content: "Toyota Corolla" },
      { id: 3, content: "Ford Focus" },
      { id: 4, content: "Honda Civic" }
    ]
  },
  {
    id: 2,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 5,
    carPart: 1,
    options: [
      { id: 5, content: "Porsche 911" },
      { id: 6, content: "Ferrari 488" },
      { id: 7, content: "Lamborghini Huracan" },
      { id: 8, content: "McLaren 720S" }
    ]
  },
  {
    id: 3,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 9,
    carPart: 1,
    options: [
      { id: 9, content: "BMW M4" },
      { id: 10, content: "Audi RS5" },
      { id: 11, content: "Mercedes AMG C63" },
      { id: 12, content: "Lexus RC F" }
    ]
  },
  {
    id: 4,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 13,
    carPart: 1,
    options: [
      { id: 13, content: "Ford Mustang" },
      { id: 14, content: "Chevrolet Camaro" },
      { id: 15, content: "Dodge Challenger" },
      { id: 16, content: "Nissan GT-R" }
    ]
  },
  {
    id: 5,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 17,
    carPart: 1,
    options: [
      { id: 17, content: "Tesla Model S" },
      { id: 18, content: "Porsche Taycan" },
      { id: 19, content: "Lucid Air" },
      { id: 20, content: "Audi e-tron GT" }
    ]
  },
  {
    id: 6,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 21,
    carPart: 1,
    options: [
      { id: 21, content: "Honda NSX" },
      { id: 22, content: "Acura Integra" },
      { id: 23, content: "Toyota Supra" },
      { id: 24, content: "Mazda RX-7" }
    ]
  },
  {
    id: 7,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 25,
    carPart: 1,
    options: [
      { id: 25, content: "Volkswagen Golf GTI" },
      { id: 26, content: "Renault Megane RS" },
      { id: 27, content: "Honda Civic Type R" },
      { id: 28, content: "Hyundai i30 N" }
    ]
  },
  {
    id: 8,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 29,
    carPart: 1,
    options: [
      { id: 29, content: "Subaru WRX STI" },
      { id: 30, content: "Mitsubishi Lancer Evo" },
      { id: 31, content: "Ford Focus RS" },
      { id: 32, content: "Audi S3" }
    ]
  },
  {
    id: 9,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 33,
    carPart: 1,
    options: [
      { id: 33, content: "Aston Martin Vantage" },
      { id: 34, content: "Jaguar F-Type" },
      { id: 35, content: "Bentley Continental GT" },
      { id: 36, content: "Maserati GranTurismo" }
    ]
  },
  {
    id: 10,
    title: "Guess the car",
    photo: IMAGE_URL,
    trueAnswerId: 37,
    carPart: 1,
    options: [
      { id: 37, content: "Chevrolet Corvette" },
      { id: 38, content: "Dodge Viper" },
      { id: 39, content: "Ford GT" },
      { id: 40, content: "Saleen S7" }
    ]
  }
];

export const MOCK_USERS: Record<string, User> = {
  "u1": {
    id: "u1",
    userName: "SpeedDemon",
    username: "SpeedDemon",
  }
};
