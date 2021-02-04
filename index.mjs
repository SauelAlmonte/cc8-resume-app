import { resume }  from "./resume.mjs";

const { location:{city, state}, name:{fName, lName} } = resume

console.log(`Hello I'm: ${fName, lName}`)

console.log(`----------------`)

console.log(`in ${location}`)

// const { location } = resume

// console.log(name)

// console.log(location)