// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Bat Knowledge!",
        "main":    "<p>Are you a bat expert? Take this quiz to find out how much you know about this adorably-spooky animal...</p>",
        "results": "Interested in saving the bats? You can learn more here: https://batconservation.org/",
        "level1":  "You're a bat expert!",
        "level2":  "You know a lot about bats!",
        "level3":  "You know a few things about bats!",
        "level4":  "You know some things about bats!",
        "level5":  "Brush up on your bat facts by clicking the click me buttons on each slide." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "How many species of bats are there?",
            "a": [
                {"option": "500",      "correct": false},
                {"option": "200",     "correct": false},
                {"option": "1,100",      "correct": true},
                {"option": "4,000",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> There are 1,100 species of bats around the world! That's a lot of bats!</p>",
            "incorrect": "<p><span>Not quite...</span> The correct answer is 1,100.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many babies do bats usually have?",
            "a": [
                {"option": "5",               "correct": false},
                {"option": "1",   "correct": true},
                {"option": "20",               "correct": false},
                {"option": "15", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Yep!</span> Bats typically only have one pup.</p>",
            "incorrect": "<p><span>Nope!</span> The correct answer is 1.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Besides insects, what other foods do some bats eat?",
            "a": [
                {"option": "Fruit",           "correct": true},
                {"option": "Dirt",                  "correct": false},
                {"option": "Flowers",  "correct": false},
                {"option": "They only eat insects",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Along with fruit, some bats also drink nectar and others also eat larger prey such as birds, frogs and lizards.</p>",
            "incorrect": "<p><span>Not Quite.</span> Some bats actually eat fruit.</p>" // no comma here
        },
        { // Question 4
            "q": "Which U.S. city is home to the largest population of urban-dwelling bats?",
            "a": [
                {"option": "Charleston, S.C.",    "correct": false},
                {"option": "Austin, T.X.",     "correct": true},
                {"option": "New York City, N.Y.",      "correct": false},
                {"option": "Atlanta, G.A.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Approximately 1.5 MILLION bats live under the Congress Bridge in Austin, T.X.</p>",
            "incorrect": "<p><span>No, sorry!.</span> The correct answer is Austin, T.X.</p>" // no comma here
        },
        { // Question 5
            "q": "Bats can eat up to 1,200 mosquitoes an hour",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Yep!</span> That's a lot of mosquitoes!</p>",
            "incorrect": "<p><span>Actually...</span> Bats can eat up to 1,200 in one hour!</p>" // no comma here
        } // no comma here
    ]
};
