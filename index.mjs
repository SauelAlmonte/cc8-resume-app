#!/usr/bin/env node

import { resume }  from "./resume.mjs";

const { details : { firstName, lastName} } = resume

const { details : { contact : {number, email} } } = resume

const { details : { location : {city, state} } } = resume

const { details : { education : { school1, certificate1 } } } = resume

const { details : { education : { school2, school3, certificate2, certificate3 } } } = resume

const { details : { interests : { reading : { book1, book2, book3 } } } } = resume

const { details : { interests : { reading : { author1, author2, author3 } } } } = resume

const { details : { interests : { sports : { basketball, baseball, football } } } } = resume


// \n makes space in console.log

console.log(`
    \n
    Hello my name is ${firstName} ${lastName} \n
    Email: ${email} \n
    Number: ${number} \n
    Location: ${city}, ${state}. \n
    ------------------------------------------------------------------------------------------------- 

    -------------------------------------------------------------------------------------------------

    I have received certifications from: \n
        ${school1} for, ${certificate1} \n
        ${school2} for, ${certificate2} \n
        ${school3} for, ${certificate3} \n
    -------------------------------------------------------------------------------------------------

    -------------------------------------------------------------------------------------------------

    Some of my interests are:

    Reading & Sports
    
    Favorite books: 
    
        ${book1} by ${author1}, \n
        ${book2} by ${author2}, \n
        ${book3} by ${author3}. \n

    As for sports? I am from Massachusetts, 
    
        ${basketball}, \n
        ${baseball}, \n
        The ${football}!!! \n

    -------------------------------------------------------------------------------------------------

    -------------------------------------------------------------------------------------------------
`)


// console.log(`Hello I'm ${firstName} ${lastName}`)

// console.log(`================`)

// console.log(`You may contact me at ${number} or ${email}`)

// console.log(`================`)

// console.log(`I'm from ${city} ${state}.`)

// console.log(`================`)

// console.log(`I have attended ${school1}, and became certified in ${certificate1}`)

// console.log(`================`)

// console.log(`I've also attended ${school2} and received my certification in ${certificate2}, as well as ${school3} for ${certificate3}`)

// console.log(`================`)

// console.log(`My favorite books are, ${book1} by ${author1}, ${book2} by ${author2} & ${book3} by ${author3}`)

// console.log(`================`)

// console.log(`As for sports??? ${basketball}, ${baseball}, & The ${football}. I am from Massachusetts, I always root for the Home Team!`)