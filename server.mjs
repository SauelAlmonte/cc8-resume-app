import express from 'express'

import { resume } from './resume.mjs'

const app = express()

const PORT = 3333

// route


// shortened format
app.get('/resume', (req, res) => res.send(resume) )

app.get('/resume-ap', (req,res) => {
    res.send(`Welcome to my resume! <br/>
    In order to use my API, please run command npx i resume-app <br/>
    Please visit my /bio endpoint
    `)
}),

app.listen( PORT, () => {
    console.log(`My APP is starting on ${PORT}`)
})

// id
// app.get('/id', (req, res) => {
//     res.send({
//         id: Math.random()
//     })
// })

// app.get('/welcome', (req, res) => {
//     res.send('hello world!!!')
// })