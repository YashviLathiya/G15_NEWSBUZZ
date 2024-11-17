
const express = require('express');
const mongoose = require('mongoose');
const Question = require('./models/Question');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/quizDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("Failed to connect to MongoDB:", err));


app.post('/add-question', async (req, res) => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).send({ message: 'Question added successfully!' });
    } catch (error) {
        res.status(400).send(error);
    }
});


app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/random-question', async (req, res) => {
    try {
        const count = await Question.countDocuments();
        const random = Math.floor(Math.random() * count);
        const question = await Question.findOne().skip(random);
        res.status(200).json(question);
    } catch (error) {
        res.status(500).send(error);
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
