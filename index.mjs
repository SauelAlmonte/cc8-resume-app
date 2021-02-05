import { resume }  from "./resume.mjs";

// const { location, name:{fName, lName} } = resume;

const { name, location:{city, state} } = resume;

const { schools:{from, certificate} } = resume;

console.log(`Hello I'm ${name.fName} ${name.lName}`);

console.log(`----------------`);

console.log(`I'm from ${city} ${state}.`);

console.log(`----------------`);

console.log(`I have attended ${from}, and became certified in ${certificate}.`);

// console.log(`for ${newEngArtInst.second} and ${berkCollMusic.second}`)