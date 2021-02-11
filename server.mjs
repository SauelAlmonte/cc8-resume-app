import express from 'express';

import { resume } from './resume.mjs';

const app = express();

const PORT = process.env.PORT || 5000;

// route


// shortened format
app.get('/resume', (req, res) => res.send(resume) );

app.get('/', (req,res) => {
    res.send(`Welcome to my resume! Please run command: [ npx i resume-app ] to access my resume. Please visit my /bio endpoint`)
});

app.listen( PORT, () => {
    console.log(`Hello and thank you for visiting my resume on ${PORT}`)
});

// id
// app.get('/id', (req, res) => {
//     res.send({
//         id: Math.random()
//     })
// })

// app.get('/welcome', (req, res) => {
//     res.send('hello world!!!')
// })