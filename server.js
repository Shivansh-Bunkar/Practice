const express = require('express');
const path = require('path');
const fs = require('fs'); // for saving form submissions (optional)

const app = express();
const PORT = process.env.PORT || 10000;

// Parse JSON for form submissions
app.use(express.json());

// Serve static files (HTML, CSS, JS, Google verification)
app.use(express.static(path.join(__dirname, 'public')));

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// FAQ Form submission
app.post('/submit-question', (req, res) => {
    const { name, email, question } = req.body;

    if (!name || !email || !question) {
        return res.status(400).send('All fields are required.');
    }

    // Log in console (you can replace with DB or file save)
    console.log('New Question:', name, email, question);

    // Optional: save to a local JSON file
    const filePath = path.join(__dirname, 'submissions.json');
    let submissions = [];
    if (fs.existsSync(filePath)) {
        submissions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    submissions.push({ name, email, question, date: new Date() });
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    res.status(200).send('Success');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
