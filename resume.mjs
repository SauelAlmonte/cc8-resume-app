export const resume = {

    name: {
        fName: "Sauel",
        lName: "A"
    },

    location: {
        city: "Boston",
        state: "MA"
    },

    education: {
        schools: {
            first: "New England Art Institute",
            second: "Cybersounds Studio",
            third: "Berklee College of Music",
            forth: "ULEM MSIMBO"
        },

        certificates: {
            newEngArtInst: {
                first: "Audio Engineer",
                second: "Mixing Engineer",
                third: "Mastering Engineer"
            },

            cyberStudio: {
                first: "Ear Trainning",
                second: "Audio Production",
                third: "Mic Placement"
            },

            berkCollMusic: {
                first: "Audio Engineering Advanced",
                second: "Mixing Engineering Advanced",
                third: "Mastering Engineering Advanced"
            },

            ulemMsimbo: {
                first: "MSIMBO Coding"
            },
        },
    },
    
    interests: {
        reading: {
            book1: "How To Buy Diamonds, Author - Fred Cuellar",
            book2: "The Richest Man In Babylon, Author - ",
            book3: "Life and Def",

            authors: {
                book1: "Fred Cuellar",
                book2: "George S. Clason",
                book3: "Russell Simmons"
            },

        },

        music: {
            1: "Hip-Hop",
            2: "R&B",
            3: "Reggae",
            4: "Salsa",
            5: "Merengue"    
        },

        sports: {
            favoriteTeams: {
                basketball: "Celtics",
                baseball: "Red Sox",
                football: "Patriots"
            },

        },


    },

}

console.log(resume.location.city)