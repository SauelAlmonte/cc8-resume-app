import express from 'express';

import { resume } from './resume.mjs';

// import { info } from './info'

const app = express();

const PORT = process.env.PORT || 5000;

// route


app.get('/', (req,res) => {
    res.send(`Welcome to my resume! Please run command: [ npx i resume-app ] to access my resume in your terminal (iTerm for Mac users & CMNDER for PC users). Please visit my /bio & /resume-app`)
});

// shortened format
app.get('/resume-app', (req, res) => res.send(resume) );

//info
// app.get('/info', (req, res) => res.send(info) );

//bio
app.get('/bio', (req,res) => {
    res.send(`My name is Sauel Almonte, I am from Bostm MA. Currently  I'm in the last 2 months of an awesome coding course. MSIMBO Coding is a program provided by ULEM (Urban League of Eastern MA). After completion of the MSIMBO Coding Course, I will continue to expand my knowledge of Front-End & Back-End.
    I am entrepreneur, hard worker and love life.`)
})

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