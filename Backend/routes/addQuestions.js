const axios = require('axios');

const questions = [
    {
        question: "What planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    
    },
    {
        question: "What planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    
    },
    {
        
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "Brazil", "France", "Argentina"],
        correctAnswer: "France",
    
    },
    {
        
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    
    },
    {
        
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Print Unit", "Core Processing Unit"],
        correctAnswer: "Central Processing Unit",
    
    },
    {
        
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correctAnswer: "George Washington",
    
    },
    {
        
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "HO2", "H2"],
        correctAnswer: "H2O",
    
    },
    {

        question: "Who founded Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Larry Page"],
        correctAnswer: "Bill Gates",
        d
    },
    {
        
        question: "How many players are there on a basketball team?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "5",
    
    },
    {
        
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "India", "South Korea"],
        correctAnswer: "Japan",
    
    },
    {
        
        question: "Who directed the movie 'Inception'?",
        options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
        correctAnswer: "Christopher Nolan",
        
    },
    {
        
        question: "What is the hottest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        correctAnswer: "Venus",
        
    },
    {
        question: "Which country has the most natural lakes?",
        options: ["USA", "India", "Canada", "Brazil"],
        correctAnswer: "Canada",
    },
    {
        question: "During which war was the Battle of Gettysburg fought?",
        options: ["World War I", "World War II", "American Civil War", "Vietnam War"],
        correctAnswer: "American Civil War",
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
        correctAnswer: "Mitochondria",
    },
    {
        question: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "Hyper Transfer Text Protocol"],
        correctAnswer: "HyperText Transfer Protocol",
    },
    {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Italy", "Argentina", "Brazil"],
        correctAnswer: "Brazil",
    },
    {
        question: "Who is the current Chancellor of Germany?",
        options: ["Angela Merkel", "Olaf Scholz", "Emmanuel Macron", "Theresa May"],
        correctAnswer: "Olaf Scholz",
    },
    {
        question: "Which singer is known as the 'King of Pop'?",
        options: ["Elvis Presley", "Prince", "Michael Jackson", "Freddie Mercury"],
        correctAnswer: "Michael Jackson",
    },
    {
        question: "What is the closest planet to the Sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        correctAnswer: "Mercury",
    },
    {
        
        question: "Which ancient civilization built the pyramids?",
        options: ["Roman", "Greek", "Egyptian", "Mayan"],
        correctAnswer: "Egyptian",
    }
];

async function addQuestions() {
    for (let question of questions) {
        try {
            const response = await axios.post('http://localhost:3000/add-question', question);
            console.log(response.data.message);
        } catch (error) {
            console.error("Failed to add question:", error.response ? error.response.data : error.message);
        }
    }
}

addQuestions();
